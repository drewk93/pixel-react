import React, { useState } from 'react';
import Pixels from './Pixels'

const PixelRow = props => {

    const {rowCount, 
            pixelCount,
           } = props;     
    return (
        <>
            {Array.from({ length: rowCount }).map((_, index) => (
                <div className="pixel-row" key={index}>
                    <Pixels pixelCount={pixelCount} />
                </div>
            ))}
        </>
    )
}

export default PixelRow;