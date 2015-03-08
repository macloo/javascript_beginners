// adapted from 
// http://www.javascriptsource.com/miscellaneous/basic-javascript-quiz.html

// insert your number of questions
var numQues = 4;

// insert your number of choices in each question
var numChoi = 3;

var answers = new Array();
var answerstext = new Array();

// insert values of correct answers - be careful about the order 
answers.push("cascading");
answers.push("ul_ol_dl");
answers.push("nav");
answers.push("carpet");

// insert full correct answers to questions - be careful about the order 
answerstext.push("Cascading Style Sheets");
answerstext.push("UL, OL, DL");
answerstext.push("nav, article, footer, section");
answerstext.push("Java and Javascript are similar like Car and Carpet are similar.");

// do not change anything below ...
// this function checks all the answers and calculates the score
function getScore(form) {
  var score = 0;
  var currElt; // current element 
  var currSelection;
  for (i=0; i < numQues; i++) {
    currElt = i * numChoi;
    for (j=0; j < numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  score = Math.round(score/numQues*100);
  form.percentage.value = score + "%";
  
  var correctAnswers = "";
  for (i=1; i <= numQues; i++) {
    correctAnswers += i + ". " + answerstext[i-1] + "\n";
  }
  form.solutions.value = correctAnswers;
}
