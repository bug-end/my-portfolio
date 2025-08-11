'use client';

import { useEffect } from 'react';

import { animate, motion, useMotionTemplate, useMotionValue } from 'motion/react';

const COLORS = ['#ad46ff', '#4c27f2'];

interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

export default function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, transparent 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, { ease: 'easeInOut', duration: 4, repeat: Infinity, repeatType: 'mirror' });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.section style={{ backgroundImage }} className="relative flex h-full overflow-hidden">
      {children}
    </motion.section>
  );
}
