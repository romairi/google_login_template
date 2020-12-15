import {FETCH_USER} from "../actions/constants";


export default function (state = null, action) {
    let newState;
    switch (action.type) {
        case FETCH_USER:
            newState = action.payload || false;
            break;
        default:
            newState = state;
    }
    return newState;
}
