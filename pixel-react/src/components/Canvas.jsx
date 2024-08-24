 import Pixels from './Pixels'
 import PixelRow from './PixelRow'
 import {useState, useEffect} from 'react';
 import { AppContext } from '../context/AppContext'
 
 const Canvas = () => {

    return (
        <section id="canvas-component">
            <div id="canvas-area">
                <PixelRow />
            </div>
        </section>
    )
}

export default Canvas;
