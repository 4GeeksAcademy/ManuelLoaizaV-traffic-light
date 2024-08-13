import React, { useState } from 'react';
import Light from './light';

// TODO:
// - Add reset button.
// - For changing the active light automatically, store the previous one to know the direction of movement, and so, the next one.
// - Because of having used a flex for appending a Light, adding more lights is trivial, even the automatic movement due to having a general solution to the previous task.

// JSX elements directly inside a map() call always need keys!
// See https://react.dev/learn/rendering-lists

export default function TrafficLight() {
    const [activeLightKey, setActiveLightKey] = useState(0);

    const lights = [
        { key: 0, color: 'danger' },
        { key: 1, color: 'warning'},
        { key: 2, color: 'success' }
    ];

    function handleClick(lightKey) {
        setActiveLightKey(lightKey);
    };

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-1 bg-dark' style={{ width: '50px', height: '200px' }}></div>
            </div>
            <div className='row d-flex justify-content-center'>
                <div className='col-4 bg-dark'>
                    <div class='d-flex flex-column justify-content-center align-items-center'>
                        {lights.map(light => <Light key={light.key} color={light.color} isActive={activeLightKey === light.key} onClick={() => handleClick(light.key)}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};