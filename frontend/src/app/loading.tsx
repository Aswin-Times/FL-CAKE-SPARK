export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin" />
        <p className="text-sm font-medium text-stone-500">
          Loading CAKE SPARK...
        </p>
      </div>
    </div>
  );
}
