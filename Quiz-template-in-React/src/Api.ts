import { shuffleArray } from "./utitles"; // to shuffle the options 

// this is the data type of the data which is being fetch 
export type Questions = {
    category: string ,
    correct_answer: string,
    incorrect_answers: string[],
    question: string ,
    type: string
}


// this is the data type of array answer which we created using the spread operator below
export type QuestionState = Questions & {answer: string[]}


export const fetchApiData = async(amount: number )=>{
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=hard&type=multiple`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.results)
    return data.results.map((item: Questions)=>(
       (
            {...item , 
            answer: shuffleArray([...item.incorrect_answers , item.correct_answer]) 
        } )
        
    )
    )
    }


