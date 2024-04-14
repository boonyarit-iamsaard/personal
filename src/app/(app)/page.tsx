import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    // TODO: remove min height calculation when the layout is implemented
    <section className="grid min-h-[calc(100vh-57px)] place-items-center">
      <div className="flex flex-col items-center gap-4 p-4">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <Button>Click me</Button>
      </div>
    </section>
  );
}
