import styled from "styled-components";

// this the datatype of button prop which is coming from the questioCard
type ButtonWrapperProps = {
    correct: boolean , 
    userClicked: boolean
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    button{
        width: 30rem;
        margin: 0.2rem 0 0.2rem 0;
        padding: 0.5rem 0 0.5rem 0;
        border-style: none;
        color: #fff;
        border-radius: 10px;
        background: ${({ correct, userClicked }) =>
        correct
          ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
          : !correct && userClicked
          ? 'linear-gradient(90deg, #FF5656, #C16868)'
          : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
    } 

    button:hover{
        cursor: pointer;
        opacity: 0.8;
    }

    @media screen and (max-width: 800px){
        button{
            width: 20rem;
            background: ${({ correct, userClicked }) =>
        correct
          ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
          : !correct && userClicked
          ? 'linear-gradient(90deg, #FF5656, #C16868)'
          : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
        }
    }

` 
