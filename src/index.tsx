import React from 'react';
import {render} from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {fibonacciReducer} from "./reducers/fibonacciReducer";
import {FibonacciContainer} from "./components/Fibonacci";

// @ts-ignore
const store = createStore(fibonacciReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <FibonacciContainer/>
    </Provider>,
    document.getElementById('root')
);