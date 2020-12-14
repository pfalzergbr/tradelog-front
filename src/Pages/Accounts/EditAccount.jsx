import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import EditAccountForm from './EditAccountForm';
import { updateAccount } from '../../Redux/Actions/accountActions';
import Loading from '../Shared/Loading';

const API = process.env.REACT_APP_API;



const NewTrade = (props) => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const { isLoading } = useSelector((state) => state.control);
    const history = useHistory();

    const onSubmit = async (data) => {
        try {
            const response = await dispatch(
                updateAccount({
                    method: 'patch',
                    url: `${API}/api/account/${props.account.account_id}`,
                    data,
                    auth: { Authorization: `Bearer ${token}` },
                }),
            );
            history.push(
                `/${response.updatedAccount.user_id}/accounts/${response.updatedAccount.account_id}`,
            );
            props.closeModal();

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <React.Fragment>
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    <button onClick={props.closeModal}>X</button>
                    <EditAccountForm onSubmit={onSubmit} data={props.data} />
                </div>
            )}
        </React.Fragment>
    );
};

export default NewTrade;
