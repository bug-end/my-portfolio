import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/shadcn-ui/button';

export default function Home() {
  return (
    <main className="p-24 h-full">
      <ModeToggle />
      <section>
        <h1>Portfolio</h1>
        <p>Hello! My name is Łukasz Bielecki.</p>
        <p>TEST</p>
      </section>
      <Button>Get in touch</Button>
    </main>
  );
}
