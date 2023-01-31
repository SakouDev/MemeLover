import React from 'react'
import './MemeCard.css'

export default function MemeCard({name , url} : {name: string, url: string}) {
  return (
    <>
      <div className='MemeCard'>
          <img className="MemeImage" src={url} alt="Drake Hotline Bling" />
      </div>
      <div className='MemeName'>
          <h3>{name}</h3>
      </div>
    </>
  )
}
