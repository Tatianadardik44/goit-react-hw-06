import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
   key: 'items',
  storage,
};
 

const persistedContactReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedContactReducer
   
  
})
export const persistor = persistStore(store)
