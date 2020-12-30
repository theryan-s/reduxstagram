import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
// Import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';
import { sync } from 'rimraf';

// Create object for default data
const defaultState = { 
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
