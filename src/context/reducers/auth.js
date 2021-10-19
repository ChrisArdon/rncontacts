/* The reducer is a function that determines what previous state we had and what it should change too
after something happens*/


const auth = (state, {type, payload}) => {
    switch (type) {
        case 'LOGIN':
            return state;
        default:
            return state;
    }
};

export default auth;