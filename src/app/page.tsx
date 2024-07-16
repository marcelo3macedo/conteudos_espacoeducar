import MainTheme from '@/themes/main.theme';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <MainTheme>
      <h1>{t('welcome')}</h1>
    </MainTheme>
  );
}
