import Link from 'next/link';

import AnimatedBackground from '@/components/AnimatedBackground';
import { Button } from '@/components/shadcn-ui/button';

export default function HomePage() {
  return (
    <AnimatedBackground>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 py-8 pt-30 pb-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            <span>łukasz bielecki</span>
            <br />
            <span className="text-7xl font-bold text-purple-700 md:text-9xl">frontend.dev</span>
          </h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-2xl font-bold md:text-3xl">Turning ideas into interactive art</p>

          <Button size="lg" asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </AnimatedBackground>
  );
}
