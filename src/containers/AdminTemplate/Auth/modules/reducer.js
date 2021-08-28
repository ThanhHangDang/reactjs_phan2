import * as ActionType from "./contants";

const initialState = {
    loading: false,
    data: "",
    error: "",
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionType.AUTH_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state};

        case ActionType.AUTH_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return {...state};  
        
        case ActionType.AUTH_FAILED:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return {...state};
        
        default:
            return {...state};
    }    
}

export default  authReducer;