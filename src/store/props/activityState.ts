import { SessionResponse } from '@/interfaces/session';

export interface ActivityState {
  session: SessionResponse[] | null;
  activeIndex: number;
  score: number;
  isCorrect: boolean;
  isValidated: boolean;
  setSession: (session: SessionResponse[]) => void;
  setActiveIndex: (activeIndex: number) => void;
  setIsCorrect: (isCorrect: boolean) => void;
  setIsValidated: (isValidated: boolean) => void;
  setScore: (score: number) => void;
}
