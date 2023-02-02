import Button from 'components/ButtonCyber/Button'
import React from 'react'
import './Landing.css'

export default function test() {

  const [input, setInput] = React.useState("")



  return (
    <>
            <h1 className="title neonTitle">MEME</h1>
            <h1 className="cyberpunk glitched">Password_</h1>
            <input type='password' className="cyberpunk glitched" onChange={(e)=>{setInput(e.target.value)}}/>
            <hr />
              <Button input={input} path='/meme' content='Start Hacking_' />

    </>
  )
}
