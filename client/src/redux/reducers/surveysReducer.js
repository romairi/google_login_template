import {FETCH_SURVEYS} from '../actions/constants';

export default function (state = [], action) {
    let newState;
    switch (action.type) {
        case FETCH_SURVEYS:
            newState = action.payload;
            break;
        default:
            newState = state;
    }
    return newState;
}

