// const questions = [
//     {
//       question: "What is the tallest animal in the world?",
//       choices: ["Giraffe", "Elephant", "Penguin", "Horse"],
//       correctAnswer: 0
//     },
//     {
//       question: "Which planet is known as the Red Planet?",
//       choices: ["Earth", "Mars", "Jupiter", "Saturn"],
//       correctAnswer: 1
//     },
//     {
//       question: "Who wrote Harry Potter?",
//       choices: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"],
//       correctAnswer: 1
//     },
//     {
//       question: "Which animal is the main character in the movie 'Finding Nemo'?",
//       choices: ["Clown Fish", "Turtle", "Dolphin", "Star Fish"],
//       correctAnswer: 0
//     },
//     {
//       question: "What is the largest Ocean in the world?",
//       choices: ["The Arctic Ocean", "The Atlantic Ocean", "The Pacific Ocean", "The Indian Ocean"],
//       correctAnswer: 2
//     },
//     {
//       question: "Which city is known as 'Pink City of India'?",
//       choices: ["Raipur", "Mumbai", "Bangalore", "Jaipur"],
//       correctAnswer: 3
//     },
//     { question: "Who was the first man to ever walk on the Moon",
//       choices: ["Prince Charles", "The Wright Brothers", "William Shakespeare", "Neil Armstrong"],
//       correctAnswer: 3
//     },
//     {
//       question: "which fruit is known for having its seeds on the outside?",
//       choices: ["Stawberry", "Kiwi", "Mango", "Grapes"],
//       correctAnswer: 0
//     },
//     {
//       question: "Which sport uses a bat,a ball,and bases?",
//       choices: ["Kho-Kho", "Football", "Baseball", "Cricket"],
//       correctAnswer: 2
//     },
//     {
//       question: "Which country has the Great Barrier Reef?",
//       choices: ["Mexico", "Australia", "Canada", "Indonesia"],
//       correctAnswer: 1
//     }
//   ];
  
//   let currentQuestionIndex = 0;
//   let score = 0;
  
//   function loadQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     document.getElementById("question").textContent = currentQuestion.question;
//     const choiceButtons = document.querySelectorAll(".choice");
//     choiceButtons.forEach((button, index) => {
//       button.textContent = currentQuestion.choices[index];
//     });
//   }
  
//   function selectAnswer(choiceIndex) {
//     const isCorrect = choiceIndex === questions[currentQuestionIndex].correctAnswer;
//     if (isCorrect)
//     {
//       score++;
//     }
//     document.querySelectorAll(".choice").forEach(btn => btn.disabled = true);
//   }
  
//   function nextQuestion() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//       loadQuestion();
//       document.querySelectorAll(".choice").forEach(btn => btn.disabled = false);
//     } else {
//       document.getElementById("quiz").innerHTML = `<h2>Thank you for playing!!! <br><br>
//       Your Score: ${score}/${questions.length}</h2>`;

//     }
//   }
//   /*function previousQuestion(){
//     currentQuestionIndex--;
//     if (currentQuestionIndex > 0) {
//         loadQuestion();
//         document.querySelectorAll(".choice").forEach(btn => btn.disabled = false);
//       }
//   }*/
  
//   loadQuestion();
  
const questions = [
  {
      question: "What is the tallest animal in the world?",
      choices: ["Giraffe", "Elephant", "Penguin", "Horse"],
      correctAnswer: 0
  },
  {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1
  },
  {
      question: "Who wrote Harry Potter?",
      choices: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"],
      correctAnswer: 1
  },
  {
      question: "Which animal is the main character in the movie 'Finding Nemo'?",
      choices: ["Clown Fish", "Turtle", "Dolphin", "Star Fish"],
      correctAnswer: 0
  },
  {
      question: "What is the largest Ocean in the world?",
      choices: ["The Arctic Ocean", "The Atlantic Ocean", "The Pacific Ocean", "The Indian Ocean"],
      correctAnswer: 2
  },
  {
      question: "Which city is known as 'Pink City of India'?",
      choices: ["Raipur", "Mumbai", "Bangalore", "Jaipur"],
      correctAnswer: 3
  },
  {
      question: "Who was the first man to ever walk on the Moon?",
      choices: ["Prince Charles", "The Wright Brothers", "William Shakespeare", "Neil Armstrong"],
      correctAnswer: 3
  },
  {
      question: "Which fruit is known for having its seeds on the outside?",
      choices: ["Strawberry", "Kiwi", "Mango", "Grapes"],
      correctAnswer: 0
  },
  {
      question: "Which sport uses a bat, a ball, and bases?",
      choices: ["Kho-Kho", "Football", "Baseball", "Cricket"],
      correctAnswer: 2
  },
  {
      question: "Which country has the Great Barrier Reef?",
      choices: ["Mexico", "Australia", "Canada", "Indonesia"],
      correctAnswer: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;
  const choiceButtons = document.querySelectorAll(".choice");

  choiceButtons.forEach((button, index) => {
      button.textContent = currentQuestion.choices[index];
      button.classList.remove("correct", "incorrect"); // Reset styles
      button.disabled = false;
  });
}

function selectAnswer(choiceIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const choiceButtons = document.querySelectorAll(".choice");

  if (choiceIndex === currentQuestion.correctAnswer) {
      score++;
      choiceButtons[choiceIndex].classList.add("correct"); // Mark as correct
  } else {
      choiceButtons[choiceIndex].classList.add("incorrect"); // Mark as incorrect
      choiceButtons[currentQuestion.correctAnswer].classList.add("correct"); // Highlight correct answer
  }

  // Disable all buttons after selecting an answer
  choiceButtons.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      loadQuestion();
  } else {
      document.getElementById("quiz").innerHTML = `<h2>Thank you for playing!<br><br>Your Score: ${score}/${questions.length}</h2>`;
  }
}

// Initialize the first question
loadQuestion();
