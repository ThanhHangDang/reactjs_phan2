import React, {useReducer} from 'react';

const initialState = {
    count: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "decrement":
            return {count: state.count - 1}
        
        case "increment":
            return {count: state.count + 1}
    
        default:
            return {...state};
    }
}

export default function DemoUseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>DemoUseReducer</h3>
            <p>Number: {state.count}</p>
            <button 
                className="btn btn-danger" 
                onClick={() => {
                    dispatch({type: "decrement"});
                }}
            >
                Decrement (-)
            </button>
            <button 
                className="btn btn-success"
                onClick={() => {
                    dispatch({type: "increment"});
                }}
            >
                Increment (+)
            </button>
        </div>
    )
}
