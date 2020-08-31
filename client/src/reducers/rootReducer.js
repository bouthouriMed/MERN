import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "../actions/types";

const initialState =  {
    items : [
        {id: 1, name:'Milk'},
        {id: 2, name:'Meat'},
        {id: 3, name:'Water'},
        {id: 4, name:'Steak'},
        {id: 5, name:'Bread'}
    ]
};

function rootReducer (state=initialState,action) {
  
    switch (action.type){
        case GET_ITEMS :
            return {
                ...state
            };
        case DELETE_ITEM :
            console.log(action.payload)

            return {
                ...state,
                items : state.items.filter(item => item.id !== action.payload)
            }
        case ADD_ITEM :
            console.log(action)
            return {
                ...state,
                items : [...state.items, action.payload]
            }
        default :
            return state;
    }
}


export default rootReducer;