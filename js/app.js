function populate() {
  if (quiz.isEnded()) {
    console.log("Game over");
    showScores();
  } else {
    let element = document.getElementById("questions");
    element.innerHTML = quiz.getQuestionIndex().text;

    let choices = quiz.getQuestionIndex().choices;
    choices.map((el, id) => {
      let element = document.getElementById("choice" + id);
      element.innerHTML = choices[id];
      guess("btn" + id, choices[id]);
    });
    showProgress();
  }
}

function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}

function showScores() {
  let gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += '<h2 is="score"> Your Score: ' + quiz.score + "</h2>";
  let element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

let questions = [
  new Question("Сколько будет 2+2", ["4", "5", "6", "3"], "4"),
  new Question("Сколько будет 3+2", ["4", "5", "6", "3"], "5"),
  new Question("Сколько будет 4+2", ["4", "5", "6", "7"], "6"),
  new Question("Сколько будет 5+2", ["4", "5", "6", "7"], "7"),
  new Question("Сколько будет 8+2", ["4", "5", "6", "10"], "10"),
];

let quiz = new Quiz(questions);

populate();
