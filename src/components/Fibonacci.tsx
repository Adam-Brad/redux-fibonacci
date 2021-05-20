import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {Action} from "redux";

interface FibonacciProps {
    currentNumber: number;
    onClick: () => void;
}

const Fibonacci = (props: FibonacciProps) => (
    <>
        <div>Current number: {props.currentNumber}</div>
        <button onClick={props.onClick}>Next number in Fibonacci sequence</button>
    </>
)

interface StoreState {
    currentNumber: number
}

const mapStateToProps = (state: StoreState) => ({
    currentNumber: state.currentNumber
});

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
    onClick: () => dispatch({
        type: 'FIBONACCI'
    })
});

export const FibonacciContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Fibonacci);