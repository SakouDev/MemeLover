import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Button.css'

export default function Button({input, path, content} : {input: string, path: string, content:string}) {

    
    const navigate = useNavigate();
    const password = "12344"

    function HandleClick() {
        // if (input === password) {
            navigate(path)
        // }
    }

  return ( 
    <button onClick={HandleClick} className="cyberpunk2077 purple">{content}</button>
  )
}
