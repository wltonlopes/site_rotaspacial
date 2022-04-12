import { LOG } from "../action/action";

const initialState = {
  logvalue: {
    nome:'',
    email:'',
  },
};

const reducer =(state=initialState, action)=>{
  switch(action.type){
    case LOG:
      return{...state, logvalue: action.payload };
    default:
      return state;
    }
};

export default reducer;