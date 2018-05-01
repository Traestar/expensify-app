import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// set count

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// reset count

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducer are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

 const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// Actions - than an object that gets sent to the store

// walk, stop_walking, sit, work, stop_working

// I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101}));