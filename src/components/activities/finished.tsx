'use client';
import congrats from '@/assets/animations/congrats.json';
import LottieAnimation from '../animations/lottie';
import Link from 'next/link';
import useActivity from '@/store/useActivity';
import { useTranslations } from 'next-intl';

export default function Finished() {
  const t = useTranslations('activity.finished');
  const { score } = useActivity((state: any) => state);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      <LottieAnimation animationData={congrats} />
      <h1 className="text-2xl font-bold mb-2 text-center">{t('title')}</h1>
      <h3 className="text-xl">
        {t('score')} {score} {t('questions')}
      </h3>

      <Link href={'/para-alunos'}>
        <p className="bg-pink-400 mt-8 px-10 py-4 rounded-lg text-lg font-bold text-pink-100">
          {t('backToActivity')}
        </p>
      </Link>
    </div>
  );
}
