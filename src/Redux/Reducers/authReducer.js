import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../Actions/constants';

const initialState = {
    user: {
        userName: 'user',
        userId: null
        },
    token: null
}

export const authReducer = (state = initialState, action = {}) => {
    switch (action.type){
        case LOGIN_PENDING:
            return {...state, isLoading: true};
        case LOGIN_SUCCESS:
            return {};
        case LOGIN_FAIL:
            return {...state, user: action.payload.user, token: action.payload.token, isLoading: false };
        case LOGOUT:
            return {...state, error: action.payload, isLoading: false}
        default: 
            return state;
    }
}