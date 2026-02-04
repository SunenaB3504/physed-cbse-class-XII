
export type VisualType = 'table' | 'flow' | 'grid';

export interface Visualization {
  id: string;
  title: string;
  type: VisualType;
  data: any;
}

export interface TheoryTopic {
  id: string;
  title: string;
  description: string;
  content: string[];
  visualizations: Visualization[];
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: 'Definition' | 'Theory' | 'Classification' | 'Calculation' | 'TrueFalse' | 'Application' | 'Management' | 'Technical' | 'Asana' | 'Injury' | 'Physiology';
}

export interface SQPQuestion {
  id: string;
  year: string;
  paperType: 'SQP' | 'Board';
  marks: number;
  type: 'MCQ' | 'SA' | 'LA';
  question: string;
  markingScheme: string;
  aiExplanation: string;
  questionNumber?: string;
  source?: string;
}

export interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
}

export interface CheatSheetSection {
  title: string;
  points: string[];
}

export interface Chapter {
  id: number;
  slug: string;
  name: string;
  description: string;
  topics: TheoryTopic[];
  flashcards: Flashcard[];
  sqp: SQPQuestion[];
  mindMap: MindMapNode;
  cheatSheet: CheatSheetSection[];
}
