'use client';
import { IItemProps } from '@/components/navigation/helpers/props/items';
import { useState } from 'react';

const useHeaderNavigation = () => {
  const [menuSelected, setMenuSelected] = useState('');
  const items = [
    {
      href: '/',
      title: 'Início',
    },
    {
      href: '/para-professores',
      title: 'Para professores',
    },
    {
      href: '/para-alunos',
      title: 'Para alunos',
    },
  ] as IItemProps[];

  return {
    items,
    menuSelected,
    setMenuSelected,
  };
};

export { useHeaderNavigation };
