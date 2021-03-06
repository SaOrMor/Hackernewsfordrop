import axios from 'axios';

export const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
export const newsStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;


export const getStory = async storyId => {
    const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then( ( {data} )  => data);

    return result;
}

export const getStoriesIds = async () => {
    const result = await axios.get(newsStoriesUrl)
    .then(({ data }) => data);

    return result;
}