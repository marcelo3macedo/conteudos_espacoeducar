'use client';
import { Question } from '@/interfaces/activity';
import { useTranslations } from 'next-intl';

export default function ActiveQuestion({ actual, total }: Readonly<Question>) {
  const t = useTranslations('activities');

  return (
    <div className="text-pink-800 text-sm md:text-lg">
      {t('question')} {actual} {t('of')} {total}
    </div>
  );
}
