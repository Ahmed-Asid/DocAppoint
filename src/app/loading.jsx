import React from 'react';

const loading = () => {
    return (
        <div className='h-screen'>
            <div className="flex justify-center mt-20"><span className="loading loading-dots loading-xl"></span></div>
        </div>
    );
};

export default loading;