import { HANDLE_SIDEBAR } from './actionType';

export const handleSidebar = (data) => dispatch => {
    dispatch({
        type: HANDLE_SIDEBAR,
        payload: data
    })
}