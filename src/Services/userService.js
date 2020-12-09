import axios from 'axios';
const API = process.env.REACT_APP_API;

//Fetch user, account and strategy data on first page load. 
//This data is used to populate the redux store.
export const fetchUserDataService = async (token) => {
    const userData = await axios({
        method: 'get',
        url: `${API}/api/profile`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return userData;
};
