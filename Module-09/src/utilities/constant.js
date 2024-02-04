const YOUTUBE_GOOGLE_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const BASE_URL = `https://youtube.googleapis.com/youtube/v3/`;

export const YOUTUBE_VIDEOES_API = `${BASE_URL}videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=BD&key=${YOUTUBE_GOOGLE_KEY}`;
