const useFooterNavigation = () => {
  const menu = [
    {
      title: 'menus.institutional',
      items: [
        {
          href: '/institucional/sobre-nos',
          title: 'menus.aboutUs',
        },
        {
          href: '/institucional/contate-nos',
          title: 'menus.contactUs',
        },
        {
          href: '/institucional/politicas-privacidade',
          title: 'menus.privacyPolicy',
        },
      ],
    },
    {
      title: 'menus.blog',
      items: [
        {
          href: '/favoritos',
          title: 'menus.bookmark',
        },
        {
          href: '/para-professores',
          title: 'menus.forTeacher',
        },
        {
          href: '/para-alunos',
          title: 'menus.forStudents',
        },
      ],
    },
  ];

  return {
    menu,
  };
};

export { useFooterNavigation };
