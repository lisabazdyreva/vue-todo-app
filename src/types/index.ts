import type { SortingValue } from '../utils/const';

export type SortingType = (typeof SortingValue)[keyof typeof SortingValue];
