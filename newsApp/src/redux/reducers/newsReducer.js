{/*import the Developer Created component */}
import {FETCH_ARTICLES} from '../actions/newsAction';

{/*setup initial state */}
const initialState = {
articles: [],
favorites: []
}

{/*export component for output */}
export default function(state=initialState, action) {

    switch (action.type) {
        case FETCH_ARTICLES: 
        return{
            ...state,
            articles: action.payload
        }
    }
    return state;
}