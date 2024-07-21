import { SessionDetails } from '@/interfaces/session';
import { getCardsImageBySlug } from '@/utils/pictures';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import TextOptions from '../options/textOptions';
import TextPuzzle from '../puzzles/text';
import { WordElement } from '@/interfaces/sessionConfig';
import { useActivityAction } from '@/hooks/activity/action';

export default function CompleteSyllable({
  element,
  details,
}: Readonly<{
  element: WordElement;
  details: SessionDetails;
}>) {
  const t = useTranslations('activity.completeSyllable');
  const { selectOptionHandler } = useActivityAction();
  const pictureUrl = getCardsImageBySlug(element.word);

  function selectHandler(syllable: string) {
    const isCorrect = syllable === element.syllables[details.indexToHide ?? 0];
    selectOptionHandler(isCorrect);
  }

  return (
    <article>
      <div className="text-slate-800 text-xl text-center py-2 md:py-4 font-bold">
        {t('title')}
      </div>
      <TextPuzzle
        elements={element.syllables}
        indexToHide={details.indexToHide ?? 0}
      />
      <Image
        src={pictureUrl}
        width={180}
        height={180}
        alt=""
        className="mx-auto rounded-2xl my-4"
      />
      <TextOptions options={details.options} callback={selectHandler} />
    </article>
  );
}
