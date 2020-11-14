import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';

import Loading from '../Components/Loading';
import DeleteTradeModal from '../Components/Modals/DeleteTradeModal';
import { AuthContext } from '../Context/MainContext';
import { useAxios } from '../Hooks/useAxios';

const TradeDetails = (props) => {
    const { token, user } = useContext(AuthContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { isLoading, sendRequest } = useAxios();
    const [trade, setTrade] = useState({});
    const { tradeId } = useParams();
    const { symbol, outcome, amount } = trade;
    const history = useHistory();

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
                    <DeleteTradeModal
                        closeModal={closeModal}
                        user={user}
                        token={token}
                        tradeId={tradeId}
                    />
                </Modal>
                <h1>TradeDetails</h1>
                <h2>{symbol}</h2>
                <p>{outcome}</p>
                <span>{amount}</span>
                <button onClick={openModal}>Delete</button>
                <button
                    onClick={() => {
                        history.back();
                    }}>
                    Back
                </button>
            </div>}
        </React.Fragment>
    );
};

export default TradeDetails;
