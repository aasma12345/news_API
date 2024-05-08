'use client'
import React, { useState } from 'react'
import "./globals.css";
import "./font.css"

const Search = () => {
    const [search, setSearch]=useState("")
    const [articles, setArticles] = useState([]);
    
    const handleSearch =()=>{
        fetchNews(search);

    };
    const fetchNews=()=>{
        setArticles([]);
        fetch(
            `https://newsapi.org/v2/everything?q=tesla&from=2024-03-04&sortBy=publishedAt&apiKey=cce4c80b99884abe91b7ed2876f5a9c3`

        )
            .then((response)=>response.json())
            .then((data)=>{
                setArticles(data.articles);
                
            })
            .catch((error) => {
                console.error('Error fetching news:', error);
                setArticles([]); 
            });
            
            
            
    };

    return (
        <>
        
            <div className="search-box">
            {/* <img className="search-icon" src="Frame.png" alt="Search" /> */}
            <input 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}

            className="search-bar"  placeholder="Search"  />
            <button className="button-container" onClick={handleSearch}>Go</button>

            </div>

            <div className="container">
                <div className="row">
                    {articles.map((article, index) => (
                        <div key={index} className="column col-12 col-md-4">
                            
                                <img className="data-img" src={article.urlToImage} alt="Article" />
                                <h2 className="data-title">{article.title}</h2>
                                <p className="data-discription">{article.description}</p>
                                <span className="read-more">Read full article</span>
                                <a href={article.url} className="arrow">
                                    <img src="arrow.png" alt="Read more" />
                                </a>
                            
                        </div>
                    ))}
                </div>
            </div>
        </>

        
    );
  };
  
  export default Search;
  