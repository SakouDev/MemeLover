import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Landing.css'

export default function test() {

  const navigate = useNavigate();
  const password = "12344"

  const [input, setInput] = React.useState("")

  function HandleClick() {
    if (input === password) {
      navigate('/meme')
    }else{
      console.log("nope")
    }
  }

  return (
    <>
        <header></header>
        <section className="cyberpunk">
            <h1 className="title">MEME</h1>
            <h1 className="cyberpunk glitched">Password_</h1>
            <input type='password' className="cyberpunk glitched" onChange={(e)=>{setInput(e.target.value)}}/>
            <hr />
            
            <button onClick={HandleClick} className="cyberpunk2077 purple">Button purple_</button>
        </section>
        <footer></footer>
    </>
  )
}
