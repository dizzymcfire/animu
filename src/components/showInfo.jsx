import React, { Children, Component } from 'react';
import ReactDom from 'react-dom';
import '../componentstyling/modal.css';
import EpisodeList from './episodelist';


export default function ShowInfo({ open, handleClose, info, episodes, synopsis}) {
    if (!open) return null
  
    const epCount = episodes.length;

    const episodeSelect = () => {
        
    }

    return ReactDom.createPortal(
        <>

        <div className="overlay"></div>
        <div className="modall" onLoad={console.log("loaded", info.title, open)}>
            
            <h1 className="title">{info.title}</h1>

            <div className="info-tab">
                <h3>Episodes: {epCount}</h3>
            </div>

            <div className="episode-list">
                <EpisodeList 
                    episodes={episodes}
                />
            </div>

            <div className="info-area">
                <h3>
                    {synopsis}
                </h3>
            </div>
    


            <button className="exit-button" onClick={handleClose}>
                X
            </button>
        </div>

        </>,
        document.getElementById('portal')
    )
}