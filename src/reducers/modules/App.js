

const ADD = "ADD";


export function add() {
    return {type: ADD}
}


const initialState = {
    linkitems: [
        {key: "introduction", name: "introduction"},
        {key: "portfolio", name: "portfolio"},
        {key: "contact", name: "contact"}
    ]
};

export default function reducer(state=initialState, payload) {
    switch (payload.type){
        case ADD:
            return Object.assign({}, state, {counter: state.counter+1});
        default:
            return state;
    }
}



