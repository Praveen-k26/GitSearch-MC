import React from 'react';
import { MdSearch } from "react-icons/md";
import './searchbar.styles.css';
import CustomButton from "../button/button.component";


const SearchBar = ({placeholder, handleChange,handleClick, label,onSubmit,onClear, value, ...otherProps}) => {


    return (
    <section className='section' data-test='searchbarsection'>
        <div className='section-center'>
            <form onSubmit={onSubmit} data-test='onsubmit'>
                <div className='form-control'>
                    <MdSearch />
                    <input
                        type='text'
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                        data-test='searchfield'
                        onClick={handleClick}
                        {...otherProps}
                    />
                    <span>
                        <CustomButton data-test='clearForm' type='submit' onClick={onClear}>Clear</CustomButton>
                    </span>
                    <span>
                       <CustomButton data-test='submitButton' type='submit'>Submit</CustomButton>
                    </span>
                </div>

            </form>

        </div>
    </section>

)
}
export default SearchBar;