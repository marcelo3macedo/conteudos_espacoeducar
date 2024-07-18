'use client';
import { SeeMoreProps } from '@/interfaces/gallery';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SeeMoreGallery({ page }: Readonly<SeeMoreProps>) {
  const t = useTranslations('gallery');
  const nextPage = page + 1;
  const pathname = usePathname();
  const newQuery = { page: nextPage };

  return (
    <Link href={{ pathname: pathname, query: newQuery }}>
      <div className="text-center">
        <p className="bg-slate-100 w-96 my-8 px-8 mx-auto py-2 rounded-lg text-slate-600 font-bold text-md border border-slate-40">
          {t('seeMore')}
        </p>
      </div>
    </Link>
  );
}
