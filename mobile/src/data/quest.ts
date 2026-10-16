import type { Quest } from "../types/quest";

export const quests: Quest[] = [
  {
    id: "quest-1",
    title: "Discover Bakklandet",
    description: "Explore one of Trondheim's most charming areas.",
    location: {
      name: "Bakklandet",
      x: 40,
      y: 55,
    },
    xp: 100,
    category: "discovery",
    questions: [
      {
        question: "Which city is Bakklandet located in?",
        options: ["Oslo", "Bergen", "Trondheim"],
        correctAnswer: 2,
      },
    ],
  },
];