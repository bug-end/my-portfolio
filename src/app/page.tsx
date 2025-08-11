import Link from 'next/link';

import AnimatedBackground from '@/components/AnimatedBackground';
import { Button } from '@/components/shadcn-ui/button';

export default function HomePage() {
  return (
    <AnimatedBackground>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-15 px-4 py-8">
        <div className="text-center">
          <p className="text-4xl font-bold md:text-5xl">Łukasz Bielecki</p>
          <p className="bg-gradient-to-r from-purple-700 to-[#4c27f2] bg-clip-text text-7xl font-bold text-transparent transition-colors duration-1500 hover:from-[#4c27f2] hover:to-purple-700 md:text-9xl">
            frontend dev
          </p>
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
