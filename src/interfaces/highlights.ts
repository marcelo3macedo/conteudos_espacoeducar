export interface Highlights {
  title: string;
  description: string;
  slug: string;
  picture: string;
}

export interface HightlightsResponse {
  highlights: Highlights[];
  page: number;
  limit: number;
  total: number;
}
