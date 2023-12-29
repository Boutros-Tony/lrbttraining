import { compose, createStore, applyMiddleware } from 'redux';
import { thunk as thunkMiddleware } from 'redux-thunk'; // Updated import
import reducers from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const persistConfig = {
  key: "root",
  storage,
  debug: true,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// Ensure that Redux Thunk and other middleware are correctly initialized
const middleWares = [process.env.NODE_ENV === 'development' && logger, thunkMiddleware].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);

export const resetStore = () => {
  persistor.purge();
  store.dispatch({ type: 'RESET_STORE' });
};

//resetStore();