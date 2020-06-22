import { HANDLE_MODAL } from './actionType';

const initialState = {
    showModal: false
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_MODAL:
            return {
                ...state,
                showModal: action.payload
            }
        default:
            return state;
    }
}

export default modalReducer;