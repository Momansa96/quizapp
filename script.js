const starBtn = document.querySelector('.start_btn');
const popupinfo = document.querySelector('.popup_info');
const exitBtn = document.querySelector('.exit_btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue_btn');
const quizsection = document.querySelector('.quiz_section');
const quizBox = document.querySelector('.quizbox');
const resultBox = document.querySelector('.result_box');
const tryagain = document.querySelector('.tryagain_btn');
const goToHome = document.querySelector('.home_btn');
const optionList = document.querySelector('.option_list');
const nextBtn = document.querySelector('.next_btn');

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

// Demerrage du jeu
starBtn.onclick = () => {
    popupinfo.classList.add('active');
    main.classList.add('active');
}

// Annuler demarrage du jeu
exitBtn.onclick = () => {
    popupinfo.classList.remove('active');
    main.classList.remove('active');
}

//Demarrage de la section quiz
continueBtn.onclick = () => {
    quizsection.classList.add('active');
    popupinfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    showQuestions(0);   
    questionCounter(1);
    headerScore();
}

//Gestion de l'option reesayer du quiz
tryagain.onclick = () => {
    quizBox.classList.add('active');
    resultBox.classList.remove('active');
    nextBtn.classList.add('active');


    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();
}

//Retour au demarrage du quiz
goToHome.onclick = () => {
    quizsection.classList.remove('active');
    resultBox.classList.remove('active');
    nextBtn.classList.remove('active');

    //Reinitialisation des compteurs
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;

    showQuestions(questionCount);
    questionCounter(questionNumb);
}

//Gestion du passage des etapes de questions
nextBtn.onclick = () => {
    if (questionCount< questions.length-1){
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);
        nextBtn.classList.remove('active');
    } else {
        showResultbox();
    }
     
 }



//Gestion des questions et choix de reponse
function showQuestions(index) {
    const questionText = document.querySelector('.question_text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`
    ;
    let optionTag = `
        <div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>
    `;
    optionList.innerHTML = optionTag;


    const option = document.querySelectorAll('.option')
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

//Gestion de l'option selectionner par l'utilsateur
//answer est la reponse a la question dans l'objet questions(questions.js)
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;
    
    //verification de reponse et controle de choix
    if (userAnswer == correctAnswer){
        answer.classList.add('correcte');
        userScore += 1;
        headerScore();
    }else {
        answer.classList.add('incorrecte');
        for(let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer ) {
                optionList.children[i].setAttribute('class', 'option correcte')
            }
        }
    }
    //desactivation des choix apres selection d'une reponse
    for(let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
}

//Compteur de question 
function questionCounter (index){
    const questionTotal = document.querySelector('.question_total');
    questionTotal.textContent = `${index} sur ${questions.length} Questions`
}

//Compteur de score 
function headerScore() {
    const headerScoretext = document.querySelector('.header_score');
    headerScoretext.textContent = `Score: ${userScore} / ${questions.length}`;
}

//Section des resultats
function showResultbox () {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');
    const scoreText = document.querySelector('.score_text');
    scoreText.textContent = `Vous avez ${userScore} sur ${questions.length}`;

    const circularprogress = document.querySelector('.circilar_progress');
    const progressvalue = document.querySelector('.progress_value');

    let progressStartValue = -1;
    let progressEndValue = parseInt((userScore / questions.length) * 100);
    let speed = 20;
    
    let progress = setInterval (() => {
        progressStartValue++;
        progressvalue.textContent = `${progressStartValue}%`;
        circularprogress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, 0.1) 0deg)`
        if (progressStartValue == progressEndValue){
            clearInterval(progress);
        }
        
    },speed);

    if (progressEndValue < 50){
        resultBox.style.background = `url('img/lose.jpg') no-repeat center/cover`;
    }else {
        resultBox.style.background = `url(img/success.jpg) no-repeat center/cover`;
    }
}