# Walkthrough - Fixed Infinite Loading in Create Post

I have fixed the issue where the "Create Post" action was hanging indefinitely.

## The Problem
When running the Next.js app with `bun`, the `better-auth` library's `getToken` function was failing silently or causing the request to hang.

### Root Causes
1.  **Read-only Headers**: The `next/headers` function returns a read-only `Headers` object. The library attempted to pass this directly to `fetch`, but seemingly some internal operation or the way it was used caused a `TypeError: Attempted to assign to readonly property`.
2.  **Request Hanging**: Even after fixing the read-only issue, the request hung. This was because we were forwarding all headers from the original request, including `Content-Length`. When `fetchAuthMutation` made a new internal request to get the token, the `Content-Length` from the *original* POST request (which had a body) was being sent with the *new* GET request (or empty body request), causing the server to wait for data that never arrived.

## The Solution
I patched the installed `node_modules` file for the `@convex-dev/better-auth` library.

### Changes Made
Modified: `node_modules/@convex-dev/better-auth/dist/nextjs/index.js`

I updated the `getToken` logic to:
1.  Create a new `Headers` object (mutable).
2.  **Selectively copy** only the `cookie` and `user-agent` headers. This avoids copying problematic headers like `Content-Length` or `Host`.

```javascript
// Before
const headers = await (await import("next/headers.js")).headers();
return getToken(siteUrl, headers, { ...opts, forceRefresh });

// After
const headers = await (await import("next/headers.js")).headers();
const mutableHeaders = new Headers();
if (headers.has("cookie")) {
    mutableHeaders.set("cookie", headers.get("cookie"));
}
if (headers.has("user-agent")) {
    mutableHeaders.set("user-agent", headers.get("user-agent"));
}
return getToken(siteUrl, mutableHeaders, { ...opts, forceRefresh });
```

## Verification
-   Verified logs showed `getToken` was no longer hanging.
-   Confirmed via user testing that the "create post" action now completes successfully.

> [!WARNING]
> This fix is currently applied directly to `node_modules`. If you run `bun install` again or update the package, these changes will be lost. To make this permanent, you should consider using `patch-package` or checking if a newer version of `@convex-dev/better-auth` fixes this issue.

## Permanent Fix (patch-package)
I have created a patch file in `patches/@convex-dev+better-auth+0.10.10.patch` ensuring the fix persists.

### How to Re-apply (if node_modules is wiped)
Since `patch-package` has partial compatibility with Bun, you need to follow these steps if you reinstall dependencies:
1.  Ensure `yarn.lock` exists (I have left a copy for you).
2.  If `yarn` is not installed, create a temporary alias or shim (as `patch-package` internally fails without it).
3.  Run `bunx patch-package`.

Alternatively, wait for native Bun patch support or a library update.
