import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Modal from 'react-modal';

import Loading from '../Components/Loading';
import DeleteModal from '../Components/Modals/DeleteModal';
import { AuthContext } from '../Context/MainContext';
import { useAxios } from '../Hooks/useAxios';

const TradeDetails = (props) => {
    const { token, user } = useContext(AuthContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { isLoading, sendRequest } = useAxios();
    const [ trade, setTrade] = useState({});
    const { tradeId } = useParams();
    const { symbol, outcome, amount } = trade;
    const history = useHistory();

    //Modal Data passed in the Delete Modal.
    const modalData = {
        header: `Warning`,
        message: ' Please only delete the trade if you had an input mistake. Deleting trades from your record changes your statistics, and distorts your real performance.',
        note: 'Note: You cannot reverse this action once you deleted the trade',
        label: 'Yes, I want to delete this trade',
        button: 'Delete'
    }



    useEffect(() => {
        const fetchTrade = async () => {
            try {
                const response = await sendRequest(
                    `http://localhost:3000/api/trades/${tradeId}`,
                    'GET',
                    {},
                    {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                );
                setTrade(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchTrade();
    }, []);

    //Sends a delete trade request to the API. Passed down and called in the Modal.
    const handleDelete = async () => {
        try {
            const response = await sendRequest(
                `http://localhost:3000/api/trades/${tradeId}`,
                'DELETE',
                {},

                {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            );
            history.replace(`/${user.userId}/trades/`);
        } catch (error) {
            console.log(error);
        }
    };

    //Modal Open-Close Handlers
    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    return (
        <React.Fragment>
            { isLoading && <Loading />}
            { !isLoading && <div>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                    <DeleteModal
                        closeModal={closeModal}
                        onDelete={handleDelete}
                        modalData={modalData}
                    />
                </Modal>
                <h1>TradeDetails</h1>
                <h2>{symbol}</h2>
                <p>{outcome}</p>
                <span>{amount}</span>
                <button onClick={openModal}>Delete</button>
                <button
                    onClick={() => {
                        history.go(-1);
                    }}>
                    Back
                </button>
            </div>}
        </React.Fragment>
    );
};

export default TradeDetails;
