import Link from 'next/link';

import { posts } from '#site/content';
import { compareDesc } from 'date-fns';

import { formatDate } from '@/libs/utils/date';

export const metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  const sortedPosts = posts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <section className="container min-h-[calc(100vh-3.5rem)] max-w-screen-md space-y-8 py-8 md:py-24">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Latest Posts</h1>
        <hr />
      </div>

      {sortedPosts.map((post) => (
        <article
          key={post.slug}
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <header className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-2xl font-semibold leading-none tracking-tight">
              {post.title}
            </h2>
            <time
              dateTime={post.date}
              className="text-sm text-muted-foreground"
            >
              Published on {formatDate(post.date)}
            </time>
          </header>
          <div className="space-y-4 p-6 pt-0">
            <p>{post.description}</p>
            <Link
              href={`/${post.slug}`}
              className="inline-flex items-center text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Read more
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
