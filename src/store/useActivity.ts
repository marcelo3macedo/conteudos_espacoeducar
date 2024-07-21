import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ActivityState } from './props/activityState';
import { SessionResponse } from '@/interfaces/session';

const useActivity = create<ActivityState>()(
  persist(
    (set) => ({
      isValidated: false,
      isCorrect: false,
      session: null,
      activeIndex: 0,
      score: 0,
      setSession: (session: SessionResponse[]) => set({ session }),
      setActiveIndex: (activeIndex: number) => set({ activeIndex }),
      setScore: (score: number) => set({ score }),
      setIsCorrect: (isCorrect: boolean) => set({ isCorrect }),
      setIsValidated: (isValidated: boolean) => set({ isValidated }),
    }),
    {
      name: 'store-activity',
      getStorage: () => localStorage,
    }
  )
);

export default useActivity;
