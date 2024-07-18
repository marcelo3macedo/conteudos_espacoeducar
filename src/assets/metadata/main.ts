import { Metadata } from 'next';

export const metadataContent: Metadata = {
  title: 'Conteúdos - Espaço Educar',
  description:
    'Descubra recursos incríveis para ensino infantil! Encontre atividades para sala de aula, dicas para professores e materiais educativos que tornam o aprendizado divertido e eficaz. Acesse agora para transformar suas aulas!',
  applicationName: 'Espaço Educar',
  authors: [
    {
      name: 'Espaço Educar',
      url: 'https://oespacoeducar.com.br',
    },
  ],
  generator: 'Espaço Educar',
  keywords: 'ensino infantil, professor, atividades',
  referrer: 'origin',
  creator: 'Espaço Educar',
  publisher: 'Espaço Educar',
  robots: {
    follow: true,
    index: true,
  },
  alternates: {
    canonical: 'https://oespacoeducar.com.br',
    types: {
      'application/rss+xml': [
        { url: 'https://oespacoeducar.com.br/feed', title: 'rss' },
        {
          url: 'https://oespacoeducar.com.br/comments/feed',
          title: 'comments',
        },
      ],
    },
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    url: 'https://conteudos.oespacoeducar.com.br',
    title: 'Conteúdos Espaço Educar',
    description:
      'Descubra recursos incríveis para ensino infantil! Encontre atividades para sala de aula, dicas para professores e materiais educativos que tornam o aprendizado divertido e eficaz. Acesse agora para transformar suas aulas!',
    siteName: 'Espaço Educar',
    images: [
      {
        url: 'https://conteudos.oespacoeducar.com.br/logo.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: 'https://conteudos.oespacoeducar.com.br/logo.png',
  },
  verification: {
    google: 'tFdcpznLCzvIod9E3mKF-ieBu31t6aE8FHHLBWToHAg',
    yandex: '1234567890',
    me: '1234567890',
  },
  appleWebApp: {
    capable: true,
    title: 'Espaço Educar',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: { telephone: false },
  abstract:
    'Descubra recursos incríveis para ensino infantil! Encontre atividades para sala de aula, dicas para professores e materiais educativos que tornam o aprendizado divertido e eficaz. Acesse agora para transformar suas aulas!',
  archives: 'https://oespacoeducar.com.br/archives',
  category: 'Educação Infantil',
  classification: 'Professores Infantil',
};
