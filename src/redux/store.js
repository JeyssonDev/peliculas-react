import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import searchReducer from './searchSlice';
import favReducer from './favSlice';
import recentlyAddedReducer from './recentlyAddedSlice';
import buttonReducer from './buttonSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { moviesApi } from '../hooks/Api';

const reducers = combineReducers({
    [moviesApi.reducerPath]: moviesApi.reducer,
    search: searchReducer,
    fav: favReducer,
    button: buttonReducer,
    recentlyAdded: recentlyAddedReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            moviesApi.middleware
        ),
});

setupListeners(store.dispatch);

export default store;
