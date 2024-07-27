import Link from 'next/link';

import { Mail, Quote } from 'lucide-react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <section className="container flex min-h-screen max-w-screen-md flex-col gap-8 py-8 md:py-24">
      <h1 className="text-2xl font-bold tracking-tight md:text-4xl">
        Hi 👋 I&apos;m Boonyarit,
        <span className="block text-muted-foreground md:text-2xl">
          I build things around the web.
        </span>
      </h1>

      <blockquote className="border-l-4 border-l-muted-foreground/20 pl-4 italic text-muted-foreground">
        <Quote className="mb-2 h-8 w-8 text-muted-foreground/20" />
        &quot;I&apos;m a self-taught developer who discovered my passion for
        coding during the pandemic. With a background in Aircraft Maintenance, I
        made the exciting decision to transition into a career in software
        development. I&apos;m actively seeking opportunities to contribute my
        skills and passion for coding to impactful projects. If you&apos;re
        looking for a dedicated, passionated, self-taught developer with
        competency in React, Node.js, JavaScript, and TypeScript, I would love
        to connect. Feel free to reach out to me!&quot;
      </blockquote>

      <div className="flex">
        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <Link
            href="mailto:boonyarit.iamsaard@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Mail className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Email</span>
          </Link>
        </Button>

        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <Link
            href="https://www.linkedin.com/in/boonyarit-iamsaard/"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.linkedin className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </Button>

        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <Link
            href="https://github.com/boonyarit-iamsaard"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.gitHub className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
