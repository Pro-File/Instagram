
import { REMOVE_ALL_PRODUCTS, SET_POSTS} from './postConstants';

var initialState = [];
const productReducer = (state = initialState, action) => {
   var {type, payload} = action;
    switch (type) {
       case SET_POSTS:
           return [...payload.posts];
        case REMOVE_ALL_PRODUCTS:
            return [...payload.products];
        default:
            return state;
    }
}

export default productReducer
