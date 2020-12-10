import axios from 'axios';
const API = process.env.REACT_APP_API;

//Fetch user, account and strategy data on first page load. 
//This data is used to populate the redux store.
export const requestService = async ({method = 'get', url, auth = {}, data = {}}) => {
    const userData = await axios({
        method,
        url: `${url}`,
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            auth
        },
    });
    return userData;
};