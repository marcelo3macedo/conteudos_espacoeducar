import { SessionDetails } from '@/interfaces/session';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { WordElement } from '@/interfaces/sessionConfig';
import { useActivityAction } from '@/hooks/activity/action';
import { getCardsImageBySlug } from '@/utils/pictures';

export default function SelectImage({
  element,
  details,
}: Readonly<{
  element: WordElement;
  details: SessionDetails;
}>) {
  const t = useTranslations('activity.selectImage');
  const { selectOptionHandler } = useActivityAction();

  function selectHandler(word: string) {
    const isCorrect = word == element.word;
    selectOptionHandler(isCorrect);
  }

  return (
    <article>
      <div className="text-slate-800 text-xl text-center py-2 md:py-4 font-bold">
        {t('title')}
      </div>
      <h2 className="bg-slate-100 text-slate-800 border-2 border-slate-800 px-12 py-6 text-3xl md:text-5xl font-bold rounded-2xl text-center">
        {element.word}
      </h2>
      <div className="grid grid-cols-2 py-4 gap-2 content-center items-center justify-center">
        {details.options.map((o: string) => {
          return (
            <button
              className="p-2 hover:opacity-70 hover:cursor-pointer select-none"
              key={o}
              onClick={() => {
                selectHandler(o);
              }}
            >
              <Image
                src={getCardsImageBySlug(o.toLowerCase())}
                width={150}
                height={150}
                alt=""
                className="mx-auto w-32 md:w-52 rounded-2xl my-2 md:my-4"
              />
            </button>
          );
        })}
      </div>
    </article>
  );
}
