import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { posts } from '#site/content';
import { ChevronLeft } from 'lucide-react';

import { Mdx } from '@/components/mdx-components';
import { formatDate } from '@/libs/utils/date';

type Params = {
  slug: string[];
};

type PostPageProps = {
  params: Params;
};

async function getPostFromParams(params: Params) {
  const slug = params.slug.join('/');
  const post = posts.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<Params[]> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <section className="container min-h-[calc(100vh-3.5rem)] max-w-screen-md gap-8 py-8 md:py-24">
      <article className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          {post.date && (
            <time
              dateTime={post.date}
              className="block text-sm text-muted-foreground"
            >
              Published on {formatDate(post.date)}
            </time>
          )}
        </div>
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={720}
            height={405}
            className="my-8 rounded-md border bg-muted transition-colors"
            priority
          />
        )}
        <Mdx code={post.body} />
        <div className="space-y-2">
          <hr />

          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            <ChevronLeft className="mr-2 size-4" />
            See all posts
          </Link>
        </div>
      </article>
    </section>
  );
}
