import React from 'react'
import { answerObject } from '../App';
import {ButtonWrapper} from './QuestionsStyle';

// this is the data type of props which is coming from the APP component 
type Props = {
    question: string,
    answer: string[],
    callback: any,
    userAnswer: answerObject | undefined,
    questionNo: number,
    totalQuestion: number,
}

export const QuestionCards: React.FC<Props> = ({question, answer , callback ,userAnswer , questionNo , totalQuestion }) => {
    return ( 
       <>
            <h3>Question:{questionNo}/{totalQuestion}</h3>
            <div className="questions">{question}</div>
            {answer.map((item)=> (
            
            <ButtonWrapper
            // to changed the color of the option after the user click 
                correct = {userAnswer?.correctAnswer === item}
                userClicked = {userAnswer?.answer === item}
                key = {item}
                className="buttons"
            >
            <button disabled={userAnswer ? true : false} value={item}  onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </button>
          </ButtonWrapper>
        
            ))}
       </>
    )
}
