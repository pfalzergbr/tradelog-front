import React, { useContext } from 'react';
import { AuthContext } from '../Context/MainContext'

const DummyLogin = (props) => {
    const { isAuth, userId } = useContext(AuthContext);


        const dummyLogin = () => {
            props.login(1, 'token');
        };
    

    return ( <div style={{'margin-top':'500px'}}>
        {isAuth ? (
            <button onClick={props.logout}>DUMMY LOGOUT</button>
        ) : (
            <button onClick={dummyLogin}>DUMMY LOGIN</button>
        )}
        {isAuth && <span>Welcome user number: {userId} </span>}
        </div> );
}
 
export default DummyLogin;