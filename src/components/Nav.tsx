import Link from 'next/link';

import { ModeToggle } from '@/components/ModeToggle';

export function Nav() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-lg font-bold">
          Home
        </Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <ModeToggle />
    </nav>
  );
}
