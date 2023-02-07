import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import './MemeCard.css'
import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs';

export default function MemeCard({name , url} : {name: string, url: string}) {

  const [text, setText] = useState([
    {menfou:"", clientX: 0, clientY: 0},
    {menfou:"", clientX: 0, clientY: 0},
  ])
  const [disable, setDisable] = useState<boolean>(false)
  const [trash, setTrash] = useState<boolean>(true)

  useEffect(() => {
    if(trash == false){
      html2canvas(document.querySelector("#capture")! as HTMLElement, {useCORS : true}).then(canvas => {
        downloadjs( canvas.toDataURL(), 'meme.png', 'image/png');
      })
    }
    setTrash(true)
  }, [trash])

  function HandleDelete(index: number) {
    const newData = [...text];
    console.log( newData.splice(index,1))
    console.log("hahahah",newData)
    setText(newData)
  }

  function HandleChange (e:any, index:number){
    let newArray = [...text];
    newArray[index] = {...newArray[index], menfou : e.target.value};
    setText(newArray);
  };

  function HandleStopDrag(data:any, index:any){
    let newArray = [...text];
    newArray[index] = {...newArray[index], clientX : data.x, clientY : data.y};
    setText(newArray);
  }
   
  return (
    <>
      <div id='capture' className='MemeCard'>
          <img id='MemeImage' className="MemeImage" src={url} alt={name} />
          {text.map((element,index) => {
            return (
              <Draggable 
                disabled={disable} 
                bounds="parent"
                position={{x: element.clientX, y: element.clientY}}
                onStop={(e, data) => {HandleStopDrag(data, index)}}
                key={index}
              >
                <div key={index}  className='menfou'>

                  <h1
                    id='textMenfou' 
                    contentEditable="true"
                    style={
                      trash 
                      ? 
                      {cursor:'pointer',minWidth:'100px',maxWidth: "100%",border:"2px solid black"} 
                      : 
                      {border: "none"}
                    } 
                    onChange={(e) => HandleChange(e, index)}
                  ></h1>

                  {trash &&
                    <button
                    onClick={() => HandleDelete(index)} className='menfou2'>🗑️</button>
                  } 
                  
                </div>
              </Draggable>
            )})}
      </div>
      <div className='MemeName'>
          <h3 onClick={() => {setDisable(!disable)}}>Sandevistan</h3>
          <h3 onClick={() => {setText([...text, {menfou:"", clientX:0 , clientY:0}])}}>More</h3>
          <h3 onClick={() => {setTrash(false)}}>Hack_</h3>
      </div>
    </>
  )
}