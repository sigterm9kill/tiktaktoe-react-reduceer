import React from 'react'

export default function Header() {
  return (
    
    <header className='Header'>
    <img src={require("./favicon.ico")} className="Logo" alt="logo" />
    <nav className='Nav'>
        <h1 className='Title'>Tik-Tac-Toe with sigterm9kill</h1>
    </nav>
    </header>
  )
}
