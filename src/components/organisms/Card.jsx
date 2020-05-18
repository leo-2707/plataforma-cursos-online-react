import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <article className='card s-border'>
      <div className='img-container s-ratio-16-9'>
        <Link to={`/${props.path}/${props.id}`}>
          <img src={props.image} alt={props.name} />
        </Link>
      </div>
      <div className='card__data s-pxy-2'>
        <h3 className='t4 center'>{props.name}</h3>
      </div>
    </article>
  );
};

export default Card;
