window.onload = function () {
    quiz.init();
};

class Quiz {
    questions = [
        { q: "Ile to jest 10 / 2?", answers: ["4", "5", "4,5"], correctAnswerNum: 1 },
        { q: "Ile to jest 16 + 2?", answers: ["18", "16", "20"], correctAnswerNum: 0 },
        { q: "Ile to jest 8 * 2?", answers: ["18", "10", "16"], correctAnswerNum: 2 },

    ];

    currentQuestionIndex = -1;
    heading = null;
    questionParagraph = null;
    answer0 = null;
    answer1 = null;
    answer2 = null;
    correctAnswerNum = null;

    userSelectedInput = null;
    userCorrectAnswersNum = 0;
    userBadAnswersNum = 0;
    saveAnswerButton = null;
    nextQuestionButton = null;

    init() {
        this.heading = document.querySelector(".alert-heading");
        this.answer0 = document.querySelector("#answer0");
        this.answer1 = document.querySelector("#answer1");
        this.answer2 = document.querySelector("#answer2");
        this.questionParagraph = document.querySelector("#questionParagraph");

        this.saveAnswerButton = document.querySelector("#saveAnswerButton");
        this.nextQuestionButton = document.querySelector("#nextQuestionButton");

        this.setNextQuestionData();

        this.saveAnswerButton.addEventListener("click", this.checkAnswer);
        this.nextQuestionButton.addEventListener("click", this.setNextQuestionData);

    }

    checkAnswer = () => {

    }

    setNextQuestionData = () => {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex >= this.questions.length) {
            console.log("Koniec Quizu");
            return;
        }

        const question = this.questions[this.currentQuestionIndex];
        const qStr = `Pytanie ${this.currentQuestionIndex + 1}
        z ${this.questions.length}: `;
        this.heading.innerHTML = qStr + question.q;
        this.answer0.innerHTML = question.answers[0];
        this.answer1.innerHTML = question.answers[1];
        this.answer2.innerHTML = question.answers[2];
        this.correctAnswerNum = question.correctAnswerNum;



    }
};

const quiz = new Quiz();



