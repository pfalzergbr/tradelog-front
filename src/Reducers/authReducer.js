import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../Actions/constants';

const initialState = {
    user: {
        userName: null,
        userId: null
        },
    token: null
}

export const authReducer = (state = initialState, action = {}) => {
    switch (action.type){
        case LOGIN_PENDING:
            return {};
        case LOGIN_SUCCESS:
            return {};
        case LOGIN_FAIL:
            return {};
        case LOGOUT:
            return {}
        default: 
            return state;
    }
}