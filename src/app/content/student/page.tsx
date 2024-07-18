import ActivitiesGallery from '@/components/gallery/activities';
import ActivityContent from '@/components/gallery/activity';
import { Activity } from '@/interfaces/activities';
import MainTheme from '@/themes/main.theme';
import { fetchActivities, parseQueryParams } from '@/utils/fetch';
import { useTranslations } from 'next-intl';
import { ParsedUrlQuery } from 'querystring';
import { use } from 'react';

export default function StudentPage({
  searchParams,
}: {
  readonly searchParams: ParsedUrlQuery;
}) {
  const t = useTranslations('student');
  const { page: pageNum, limit: limitNum } = parseQueryParams(searchParams);
  const data = use(fetchActivities(pageNum, limitNum));

  return (
    <MainTheme>
      <div className="container px-6 py-5 mx-auto md:mt-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            {t('title')}
          </h1>

          <p className="max-w-lg mx-auto text-lg mt-2 text-gray-500">
            {t('description')}
          </p>
        </div>
        <ActivitiesGallery data={data} />
      </div>
    </MainTheme>
  );
}
