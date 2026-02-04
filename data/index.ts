
import { chapter1 } from './chapter1';
import { unit2 } from './unit2';
import { chapter2 as unit3 } from './chapter2';
import { unit4 } from './unit4';
import { unit5 } from './unit5';
import { unit6 } from './unit6';
import { unit7 } from './unit7';
import { unit8 } from './unit8';
import { unit9 } from './unit9';
import { unit10 } from './unit10';
import { Chapter } from '../types';

export const ALL_UNITS: Chapter[] = [
  { ...chapter1, id: 1 },
  { ...unit2, id: 2 },
  { ...unit3, id: 3 },
  { ...unit4, id: 4 },
  { ...unit5, id: 5 },
  { ...unit6, id: 6 },
  { ...unit7, id: 7 },
  { ...unit8, id: 8 },
  { ...unit9, id: 9 },
  { ...unit10, id: 10 },
];
