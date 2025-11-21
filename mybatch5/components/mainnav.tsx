import Link from "next/link";
import { Logo } from "@/components/logo";
import { ModeTrogle } from "@/components/mod-trgal";
export function MainNav() {
  return (
    <header className="border-primary/20 bg-background sticky top-0 z-10 w-full border-b">
      <div className="container max-w-[87.5rem] px-8 flex h-12 px-36 items-center">
        <Link href="/" className="flex items-center gap-2-">
          <Logo />
          <span className="text-primary text-xl font-bold ml-2">Cinescope</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link href="/Movies">Movies</Link>

          <Link href="/Movies">Genras</Link>
          <Link href="/Movies">About</Link>
          <Link href="/Movies">Admin</Link>
        </nav>
        <ModeTrogle />
      </div>
    </header>
  );
}
