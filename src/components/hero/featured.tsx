import { PostsResponse } from '@/interfaces/posts';
import { useTranslations } from 'next-intl';
import PostsGallery from '../gallery/posts';

export default function FeaturedHero({
  data,
}: {
  readonly data: PostsResponse;
}) {
  const t = useTranslations('featured');

  return (
    <section className="bg-amber-50">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl ">
            {t('title')}
          </h1>
          <p className="max-w-2xl text-lg mx-auto mt-4 text-gray-500">
            {t('description')}
          </p>
        </div>
        <PostsGallery data={data} />
      </div>
    </section>
  );
}
