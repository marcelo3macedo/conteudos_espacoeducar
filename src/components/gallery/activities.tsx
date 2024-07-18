import { checkHasMorePages } from '@/utils/paginate';
import { ActivitiesResponse, Activity } from '@/interfaces/activities';
import ActivityContent from './activity';
import { SeeMoreGallery } from './seeMore';

export default function ActivitiesGallery({
  data,
}: {
  readonly data: ActivitiesResponse;
}) {
  const hasMorePage = checkHasMorePages(data.page, data.limit, data.total);

  return (
    <article>
      <div className="grid grid-cols-1 gap-8 mt-4 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
        {data.activities.map((activity: Activity) => (
          <ActivityContent key={activity.slug} activity={activity} />
        ))}
      </div>
      {hasMorePage ? <SeeMoreGallery page={data.page} /> : <></>}
    </article>
  );
}
