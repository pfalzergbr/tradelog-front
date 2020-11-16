import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Loading from '../Components/Loading'
import { AuthContext } from '../Context/MainContext';
import { useAxios } from '../Hooks/useAxios';

//TODO - Build edit trade Modal

const AccountDetails = (props) => {
    const { token, user } = useContext(AuthContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [account, setAccount] = useState({});
    const { isLoading, sendRequest } = useAxios();
    const { accountId } = useParams();
    const { accountName, balance, description, strategies } = account;
    const history = useHistory();

    useEffect(() => {
        const fetchAccount = async () => {
            try {
                const response = await sendRequest(
                    `http://localhost:3000/api/user/accounts/${accountId}`,
                    'GET',
                    {},
                    {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                );
                console.log(response.data);
                setAccount(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchAccount();
    }, []);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <div> 
                    <h1>{accountName}</h1>
                    <h2>${balance}</h2>
                    <ul>
                        {strategies && strategies.length !== 0
                            ? strategies.map((strategy) => (
                                  <li>{strategy.name}</li>
                              ))
                            : 'Cannot find any strategies for this account'}
                    </ul>
                </div>
            )}
        </React.Fragment>
    );
};

export default AccountDetails;
