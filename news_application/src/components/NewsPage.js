import React from "react";
import Card from "../components/card";
import Navbar from "../components/navbar";
import './newspage.css';

const data = require("../data/sampleNews.json")
const NewsPage=() =>{
    return(
        <>
            <Navbar/>
            <br/>
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