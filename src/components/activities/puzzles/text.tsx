export default function TextPuzzle({
  elements,
  indexToHide,
}: Readonly<{
  elements: string[];
  indexToHide: number;
}>) {
  return (
    <div className="flex items-end justify-center">
      {elements.map((s) =>
        s === elements[indexToHide] ? (
          <div key={s} className="w-12 border-b-4 border-black"></div>
        ) : (
          <span className="px-1 text-4xl" key={s}>
            {s}
          </span>
        )
      )}
    </div>
  );
}
