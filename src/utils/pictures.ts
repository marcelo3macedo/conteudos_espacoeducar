import notFoundImage from '@/assets/images/posts/notFound.jpg';

export const getFingersImageByValue = (value: number) => {
  try {
    const image = require(`@/assets/images/fingers/${value.toString()}.jpg`);
    return image ? image.default : '';
  } catch (err) {
    return notFoundImage;
  }
};

export const getActivitiesImageBySlug = (slug: string) => {
  try {
    const image = require(`@/assets/images/activities/${slug}.jpg`);
    return image ? image.default : '';
  } catch (err) {
    return notFoundImage;
  }
};

export const getPostImageBySlug = (slug: string) => {
  try {
    const image = require(`@/assets/images/posts/${slug}.jpg`);
    return image ? image.default : '';
  } catch (err) {
    return notFoundImage;
  }
};

export const getHighlightImageByName = (name: string) => {
  try {
    const image = require(`@/assets/images/profiles/types/${name}.jpg`);
    return image ? image.default : '';
  } catch (err) {
    return notFoundImage;
  }
};

export const getCardsImageBySlug = (slug: string) => {
  try {
    const image = require(`@/assets/images/cards/${slug.toLowerCase()}.jpg`);
    return image ? image.default : '';
  } catch (err) {
    console.error('Error loading image:', err);
    return '';
  }
};
