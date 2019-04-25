import { combineReducers } from 'redux';
import { actions } from './actions';

const head = (state = 0, action) => {
    switch (action.type) {
        case actions.CHANGE_HEAD:
            return action.head;
        
        default:
            return state;
    }
};

const flesh = (state = "#D3AF8E", action) => {
    switch(action.type) {
        case actions.CHANGE_FLESH:
            return action.flesh;

        default:
            return state;
    }
}

export default combineReducers({
    head,
    flesh
});