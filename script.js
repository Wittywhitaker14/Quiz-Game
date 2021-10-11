// Setting up the variables
var timerEl = document.getElementById('countdown')
var startBtn = document.getElementById('start-btn')
var nextBtn = document.getElementById('next-btn')
var quiz = document.getElementById('quiz')
var questionContainerEl = document.getElementById('question-container')
var shuffleQuestions, currentQuestion
var questionEl = document.getElementById('question')
var answerEl = document.getElementById('answer-btns')

startBtn.addEventListener('click', startQuiz)
nextBtn.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

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
            timerEl.textContent = 'Timer: 0';
            clearInterval(timeInterval);
        }
    }, 1000);
}

function nextQuestion () {
    reset()
    showQuestion(shuffleQuestions[currentQuestion])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answer.forEach(answer => {
       var button = document.createElement('button') 
       button.innerText = answer.text
       button.classList.add('btn')
       if (answer.correct) {
           button.dataset.correct = answer.correct
       }
       button.addEventListener('click', answer)
       answerEl.appendChild(button)
    });
}

function reset() {
    nextBtn.classList.remove('hide')
    while (answerEl.firstChild){
        answerEl.removeChild(answerEl.firstChild)
    }
}

function answer (e) {
    var selectedBtn = e.tartget
    var correct = selectedBtn.dataset.correct
    statusClass(document.body, correct)
    Array.from(answerEl.children).forEach(button => {
        statusClass(button, button.dataset.correct)
    })
    if(shuffleQuestions.length > currentQuestion + 1) {
    nextBtn.classList.remove('hide')
    } else {''
        
    }
}

// The Questions

var questions = [
    {
        question: '1: Arrays in javascript could be used to store...',
        answer: [
            {text: 'Numbers and Strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'Other Arrays', correct: false},
            {text: 'All the Above', correct: true} 
        ]
    },
    {
        question: '2: Arrays in javascript could be used to store...',
        answer: [
            {text: 'Numbers and Strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'Other Arrays', correct: false},
            {text: 'All the Above', correct: true} 
        ]
    },
    {
        question: '3: Arrays in javascript could be used to store...',
        answer: [
            {text: 'Numbers and Strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'Other Arrays', correct: false},
            {text: 'All the Above', correct: true} 
        ]
    },
    {
        question: '4: Arrays in javascript could be used to store...',
        answer: [
            {text: 'Numbers and Strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'Other Arrays', correct: false},
            {text: 'All the Above', correct: true} 
        ]
    },
    {
        question: '5: Arrays in javascript could be used to store...',
        answer: [
            {text: 'Numbers and Strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'Other Arrays', correct: false},
            {text: 'All the Above', correct: true} 
        ]
    },
    {
        question: '6: Arrays in javascript could be used to store...',
        answer: [
            {text: 'Numbers and Strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'Other Arrays', correct: false},
            {text: 'All the Above', correct: true} 
        ]
    },
    {
        question: '7: Arrays in javascript could be used to store...',
        answer: [
            {text: 'Numbers and Strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'Other Arrays', correct: false},
            {text: 'All the Above', correct: true} 
        ]
    },
    {
        question: '8: Arrays in javascript could be used to store...',
        answer: [
            {text: 'Numbers and Strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'Other Arrays', correct: false},
            {text: 'All the Above', correct: true} 
        ]
    },
    {
        question: '9: Arrays in javascript could be used to store...',
        answer: [
            {text: 'Numbers and Strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'Other Arrays', correct: false},
            {text: 'All the Above', correct: true} 
        ]
    },
    {
        question: '10: Arrays in javascript could be used to store...',
        answer: [
            {text: 'Numbers and Strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'Other Arrays', correct: false},
            {text: 'All the Above', correct: true} 
        ]
    },
]