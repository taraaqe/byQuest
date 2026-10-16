export type Quest = {
  id: string;
  title: string;
  description: string;
  location: {
    name: string;
    x: number;
    y: number;
  };
  xp: number;
  category: "discovery" | "journalism" | "social";
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
  articleUrl?: string;
};