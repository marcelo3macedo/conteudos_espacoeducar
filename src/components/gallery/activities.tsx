import { checkHasMorePages } from '@/utils/paginate';
import { useTranslations } from 'next-intl';
import { ActivitiesResponse, Activity } from '@/interfaces/activities';
import ActivityContent from './activity';

export default function ActivitiesGallery({
  data,
}: {
  readonly data: ActivitiesResponse;
}) {
  const t = useTranslations('gallery');
  const hasMorePage = checkHasMorePages(data.page, data.limit, data.total);

  return (
    <article>
      <div className="grid grid-cols-1 gap-8 mt-4 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
        {data.activities.map((activity: Activity) => (
          <ActivityContent key={activity.slug} activity={activity} />
        ))}
      </div>
      {hasMorePage ? (
        <div className="text-center">
          <p className="bg-slate-100 w-96 my-8 px-8 mx-auto py-2 rounded-lg text-slate-600 font-bold text-md border border-slate-40">
            {t('seeMore')}
          </p>
        </div>
      ) : (
        <></>
      )}
    </article>
  );
}
