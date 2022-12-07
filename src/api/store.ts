import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import movieSlice from "../features/movies/movieSlice"
import themeSlice from "../features/theme/themeSlice"
import { apiSlice } from "./api/apiSlice"


const persistConfig = {
  key: 'movies',
  version: 1,
  storage,
}

const rootReducer = combineReducers({ 
  [apiSlice.reducerPath]: apiSlice.reducer,
  darkTheme:themeSlice,
  likeMovies:movieSlice

});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(apiSlice.middleware),
    devTools: true
})
export let persistor = persistStore(store)

export type RootState =ReturnType<typeof store.getState>

export type AppDispatch =typeof store.dispatch

setupListeners(store.dispatch)