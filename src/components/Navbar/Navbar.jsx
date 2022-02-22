import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#Chat'>Chat</a></p>
  <p><a href='#Technology'>Tecnology</a></p>
  <p><a href='#VR'>VR</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
      <div className='talk-hub__navbar'>

          <div className='talk-hub__navbar-links'>
              <div className='talk-hub__navbar-links_logo'>
                  <img src={logo} alt="logo" />
                  <h1>talkHub</h1>
              </div>

              <div className='talk-hub__navbar-links_container'>
                 <Menu />
              </div>
              
          </div>

          <div className='download_button'>
            <p><a href="">Download</a></p>
          </div>

          <div className='talk-hub__navbar-menu'>
              {toggleMenu
                  ?<RiCloseLine color="#b520ff" size="27" onClick={() => setToggleMenu(false)}/>
                  :<RiMenu3Line color="#b520ff" size="27" onClick={() => setToggleMenu(true)}/>
              }
              {toggleMenu && (
                  <div className='talk-hub__navbar-menu_container scale-up-center'>
                      <div className='talk-hub__navbar-menu_container-links'>
                          <Menu />
                      </div>
                  </div>
              )

              }
          </div>     

      </div>
  )
}

export default Navbar