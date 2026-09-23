import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-[60vh] p-6 text-center">
      <h1 className="text-6xl font-extrabold text-rose-500 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-stone-900 mb-2">Page Not Found</h2>
      <p className="text-stone-600 mb-6 max-w-md">
        The page or cake confection you are looking for does not exist or has
        been moved.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition"
      >
        Return to Home
      </Link>
    </div>
  );
}
