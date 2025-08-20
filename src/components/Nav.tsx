import Link from 'next/link';

export function Nav() {
  return (
    <nav className="mx-auto flex max-w-3xl flex-col justify-between gap-y-2 px-10 pt-10 pb-4 md:flex-row md:items-center md:pt-40 lg:max-w-5xl">
      <Link href="/" className="group w-fit text-3xl font-bold lg:text-5xl">
        <span className="inline-block text-purple-700 transition-all duration-600 ease-in-out group-hover:rotate-720 group-hover:text-lime-400">
          /
        </span>
        about_me
      </Link>
      <Link href="/projects" className="group w-fit text-3xl font-bold lg:text-5xl">
        <span className="inline-block text-purple-700 transition-all duration-600 ease-in-out group-hover:rotate-720 group-hover:text-lime-400">
          /
        </span>
        projects
      </Link>
      <Link href="/contact" className="group w-fit text-3xl font-bold lg:text-5xl">
        <span className="inline-block text-purple-700 transition-all duration-600 ease-in-out group-hover:rotate-720 group-hover:text-lime-400">
          /
        </span>
        contact
      </Link>
    </nav>
  );
}
