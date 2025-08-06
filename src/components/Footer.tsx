export function Footer() {
  return (
    <footer className="text-muted-foreground border-t text-sm">
      <div className="mx-auto max-w-7xl px-4 py-4">
        © {new Date().getFullYear()} Łukasz Bielecki. All rights reserved.
      </div>
    </footer>
  );
}
