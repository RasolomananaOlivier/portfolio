import { readdirSync } from "fs";
import React from "react";

type PostProps = {
  params: { post: string };
};
export default function Post({ params: { post } }: PostProps) {
  return <div>Post</div>;
}

export async function generateStaticParams() {
  const files = readdirSync("./src/posts");

  const params = files.map((file) => {
    const slug = file.replace(".md", "");
    return {
      post: slug,
    };
  });

  return params;
}
