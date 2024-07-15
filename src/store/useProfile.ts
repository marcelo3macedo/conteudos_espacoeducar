import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import cat from '@/assets/images/profiles/cat.jpg';

const useProfile = create(
  persist(
    (set) => ({
      name: 'Pessoa',
      points: 0,
      avatar: cat.src,
      setName: (name: any) => set({ name }),
      setPoints: (points: any) => set({ points }),
      setAvatar: (avatar: any) => set({ avatar }),
    }),
    {
      name: 'zustand-store',
      getStorage: () => localStorage,
    }
  )
);

export default useProfile;
