import { combineReducers } from 'redux';
import sidebarReducer from './sidebar/sidebarReducer';
import modalReducer from './modal/modalReducer';

export default combineReducers({
    sidebarMobile: sidebarReducer,
    modal: modalReducer
})

