import {list} from './data.js'; 
import Article from './article.js';
const Raw=()=>{
    return(
        <div className=" container " >
            <h3 className='top'>Top News from India</h3>
            <div className="row">
                <div className=" column col-12  col-md-4">
                    <Article 
                        List={list[0]}
                    />
                </div>  
                <div className=" column col-12  col-md-4">  
                    <Article 
                        List={list[1]}
                    />
                </div>
                <div className=" column col-12  col-md-4">   
                    <Article 
                        List={list[2]}
                    />
                </div>
            </div>
            <div className="row" >
                <div className=" column col-12  col-md-4">    
                    <Article
                        List={list[3]}
                    />
                </div>
                <div className=" column col-12  col-md-4">   
                    <Article
                        List={list[4]}
                    />
                </div>
                <div className=" column col-12  col-md-4">   
                    <Article
                        List={list[5]}
                    />
                </div>
            </div>
            <div className="row">
                <div className=" column col-12  col-md-4">
                    <Article
                        List={list[6]}
                    />
                </div>
                <div className=" column col-12  col-md-4">
                    <Article
                        List={list[7]}
                    />
                </div>
                
                <div className=" column col-12  col-md-4">
                    <Article
                        List={list[8]}
                    />
                </div>
            </div>
        </div>
        
     

    );
};
export default Raw;


