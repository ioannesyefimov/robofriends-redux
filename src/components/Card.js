import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        
        <div className='tc dib bg-light-green br2 pa3 ma2 grow bw2 shadow-5  '>
            <img className='robo-img'alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <h2 className='f2'>{name}</h2>
            <p className='f3'>{email}</p>
        </div>
    );
}


export default Card;