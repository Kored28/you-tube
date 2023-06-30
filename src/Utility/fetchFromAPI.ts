import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export type Videosa ={
  id: {
    kind: string;
    videoId: string;
    channelId: string;
  };
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: any;
      medium: any;
      high: any;
    };
    title: string;
  }
}

export const fetchFromAPI = async (url: any) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}