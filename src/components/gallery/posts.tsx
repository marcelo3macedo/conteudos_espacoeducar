import { PostsResponse } from '@/interfaces/posts';
import { checkHasMorePages } from '@/utils/paginate';
import { useTranslations } from 'next-intl';
import PostContent from './post';

export default function PostsGallery({
  data,
}: {
  readonly data: PostsResponse;
}) {
  const t = useTranslations('gallery');
  const hasMorePage = checkHasMorePages(data.page, data.limit, data.total);

  return (
    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
      {data.posts.map((post) => (
        <PostContent key={post.id} post={post} />
      ))}
      {hasMorePage ? (
        <p className="mt-3 text-sm text-pink-500">{t('seeMore')}</p>
      ) : (
        <></>
      )}
    </div>
  );
}
