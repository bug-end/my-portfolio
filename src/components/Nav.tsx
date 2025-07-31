import Link from 'next/link';

import { ModeToggle } from '@/components/ModeToggle';

export function Nav() {
  return (
    <nav className="flex items-center justify-between py-4 px-4 max-w-7xl mx-auto">
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
