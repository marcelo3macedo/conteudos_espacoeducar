import galleryBackground from '@/assets/images/backgrounds/gallery.jpg';
import { Post } from '@/interfaces/posts';
import { getPostImageBySlug } from '@/utils/pictures';
import Image from 'next/image';
import Link from 'next/link';

export default function PostContent({ post }: { readonly post: Post }) {
  return (
    <Link
      key={post.title}
      href={post.link}
      className="mb-12 lg:mb-0 overflow-hidden rounded-md relative"
    >
      <Image
        className="absolute h-96 opacity-10 rounded-md w-full"
        src={galleryBackground.src}
        width={galleryBackground.width}
        height={galleryBackground.height}
        alt={post.title}
      />
      <Image
        className="relative z-10 object-contain w-full rounded-md h-96"
        src={getPostImageBySlug(post.slug)}
        alt={post.title}
      />
      <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow ">
        <h2 className="font-semibold text-gray-800 hover:underline md:text-xl">
          {post.title}
        </h2>

        <p className="mt-3 text-sm h-10 overflow-hidden text-gray-500">
          {post.description}
        </p>
      </div>
    </Link>
  );
}
