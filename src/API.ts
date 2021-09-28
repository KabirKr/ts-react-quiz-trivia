import { suffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionsState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizeQuestions = async (
  amount: number,
  difficulty: Difficulty,
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();

  const log = data.results.map((question: Question) => ({
    ...question,
    answers: suffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));

  console.log(log);

  return data.results.map((question: Question) => ({
    ...question,
    answers: suffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
