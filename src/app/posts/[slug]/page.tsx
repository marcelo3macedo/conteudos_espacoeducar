import PostContent from '@/components/gallery/post';
import { PageProps } from '@/interfaces/page';
import MainTheme from '@/themes/main.theme';
import { fetchPost } from '@/utils/fetch';
import { Metadata } from 'next';
import { use } from 'react';

export default function PostPage({ params }: Readonly<PageProps>) {
  const { slug } = params || {};
  const post = use(fetchPost(slug));

  return (
    <MainTheme>
      <div className="my-8 px-8 container mx-auto">
        <PostContent post={post} isExternal={true} />
      </div>
    </MainTheme>
  );
}

export async function generateMetadata({
  params,
}: Readonly<PageProps>): Promise<Metadata> {
  const { slug } = params || {};
  const post = await fetchPost(slug);

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      images: [{ url: post.url }],
    },
  };
}
