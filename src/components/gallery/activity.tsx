import { Activity } from '@/interfaces/activities';
import { getActivitiesImageBySlug } from '@/utils/pictures';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function ActivityContent({
  activity,
}: {
  readonly activity: Activity;
}) {
  const t = useTranslations('activities');

  return (
    <div
      key={activity.title}
      className="hover:opacity-70 hover:cursor-pointer select-none mb-4 bg-white rounded-lg p-2 border border-slate-300"
    >
      <Link href={activity.link}>
        <div className="relative">
          <Image
            className="object-fill object-center w-full h-96 rounded-lg lg:h-96"
            src={getActivitiesImageBySlug(activity.slug)}
            alt={activity.title}
          />
        </div>

        <div className="inline-block mt-2 w-full text-center bg-yellow-100 px-8 py-2 rounded-lg text-yellow-600 font-bold text-md border border-yellow-400">
          {t('start')}
        </div>
      </Link>
    </div>
  );
}
