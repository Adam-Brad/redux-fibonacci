import React from "react";
import {connect} from "react-redux";

interface DisplayedNumbersProps {
    arrayOfNumbers: number[];
}

function DisplayedNumbers (props: DisplayedNumbersProps) {
    const mappedFibonacciNumbers = props.arrayOfNumbers.map(number => (
        <span>{number} </span>
    ));

    return <>{mappedFibonacciNumbers}</>;
}

interface StoreState {
    arrayOfNumbers: number[];
}

const mapStateToProps = (state: StoreState) => ({
    arrayOfNumbers: state.arrayOfNumbers
});

export default connect(
    mapStateToProps,
    () => ({})
)(DisplayedNumbers);
