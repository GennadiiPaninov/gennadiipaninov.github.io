import style from './Tests.module.css';
import {  useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';




const Tests = () => {
  const [count, setCount] = useState(0);
  const [countScore, setCountScore] = useState(0);
  const [counttestConteiner, setcounttestConteiner] = useState(0)
  const params = useParams();
  const current = params.id;
    

   const testName = useSelector(state => state.test.testName)
  
  const nextQuestion = () => count < lengthQuest - 1  ? setCount (count + 1)  : setCount (count + 0);
  const counttestConteinerVar = () => setcounttestConteiner(counttestConteiner + 1)
  

  const buttonResponseMap = testName[current].questionScore[count].response.map(el=>(<>
    <Button  key={el.key} className={style.buttonResponse} variant="outline-success" onClick={()=>{nextQuestion(); counttestConteinerVar();  
    setCountScore(countScore + el.score)  
    }}>{el.responseOne}</Button>  
  </>))

const lengthQuest = testName[current].questionScore.length 


  return <div className={style.MainPage}>
    <div className={style.TestsConteiner}>    
    {counttestConteiner  < lengthQuest   ?   <>
    <h2>{testName[current].questionScore[count].question}</h2> 
    <div className={style.butConteiner}> {buttonResponseMap}</div>
   
    </> : <>
    <h2>Заключение:</h2>
    <p>Вы набрали: {countScore} баллов.</p>
    {testName[current].conclusionItemScore.scoreThree ? 
    
    countScore < testName[current].conclusionItemScore.scoreOne  ? <p>{testName[current].conclusionItemScore.conclusionOne}</p> : 
    countScore > testName[current].conclusionItemScore.scoreOne && countScore < testName[current].conclusionItemScore.scoreTwo ? <p>{testName[current].conclusionItemScore.conclusionTwo}</p> : 
    countScore > testName[current].conclusionItemScore.scoreTwo && countScore < testName[current].conclusionItemScore.scoreThree ? <p>{testName[current].conclusionItemScore.conclusionThree}</p> :
    <p>{testName[current].conclusionItemScore.conclusionFour}</p> :
    
    
    countScore < testName[current].conclusionItemScore.scoreOne  ? <p>{testName[current].conclusionItemScore.conclusionOne}</p> : 
    countScore > testName[current].conclusionItemScore.scoreOne && countScore < testName[current].conclusionItemScore.scoreTwo ? <p>{testName[current].conclusionItemScore.conclusionTwo}</p> : 
    <p>{testName[current].conclusionItemScore.conclusionThree}</p>

    }
       
    </>} 
      
      </div>
       
  </div>
}

export default Tests;
