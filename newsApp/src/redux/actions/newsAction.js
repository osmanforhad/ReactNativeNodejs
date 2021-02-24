{/*export action object */}
export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";

{/* function for fetch news data */}
export const fetchArticles = () => {
    return async dispatch => {

        //logic to fetch data
       const result = await fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ebd49c72d60847ae8925c7a6d6e20c0f');

       const resultData = await result.json();

        dispatch({
            type: FETCH_ARTICLES,
        payload: resultData
        });
    }
}//end of the fetchArticles function

{/* function for add remove favorites */}
export const toggleFavorites = url => {
    return {
        type: TOGGLE_FAVORITES,
        payload: url
    }
}//end of the toggleFavorites function