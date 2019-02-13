// A reducer takes in two things:

// 1. The action (info about what happened)
// 2. Copy of current state

function posts(state = [], action){
    switch(action.type){
        case 'INCREMENT_LIKES' :
            const i = action.index;
            console.log(action);
            return [
                ...state.slice(0,i), // before the post we're updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1) // after the post we're updating
            ];
        default:
            return state;
    }
}

export default posts;