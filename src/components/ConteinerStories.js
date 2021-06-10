import React, { useEffect, useState } from 'react';
import { getStoriesIds, getStory } from '../services/hackerNewsService';
import { Story } from '../components/Story';


export const ContainerStories = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoriesIds().then(data => setStoryIds(data));
    }, []);

    console.log("storyIds",storyIds)
    
    return storyIds.map(storyId => {
        return (
            <Story storyId={storyId} />
        )
    })
}