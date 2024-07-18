import { Post } from '@/interfaces/posts';
import { readFiles } from '@/utils/reader';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { slug } = req.query;
    const posts = readFiles('posts.json');
    const post = posts.find((p: Post) => p.slug == slug);

    res.status(200).json(post);
  } catch (error) {
    const { message } = error as Error;
    res.status(404).json({ message });
  }
}
