import FeaturedHero from '@/components/hero/featured';
import MainTheme from '@/themes/main.theme';
import { fetchPosts, parseQueryParams } from '@/utils/fetch';
import { ParsedUrlQuery } from 'querystring';
import { use } from 'react';

export default function Home({
  searchParams,
}: {
  readonly searchParams: ParsedUrlQuery;
}) {
  const { page: pageNum, limit: limitNum } = parseQueryParams(searchParams);
  const data = use(fetchPosts(pageNum, limitNum));

  return (
    <MainTheme>
      <div className="container mx-auto p-4">
        <FeaturedHero data={data} />
      </div>
    </MainTheme>
  );
}
