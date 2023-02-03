import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import './MemeCard.css'
import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs';
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';

export default function MemeCard({name , url} : {name: string, url: string}) {

  const [text, setText] = useState([
    {menfou:"false", clientX: 0, clientY: 0},
    {menfou:"false", clientX: 0, clientY: 0},
  ])
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

  useEffect(() => {
    console.log(text)
  }, [text])

  // document.getElementById('menfou')!.addEventListener('mouseover', (e:any) => {
  //   const { cursor } = getComputedStyle(e.target);
  //   let x = e.clientX
  //   let y = e.clientY

  //   console.log(cursor)
  // });
  
  
  function NTM(index: number) {
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
                  >{element.menfou.toString()}</h1>

                  {trash &&
                    <button
                    onClick={() => NTM(index)} className='menfou2'>🗑️</button>
                  } 
                  
                </div>
              </Draggable>
            )})}
      </div>
      <div className='MemeName'>
          <h3 onClick={() => {setDisable(!disable)}}>Dragable ?</h3>
          <h3 onClick={() => {setText([...text, {menfou:"true", clientX:0 , clientY:0}])}}>TEXT ?</h3>
          <h3 onClick={() => {setTrash(false)}}>Download</h3>
      </div>
    </>
  )
}
