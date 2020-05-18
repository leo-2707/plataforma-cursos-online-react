import React from 'react';

const Banner = (props) => {
  return (
    <div className={`main-banner img-container l-block ${props.color}-color`}>
      <div className='eg-grid'>
        <img
          className='main-banner__img'
          src='https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='banner teacher'
        />
        <div className='main-banner__data s-center'>
          <h1 className='main-banner__title'>{props.title}</h1>
          <p>{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner
