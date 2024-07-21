import { Element } from './sessionConfig';

export interface SessionDetails {
  indexToHide?: number;
  type: string;
  options: string[];
}

export interface SessionResponse {
  element: Element;
  details: SessionDetails;
}
