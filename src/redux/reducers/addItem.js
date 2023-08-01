// const addItem = [];

// const addItems = (state = addItem, action) => {
//     switch (action.type) {
//         case "ADDITEM" : return [
//             ...state,
//             action.payload
//         ]
//         break;

//         case "DELITEM" :
//             return state = state.filter((x)=>{
//                 return x.id !== action.payload.id
//             })
//         break;

//         default: return state;
//         break;

        
//     }
// }

// export default addItems;

import { ADD_DATA } from "../Actions";
 const initialstate = {
    userData: [],
 }

const addItems = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_DATA" : 
        return {
            ...state,
          userData:  action.payload
        }
        break;

     

        default: return state;
        break;

        
    }
}
export default addItems;