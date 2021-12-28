import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useState } from "react";
import { Error, Loading } from "../../components/index";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Questions } from "../../types/Futurama";

const QuestionsPage: NextPage = () => {
  const category = 'questions';
  const { data, error } = useFuturamaData(category);
  const [quizIdx, setQuizIdx] = useState(0);

  if (error) return <Error />
  if (!data) return <Loading />
  
  function choiceButtonHandler(e: React.MouseEvent<HTMLElement>, choice: string){
    const clickedBtn= e.target;

    if(choice == data[quizIdx].correctAnswer){
      alert('Correct!!!');
      setQuizIdx(quizIdx + 1);

      // if(quizIdx == data.length - 1){
      if(quizIdx == 1){
        const resultCont = document.querySelector('.cont-result');
        setQuizIdx(0);
      }
    } else{
      alert('Umm..try again!');
    }
  }

  return (
    <div>
      <Title>{category.toUpperCase()}</Title>
      <div>
        <QuizTxt>Let&apos;s start with a Quiz!</QuizTxt>
        <ProgressBox>
          <div style={{width: `${(quizIdx+1)/data.length * 100}%`}}></div>
        </ProgressBox>
        <ProgressTxt>{quizIdx+1}/{data.length}</ProgressTxt>
        <Card>
          <p>{quizIdx+1}. {data[quizIdx].question}</p>
          <ChoiceContainer>
          {
            data[quizIdx].possibleAnswers.map((choice: string, index: number) => {
              return (
                  <button 
                    key={`${category}-${data.id}-${index + 1}`}
                    type="button" 
                    className="choiceBtn"
                    onClick={(e) => choiceButtonHandler(e, choice)}>
                    {index + 1}. {choice}
                  </button>
              );
            })
          }
          </ChoiceContainer>
        </Card>
      </div>

    </div>
  );
}

export default QuestionsPage;


const Title = styled.h2`
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0.3em;
  font-size: 1.8em;
  text-align: left;
  background-color: #b01317;
  color: white;
`

const ProgressBox = styled.div`
  margin: 0 auto;
  background-color: rgb(233, 233, 233);
  border-radius: .5rem;
  width: 70%;

  div {
    background-color: rgb(62, 122, 235);
    height: 10px;
    border-radius: 1rem;
  }
`

const ProgressTxt = styled.p`
  display: block;
  text-align: center;
`
const Card = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: .5em;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);

  p:first-of-type {
    font-size: 1.3em;
    display: block;
    font-weight: bold;
    padding-bottom: 1em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`

const QuizTxt = styled.h3`
  text-align: center;

`
const ChoiceContainer = styled.div`
  display: inline-block;
  margin: 0 auto;

  button {
    display: block;
    font-size: 1em;
    line-height: 2em;
    cursor: pointer;
  }
`