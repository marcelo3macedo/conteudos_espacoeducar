export interface Option {
  type: string;
  possibility: number;
}

export interface WordElement {
  word: string;
  slug: string;
  syllables: string[];
}

export interface NumberElement {
  operations: string[];
  minNumber: number;
  maxNumber: number;
  result?: NumberResult;
}

export interface NumberResult {
  value: number;
  firstNumber: number;
  secondNumber: number;
  operation: string;
}

export type Element = WordElement | NumberElement;

export interface ActivityConfig {
  difficulty: string;
  maxItems: number;
  options: Option[];
  elements: Element[];
  possibleOptions: string[];
}
