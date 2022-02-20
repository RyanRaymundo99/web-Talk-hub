import React from 'react';
import './header.css';
import Chat from '../../assets/Chat.svg'

const Header = () => {
  return (
    <div className='talk-hub__header' id='Chat'>
    <div className='talk-hub__header-image'>
        <img src={Chat}/>
    </div>

    <div className='talk-hub__header-content'>
        <h4>TalkHub is the New Text app
        with ease-to-use interface</h4>

        <h1 className='gradient__text'> Share the best moments of your day with everyone</h1>

        <p>Powerful test app using an ease-to-use interface. Designed for beginner users with the most advanced technology of today's society.</p>

        <a className='header_button' href="£">Get started</a>
    </div>
    </div> 
  )
}

export default Header