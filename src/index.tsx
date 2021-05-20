import React from 'react';
import {render} from 'react-dom';
import {createStore} from "redux";
import {incrementReducer} from "./reducers/incrementReducer";
import {Provider} from "react-redux";
import {CounterContainer} from "./components/Counter";
import {fibonacciReducer} from "./reducers/fibonacciReducer";
import {FibonacciContainer} from "./components/Fibonacci";

// const store = createStore(incrementReducer);
const store = createStore(fibonacciReducer);


render(
    // <Provider store={store}>
    //     <CounterContainer/>
    // </Provider>,
    <Provider store={store}>
        <FibonacciContainer/>
    </Provider>,
    document.getElementById('root')
);
