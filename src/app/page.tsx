import Link from 'next/link';

import { Button } from '@/components/shadcn-ui/button';

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 py-8 pt-30 pb-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold lg:text-5xl">
          <span>łukasz bielecki</span>
          <br />
          <span className="text-5xl font-bold break-all md:text-7xl lg:text-9xl">
            frontend<span className="text-purple-700">.</span>dev
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-2xl font-bold lg:text-3xl">Turning ideas into interactive art</p>

        <Button size="lg" asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  );
}
