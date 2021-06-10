import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hackerNewsService'

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});
    
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    return story && story.url ? (

        <div>

        <a href={story.url}>
        
        <p>{story.title}</p>
        
        </a>
    
    
        </div>
    ) : null;
}