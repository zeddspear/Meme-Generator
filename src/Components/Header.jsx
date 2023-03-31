import React from 'react'
import logoImg from '../assets/Troll Face.png'

function Header() {
  return (
    <div className='Header'>
    <div className='left'>
        <img src={logoImg} alt='TrollFace' className='Troll' />
        <h2>Meme Generator</h2>
    </div>
    <div className='right'>
        <span>React Course - Project 3</span>
    </div>
    </div>
  )
}

export default Header
