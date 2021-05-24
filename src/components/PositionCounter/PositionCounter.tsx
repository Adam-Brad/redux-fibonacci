import React from 'react';
import {connect} from "react-redux";

interface PositionCounterProps{
    numberInSequence: number;
}

function PositionCounter (props: PositionCounterProps) {
    return (
        <div>Position in Fibonacci Sequence: {props.numberInSequence}</div>
    );
}

interface StoreState {
    numberInSequence: number;
}

const mapStateToProps = (state: StoreState) => ({
    numberInSequence: state.numberInSequence
});

export default connect(
    mapStateToProps,
    () => ({})
)(PositionCounter);
