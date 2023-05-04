import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-1'>
            <CheckCircleIcon className="h-5 w-5 text-white" />
            <span>{feature}</span>
            
        </div>
    );
};

export default Feature;