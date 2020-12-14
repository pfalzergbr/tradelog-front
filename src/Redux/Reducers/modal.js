import { OPEN_MODAL, CLOSE_MODAL, DELETE_ACCOUNT, EDIT_ACCOUNT, ADD_STRATEGY } from '../constants';

const initialState = {
    isOpen: false,
    modalName: '',
    modalData: {}
}

export const modal = (state = initialState, action = {}) => {
    switch (action.type) {
        case OPEN_MODAL: 
            return { ...state, isOpen: true, modalName: action.payload.modalName, modalData: action.payload.modalData }
        case CLOSE_MODAL: 
            return initialState;
        case DELETE_ACCOUNT:
            return initialState;
        case EDIT_ACCOUNT:
            return initialState;
        case ADD_STRATEGY:
            return initialState;
        default:
            return state;
    }
}