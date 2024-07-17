import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import background from '@/assets/images/backgrounds/gallery.jpg';
import { HightlightsResponse } from '@/interfaces/highlights';
import { getHighlightImageByName } from '@/utils/pictures';

export default function HighligthsHero({
  data,
}: {
  readonly data: HightlightsResponse;
}) {
  const t = useTranslations('highlights');

  return (
    <section className="bg-slate-50">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl ">
            {t('title')}
          </h1>
          <p className="max-w-2xl text-lg mx-auto mt-4 text-gray-500">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          {data.highlights.map((h) => (
            <Link key={h.slug} href={`/${h.slug}`}>
              <div className="relative overflow-hidden">
                <Image
                  className="absolute h-96 opacity-10 rounded-md w-full"
                  src={background.src}
                  width={background.width}
                  height={background.height}
                  alt={''}
                />
                <Image
                  src={getHighlightImageByName(h.picture)}
                  alt={h.title}
                  className="relative z-10 object-cover w-full rounded-md h-96"
                />
              </div>

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow ">
                <h2 className="font-semibold text-gray-800 hover:underline md:text-xl">
                  {h.title}
                </h2>

                <p className="mt-3 text-sm text-gray-500">{h.description}</p>

                <p className="mt-3 text-sm text-pink-500">{t('seeMore')}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
