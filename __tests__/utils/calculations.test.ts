import { dynamicCalculate } from '@/utils/calculations';

describe('dynamicCalculate', () => {
  it('should return the sum of two numbers when operation is "+"', () => {
    const result = dynamicCalculate(3, 5, '+');
    expect(result).toBe(8);
  });

  it('should return the sum of two numbers when operation is "-"', () => {
    const result = dynamicCalculate(3, 5, '-');
    expect(result).toBe(-2);
  });

  it('should return the sum of two numbers when operation is "*"', () => {
    const result = dynamicCalculate(3, 5, '*');
    expect(result).toBe(15);
  });

  it('should return the sum of two numbers when operation is "/"', () => {
    const result = dynamicCalculate(6, 3, '/');
    expect(result).toBe(2);
  });

  it('should throw an error when operation is unsupported', () => {
    expect(() => dynamicCalculate(3, 5, '%')).toThrow(
      'Unsupported operation: %'
    );
  });
});
