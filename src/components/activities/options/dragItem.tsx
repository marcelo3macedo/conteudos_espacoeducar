import { useState } from 'react';
import Draggable from 'react-draggable';

export default function DragItem({
  action,
  value,
}: {
  readonly action: any;
  readonly value: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragRelease = (_event: any, d: any) => {
    const { y } = d;
    setPosition({ x: 0, y: 0 });

    if (y < 0) {
      action();
    }
  };

  return (
    <Draggable
      onStop={handleDragRelease}
      defaultPosition={position}
      position={position}
    >
      <div className="hover:opacity-70 hover:cursor-pointer select-none">
        <h2 className="bg-slate-100 text-slate-800 px-10 md:px-12 py-6 md:py-10 text-3xl md:text-5xl font-bold rounded-2xl text-center border-2 border-slate-800">
          {value}
        </h2>
      </div>
    </Draggable>
  );
}
