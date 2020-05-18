import React from 'react';

const Teacher = (props) => {
  return (
    <article className='s-mb-0 s-pxy-2'>
      <div className='s-px-4 lg-px-2'>
        <div className='img-container circle s-mb-2 s-px-2'>
          <img src={props.image} alt={props.name} />
        </div>
      </div>
      <div className='s-center'>
        <p className='t3 s-mb-1'>{props.name}</p>
        <p>{props.country}</p>
      </div>
    </article>
  );
};

export default Teacher;
