import Link from 'next/link';

import { Button } from '@/components/shadcn-ui/button';

import { rubik_glitch } from './fonts';

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 py-8 pt-10 pb-8 md:pt-30">
      <div className="text-center">
        <h1 className="text-4xl font-bold lg:text-5xl">
          <span>łukasz_bielecki</span>
          <br />
          <span className={`${rubik_glitch.className} text-5xl font-bold break-all md:text-8xl lg:text-9xl`}>
            <span className="text-lime-400">frontend</span>
            <span className="text-purple-700">.</span>
            <span className="text-lime-400">dev</span>
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center gap-8">
        <p className="text-center text-2xl font-bold lg:text-3xl">Turning ideas into interactive art</p>

        <Button size="lg" asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  );
}
