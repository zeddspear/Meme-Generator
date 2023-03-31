import React from 'react'
// Without using API getting memes from memesData object
import memeData from '../memesData'
import getnewmeme from '../assets/Getanewmeme.png'

function Top() {



  //using state for meme object
  const [memeImage,setMemeImage] = React.useState(
     {
      topText: "",
      bottomText: "",
      memeUrl: ""
      }
     );

  const [allMemesData,setAllMemesData] = React.useState({});

// using API and useEffect for fixing re-rendering loop
  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then((res)=> res.json())
    .then((dataObject)=>setAllMemesData(dataObject))
  },[])
  
    function randomMeme(){
      const memeArray = allMemesData.data.memes;
      const random = Math.floor(Math.random() * memeArray.length);
      const url = memeArray[random].url;
      
      setMemeImage((prevState)=>{
        return {
          ...prevState,
          memeUrl: url
        }
      });
      
      document.querySelector('.meme').style.display = "block";
    }


    function handleChangeInput(event){
      const {name,value} = event.target;

      setMemeImage((prevState)=>{
        return {
          ...prevState,
          [name]:value
        }
      })

    }

    


  return (
    <div className='Top'>

      <div className='inputs'>

        <input 
         type={'text'}
         placeholder="Top Text"
         name='topText'
         value={memeImage.topText}
         onChange={handleChangeInput}
          />

        <input
         type={'text'}
         placeholder="Bottom Text"
         name='bottomText'
         value={memeImage.bottomText}
         onChange={handleChangeInput}
          />

      </div>

      <div className='inputs'>
      <button className='submitBtn' onClick={randomMeme} ><img src={getnewmeme} /></button>
      </div>

      <div className='memeDiv'>
      <span className='Top--Text top'>{memeImage.topText}</span>
      <img src={memeImage.memeUrl} className='meme' alt='MemeImage' />
      <span className='Bottom--Text bottom'>{memeImage.bottomText}</span>
      </div>

    </div>
  )
}

export default Top







