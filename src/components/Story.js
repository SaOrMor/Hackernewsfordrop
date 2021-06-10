import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hackerNewsService'
import './Story.css'

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});
    
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    

    return (
        <div className="post-cont">
        {story && story.url ? (

            <div className="square">
    
            <a href={story.url}>
            
            <p className="text">{story.title}</p>
            
            </a>
        
        
            </div>

        ) : null}


        </div>      

    )

    
}