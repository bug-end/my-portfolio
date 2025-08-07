import { Button } from '@/components/shadcn-ui/button';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center gap-15">
      <div className="text-center">
        <p className="text-5xl font-bold">Łukasz Bielecki</p>
        <p className="bg-gradient-to-r from-purple-500 to-pink-200 bg-clip-text text-9xl font-bold text-transparent">
          frontend dev
        </p>
      </div>
      <p className="text-4xl font-bold">Turning ideas into interactive art</p>
      <Button className="w-fit">Get in touch</Button>
    </section>
  );
}
