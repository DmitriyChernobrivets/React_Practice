import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../store/actions/counter";
const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <button onClick={() => onIncrement(5)}>+</button>
    <button onClick={() => onDecrement(5)}>-</button>
    <div style={{ fontSize: "40px" }}>{value}</div>
  </div>
);

const mapStateToProps = state => ({
  value: state.counterValue
});
const mapDispatchToProps = dispatch => ({
  onIncrement: val => dispatch(increment(val)),
  onDecrement: val => dispatch(decrement(val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
