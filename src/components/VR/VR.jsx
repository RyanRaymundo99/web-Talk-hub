import React from 'react';
import './vr.css';

import VRimg from '../../assets/VR.svg'

const VR = () => {
  return (
    <div className='gpt3__possibility section__padding' id='VR'>
            <div className='gpt3__possibility-image'>
                <img src={VRimg}/>
            </div>

            <div className='gpt3__possibility-content'>
                <h4>enjoy your conversation with a more realistic approach</h4>

                <h1 className='gradient__text'> First Text App with in build VR chat</h1>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perspiciatis quis magni quam architecto consectetur autem sunt.</p>

                <h4><a href="">Download now</a></h4>
            </div>
        </div>
  )
}

export default VR