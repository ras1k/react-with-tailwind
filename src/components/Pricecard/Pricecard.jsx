import React from 'react';

const Pricecard = ({price}) => {
    return (
        <div>
            <h2>
            <span className='text-5xl font-extrabold text-emerald-600'>{price.price}</span>
            <span className='text-2xl font-semibold'>/Month</span></h2>
            <h5 className='text-2xl font-bold'>lol {price.name}</h5>
        </div>
    );
};

export default Pricecard;