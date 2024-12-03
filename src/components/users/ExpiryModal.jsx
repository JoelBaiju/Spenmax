import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExpiryModal = () => {

    const Navigate = useNavigate()
    const redirect = () => {
        Navigate('/Pricing')
    }
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white rounded-md shadow-md p-8 max-w-md">
                <h2 className="text-red-500 font-medium text-2xl mb-4">Your subscription has expired!</h2>
                <p className="font-medium text-sm mb-6">Please contact our customer care to renew your subscription.</p>
                <div className='flex justify-center'>
                    <button onClick={redirect} className="bg-[#80509F] text-white px-5 py-2 rounded-md">Purachse</button>
                </div>
            </div>
        </div>
    );
};

export default ExpiryModal;
