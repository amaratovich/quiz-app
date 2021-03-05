class Quiz {
    constructor(questions) {
        this.score = 0; // счетчик
        this.questions = questions; // список вопросов, суроолордун тизмеги
        this.questionIndex = 0
    }
    getQuestionIndex = () => {
        return this.questions[this.questionIndex]
    }
    isEnded = () => {
        return this.questions.length === this.questionIndex
    }

    guess = (answer) => {
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++
        }
        this.questionIndex++
    }
}