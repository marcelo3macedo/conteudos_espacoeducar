import createNextIntlPlugin from 'next-intl/plugin';
import { promises as fs } from 'fs';
import path from 'path';

const withNextIntl = createNextIntlPlugin();

async function getRewrites() {
  const rewritesPath = path.join(process.cwd(), 'rewrites.json');
  const data = await fs.readFile(rewritesPath, 'utf-8');
  return JSON.parse(data);
}

const nextConfig = {
  async rewrites() {
    const rewrites = await getRewrites();
    return rewrites;
  },
};

export default withNextIntl(nextConfig);
