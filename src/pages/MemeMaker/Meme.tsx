import { ApiService } from 'API/APIService'
import Button from 'components/ButtonCyber/Button'
import MemeCard from 'components/MemeCard/MemeCard'
import React, { useEffect, useState } from 'react'
import './Meme.css'

export default function MemeMaker () {

    const [data, setData] = useState<any>()
    const [number, setNumber] = useState(0)
    
  useEffect(() => {
    ApiService.get().then((response) => {
        setData(response.data.data)
    })
  }, [])

  if (!data) {
    return <h1>Loading...</h1>
  }  

  return (
    <>
        <div id='Container-Meme' className='Neon'>
            <div id='Left'>
                <MemeCard url={data.memes[number].url} name={data.memes[number].name} />
            </div>
            
            <div id='Right'>
                <h1 className='TitleMeme'>Make the meme</h1>
                <div className='MemeSelect'>
                    {data.memes.map((meme: any, index:number) => {
                        return (
                           <div className="Memes" key={index} onClick={() => {setNumber(index)}}>
                                <img className='MemesImages' src={meme.url} alt={meme.alt} />
                                <p className='MemesName'>{meme.name}</p>
                           </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}
