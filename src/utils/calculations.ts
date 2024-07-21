const operations: { [key: string]: (a: number, b: number) => number } = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

export function dynamicCalculate(
  firstNumber: number,
  secondNumber: number,
  operation: string
): number {
  const operationFunc = operations[operation];

  if (!operationFunc) {
    throw new Error(`Unsupported operation: ${operation}`);
  }

  return operationFunc(firstNumber, secondNumber);
}
