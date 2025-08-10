'use client';

import { useEffect } from 'react';

import { animate, motion, useMotionTemplate, useMotionValue } from 'motion/react';

import { Button } from '@/components/shadcn-ui/button';

const COLORS = ['#ad46ff', '#4c27f2'];

export default function HomePage() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, transparent 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, { ease: 'easeInOut', duration: 5, repeat: Infinity, repeatType: 'mirror' });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.section style={{ backgroundImage }} className="relative flex h-full overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-15 px-4 py-8">
        <div className="text-center">
          <p className="text-4xl font-bold md:text-5xl">Łukasz Bielecki</p>
          <p className="bg-gradient-to-r from-purple-700 to-[#4c27f2] bg-clip-text text-7xl font-bold text-transparent md:text-9xl">
            frontend dev
          </p>
        </div>
        <p className="text-center text-2xl font-bold md:text-3xl">Turning ideas into interactive art</p>
        <Button className="w-fit">Get in touch</Button>
      </div>
    </motion.section>
  );
}
