import Link from 'next/link';

import { Post, posts } from '#site/content';
import { compareDesc, format } from 'date-fns';

type PostGroup = {
  year: number;
  posts: Post[];
};

export const metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  const years = Array.from(
    new Set(posts.map((post) => new Date(post.date).getFullYear())),
  );

  const sortedPosts: PostGroup[] = years
    .map((year) => ({
      year,
      posts: posts
        .filter((post) => new Date(post.date).getFullYear() === year)
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))),
    }))
    .sort((a, b) => b.year - a.year);

  return (
    <section className="container min-h-[calc(100vh-3.5rem)] max-w-screen-md space-y-8 py-8 md:py-24">
      <h1 className="text-2xl font-bold">Recent Posts</h1>

      <div className="space-y-8">
        {sortedPosts.map((group) => (
          <div key={group.year} className="space-y-4">
            <h2 className="text-xl font-bold text-muted-foreground/50">
              {group.year}
            </h2>
            <div className="space-y-4">
              {group.posts.map((post) => (
                <PostItem key={post.slug} post={post} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

type PostItemProps = {
  post: Post;
};

function PostItem({ post }: PostItemProps) {
  const formattedDate = format(new Date(post.date), 'MM-dd');

  return (
    <div className="flex flex-nowrap items-center justify-between">
      <h3>
        <Link
          href={`/${post.slug}`}
          className="text-lg font-medium decoration-muted underline-offset-4 transition-colors hover:text-muted-foreground hover:underline"
        >
          {post.title}
        </Link>
      </h3>
      <time
        dateTime={post.date}
        className="text-sm font-medium text-muted-foreground"
      >
        {formattedDate}
      </time>
    </div>
  );
}
