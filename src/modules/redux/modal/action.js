import { HANDLE_MODAL } from './actionType';

export const handleModal = (data) => dispatch => {
    dispatch({
        type: HANDLE_MODAL,
        payload: data
    })
}