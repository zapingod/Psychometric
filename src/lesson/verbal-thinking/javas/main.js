// main.js
import { questions } from './javas/questions.js';  // adjust path as needed

document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz-container");

  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question bg-white p-4 mb-4 rounded shadow";
    div.innerHTML = `
      <p>${q.question}</p>
      ${q.options.map((opt, i) => `
        <button class="option bg-blue-500 text-white px-4 py-2 rounded mb-2"
                onclick="answerQuestion(${index}, ${i}, this)">
          ${opt}
        </button>
      `).join('')}
      <p class="result hidden text-green-600 font-bold"></p>
    `;
    quizContainer.appendChild(div);
  });
});

window.answerQuestion = function(questionIndex, selectedOptionIndex, btn) {
  const q = questions[questionIndex];
  const questionDiv = btn.closest(".question");
  const resultP = questionDiv.querySelector(".result");

  if (selectedOptionIndex === q.correctAnswer) {
    resultP.textContent = "✅ תשובה נכונה!";
  } else {
    resultP.textContent = `❌ שגויה! התשובה: ${q.options[q.correctAnswer]}`;
  }
  resultP.classList.remove("hidden");
  questionDiv.querySelectorAll("button").forEach(b => b.disabled = true);
};
