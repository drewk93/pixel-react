import React, { useContext, useState } from 'react';
import Pixels from './Pixels'
import {AppContext} from '../context/AppContext'

const PixelRow = props => {   

    const {rowCount} = useContext(AppContext)

    return (
        <>
            {Array.from({ length: rowCount }).map((_, index) => (
                <div className="pixel-row" key={index}>
                    <Pixels/>
                </div>
            ))}
        </>
    )
}

export default PixelRow;