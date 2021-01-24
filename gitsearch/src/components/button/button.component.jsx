import React from 'react';


const CustomButton = ({children, ...otherProps})  => (
    <button {...otherProps} className='button'>
        {children}
    </button>
);

export default CustomButton