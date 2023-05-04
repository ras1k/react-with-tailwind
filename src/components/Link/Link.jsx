import React from 'react';

const Link = ({route}) => {
    
    return (
        <li className='flex justify-evenly mr-3'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;