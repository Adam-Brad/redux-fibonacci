import {Action} from 'redux';

const initialState = {
    priorNumber: 0,
    currentNumber: 1
};

export const fibonacciReducer = (state = initialState, action: Action<string>) => {
    switch (action.type) {
        case 'FIBONACCI':
            return {
                priorNumber: state.currentNumber,
                currentNumber: state.currentNumber + state.priorNumber
            };
        default:
            return state;
    }
}