import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center gap-6 text-sm font-medium text-stone-700">
      <Link href="/" className="hover:text-rose-500 transition-colors">
        Home
      </Link>
    </nav>
  );
}
