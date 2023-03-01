import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

type PostMetaData = {
  title: string;
  metaTitle: string;
  metaDesc: string;
  socialImage: string;
  date: string;
  tags: string[];
};

interface IGetPosts {
  slug: string;
  postMetaData: PostMetaData;
}
async function getPosts(): Promise<IGetPosts[]> {
  const files = fs.readdirSync("./src/posts");

  const posts: IGetPosts[] = files.map((file) => {
    const slug = file.replace(".md", "");

    const fileContent = fs.readFileSync("./src/posts/" + file, "utf-8");

    const parsedContent = matter(fileContent);

    const postMetaData = parsedContent.data as PostMetaData;
    return {
      slug,
      postMetaData: postMetaData,
    };
  });

  return posts;
}

export default async function Page() {
  const posts = await getPosts();
  return (
    <main>
      <h1>Post list</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.postMetaData.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
