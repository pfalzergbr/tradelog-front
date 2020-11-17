import { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const useAuthentication = () => {
    const [token, setToken] = useState(false);
    const [user, setUser] = useState(null);
    const history = useHistory();

    //TODO - move to cookies for more security
    //TODO - implement timeout function, and set expiry in the backend.

    // Handles login. Sets a token, and basic user data with name and Id, then sends it to local storage. .
    const login = useCallback((user, token,) => {
        setToken(token);
        setUser(user);
        localStorage.setItem('userData', JSON.stringify({ user, token }));
    }, []);

    // Handle logout. Clears tokens, user data and local storage, and redirects to the homepage.
    const logout = useCallback(() => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('userData');
        history.push('/');
    }, []);
    //Checking local storage on login for Token data, logs in if finds one.

    const addAccount = useCallback((newAccount) => {
        const newUser = {
            ...user
        }
        newUser.accounts = [...newUser.accounts, newAccount];
        setUser(newUser)
    }, [])

    const removeAccount = useCallback((newAccount) => {
        const newUser = {
            ...user
        }
        newUser.accounts = newUser.accounts.filter(account => newAccount._id !== account._id);
        setUser(newUser)
    }, [])


    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData && userData.user && userData.token) {
            login(userData.user, userData.token);
        }
    }, [login]);

    return { token, user, login, logout, addAccount, removeAccount};
};
