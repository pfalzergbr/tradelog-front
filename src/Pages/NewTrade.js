import React from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';

const NewTrade = (props) => {
    const {register, handleSubmit, watch, errors} = useForm();
    const { userId }  = useParams();
    const history = useHistory();
    //TODO: Get the id from the actual user

    const onSubmit = data => { 
        history.push(`/${userId}/trades`)
        //TODO: Add submit logic
    };

    return (
        <div>
            <h1>New Trade</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Symbol</label>
                <input name='symbol' ref={register} />
                <button type="submit">New Trade</button>
            </form>
        </div>
    );
};

export default NewTrade;
