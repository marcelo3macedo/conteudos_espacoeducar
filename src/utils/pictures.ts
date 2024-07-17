import notFoundImage from '@/assets/images/posts/notFound.jpg';

export const getPostImageBySlug = (slug: string) => {
  try {
    const image = require(`@/assets/images/posts/${slug}.jpg`);
    return image ? image.default : '';
  } catch (err) {
    return notFoundImage;
  }
};
