{/*import the Developer Created component */}
import {FETCH_ARTICLES, TOGGLE_FAVORITES} from '../actions/newsAction';

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

        case TOGGLE_FAVORITES:
            // Add or Remove items from favorites
            const index = state.favorites.findIndex(article => article.url === action.payload);
            if(index >= 0){
                // item exist in favorites
                const favorites = [...state.favorites];
                //for remove the item from favorites
                favorites.splice(index, 1);
                return{
                    ...state,
                    favorites
                }
            } else {
                // item doesn't exist in favorites
                {/*gets the article for add to favorite */}
                const article = state.articles.articles.find(article => article.url === action.payload)

                {/*for add to favorite */}
                return{
                    ...state,
                    favorites: state.favorites.concat(article)
                }
            }
    }
    return state;
}