# web-development-mini-project
This repository contains a Quiz Web App built using HTML, CSS, JavaScript. 
technologies used are as follow
1. HTML: Used to structure the web pages and content.
2. CSS: Used for styling and enhancing the visual appearance of the app.
3. JavaScript: Implemented the logic and interactivity of the quiz app.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
DESCRIPTION OF THE HTML CODE
This HTML code represents a simple web page for a quiz application. Here's a short description of the code:
<!DOCTYPE html>: This declaration specifies that the document is written in HTML5.
<html>: The opening tag for the HTML document.
<head>: The head section of the document, containing metadata and links to external resources.
<title>: Sets the title of the web page to "Quiz App," which appears in the browser tab.
<link rel="stylesheet" href="style.css">: Links an external CSS file named "style.css" to style the web page.
Internal <style> section: Defines some inline CSS styles for elements on the page, including setting the background color of the body to blue and custom styles for various elements like fonts, colors, and layout
<body>: The main content of the web page begins here.
<div class="sttyle">: A <div> element with the class "sttyle," which serves as a container for the quiz content. It has styling for a white background, padding, border-radius, and positioning.
<h1>: A heading displaying "Fun Quiz!!" inside the container.
<div class="fontp" id="quiz"></div>: An empty <div> element with the class "fontp" and the ID "quiz." This is likely where the quiz questions and options will be displayed.
<div id="result" class="result"></div>: An empty <div> element with the ID "result" and the class "result," presumably intended to display the quiz result.
<button> elements: Three buttons for user interaction - "Retry," "Submit," and "Show Answer."
<script src="SCRIIPTT.JS"></script>: Includes an external JavaScript file named "SCRIIPTT.JS," which is likely responsible for handling the quiz logic and user interactions.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
DESCRIPTION OF CSS CODE
This CSS code provides styling for a web page with a quiz. Here's a short explanation of the key styles:

body: Styles the body of the web page. It sets the font family to sans-serif, sets a background color, uses flexbox to vertically center content, sets a background image ("moon.jpg") with specific dimensions and centers it.
.containergs: Styles a container for the quiz content. It specifies a width, padding, margin, background color, box shadow, and border radius to create a card-like appearance.
h1: Styles the main heading. It centers the text, transforms it to uppercase, sets the color, font family, and font size.
.question: Styles the quiz questions. It sets the font weight, margin, font family, and font size.
.options: Styles the answer options. It adds margin, sets the color, and aligns text to the left.
.option: Styles individual answer options. It adds margin at the bottom.
.button: Styles buttons used for interactions. It defines padding, background color, text color, border, cursor, font size, border radius, and a hover effect to change the background color on hover.
.result: Styles the result message. It sets the text alignment, margin at the top, and makes the text bold.
.hide: This class is defined but not used in this code snippet. It can be used to hide elements by setting their display property to none.
Overall, this CSS code is responsible for the visual appearance of a quiz web page, including background, fonts, buttons, and layout. The HTML structure and functionality of the quiz are not shown in this CSS code but would be defined separately in the HTML and JavaScript portions of the web page.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
DESCRIPTION OG JAVASCRIPT CODE
This JavaScript code is for a quiz application. Here's a short explanation of its key functionalities:

quizData: An array of objects that stores quiz questions, answer options, and correct answers.
DOM element references: It retrieves various elements from the HTML document using their IDs, such as the quiz container, result container, submit button, retry button, and show answer button.
Variables: currentQuestion, score, and incorrectAnswers are used to keep track of the current question number, the user's score, and their incorrect answers.
shuffleArray function: This function shuffles the order of answer options within each question to make the quiz more random.
displayQuestion function: It dynamically creates and displays a quiz question along with shuffled answer options.
checkAnswer function: This function checks the selected answer, updates the score, records incorrect answers, and progresses to the next question.
displayResult function: Displays the user's score and hides the quiz questions and submit button when the quiz is completed. It also shows the retry button and show answer button.
retryQuiz function: Resets the quiz to its initial state, allowing the user to retake it.
showAnswer function: Displays the correct answers for the questions the user answered incorrectly.
Event listeners: These are added to the submit, retry, and show answer buttons to trigger the corresponding functions when clicked.
displayQuestion() is called initially to display the first question.

In summary, this JavaScript code handles the logic for a quiz application, including displaying questions, checking answers, calculating the score, and providing options to retry the quiz or reveal correct answers to incorrect questions. It interacts with the HTML structure and user interface elements to create a functional quiz experience.
