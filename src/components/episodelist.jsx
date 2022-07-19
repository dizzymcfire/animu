import React, { Component } from 'react';
import '../componentstyling/episode-item.css';

class EpisodeList extends Component {
    state = {  }
    render() { 
        const {episodes} = this.props
        return ( 
        
            <ul>
                {episodes.map((e, i) => 
                    <li key={e.episode_id} tabIndex={i}>
                        <div className="episode_item">
                            <p className="ep-number">{e.episode_id}</p>
                            <p className="ep-title">{e.title}</p>
                            <p className="ep-romanji">{e.title_romanji}</p>
                        </div>
                    </li>
                )}
            </ul>
        
         );
    }
}
 
export default EpisodeList;