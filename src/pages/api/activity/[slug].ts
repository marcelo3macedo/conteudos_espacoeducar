import { Activity } from '@/interfaces/activities';
import { readFiles } from '@/utils/reader';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { slug } = req.query;
    const activities = readFiles('activities.json');
    const activity = activities.find((a: Activity) => a.slug == slug);

    res.status(200).json(activity);
  } catch (error) {
    const { message } = error as Error;
    res.status(404).json({ message });
  }
}
