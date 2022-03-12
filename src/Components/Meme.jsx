import React from 'react';
import Memes from '../Memes.js'

export default function Meme() {

  const [memeImage, setMemeImage] = React.useState('');


  function getMeme(){
    
    const randomNumber = Math.floor(Math.random() * Memes.data.memes.length)
    setMemeImage(Memes.data.memes[randomNumber].url);
  }

  return (
    <div className="meme">
           <div className="input-group">
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
           </div>

            <div className="meme-button-div">
                <button onClick={getMeme} className="meme-button">Get a new meme image 🖼️</button>
            </div>

            <div className='meme-image-div'>
              <img className='meme-image' src={memeImage}/>
            </div>
    </div>
  )
}
