'use client';
import correct from '@/assets/animations/correct.json';
import error from '@/assets/animations/error.json';
import LottieAnimation from '../animations/lottie';
import { useActivityLoad } from '@/hooks/activity/load';
import { useTranslations } from 'next-intl';

export default function Validation() {
  const t = useTranslations('activity.validation');
  const { isCorrect } = useActivityLoad();
  const animation = isCorrect ? correct : error;
  const message = isCorrect ? t('correct') : t('error');

  return (
    <div className="w-full h-svh flex flex-col items-center justify-center">
      <LottieAnimation animationData={animation} />
      <h2 className="mt-4 font-bold text-2xl text-slate-600">{message}</h2>
    </div>
  );
}
