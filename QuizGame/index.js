let nikitaQuiz = [
  question1 = {
    question:"What is the capital of France? ", 
    options: [
      opt1 = {
        opt:"Paris",
        answer:"Correct",
      },
      opt2 = {
        opt:"Rome",
        answer:"Incorrect",
      },
      opt3 = {
        opt:"Berlin",
        answer:"Incorrect",
      },
      opt4 = {
        opt:"Madrid",
        answer:"Incorrect",
      },
    ]
  },
  question2 = {
      question:"Who painted the Mona Lisa?",
      options:[ 
        opt1 = {
          opt:"Leonardo da Vinci",
          answer:"Correct",
        },
        opt2 = {
          opt:"Pablo Picasso",
          answer:"Incorrect",
        },
        opt3 = {
          opt:"Michelangelo",
          answer:"Incorrect",
        },
        opt4 = {
          opt:"Vincent van Gogh",
          answer:"Incorrect",
        },
    ],
  },
  question3 = {
    question:"What is the chemical symbol for water?", 
    options: [
      opt1 = {
        opt:"H2O",
        answer:"Correct",
      },
      opt2 = {
        opt:"O2",
        answer:"Incorrect",
      },
      opt3 = {
        opt:"Wa",
        answer:"Incorrect",
      },
      opt4 = {
        opt:"HO",
        answer:"Incorrect",
      },
    ],
  },
  question4 = {
    question:"Which planet is known as the Red Planet?", 
    options:[
      opt1 = {
        opt:"Mars",
        answer:"Correct",
      },
      opt2 = {
        opt:"Venus",
        answer:"Incorrect",
      },
      opt3 = {
        opt:"Jupiter",
        answer:"Incorrect",
      },
      opt4 = {
        opt:"Saturn",
        answer:"Incorrect",
      },
    ]
  },
  question5 = {
    question:"What is the tallest mountain in the world?", 
    options:[
      opt1 = {
        opt:"Mount Everest",
        answer:"Correct",
      },
      opt2 = {
        opt:"Mount Kilimanjaro",
        answer:"Incorrect",
      },
      opt3 = {
        opt:"K2",
        answer:"Incorrect",
      },
      opt4 = {
        opt:"Mount McKinley",
        answer:"Incorrect",
      },
    ]
  },
  question6 = {
    question:"Who wrote 'To Kill a Mockingbird'?", 
    options:[
      opt1 = {
        opt:"Harper Lee",
        answer:"Correct",
      },
      opt2 = {
        opt:"J.K. Rowling",
        answer:"Incorrect",
      },
      opt3 = {
        opt:"Ernest Hemingway",
        answer:"Incorrect",
      },
      opt4 = {
        opt:"Mark Twain",
        answer:"Incorrect",
      },
    ]
  },
  question7 = {
    question:"What is the chemical symbol for gold?", 
    options:[
      opt1 = {
        opt:"Au",
        answer:"Correct",
      },
      opt2 = {
        opt:"Ag",
        answer:"Incorrect",
      },
      opt3 = {
        opt:"Gd",
        answer:"Incorrect",
      },
      opt4 = {
        opt:"Au2",
        answer:"Incorrect",
      },
    ]
  },
  question8 = {
    question:"In which year did the Titanic sink?", 
    options:[
      opt1 = {
        opt:"1912",
        answer:"Correct",
      },
      opt2 = {
        opt:"1920",
        answer:"Incorrect",
      },
      opt3 = {
        opt:"1905",
        answer:"Incorrect",
      },
      opt4 = {
        opt:"1915",
        answer:"Incorrect",
      },
    ]
  },
  question9 = {
    question:"What is the largest organ in the human body?", 
    options:[
      opt1 = {
        opt:"Skin",
        answer:"Correct",
      },
      opt2 = {
        opt:"Heart",
        answer:"Incorrect",
      },
      opt3 = {
        opt:"Liver",
        answer:"Incorrect",
      },
      opt4 = {
        opt:"Brain",
        answer:"Incorrect",
      },
    ]
  },
  question10 = {
    question:"Who wrote '1984'?", 
    options:[
      opt1 = {
        opt:"George Orwell ",
        answer:"Correct",
      },
      opt2 = {
        opt:"Aldous Huxley",
        answer:"Incorrect",
      },
      opt3 = {
        opt:"Scott Fitzgerald",
        answer:"Incorrect",
      },
      opt4 = {
        opt:"Ernest Hemingway",
        answer:"Incorrect",
      },
    ]
  },
];


let startBtn = document.querySelector(".start"); 
let quizContainer = document.querySelector(".quizContainer"); 
let allBtn = document.querySelectorAll(".optBtn");  
let textOptAll = document.querySelectorAll(".optText"); 
let h1Text = document.querySelector("h1"); 
let questionTracker = document.querySelector(".questionTracker"); 
let question = document.querySelector(".question"); 
let scoreContainer = document.querySelector(".scoreContainer");
let lastFiveGamesContainer = document.querySelector(".lastFiveGamesContainer"); 
let scoreBoardH2 = document.querySelector(".scoreBoardH2"); 
let scoreSection = document.querySelector(".scoreSection"); 

let questionStorage = []; 
let answerStorage = []; 
let valueStorage = []; 
let currentQuestion = ""; 
let startQuestion = 0; 
let totalAmountOfQuestions = nikitaQuiz.length; 
let btnPressed = "";  
let score = 0; 
let scoreStorage = []; 
let timeStorage = []; 

let savedScore = JSON.parse(localStorage.getItem("score")); 
let savedDate = JSON.parse(localStorage.getItem("date")); 



function getLast5Scores (){
  savedScore.forEach(x => scoreStorage.push(x)); 
  savedDate.forEach(x => timeStorage.push(x)); 
  console.log("ScoreStorage:" + scoreStorage ); 
  console.log( "timeStorage:" + timeStorage ); 
};

if(savedDate){
  getLast5Scores();
  checkStorage(); 
} else{
  console.log("there is no last session"); 
}


function playTheGame (){ 
  btnPressed = this;   
  if(btnPressed.value === "Correct"){   
    correctAnswer(); 
  }else{ 
    wrongAnswer(); 
  };
};

// if there is saved score in scoreStorage create a last five games board 

function checkStorage (){

  if( scoreStorage.length > 0 ){

    scoreBoardH2.style.display="block"; 
    lastFiveGamesContainer.style.display="grid"; 
    createLastFiveScores(); 
    createDateLastFiveScores(); 

  }
};

// function that takes you back to the start 
function backToStart (){
  scoreContainer.style.display="none"; 
  scoreSection.style.display="none"; 
  startBtn.style.display="inline-flex"; 
  h1Text.innerHTML = "QuizGame!"; 
  checkStorage(); 
};

// gives a date for when you finished the quiz 
function date (){
  let day = new Date().getDate(); 
  let month = new Date().getMonth() + 1; 
  let year = new Date().getFullYear();
  if(month <10){
    month =`0${new Date().getMonth() + 1}`; 
  }
  let date = `${day}.${month}.${year}`;  
  if( timeStorage.length == 5 ){
    timeStorage.reverse(); 
    timeStorage.pop(); 
    timeStorage.reverse(); 
    timeStorage.push(date); 
  }  else {
    timeStorage.push(date); 
  }
};

// save current session score in a storage 
function saveScore (){
  //delete the oldest value in the array and push in a new one when array.length == 5
  if(scoreStorage.length == 5){
    scoreStorage.reverse(); 
    scoreStorage.pop(); 
    scoreStorage.reverse(); 
    scoreStorage.push(`${score}/${totalAmountOfQuestions}`); 
  }else{
    scoreStorage.push(`${score}/${totalAmountOfQuestions}`); 
  }
}; 

function createLastFiveScores (){
  for (let i = 0; i<scoreStorage.length; i++){
    let p = document.createElement("p"); 
    p.innerHTML = scoreStorage[i] ; 
    p.classList.add("scoreBoardP"); 
    document.querySelector(".points").appendChild(p); 
  }
};

function createDateLastFiveScores (){
  for ( let i = 0; i < scoreStorage.length; i++ ){
    let p = document.createElement("p"); 
    p.innerHTML = timeStorage[i]; 
    p.classList.add("scoreBoardP"); 
    document.querySelector(".timeAgo").appendChild(p); 
  }
};



//push information to correct array
function keepTrackOfQuestion (){ 
 questionStorage.push(currentQuestion); 
  let idOfPressedBtn = btnPressed.getAttribute("id"); 
  let userAnswer = document.querySelector("#"+idOfPressedBtn).innerHTML;
  let optionValue = btnPressed.value; 
  valueStorage.push(optionValue); 
  answerStorage.push(userAnswer); 
};

// create the P elements for current game session. P elements include the order of question in current session 
function createUserQuestion (){ 
  let x = questionStorage.length-1;
  let p = document.createElement("p");
  p.innerHTML = questionStorage[x];
  p.classList.add("scoreText");
  document.querySelector(".questionContainer").appendChild(p);
  questionStorage.pop();
};



// create the board that shows result from current session

function createScoreBoard (){ 
  document.querySelector(".scoreContainer").style.display="grid"; 
  saveScore(); 
  date(); 
  localStorage.setItem("score",JSON.stringify(scoreStorage));
  localStorage.setItem("date",JSON.stringify(timeStorage)); 
   let createBoard = setInterval(animation,500);
   // decide the order the questions, options & values will show up in depending on condition 
   function animation (){ 
    if(valueStorage.length<1){
      document.querySelector(".scoreSection").style.display="flex";
      document.querySelector(".theScore").innerHTML = `${score}/${totalAmountOfQuestions}` 
      clearInterval(createBoard);
      console.log("done");
      setTimeout(backToStart,2000);
    }else if (questionStorage.length == answerStorage.length && answerStorage.length == valueStorage.length) {
      createUserQuestion();
    }else if (questionStorage.length < answerStorage.length && answerStorage.length == valueStorage.length){
      createUserAnswers();
    }else if (answerStorage.length < valueStorage.length) { 
      createValueOfAnswer();
    }
   }
};
// create the paragraphs that include the answers the user has given to x question this session 
function createUserAnswers (){ 
  let x = answerStorage.length-1;
  word = answerStorage[x];
  let p = document.createElement("p");
  p.innerHTML = answerStorage[x]; 
  p.classList.add("scoreText");
  document.querySelector(".answerContainer").appendChild(p);
  answerStorage.pop();
};
// create a paragraph that contains the value of the answers the user has given 
function createValueOfAnswer (){
  let x = valueStorage.length-1;
  word = valueStorage[x];
  let p = document.createElement("p");
  p.innerHTML = valueStorage[x];    
  document.querySelector(".valueContainer").appendChild(p);
  p.classList.add("scoreText");
  valueStorage.pop();
};
// what happens when there is no more questions
function stopGame (){
  quizContainer.style.display = "none";
  scoreContainer.style.display = "grid"; 
  h1Text.textContent = "Your Score!";
  questionStorage.reverse();
  valueStorage.reverse();
  answerStorage.reverse();
  createScoreBoard();
};
// keep track of current question user is on and when there is no more qustions 
function keepTrackOfGame (){
  questionTracker.innerHTML = startQuestion + 2 + "/" + totalAmountOfQuestions;
  if(startQuestion <  totalAmountOfQuestions - 1){
    startQuestion ++ 
    console.log(`We are on question: ${startQuestion}`);
  }else{
    stopGame();
  }
};

// chose the next question 
function chosenQuestion (){
  let theQuestion = nikitaQuiz[startQuestion].question 
  currentQuestion = theQuestion;
  question.textContent = theQuestion; 
};
// randomize the option of chosen question 
function randomizeOptions (){
  let options = nikitaQuiz[startQuestion].options;
  for(let i = options.length-1; i>0; i--){
    let j = Math.floor(Math.random()*(i+1));
    let k = options[i]; 
    options[i] = options[j];
    options[j] = k; 
  };
};

// randomize the questions 
function randomizeQuestions () {
  for(let i = nikitaQuiz.length -1 ; i>0; i--) {
    let j = Math.floor(Math.random()*(i+1));
    let k = nikitaQuiz[i]; 
    nikitaQuiz[i] = nikitaQuiz[j]; 
    nikitaQuiz[j] = k; 
  }
}

// create the option buttons
function createOptions () {
  let options = nikitaQuiz[startQuestion].options;
  // set the paragraphs abow the buttons to x option and give the button the value if the p abow is correct or incorrect 
  for (let i = 0; i <textOptAll.length; i++){ 
    textOptAll[i].innerHTML = options[i].opt;  
    allBtn[i].setAttribute("value",options[i].answer); 
    allBtn[i].addEventListener("click",playTheGame);
  };
};
// what happens when you chose the wrong answer 
function wrongAnswer (){
  //animation and sound for the wrong answers 
 setTimeout(function(){
  btnPressed.classList.toggle("optBtn")
  btnPressed.classList.toggle("wrongBtn");
  let audio = new Audio("sound/incorrect.mp3");
  audio.play();
 },100);
 // reverse the first function to create animation 
 setTimeout(function(){
  btnPressed.classList.toggle("optBtn")
  btnPressed.classList.toggle("wrongBtn")
  },400);
  // keep on with the game 
 setTimeout(function (){
    keepTrackOfQuestion();
    keepTrackOfGame();
    game();
 },500);
};
// what happens when user gives correct answer 
function correctAnswer (){
  score++
  // animation of correct answer 
  setTimeout(function(){
    btnPressed.classList.toggle("optBtn");
  btnPressed.classList.toggle("correctBtn");
    let audio = new Audio("sound/correct.mp3");
    audio.play();
   },100);
   // reverse last function so it becomes a animation 
   setTimeout(function(){
    btnPressed.classList.toggle("optBtn");
  btnPressed.classList.toggle("correctBtn");
  },400);
  // keep on with the game 
   setTimeout(function (){
      keepTrackOfQuestion();
      keepTrackOfGame();
      game();
   },500);
};

function game (){
  chosenQuestion();
  randomizeOptions();
  createOptions();
};

// start the game 
function start (){
  removeLastSession();
  randomizeQuestions();
  lastFiveGamesContainer.style.display="none";
  scoreBoardH2.style.display="none";
  document.querySelector(".scoreContainer").style.display="none"; 
  document.querySelector(".scoreSection").style.display="none";
  questionTracker.innerHTML = startQuestion + 1 + "/" + totalAmountOfQuestions;
  startBtn.style.display = "none";
  quizContainer.style.display = "grid";
  game();
};


// clear the last game session 
function removeLastSession (){
  questionStorage = [];
  answerStorage = [];
  valueStorage = [];
  currentQuestion = "";
  startQuestion = 0;  
  totalAmountOfQuestions = nikitaQuiz.length; 
  btnPressed = ""; 
  score = 0; 

  let questions = document.querySelector(".questionContainer");
  while (questions.hasChildNodes()) {
    questions.removeChild(questions.firstChild);
  }

  let answers = document.querySelector(".answerContainer");
  while (answers.hasChildNodes()) {
    answers.removeChild(answers.firstChild);
  }

  let values = document.querySelector(".valueContainer");
  while (values.hasChildNodes()) {
    values.removeChild(values.firstChild);
  }

  let points = document.querySelector(".points"); 
  while(points.hasChildNodes()){
    points.removeChild(points.firstChild); 
  }

  let time = document.querySelector(".timeAgo"); 
  while(time.hasChildNodes()){
    time.removeChild(time.firstChild); 
  }
}


