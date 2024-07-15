'use client';

import useProfile from '@/store/useProfile';

const useProfileNavigation = () => {
  const { name, points, avatar, setName, setAvatar } = useProfile(
    (state: any) => ({
      name: state.name,
      points: state.points,
      avatar: state.avatar,
      setName: state.setName,
      setAvatar: state.setAvatar,
    })
  );

  return {
    name,
    points,
    avatar,
    setName,
    setAvatar,
  };
};

export { useProfileNavigation };
