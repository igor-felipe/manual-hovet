import Post from "./post1.mdx";

export default function Page() {
  return (
    <article className="prose container max-w-5xl p-12 my-4 md:px-20 text-justify bg-white">
      <Post />
    </article>
  );
}
