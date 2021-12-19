import { combineReducers } from "redux";
import { createStore } from "redux";
import AddBookToUserCartReducer from "./reducers/AddBookToUserCartReducer";

const initialState = {
    items: []
}

const modifyItemsInCartReducer = (state = initialState, action) =>{
    if(action.type === "ADD_BOOK"){
        return {
            items: [...state, action.payload]
        };
    }

    if (action.type === "REMOVE BOOK"){
        return {
            items: state.pop()
        }
    }

    return state;
}
/*
export default combineReducers({
    AddBookToUserCartReducer,

})
*/
const store = createStore(modifyItemsInCartReducer);
export default store;