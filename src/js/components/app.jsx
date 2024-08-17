import React, { useState } from 'react';
import TrafficLight from './traffic-light';
import AddLightButton from './add-light-button';

const baseColors = [
    'danger',
    'warning',
    'success'
];

const extraColors = [
    'primary',
    'secondary',
    'info',
    'light'
];

export default function App() {
    const [activeLightKey, setActiveLightKey] = useState(0);

    const [lights, setLights] = useState(
        baseColors.map((color, index) => ({ color, key: index }))
    );

    function addLight() {
        const newLight = {
            key: lights.length,
            color: extraColors[(lights.length - baseColors.length) % extraColors.length]
        };
        setLights([...lights, newLight]);
    }

    return (
        <>
            <TrafficLight activeLightKey={activeLightKey} lights={lights} setActiveLightKey={setActiveLightKey} />
            <AddLightButton addLight={addLight} />
        </>
    );
}
