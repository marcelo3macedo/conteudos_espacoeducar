import { PostsResponse } from '@/interfaces/posts';
import { checkHasMorePages } from '@/utils/paginate';
import PostContent from './post';
import { SeeMoreGallery } from './seeMore';

export default function PostsGallery({
  data,
}: {
  readonly data: PostsResponse;
}) {
  const hasMorePage = checkHasMorePages(data.page, data.limit, data.total);

  return (
    <article>
      <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
        {data.posts.map((post) => (
          <PostContent key={post.id} post={post} />
        ))}
      </div>
      {hasMorePage ? <SeeMoreGallery page={data.page} /> : <></>}
    </article>
  );
}
