import React from 'react';
import axios from 'axios';
import { useState, useCallback } from 'react'
import { toast } from 'react-toastify';

export const useAxios = () => {
    const [isLoading, setIsLoading] = useState(false);
    // const [error, setError ] = useState();

    const sendRequest = useCallback(
        async (url, method = 'get', data, headers = {}) => {
            setIsLoading(true);

            try {
                const response = await axios({
                    method, url, data, headers
                })

                setIsLoading(false);
                return response;
            } catch (error) {
                toast.error(<div>{error.response.data.message}</div>)
                // setError(error.response.data);
                setIsLoading(false);
                throw error
            }
        }, []
    )



    return { isLoading, sendRequest};
};