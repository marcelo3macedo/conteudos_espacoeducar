import { SessionDetails } from '@/interfaces/session';
import { getCardsImageBySlug } from '@/utils/pictures';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import TextOptions from '../options/textOptions';
import { WordElement } from '@/interfaces/sessionConfig';
import { useActivityAction } from '@/hooks/activity/action';

export default function IdentifyImage({
  element,
  details,
}: Readonly<{
  element: WordElement;
  details: SessionDetails;
}>) {
  const t = useTranslations('activity.identifyImage');
  const { selectOptionHandler } = useActivityAction();
  const pictureUrl = getCardsImageBySlug(element.word);

  function selectHandler(word: string) {
    const isCorrect = word === element.word;
    selectOptionHandler(isCorrect);
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
      <TextOptions options={details.options} callback={selectHandler} />
    </article>
  );
}
