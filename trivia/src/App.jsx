import { useState, useEffect, useMemo } from 'react';
import './App.css';
import Trivia from './commponet/Trivia';
import { data } from './commponet/Data'
import CountDown from './commponet/CountDown';
import Wellcome from './commponet/Wellcome';





function App() {

  const [questNumber , setQuestNumber ] = useState (1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [username ,setUsername] = useState(null);
  
 
 
   const moneyPyrimind = useMemo(() => 
    [
      {id : 1 , amount : "$   100"},
      {id : 2 , amount : "$   200"},
      {id : 3 , amount : "$   300"},
      {id : 4 , amount : "$   500"},
      {id : 5 , amount : "$   1000"},
      {id : 6 , amount : "$   2000"},
      {id : 7 , amount : "$   4000"},
      {id : 8 , amount : "$   8000"},
      {id : 9 , amount : "$   1600"},
      {id : 10 , amount : "$ 3200"},
      {id : 11 , amount : "$ 6400"},
      {id : 12 , amount : "$ 12500"},
      {id : 13 , amount : "$ 25000"},
      {id : 14 , amount : "$ 50000"},
      {id : 15 , amount : "$ 100000"},
    ].reverse(),
   []) 

   
  
   

   useEffect(() => {
      questNumber > 1 && setEarned(moneyPyrimind.find((m)=>m.id === questNumber -1).amount)
    
   }, [moneyPyrimind, questNumber])
   

  return (
    <div className="App"> 
    
    { username ? (
      <>
      {
        stop ? <h2 className="earned">{username } You earned : { earned }</h2> :(
      <>
        <div className="main">
           <div className="top">
           <div className="timer">
             <div className="startime">
                <CountDown setStop={setStop} questNumber={questNumber} />
             </div> 
            </div>  
           </div>
           <div className="bottom"> 
            <Trivia data = {data} questNumber ={questNumber}
              setQuestNumber= {setQuestNumber} setStop={setStop} username={username}/>
           </div>
        </div>
       <div className="pyramind"> 
         <ul className='moneyList'>
            {moneyPyrimind.map((m)=> (
             <li className= {questNumber === m.id ? "moneyList active" : "monetList"} id= {m.id}>
              <span className='moneyListNumber'> {m.id}</span>
               <span className='moneyListamount'> {m.amount}</span>
             </li>
         ))}
          </ul> 
       </div>

      </>        
       )} 
      </> 
    ) : <Wellcome setUsername={setUsername} />
      
    }
    </div>
  );
}

export default App;
