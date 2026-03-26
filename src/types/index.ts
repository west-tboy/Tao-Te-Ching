export interface ChapterSection {
  original: string;
  translation: string;
  notes: string;
  modernExample: string;
  reflection: string;
  answer: string;
}

export interface Chapter {
  id: number;
  title: string;
  summary: string;
  sections: ChapterSection[];
}
