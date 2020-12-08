import axios from 'axios';
const API = process.env.REACT_APP_API;

export const loginUser = async (loginData, url) => {
    const userData = await axios({
        method: 'post',
        url,
        data: JSON.stringify(loginData),
        headers: { 'Content-Type': 'application/json' },
    });
    return userData;
};
