import React, {Dispatch} from "react";
import {Action} from "redux";
import {connect} from "react-redux";

interface NextFibonacciButtonProps {
    onClick: () => void;
}

const NextFibonacciButton = (props: NextFibonacciButtonProps) => (
    <button onClick={props.onClick}>Next number in Fibonacci sequence</button>
);

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
    onClick: () => dispatch({
        type: 'FIBONACCI'
    })
});

export default connect(
    null,
    mapDispatchToProps
)(NextFibonacciButton);
