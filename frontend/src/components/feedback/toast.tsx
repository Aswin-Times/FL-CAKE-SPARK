export function Toast({ message }: { message: string }) {
  return (
    <div className="fixed bottom-4 right-4 bg-stone-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
      {message}
    </div>
  );
}
