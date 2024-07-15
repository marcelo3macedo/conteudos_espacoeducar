import Link from 'next/link';
import { IItemsProps } from './props/items';

export default function ItemsHelper({ items }: Readonly<IItemsProps>) {
  if (!items) return <></>;

  return (
    <div className="hidden md:flex items-center justify-center">
      {items.map((i) => (
        <Link href={i.href} key={i.title}>
          <h5 className="text-md my-2 hover:cursor-pointer hover:opacity-80 mx-8 font-bold">
            {i.title}
          </h5>
        </Link>
      ))}
    </div>
  );
}
