import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl text-stone-900">
          CAKE <span className="text-rose-500">SPARK</span>
        </Link>
      </div>
    </header>
  );
}
