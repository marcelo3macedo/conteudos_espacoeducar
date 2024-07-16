import MultilineText from '@/components/common/multilineText';
import Title from '@/components/common/title';
import FacebookIcon from '@/components/icons/facebook';
import InstagramIcon from '@/components/icons/instagram';
import MainTheme from '@/themes/main.theme';
import { useTranslations } from 'next-intl';

export default function ContactUsPage() {
  const t = useTranslations('contactUs');
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL;
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;

  return (
    <MainTheme>
      <div className="container my-4 md:my-8 mx-auto px-2">
        <Title>{t('title')}</Title>
        <MultilineText>{t('description')}</MultilineText>
        <h2 className="text-md py-2 mt-2 md:text-lg">{t('social.title')}</h2>
        <div className="flex mt-4 mx-auto">
          <a
            className="mx-1.5  text-gray-700 transition-colors duration-300 transform hover:text-blue-500"
            href={facebookUrl}
          >
            <FacebookIcon />
          </a>

          <a
            className="mx-1.5 text-gray-700 transition-colors duration-300 transform hover:text-blue-500"
            href={instagramUrl}
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </MainTheme>
  );
}
