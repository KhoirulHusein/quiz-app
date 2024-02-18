// utils/api.js
import axios from "axios";

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=5&category=10&difficulty=medium"
    );
    return response.data.results.map((question) => ({
      ...question,
      options: [...question.incorrect_answers, question.correct_answer].sort(
        () => Math.random() - 0.5
      ),
    }));
  } catch (error) {
    console.error("Error fetching questions: ", error);
    return []; // Mengembalikan array kosong jika terjadi kesalahan
  }
};
