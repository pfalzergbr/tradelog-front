import React from 'react';
import axios from 'axios';
import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';

export const useAxios = () => {
    const [isLoading, setIsLoading] = useState(false);

    //Starting an axios Http request with the parameters provided.
    //TODO: Implement Cancel tokens.
    const sendRequest = useCallback(
        async (url, method = 'GET', data, headers = {}) => {
            setIsLoading(true);

            try {
                const response = await axios({
                    method,
                    url,
                    data,
                    headers,
                });

                setIsLoading(false);
                return response;
            } catch (error) {
                //Opens a toast message if an error is thrown
                toast.error(<div>{error.response.data.message}</div>);
                setIsLoading(false);
                throw error;
            }
        },
        [],
    );

    return { isLoading, sendRequest };
};
