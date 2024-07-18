import MainTheme from '@/themes/main.theme';
import { useTranslations } from 'next-intl';
import { ParsedUrlQuery } from 'querystring';
import { fetchPosts, parseQueryParams } from '@/utils/fetch';
import { use } from 'react';
import PostsGallery from '@/components/gallery/posts';

export default function TeacherPage({
  searchParams,
}: {
  readonly searchParams: ParsedUrlQuery;
}) {
  const t = useTranslations('teacher');
  const { page: pageNum, limit: limitNum } = parseQueryParams(searchParams);
  const data = use(fetchPosts(pageNum, limitNum));

  return (
    <MainTheme>
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            {t('title')}
          </h1>

          <p className="max-w-lg mx-auto text-lg mt-4 text-gray-500">
            {t('description')}
          </p>
        </div>
        <PostsGallery data={data} />
      </div>
    </MainTheme>
  );
}
