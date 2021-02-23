import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

{/*import the developer created component */}
import newsReducer from './reducers/newsReducer';

{/*setup combine Reducer */}
const rootReducer = combineReducers({
    news: newsReducer
});

{/*setup the Middleware */}
const middleware = composeWithDevTools(applyMiddleware(thunk));

{/*setup the store and render for output */}
export default createStore(rootReducer, middleware);
