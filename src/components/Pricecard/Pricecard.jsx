import React from 'react';
import Feature from '../Feature/Feature';


const Pricecard = ({ price }) => {
    return (
        <div className='bg-indigo-300 rounded-md p-4 m-2 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold text-emerald-600'>{price.price}</span>
                <span className='text-2xl font-semibold'>/Month</span></h2>
            <h5 className='text-2xl font-bold'>{price.name}</h5>
            <p className='underline font-bold'>Features : </p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}>
                </Feature>)
            }
            <button className='w-full rounded-lg font-bold bg-slate-50 hover:bg-rose-600 p-3 mt-auto'>Buy Now</button>
        </div>
    );
};

export default Pricecard;