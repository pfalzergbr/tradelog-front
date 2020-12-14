import { OPEN_MODAL, CLOSE_MODAL } from '../constants';

export const openModal = (modalName, modalData) => ({
    type: OPEN_MODAL,
    payload: { modalName, modalData },
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});
