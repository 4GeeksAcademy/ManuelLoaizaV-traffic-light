import React from 'react';

// TODO: Make dimensions responsive
export default function Light({ color, isActive, onClick }) {
    return (
        <div className={`bg-${isActive ? color : 'black'} rounded-circle`} onClick={onClick} style={{width: '200px', height: '200px'}}></div>
    );
};