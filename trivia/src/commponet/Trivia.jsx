import './trivia.css'
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import start from '../assert/sounds/start.mp3';
import win from '../assert/sounds/win100.mp3';
import lose from '../assert/sounds/Lose.mp3';




function Trivia({data , questNumber, setQuestNumber, setStop}) {

  const [ question , setQuestion] = useState (null)
  const [selectedAnswer , setSelectedAnswer] = useState (null)
  const [className, setClassName] = useState("answer")
  const [disable, setDisable] = useState(false)
  const [letStart] = useSound(start);
  const [youWin] = useSound(win);
  const [youLose] = useSound(lose);
  


  useEffect(() => {

    letStart();
   }, [letStart])



  useEffect(() => {
    
      setQuestion(data[questNumber -  1])
  }, [data, questNumber])

  const delay = (duration, callback) =>{
      
    setTimeout(() => {
       callback();
    }, duration);
  };

  const handleClick = (a)=>{
       setSelectedAnswer(a);
       setClassName("answer active");

        delay(3000, ()=> setClassName(a.correct ? "answer correct" : "answer wrong"));
        
        delay(6000, ()=> { 
          if ( a.correct ) {
             youWin();
             delay(1000, ()=> {
             setQuestNumber((prev)=> prev + 1)
             setSelectedAnswer(null)
          })
          }else{
            delay(3000, ()=>{
              setStop(true)
              youLose();
            })
          }
        });
  }  

  return (
    <>
    <div className="trivia">
      
      <div className="question"> {question?.question} </div>
      <div className="answers"  >
      {
        question?.answers.map((a)=>(
          <div  className ={selectedAnswer === a ? className : "answer"}
             onClick={() =>handleClick(a)} id= {a.i}> {a.text} </div>
        ))
      }
      </div>
    </div>
    </>
  )
}

export default Trivia