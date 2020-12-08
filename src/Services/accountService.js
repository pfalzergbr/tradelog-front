import axios from 'axios';
const API = process.env.REACT_APP_API;

export const fetchAccountService = async (token) => {
    const userData = await axios({
        method: 'get',
        url: `${API}/api/account`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return userData;
};
