import React from 'react';
import Light from './light';

// TODO:
// - Add reset button.
// - For changing the active light automatically, store the previous one to know the direction of movement, and so, the next one.
// - Because of having used a flex for appending a Light, adding more lights is trivial, even the automatic movement due to having a general solution to the previous task.

// JSX elements directly inside a map() call always need keys!
// See https://react.dev/learn/rendering-lists

export default function TrafficLight({ activeLightKey, lights, setActiveLightKey }) {
    function handleClick(lightKey) {
        setActiveLightKey(lightKey);
    };

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-1 bg-dark' style={{ width: '50px', height: '200px' }}></div>
            </div>
            <div className='row d-flex justify-content-center'>
                <div className='col-3 bg-dark mb-5' style={{ minWidth: '300px' }}>
                    <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                        {lights.map(light => <Light key={light.key} color={light.color} isActive={activeLightKey === light.key} onClick={() => handleClick(light.key)}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};