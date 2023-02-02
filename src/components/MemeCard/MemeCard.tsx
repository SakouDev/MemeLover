import React, { useState } from 'react'
import Draggable from 'react-draggable'
import './MemeCard.css'

export default function MemeCard({name , url} : {name: string, url: string}) {

  const [text, setText] = useState([
    {menfou:"1"},
    {menfou:"2"},
    {menfou:"3"},
    {menfou:"4"}
  ])

  const [disable, setDisable] = useState<boolean>(false)

  console.log(text)

  function Delete(key : any) {
    const TA_MERE = text.filter((item, index) => index != key)
    setText(TA_MERE)
  }

  return (
    <>
      <div className='MemeCard'>
          <img id='MemeImage' className="MemeImage" src={url} alt="Drake Hotline Bling" />
          {text.map((element : any,key : number) => {
            return (
              <Draggable key={key} disabled={disable} bounds="parent">
                <div className='menfou'>
                  <textarea>{element.menfou}</textarea>
                  <button onClick={() => {Delete(key)}} className='menfou2'>🗑️</button>
                </div>
              </Draggable>
            )})}
      </div>
      <div className='MemeName'>
          <h3 onClick={() => {setDisable(!disable)}}>Dragable ?</h3>
          <h3 onClick={() => {setText([...text, {menfou:"new"}])}}>TEXT ?</h3>
      </div>
    </>
  )
}
