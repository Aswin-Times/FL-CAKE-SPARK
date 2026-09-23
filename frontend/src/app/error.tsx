"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled app error:", error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-[50vh] p-6 text-center">
      <h2 className="text-2xl font-bold text-stone-900 mb-2">
        Something went wrong
      </h2>
      <p className="text-stone-600 mb-6 max-w-md">
        An unexpected error occurred while loading this page.
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition"
      >
        Try again
      </button>
    </div>
  );
}
