import { HANDLE_SIDEBAR } from './actionType';

const initialState = {
    showSidebar: false
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_SIDEBAR:
            return {
                ...state,
                showSidebar: action.payload
            }
        default:
            return state;
    }
}

export default sidebarReducer;