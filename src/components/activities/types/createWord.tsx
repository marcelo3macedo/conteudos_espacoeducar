import { SessionDetails } from '@/interfaces/session';
import { getCardsImageBySlug } from '@/utils/pictures';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { WordElement } from '@/interfaces/sessionConfig';
import { useActivityAction } from '@/hooks/activity/action';
import DragArea from '../dragArea';
import { useState } from 'react';
import DragOptions from '../options/dragOptions';

export default function CreateWord({
  element,
  details,
}: Readonly<{
  element: WordElement;
  details: SessionDetails;
}>) {
  const [words, setWords] = useState<string[]>([]);
  const t = useTranslations('activity.createWord');
  const { selectOptionHandler } = useActivityAction();
  const pictureUrl = getCardsImageBySlug(element.word);

  function selectHandler(selected: string) {
    if (selected === element.syllables[words.length]) {
      setWords((prevWord: string[]) => [...prevWord, selected]);
    }

    if (words.length === element.syllables.length - 1) {
      selectOptionHandler(true);
    }
  }

  return (
    <article>
      <div className="text-slate-800 text-xl text-center py-2 md:py-4 font-bold">
        {t('title')}
      </div>
      <Image
        src={pictureUrl}
        width={180}
        height={180}
        alt=""
        className="mx-auto rounded-2xl my-4"
      />
      <div className="px-4">
        <DragArea syllables={words} />
      </div>
      <DragOptions options={details.options} callback={selectHandler} />
    </article>
  );
}
