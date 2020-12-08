import axios from 'axios';

// Handles both login and registration, the two endpoints return the same details.
export const loginUser = async (loginData, url) => {
    const userData = await axios({
        method: 'post',
        url,
        data: JSON.stringify(loginData),
        headers: { 'Content-Type': 'application/json' },
    });
    return userData;
};
