const Article=(props)=>{
    return(
        <div className="Article">
            <img  className= "data-img" src={props.List.urlToImage}/>
            <h2 className="data-title">{props.List.title}</h2>
            <p className="data-discription">{props.List.description}</p><br/>
            <span class="read-more">Read full article  </span>
            <a href={props.List.url} class="arrow">
                <img src="arrow.png" />
            </a> 
        
        </div>  
          
          );
};
export default Article;