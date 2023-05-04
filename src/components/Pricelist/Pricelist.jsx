import React, { useEffect, useState } from 'react';
import './Pricelist.css';
import Pricecard from '../Pricecard/Pricecard';

const Pricelist = () => {
    const [prices, setPrices] = useState([])
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data));
    }, [])
    return (
        <div>
            <h1 className='text-6xl bg-purple-300 font-bold p-5 text-center'>Affordable</h1>
            <div className='text-center mt-5 grid grid-cols-3 gap-4'>
                {
                    prices.map(price => <Pricecard
                        key={price.id}
                        price={price}
                    ></Pricecard>)
                }
            </div>
        </div>
    );
};


export default Pricelist;