import  { useEffect, useState } from 'react'

export default function ({setStop, questNumber}) {

   const [delay, setDelay] = useState(30)
    

   useEffect(()=>{
    if (delay === 0) setStop(true);

     const interval = setInterval(() => {
       setDelay((prev) => prev - 1);
     }, 1000);
     return () => clearInterval(interval);
   },[setStop, delay]);
    
   useEffect(() => {

     setDelay(30)   
   }, [questNumber])
   
  return delay;
}
