export default function DragArea({
  syllables,
}: {
  readonly syllables: string[];
}) {
  return (
    <div className="bg-slate-200 flex py-6 px-8 items-center justify-center min-w-72 md:min-w-96 h-20 rounded-lg">
      {syllables.map((s) => (
        <span key={s} className="text-5xl font-bold">
          {s}
        </span>
      ))}
    </div>
  );
}
