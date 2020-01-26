import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {reducer} from '../Reducers/Reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

const persister = persistStore(store);

export {store, persister};
