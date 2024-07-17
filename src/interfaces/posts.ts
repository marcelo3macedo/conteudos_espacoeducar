export interface Post {
  id: string;
  title: string;
  description: string;
  slug: string;
  link: string;
  keywords: string;
}

export interface PostsResponse {
  posts: Post[];
  page: number;
  limit: number;
  total: number;
}
