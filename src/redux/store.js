import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactsReducer from './contacts/contacts-reducer';

// const middleware = [...getDefaultMiddleware(), logger]

// Configuring store
const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    // middleware,
    // devTools: process.env.NODE_ENV ==='development',
})

export default store;