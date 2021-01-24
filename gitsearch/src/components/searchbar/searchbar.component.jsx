import React from 'react';


const SearchBar = ({placeholder, ...otherProps}) => (
    <div>
        <input
            type='text'
            className='searchbar'
            placeholder={placeholder}
            {...otherProps}
        />
    </div>
)
export default SearchBar;