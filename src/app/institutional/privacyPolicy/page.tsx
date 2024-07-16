import MultilineText from '@/components/common/multilineText';
import Title from '@/components/common/title';
import MainTheme from '@/themes/main.theme';
import { useTranslations } from 'next-intl';

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacyPolicy');

  return (
    <MainTheme>
      <div className="container my-4 md:my-8 mx-auto px-2">
        <Title>{t('title')}</Title>
        <MultilineText>{t('description')}</MultilineText>
        <h2 className="text-md font-bold py-2 mt-2 md:text-lg">
          {t('cookies.title')}
        </h2>
        <MultilineText>{t('cookies.description')}</MultilineText>
        <h2 className="text-md font-bold py-2 mt-2 md:text-lg">
          {t('disableCookies.title')}
        </h2>
        <MultilineText>{t('disableCookies.description')}</MultilineText>
        <h2 className="text-md py-2 mt-4 md:text-lg">{t('footer')}</h2>
      </div>
    </MainTheme>
  );
}
