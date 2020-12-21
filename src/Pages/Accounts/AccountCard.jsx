import React from 'react';

const AccountCard = (props) => {
    const {
        account_name,
        balance,
        total_pnl,
        average_profit,
        average_loss,
    } = props.accountData;

    return (
        <div>
            <h2>Account Name</h2> <span>{account_name}</span>
            <h3>Balance:</h3> <span>{balance}</span>
            <h3>P&L:</h3> <span>{total_pnl}</span>
            <h3>Win%:</h3> <span>???</span>
            <p>Average profit: </p>
            <span>{average_profit}</span>
            <p>Average loss: </p>
            <span>{average_loss}</span>
        </div>
    );
};

export default AccountCard;
