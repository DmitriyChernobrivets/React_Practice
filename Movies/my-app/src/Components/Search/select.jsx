import React from "react";
import Select from "react-select";
import styles from "./search.css";
import OPTIONS from "../options";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SelectAction } from "../../store/actions/select";

const SearchSelect = ({ selectedOption, changeCategory }) => (
  <div>
    <h3>Search by category</h3>
    <Select
      className={styles.select}
      value={selectedOption}
      onChange={changeCategory}
      options={OPTIONS}
    />
  </div>
);

SearchSelect.propTypes = {
  // selectedOption: PropTypes.func,
  changeCategory: PropTypes.func
};
const mapStateToProps = state => ({
  selectedOption: state.currentSelect
});
const mapDispatchToProps = dispatch => ({
  changeCategory: val => dispatch(SelectAction(val))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchSelect);
