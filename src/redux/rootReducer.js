import { combineReducers } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

 export const rootReducer = combineReducers({
   contacts: contactReducer,
   filters: filtersReducer

})