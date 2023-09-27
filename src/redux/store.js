// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterSlice,{initialState as foodInitialState} from "./dataSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use 'localStorage' as the storage engine
import { combineReducers } from 'redux';
// Configuration for Redux Persist
const persistConfig = {
  key: "root", // key for the root of your state in storage
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterSlice);

const store = configureStore({
  reducer: {
    food: persistedReducer, // Use the persisted reducer
  },
  preloadedState:{
    food: foodInitialState,
  }
});

const persistor = persistStore(store); // Create a persistor object to handle persistence

export { store, persistor };
