export interface Activity {
  title: string;
  description: string;
  slug: string;
  link: string;
  keywords: string;
}

export interface ActivitiesResponse {
  activities: Activity[];
  page: number;
  limit: number;
  total: number;
}
