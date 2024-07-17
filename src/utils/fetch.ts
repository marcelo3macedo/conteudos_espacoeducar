import { ParsedUrlQuery } from 'querystring';
import { ParsedParams } from './props/fetch';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPosts(page: number = 1, limit: number = 10) {
  const res = await fetch(`${apiUrl}/api/posts?page=${page}&limit=${limit}`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export async function fetchHighlights() {
  const res = await fetch(`${apiUrl}/api/highlights`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export function parseQueryParams(query: ParsedUrlQuery): ParsedParams {
  const page =
    typeof query.page === 'string' ? parseInt(query.page, 10) || 1 : 1;
  const limit =
    typeof query.limit === 'string' ? parseInt(query.limit, 10) || 10 : 10;
  return { page, limit };
}
