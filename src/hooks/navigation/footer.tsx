const useFooterNavigation = () => {
  const menu = [
    {
      title: 'Institucional',
      items: [
        {
          href: '/institucional/sobre-nos',
          title: 'Sobre o blog',
        },
        {
          href: '/institucional/contate-nos',
          title: 'Contate-nos',
        },
        {
          href: '/institucional/politicas-privacidade',
          title: 'Políticas Privacidade',
        },
      ],
    },
    {
      title: 'Blog',
      items: [
        {
          href: '/favoritos',
          title: 'Favoritos',
        },
        {
          href: '/para-professores',
          title: 'Para Professores',
        },
        {
          href: '/para-alunos',
          title: 'Para Alunos',
        },
      ],
    },
  ];

  return {
    menu,
  };
};

export { useFooterNavigation };
