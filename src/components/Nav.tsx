import Link from 'next/link';

import { ModeToggle } from '@/components/ModeToggle';

export function Nav() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-40 pb-4">
      {/* <div className="flex items-center gap-4"> */}
      <Link href="/" className="group text-5xl font-bold">
        <span className="inline-block text-purple-700 transition-all duration-600 ease-in-out group-hover:rotate-720 group-hover:text-lime-400">
          /
        </span>
        about_me
      </Link>
      <Link href="/projects" className="group text-5xl font-bold">
        <span className="inline-block text-purple-700 transition-all duration-600 ease-in-out group-hover:rotate-720 group-hover:text-lime-400">
          /
        </span>
        projects
      </Link>
      <Link href="/contact" className="group text-5xl font-bold">
        <span className="inline-block text-purple-700 transition-all duration-600 ease-in-out group-hover:rotate-720 group-hover:text-lime-400">
          /
        </span>
        contact
      </Link>
      {/* </div> */}
      {/* <ModeToggle /> */}
    </nav>
  );
}
