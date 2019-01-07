import React from "react";

const SearchBar = ({ value, onChange }) => {
    return (
        <div>
            <h4>Filter books by title</h4>
            <input className="searchBar" type="text" value={value} onChange={onChange} />
        </div>
    )
}

export default SearchBar;