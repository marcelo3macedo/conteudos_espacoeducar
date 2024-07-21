export default function TextOptions({
  options,
  callback,
}: Readonly<{
  options: readonly string[];
  callback: Function;
}>) {
  return (
    <div className="grid grid-cols-2 py-4 gap-2 content-center items-center justify-center">
      {options.map((o: string) => {
        return (
          <button
            key={o}
            className="p-2 hover:opacity-70 hover:cursor-pointer select-none"
            onClick={() => {
              callback(o);
            }}
          >
            <h2 className="bg-slate-100 text-slate-800 px-10 md:px-12 py-6 md:py-10 text-3xl md:text-5xl font-bold rounded-2xl text-center border-2 border-slate-800">
              {o}
            </h2>
          </button>
        );
      })}
    </div>
  );
}
