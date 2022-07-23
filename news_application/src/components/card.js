import React from 'react';
import image from './newsimage.jpg'
import './card.css';

function Card(){
    return (
        
        <div className='card'>
          <img className='card-img-top' src={image}/>
          <div >
            <h3 className='card-title'>Card title</h3>
            <p className='card-text' >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p className='card-date'>Date and Time</p>
            <button className='button'>Read more</button>
            <div className="bottom" ><b>Source</b></div>
          </div>
        </div> 
         );
    
}
export default Card;