import { Button } from '@/components/shadcn-ui/button';

export default function HomePage() {
  return (
    <section
      style={{ backgroundImage: 'radial-gradient(100% 100% at 50% 0%, transparent 70%, #ad46ff)' }}
      className="relative flex h-full overflow-hidden"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-15 px-4 py-8">
        <div className="text-center">
          <p className="text-5xl font-bold">Łukasz Bielecki</p>
          <p className="bg-gradient-to-r from-purple-500 to-pink-200 bg-clip-text text-9xl font-bold text-transparent">
            frontend dev
          </p>
        </div>
        <p className="text-4xl font-bold">Turning ideas into interactive art</p>
        <Button className="w-fit">Get in touch</Button>
      </div>
    </section>
  );
}
