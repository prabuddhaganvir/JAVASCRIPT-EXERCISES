const questions = [
    {
        question :"What is the Full form of HTML?",
        answers:[
            {text:"A. Hyper Text Mockup language",correct:true},
            {text:"B. High Text Modern language", correct:false},
            {text:"C. Hige Text Medium language",correct:false},
            {text:"D.High Text Medium level", correct:false},
        ]
    },
    {
        question :"What is the Main function of HTML?",
        answers:[
            {text:"A. Structure & Layout Designing ",correct:true},
            {text:"B. Color Grading", correct:false},
            {text:"C. Working of Web Page",correct:false},
            {text:"D. Creating Videos ", correct:false},
        ]

    },
    {
        question :"How To Draw line In HTML?",
        answers:[
            {text:"A. By br tag",correct:false},
            {text:"B. By hr tag ", correct:true},
            {text:"C. By ul tag",correct:false},
            {text:"D. By line tag", correct:false},
        ]

    },
    {
        question :"What is the Value of PI?",
        answers:[
            {text:"A. 3.20",correct:false},
            {text:"B. 3.12", correct:false},
            {text:"C. 3.5",correct:false},
            {text:"D. 3.14", correct:true},
        ]

    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next"
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);

    });
}
function resetState() {
    nextBtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;

    });
    nextBtn.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your Score ${score} of ${
        questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block"
}

function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz();
    }
})

startQuiz();