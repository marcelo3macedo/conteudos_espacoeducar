import DragItem from './dragItem';

export default function DragOptions({
  options,
  callback,
}: Readonly<{
  options: readonly string[];
  callback: Function;
}>) {
  return (
    <div className="grid grid-cols-2 py-4 gap-4 content-center items-center justify-center">
      {options.map((o: string) => {
        return (
          <DragItem
            key={o}
            value={o}
            action={() => {
              callback(o);
            }}
          />
        );
      })}
    </div>
  );
}
