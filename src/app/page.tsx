import FeaturedHero from '@/components/hero/featured';
import HighligthsHero from '@/components/hero/highlights';
import MainTheme from '@/themes/main.theme';
import { fetchHighlights, fetchPosts, parseQueryParams } from '@/utils/fetch';
import { ParsedUrlQuery } from 'querystring';
import { use } from 'react';

export default function Home({
  searchParams,
}: {
  readonly searchParams: ParsedUrlQuery;
}) {
  const { page: pageNum, limit: limitNum } = parseQueryParams(searchParams);
  const data = use(fetchPosts(pageNum, limitNum));
  const highlights = use(fetchHighlights());

  return (
    <MainTheme>
      <HighligthsHero data={highlights} />
      <FeaturedHero data={data} />
    </MainTheme>
  );
}
