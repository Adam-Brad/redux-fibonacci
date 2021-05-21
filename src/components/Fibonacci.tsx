import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {Action} from "redux";

interface FibonacciProps {
    currentNumber: number;
    numberInSequence: number;
    arrayOfNumbers: number[];
    onClick: () => void;
}

const Fibonacci = (props: FibonacciProps) => {

    const mappedFibonacciNumbers = props.arrayOfNumbers.map(number => (
        <span>{number} </span>
    ));

    const mappedFibonnaciPixels = props.arrayOfNumbers.map(number => (
        <span style={{ 'backgroundColor': 'red', 'fontSize': `${number}rem` }} >{number}</span>
    ));

    return (
        <>
            <div>Position in Fibonacci Sequence: {props.numberInSequence}</div>
            <div>{mappedFibonacciNumbers}</div>
            <button onClick={props.onClick}>Next number in Fibonacci sequence</button>
            <div>{mappedFibonnaciPixels}</div>
        </>
        )
}

interface StoreState {
    currentNumber: number;
    numberInSequence: number;
    arrayOfNumbers: number[];
}

const mapStateToProps = (state: StoreState) => ({
    currentNumber: state.currentNumber,
    numberInSequence: state.numberInSequence,
    arrayOfNumbers: state.arrayOfNumbers
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