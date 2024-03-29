import React from "react";
import 'tachyons';

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search Your Friends"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox