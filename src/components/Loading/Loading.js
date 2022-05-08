import React from 'react';

const Loading = () => {
    return (
        <div style={{height: '300px'}} className='w-100 d-flex justify-content-center align-items-center'>
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>

                <div class="spinner-grow text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
        </div>
    );
};

export default Loading;