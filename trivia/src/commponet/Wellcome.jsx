import  { useRef } from 'react'
import './Wellcome.css'

export default function Wellcome({setUsername}) {
 
   const inputRef = useRef();

   const  handelClick = ()=> {
      inputRef.current.value && setUsername(inputRef.current.value)
   }
  return (
    <>
     <div className="startPage">
     <input type="Text" name="username" className='username' id="username" ref={inputRef} />
     
     <button className='startButton' onClick={()=> handelClick()} > Start </button>
     </div>
    </>
  )
}
