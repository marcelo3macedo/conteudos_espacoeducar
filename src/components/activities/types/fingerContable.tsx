import { SessionDetails } from '@/interfaces/session';
import { useTranslations } from 'next-intl';
import TextOptions from '../options/textOptions';
import { NumberElement } from '@/interfaces/sessionConfig';
import { useActivityAction } from '@/hooks/activity/action';
import { getFingersImageByValue } from '@/utils/pictures';
import Image from 'next/image';

export default function FingerContable({
  element,
  details,
}: Readonly<{
  element: NumberElement;
  details: SessionDetails;
}>) {
  const t = useTranslations('activity.fingerContable');
  const { selectOptionHandler } = useActivityAction();

  if (!element.result) return <></>;

  function selectHandler(selected: string) {
    const isCorrect = Number(selected) == element.result?.value;
    selectOptionHandler(isCorrect);
  }

  return (
    <article>
      <div className="text-slate-800 text-xl text-center py-2 md:py-4 font-bold">
        {t('title')}
      </div>
      <div className="flex">
        <Image
          src={getFingersImageByValue(element.result.firstNumber)}
          width={150}
          height={150}
          alt=""
          className="w-32 md:w-auto mx-auto rounded-2xl my-4"
        />
        <h2 className=" text-pink-900 items-center justify-center flex text-7xl md:text-9xl font-bold mx-2 md:mx-4 rounded-2xl text-center">
          {element.result?.operation}
        </h2>
        <Image
          src={getFingersImageByValue(element.result.secondNumber)}
          width={150}
          height={150}
          alt=""
          className="w-32 md:w-auto mx-auto rounded-2xl my-4"
        />
      </div>
      <TextOptions options={details.options} callback={selectHandler} />
    </article>
  );
}
