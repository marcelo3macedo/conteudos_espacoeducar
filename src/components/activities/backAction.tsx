'use client';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function BackAction() {
  const router = useRouter();
  const t = useTranslations('activities');

  const backHandler = () => {
    router.push('/para-alunos');
  };

  return (
    <button onClick={backHandler}>
      <div className="w-32 text-center py-3 md:pt-4 ml-4 md:ml-8 hover:opacity-70 hover:cursor-pointer select-none">
        <h3 className="text-sm md:text-md text-slate-500 py-4 bg-slate-100 rounded-lg border">
          {t('back')}
        </h3>
      </div>
    </button>
  );
}
