import React from 'react';
import './technology.css';
import technology from '../../assets/technology.svg';

const Technology = () => {
  return (
    <div className='gpt3__possibility section__padding' id='Technology'>

            <div className='gpt3__possibility-content'>
                <h4>TalkHub is the New Text app with ease-to-use interface</h4>

                <h1 className='gradient__text'> Seggs makes it easy and fun to stay close to your favorite people.</h1>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perspiciatis quis magni quam architecto consectetur autem sunt.</p>

                <h4><a href="">Request Early access to Get started</a></h4>
            </div>

            <div className='gpt3__possibility-image'>
                <img src={technology} />
            </div>
        </div>
  )
}

export default Technology