'use client';
import Image from 'next/image';
import { PageStudentProps } from '@/interfaces/page';
import MainTheme from '@/themes/main.theme';
import { getActivitiesImageBySlug } from '@/utils/pictures';
import { useStudentSlug } from '@/hooks/student/slug';
import { useTranslations } from 'next-intl';

export default function StudentSlugPage({
  params,
}: Readonly<PageStudentProps>) {
  const t = useTranslations('activities');
  const { slug } = params || {};
  const { activity, startActivity } = useStudentSlug(slug);

  if (!activity) return <></>;

  async function handleActivityStart() {
    startActivity();
  }

  return (
    <MainTheme>
      <div className="w-full h-lvh flex flex-col mt-4 md:mt-0 md:justify-center items-center">
        <div>
          <Image
            className="object-cover object-center w-full h-52 rounded-lg lg:h-52 mb-8"
            src={getActivitiesImageBySlug(slug)}
            alt={slug}
          />
        </div>
        <div className="text-center max-w-4xl px-8 md:px-0">
          <h1 className="text-xl md:text-3xl font-bold text-slate-700">
            {activity.title}
          </h1>
          <h3 className="text-sm md:text-xl my-1 md:my-4 text-slate-700">
            {activity.description}
          </h3>
        </div>
        <div>
          <button
            onClick={handleActivityStart}
            className="select-none hover:cursor-pointer hover:opacity-80 active:top-1 active:relative"
          >
            <div className="inline-block mt-4 w-full text-center bg-yellow-100 px-24 py-4 rounded-lg text-yellow-600 font-bold text-md border border-yellow-400">
              <span className="text-lg md:text-2xl font-bold italic">
                {t('start')}
              </span>
            </div>
          </button>
        </div>
      </div>
    </MainTheme>
  );
}
