import React from 'react';


const Layout = ({children, title, ...otherProps}) => (
    <div className='container' data-test='layoutComponent'>
        <h2 className='title'>{title}</h2>
            <div className='items'>
                {children}
            </div>
    </div>
)

export default Layout;