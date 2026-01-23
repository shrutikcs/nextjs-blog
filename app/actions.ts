"use server";

import { fetchMutation } from "convex/nextjs";
import { redirect } from "next/navigation";
import type z from "zod";
import { api } from "@/convex/_generated/api";
import { fetchAuthMutation, getToken } from "@/lib/auth-server";
import { postSchema } from "./schemas/blog";

export async function createBlogAction(values: z.infer<typeof postSchema>) {
  const parsed = postSchema.safeParse(values);

  if (!parsed.success) {
    throw new Error("something went wrong");
  }

  await fetchAuthMutation(api.posts.createPost, {
    body: parsed.data.content,
    title: parsed.data.title,
  });

  return redirect("/");
}
