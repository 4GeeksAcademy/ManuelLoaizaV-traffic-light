import React from 'react';

export default function Light({ color, isActive, onClick }) {
    return (
        <div className={`bg-${isActive ? color : 'black'} rounded-circle ratio ratio-1x1 w-75 my-1`} onClick={onClick}></div>
    );
};