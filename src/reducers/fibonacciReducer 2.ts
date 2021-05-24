import {Action} from 'redux';

const initialState = {
    priorNumber: 0,
    currentNumber: 1,
    numberInSequence: 1,
    // eslint-disable-next-line
    arrayOfNumbers: Array()
};

export const fibonacciReducer = (state = initialState, action: Action<string>) => {
    switch (action.type) {
        case 'FIBONACCI':
            return {
                priorNumber: state.currentNumber,
                currentNumber: state.currentNumber + state.priorNumber,
                numberInSequence: state.numberInSequence += 1,
                arrayOfNumbers: [...state.arrayOfNumbers, state.currentNumber]
            };
        default:
            return state;
    }
}