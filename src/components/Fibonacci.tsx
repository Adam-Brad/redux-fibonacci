import React from "react";
import {connect} from "react-redux";
import NextFibonacciButton from "./NextFibonacciButton/NextFibonacciButton";
import PositionCounter from "./PositionCounter/PositionCounter";
import DisplayedNumbers from "./DisplayedNumbers/DisplayedNumbers";

interface FibonacciProps {
    currentNumber: number;
    arrayOfNumbers: number[];
}

const Fibonacci = (props: FibonacciProps) => {

    const mappedFibonnaciPixels = props.arrayOfNumbers.map(number => (
        <span style={{ 'backgroundColor': 'red', 'fontSize': `${number}rem` }} >{number}</span>
    ));

    return (
        <>
            <PositionCounter />
            <DisplayedNumbers />
            <NextFibonacciButton/>
            <div>{mappedFibonnaciPixels}</div>
        </>
    );
};

interface StoreState {
    currentNumber: number;
    arrayOfNumbers: number[];
}

const mapStateToProps = (state: StoreState) => ({
    currentNumber: state.currentNumber,
    arrayOfNumbers: state.arrayOfNumbers
});

export const FibonacciContainer = connect(
    mapStateToProps,
    () => ({})
)(Fibonacci);
