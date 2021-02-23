{/*export action object */}
export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const ADD_FAVORITES = "ADD_FAVORITES";

{/* function for export object */}
export const fetchArticles = () => {
    return {
        type: FETCH_ARTICLES,
        payload: {id: 1, title: 'Sport News', description: 'Sports News is On'}
    }
}//end of the fetchArticles function