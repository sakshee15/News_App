import React from 'react';
import './card.css';

function Card(props){
  let{title, description, imageUrl,newsUrl, author, date, source}=props;
    return (
        
        <div className='card'>
          <img className='card-img-top' src={imageUrl} alt="Error loading !!"/>
          <div >
            <h3 className='card-title'>{title}</h3>
            <p className='card-text' >{description}</p>
            <p className='card-date'>By {author} on {date}</p>
            <button className='button'><a href={newsUrl} target="_blank">Read more</a></button>
            <div className="bottom"><b>{source}</b></div>
          </div>
        </div> 
         );
    
}
export default Card;