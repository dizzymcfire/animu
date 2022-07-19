import React, { Component, useEffect, useState } from 'react';
import '../componentstyling/episodes.css';
import { keyframes } from "styled-components";
import styled from "styled-components/macro";

/*const Episodes = ({anime}) => {

    const [isOpen, setIsOpen] = useState(false)


    return ( 
        <React.Fragment>

            {anime.map(p =>
<div>
                <div className="series" key={p.mal_id} onClick={() => setIsOpen(true)}>
                        <img className="seriesCover" src={p.image_url} />
                    <div className="seriesInfo">
                        <h2 className="seriesTitle">{p.title}</h2>
                        <div className="seriesStats">
                            <p className="seriesEPnumber">{p.episodes}<span>Episodes</span></p>
                            <p className="seriesScore">{p.score}<span>out of 10</span></p>
                        </div>                 
                    </div>             
                </div> 

                <ShowInfo
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    
                >
                    <p>{p.title}</p>
                </ShowInfo >
 </div>
            )}
        </React.Fragment>
    );
}
 
export default Episodes;*/



class Episode extends Component {


    state = { 
        
     }
    render() { 
        const {anime, searchterm} = this.props
        //const regex = new RegExp( searchterm.join( "|"), "i")
        const stagger = 50
        const appear = keyframes`
            0% {
                transform: scale(0.7);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        `

        /*const Spinner = styled.div`
            background-color: red;
            width: 200px;
            height: 200px;
            transform: rotate(45deg)
        `*/
        

        
        return ( <React.Fragment>       
        {anime.map((p, i) => {
            console.log(searchterm)
            var lowerCaseAnime = p.title.toLowerCase();
            if(lowerCaseAnime.includes(searchterm.toLowerCase())){
                return <div tabIndex={50+i} 
                            key={p.mal_id} 
                            id={i} 
                            onClick={() => this.props.handleChosen(p)} 
                            className="series"
                            css={`
                                animation: ${appear} 350ms ease-in forwards;
                                animation-delay: ${stagger * i}ms
                            `}
                        >
                        <img className="seriesCover" src={p.image_url} />
                    <div className="seriesInfo">
                        <h2 className="seriesTitle">{p.title}</h2>
                        <div className="seriesStats">
                            <p className="seriesEPnumber">{p.episodes}<span>Episodes</span></p>
                            <p className="seriesScore">{p.score}<span>out of 10</span></p>
                        </div>                 
                    </div>             
                </div> }
         })};



        </React.Fragment> );
    }
}
 
export default Episode;

/*export default function Episodes(props){
    return (
        <React.Fragment>
                <div key={props.mal_id} className="series">
                        <img className="seriesCover" src={props.image_url} />
                    <div className="seriesInfo">
                        <h2 className="seriesTitle">{props.title}</h2>
                        <div className="seriesStats">
                            <p className="seriesEPnumber">{props.episodes}<span>Episodes</span></p>
                            <p className="seriesScore">{props.score}<span>out of 10</span></p>
                        </div>                 
                    </div>             
                </div> 
        </React.Fragment>
    )
}*/