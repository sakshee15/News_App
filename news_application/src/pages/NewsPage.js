import React from "react";
import Card from "../components/card";
import './newspage.css';

const data = require("../data/sampleNews.json")
const NewsPage=() =>{
    return(
        <>
            <div className="body">
                {
                    data.map((element, index)=>{ 
                        return<Card  
                        key={index}
                        title={element.title}
                        description={element.description}
                        newsUrl={element.url}
                        imageUrl={element.urlToImage}
                        date={element.publishedAt}
                        source={element.source.name}
                        author={element.author}
                        />;
                    })
                }
            </div>
        </>
    );

};
export default NewsPage;