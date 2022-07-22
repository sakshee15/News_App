import React from 'react';
import image from './newsimage.jpg'
import './card.css';

function Card(){
    return (
        
        <div className='card'>
          <img className='card-img-top' src={image}/>
          <div >
            <h4 className='card-title'><b>Card title</b></h4>
            <p className='card-text' >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p className='card-date'>Date and Time</p>
            <button className='button'>Read more</button>
            <div className="bottom" >Source</div>
          </div>
        </div> 
         );
    
}
export default Card;