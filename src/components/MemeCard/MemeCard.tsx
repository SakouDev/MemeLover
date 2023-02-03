import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import './MemeCard.css'
import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs';
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';

export default function MemeCard({name , url} : {name: string, url: string}) {

  const [text, setText] = useState([{menfou:""}])
  const [disable, setDisable] = useState<boolean>(false)
  const [trash, setTrash] = useState<boolean>(true)


  useEffect(() => {
    if(trash == false){
      html2canvas(document.querySelector("#capture")! as HTMLElement, {useCORS : true}).then(canvas => {
        downloadjs( canvas.toDataURL(), 'download.png', 'image/png');
      })
    }
    setTrash(true)
  }, [trash])

  // document.getElementById('textMenfou')!.addEventListener('mouseover', (e:any) => {
  //   const { cursor } = getComputedStyle(e.target);
  //   let x = e.clientX
  //   let y = e.clientY

  //   console.log(x,y)
  // });
  

  return (
    <>
      <div id='capture' className='MemeCard'>
          <img id='MemeImage' className="MemeImage" src={url} alt={name} />
          {text.map((element,index) => {
            return (
              <Draggable key={index} disabled={disable} bounds="parent">
                <div className='menfou'>
                  <textarea id='textMenfou' style={trash ? {cursor:'pointer'} : {border: "none"}}>{element.menfou}</textarea>
                  {trash &&
                    <button onClick={() => setText(text.filter((item, key) => key !== index))} className='menfou2'>🗑️</button>
                  }
                </div>
              </Draggable>
            )})}
      </div>
      <div className='MemeName'>
          <h3 onClick={() => {setDisable(!disable)}}>Dragable ?</h3>
          <h3 onClick={() => {setText([...text, {menfou:""}])}}>TEXT ?</h3>
          <h3 onClick={() => {setTrash(false)}}>Download</h3>
      </div>
    </>
  )
}
