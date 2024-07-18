export function paginate<T>(array: T[], page: number, limit: number): T[] {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return array.slice(startIndex, endIndex);
}

export function checkHasMorePages(page: number, limit: number, total: number) {
  return page * limit < total;
}
