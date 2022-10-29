import React, { useState } from 'react';
import { fetchApiData } from './Api';
import { QuestionCards } from './components/QuestionCards';
import { QuestionState } from './Api'; // datatype of the fetch data and the answer array which we created
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './App.css';
const TOTAL_QUESTION = 10;

// defining the data types of userAnswer object
export type answerObject = {
  question: string; 
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {

  const [loading, setloading] = useState(false);
  const [questions, setquestions] = useState<QuestionState[]>([])
  const [number, setnumber] = useState(0);
  const [userAnswers, setuserAnswers] = useState<answerObject[]>([]);
  const [score, setscore] = useState(0);
  const [gameOver, setgameOver] = useState(true);
  const [colorHandler, setcolorHandler] = useState("")
 

  const startTrivia = async ()=>{
    console.log("click");
      // on first rendering the loading is true so it can show the progress bar until  the data is fethcing
      setloading(true);
      //game over is false because we did not start the quiz
      setgameOver(false);
      // saving the fetch data in the newQuestion variable
      const newQuestion = await fetchApiData(TOTAL_QUESTION);
      setquestions(newQuestion)
      setuserAnswers([]);
      setnumber(0);
      setscore(0);
      //after the has been fetch we false the loading to hide the progress bar
      setloading(false);
      setgameOver(false);
  }
  //this function will check the user clicked answer
  const checkAnswer =  (e: any)=>{
    //getting the exact answer where the user click in the option
      const answer = e.currentTarget.value;
      console.log(answer);
      const correct = questions[number].correct_answer === answer;
      //if its correct inrement the score
      if(correct){
        setscore((prev)=> prev + 1)
  
      }   
      //saving the user data during the quiz in the object    
      const answerObject = {
        question: questions[number].question , // this is the question from 1 to end
        answer, // answer the user cliked
        correct, // false or true
        correctAnswer: questions[number].correct_answer, // getting the correct answer in string
      }
      setuserAnswers((prev)=> [...prev , answerObject]) // adding the two array 1. empty array and the array of object from the answer object using spread operator so we can send this data as a prop into the another component
  }

  const nextQuestion = ()=>{
    // it will show the next question until all the question is display and keep the side bug free
    const nextQ = number + 1;
    if(nextQ === TOTAL_QUESTION){
      setgameOver(true);
    }
    else{
      setnumber(nextQ);
    }
  }

  return (
    <div className="App">
      {/* <GlobalStyle/> */}
      <div className="container">
        <div className="logo"><img src="quiz-logo.png  " alt="hello" className="logo" /></div>
        {/* conditional rendering  if game is over means the game is not start yet show this*/}
        {gameOver || userAnswers.length === TOTAL_QUESTION ? (<button onClick={startTrivia} className="start">Start</button>): null}
        <p className="score">Score {score}</p>
        {/* if loading is true show this  */}
        {loading ? (<Box  sx={{ display: 'flex' }}> <CircularProgress /></Box>) : null}
        {/* when loading is done and game is not over show this  */}
        {!loading && !gameOver && (
          <div>

          {/* passing the props to the questioncard  */}
          <QuestionCards 
          questionNo = {number}
          question= {questions[number].question}
          answer = {questions[number].answer}
          // it can be undefined in first load after the user interact with the button it load the data 
          userAnswer = {userAnswers ? userAnswers[number]: undefined} 
          totalQuestion= {TOTAL_QUESTION}
          callback={checkAnswer}/>
          <button className="next" onClick={nextQuestion}>Next Question</button>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default App;
