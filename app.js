// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';

// HTML Nodes, HTML Elements -- don't treat these as strings or numbers!
const quizButton = document.getElementById('quiz-button');
const secretDiv = document.getElementById('secret-div');

// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {

    // Initial alerts to start quiz //
    
    alert('Allons-y! Welcome to the official Dr.Who quiz!');

    const confirmation = confirm('Would you like to proceed?');
    
    if (!confirmation) return;

    alert('Well then, come along pond!');

    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');

    const dontBlink = confirm('Remember: Dont Blink!');

    if (!dontBlink) return;
    

    // Questions that count for points! //

    let correctAnswers = 0;
    
    const firstQuestion = prompt('Did the first episode of Doctor Who air on 1993?');
    
    if (!countsAsAYes(firstQuestion)) correctAnswers++;

    const secondQuestion = prompt('Does TARDIS stand for "Time and Relative Dimension in Space"?');

    if (countsAsAYes(secondQuestion)) correctAnswers++;

    const thirdQuestion = prompt('Was the doctor born on the planet of Skaro?');

    if (!countsAsAYes(thirdQuestion)) correctAnswers++;

    const fourthQuestion = prompt('Are bowties cool?');

    if (countsAsAYes(fourthQuestion)) correctAnswers++;

    const resultsString = `FANTASTIC ${firstName} ${lastName}! You got ${correctAnswers} correct!`;

    secretDiv.textContent = resultsString;
});

