import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/index';

const createStoreWithMiddleware = compose(
    applyMiddleware(reduxThunk)
   )(createStore);

export const store = createStoreWithMiddleware(reducers);
