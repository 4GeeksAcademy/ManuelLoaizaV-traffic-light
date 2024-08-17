import React from 'react';

export default function AddLightButton({ addLight }) {
    return (
        <div className='d-flex justify-content-center mb-5'>
            <button type='button' className='btn btn-secondary' onClick={addLight}>Add Light</button>
        </div>
    );
}
