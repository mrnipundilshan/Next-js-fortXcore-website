import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API;

if (!API_URL) {
    throw new Error('Missing NEXT_PUBLIC_PAYLOAD_API environment variable');
  }
export const getStats = async () =>{
    console.log(API_URL);
    const res = await axios.get(`${API_URL}/api/stats`);
    return res.data.docs[1];
};

export const getLogos = async () => {
    const res = await axios.get(`${API_URL}/api/brand-logos`);
    return res.data.docs;
};