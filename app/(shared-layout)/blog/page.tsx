import { fetchQuery } from "convex/nextjs";
import type { Metadata } from "next";
import { cacheTag } from "next/cache";
import { cacheLife } from "next/dist/server/use-cache/cache-life";
import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";

// export const dynamic = "force-static";
// export const revalidate = 30
//
export const metadata: Metadata = {
  title: "Blog | NextPro",
  description: "Read our latest articles and insights.",
  category: "Web Development",
  authors: [{ name: "Shrutik Meshram" }],
};

const BlogPage = () => {
  return (
    <div className="py-12">
      <div className="text-center pb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Our Blog
        </h1>
        <p className="pt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Insights, thoughts, and trends from our team.
        </p>
      </div>
      {/*<Suspense fallback={<SkeletonLoadingUi />}>*/}
      <LoadBlogList />
      {/*</Suspense>*/}
    </div>
  );
};

const LoadBlogList = async () => {
  "use cache";
  cacheLife("hours");
  cacheTag("blog");
  // await connection()
  const data = await fetchQuery(api.posts.getPosts);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((post) => (
        <Card key={post._id} className="pt-0">
          <div className="h-48 w-full overflow-hidden relative">
            <Image
              className="rounded-t-4xl object-cover"
              fill
              alt="leaf"
              src={
                post.imageUrl ??
                "https://images.unsplash.com/photo-1760479099297-90f851fb0474?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
          <CardContent>
            <Link href={`/blog/${post._id}`}>
              <h1 className="text-2xl font-bold hover:text-primary">
                {post.title}
              </h1>
            </Link>
            <p className="text-muted-foreground line-clamp-3">{post.body}</p>
          </CardContent>
          <CardFooter>
            <Link
              className={buttonVariants({
                className: "w-full",
              })}
              href={`/blog/${post._id}`}
            >
              Read More
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

function SkeletonLoadingUi() {
  return (
    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
      {[...Array(3)].map((_, i) => (
        <div className="flex flex-col space-y-3" key={i}>
          <Skeleton className="h-48 w-full rounded-xl" />
          <div className="space-y-2 flex flex-col">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
