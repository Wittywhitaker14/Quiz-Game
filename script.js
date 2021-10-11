// Setting up the variables
var timerEl = document.getElementById('countdown')
var startBtn = document.getElementById('start-btn')
var quiz = document.getElementById('quiz')
var questionContainerEl = document.getElementById('question-container')
var shuffleQuestions, currentQuestion


startBtn.addEventListener('click', startQuiz)

// The Functions

function quizText() {
    quiz.classList.remove('hide')
}
quizText();

function startQuiz () {
    startBtn.classList.add('hide')
    quiz.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    countdown();
    nextQuestion()
}

function countdown() {
    var timeLeft = 90;
    var timeInterval = setInterval(function(){
        if (timeLeft > 0) {
            timerEl.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}

function nextQuestion () {

}

function answer () {

}

// The Questions

var questions = [
    {
        question: '',
        answer: [
            {text:'', correct: true}, 
            {text: '', correct: false}
        ]
    }
]