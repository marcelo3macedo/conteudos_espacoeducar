import { paginate } from '@/utils/paginate';
import { readFiles } from '@/utils/reader';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { page = 1, limit = 10 } = req.query;
    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);

    const activities = readFiles('activities.json');
    const paginated = paginate(activities, pageNum, limitNum);

    res.status(200).json({
      activities: paginated,
      page: pageNum,
      limit: limitNum,
      total: activities.length,
    });
  } catch (error) {
    const { message } = error as Error;
    res.status(404).json({ message });
  }
}
