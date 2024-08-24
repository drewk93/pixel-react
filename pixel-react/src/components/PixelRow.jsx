import React, { useState } from 'react';
import Pixels from './Pixels'

const PixelRow = props => {

    const {rowCount, 
            pixelCount,
            colorPixel,
            _mouseUp,
            _mouseDown,
            _mouseOver,
            changeColor
           } = props;     
    return (
        <>
            {Array.from({ length: rowCount }).map((_, index) => (
                <div className="pixel-row" key={index}>
                    <Pixels pixelCount={pixelCount} colorPixel={colorPixel}  _mouseUp={_mouseUp} _mouseDown={_mouseDown} _mouseOver={_mouseOver} changeColor={changeColor} />
                </div>
            ))}
        </>
    )
}

export default PixelRow;