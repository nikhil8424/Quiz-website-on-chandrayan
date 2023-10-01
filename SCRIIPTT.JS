const quizData = [
  {
    question: 'What is the launch date for Chandrayaan 3 mission?',
    options: ['24 July 2023','14 July 2023',' 13 July 2023',' 04 July 2023'],
    answer: '14 July 2023',
  },
  {
    question: 'The Chandrayaan 3 mission rover is known as?',
    options: ['Vikram',' Bheem',' Pragyaan',' Dhruv'],
    answer: 'Pragyaan',
  },
  {
    question: 'The mission life of the Lander and rover equal to?',
    options: ['14 Earth Days','24 Earth Days','16 Earth Days','12 Earth Days'],
    answer: '14 Earth Days',
  },
  {
    question: 'Which launcher is used for Chandrayaan 3?',
    options: ['GSLV','LVSM','GSLV-Mk3','PSLV'],
    answer: 'GSLV-Mk3',
  },
  {
    question: 'The mission objectives of Chandrayaan 3?',
    options: [
      'To demonstrate Rover roving on the moon',
'To demonstrate a Safe and Soft Landing on Lunar Surface',
'To conduct in-situ scientific experiments',
'All of the above'],
    answer: 'All of the above',
  },
  {
    question: 'How much did the Chandrayaan 3 mission cost?',
    options: ['1200 Crores','960 Crores','600 Crores','540 Crores'],
    answer: '600 Crores',
  },
  {
    question: 'What is that one thing in Chandrayaan-3 and not in Chandrayaan-2?',
    options: ['Laser Doppler Velocimeter (LDV)','Laser-based Interferometry','Ultrasonic Doppler methods','Molecular Tagging Velocimetry'],
    answer: 'Laser Doppler Velocimeter (LDV)',
  },
  {
    question: 'Which of the following is missing in Chandrayaan-3?',
    options: ['Rover','Lander','Orbiter','None of the above'],
    answer: 'Orbiter',
  },
  {
    question: 'Who is director of the Chandrayaan-3 mission?',
    options: [
      'Veeramuthuvel','M Vanitha','Ritu Karidhal','K. Sivan'],
    answer: 'Ritu Karidhal',
  },
  {
    question: 'Where will Chandrayaan-3 land on the moon?',
    options: ['Near the South Pole','Near the North Pole','In the equatorial region','None of the above'],
    answer: 'Near the South Pole',
  },
{
    question: '. Which country is the fourth country to successfully land a spacecraft on the moon?',
    options: ['China','India','Russia','USA'],
    answer: 'India',
  },
{
    question: 'Aditya L1 mission will observe?',
    options: ['Photosphere','Chromosphere','Outermost layers of the Sun','All of the above'],
    answer: 'Outermost layers of the Sun',
  },
{
    question: 'What is Aditya L1 mission ?',
    options: ['First Indian mission to study Sun','ISRO mission to study stars','Another mission to study the moon','Mission to understand the orbit'],
    answer: 'First Indian mission to study Sun',
  },
{
    question: 'How long the spacecraft will travel under the Aditya L1 mission?',
    options: ['3.5 million kilometres','4.5 million kilometres','2.1 million kilometres','1.5 million kilometres'],
    answer: '1.5 million kilometres',
  },
{
    question: 'How much time Aditya L1 will take to reach the sun?',
    options: ['3 Months','2 Months','4 Months','5 Months'],
    answer: '4 Months',
  },

];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();

