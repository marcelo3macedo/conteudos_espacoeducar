import { checkHasMorePages, paginate } from '@/utils/paginate';

describe('paginate', () => {
  it('should return correct slice of array when given valid page and limit', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const page = 2;
    const limit = 3;
    const result = paginate(array, page, limit);
    expect(result).toEqual([4, 5, 6]);
  });

  it('should return empty array when input array is empty', () => {
    const array: number[] = [];
    const page = 1;
    const limit = 5;
    const result = paginate(array, page, limit);
    expect(result).toEqual([]);
  });
});

describe('checkHasMorePages', () => {
  it('should return true when there are more pages to display', () => {
    const page = 1;
    const limit = 10;
    const total = 20;
    const result = checkHasMorePages(page, limit, total);
    expect(result).toBe(true);
  });

  it('should return false when total items is zero', () => {
    const page = 1;
    const limit = 10;
    const total = 0;
    const result = checkHasMorePages(page, limit, total);
    expect(result).toBe(false);
  });
});
