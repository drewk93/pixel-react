 import PixelRow from './PixelRow'
 import ColorPicker from './ColorPicker'
 import {useState, useEffect} from 'react';
 import { AppContext } from '../context/AppContext'
 
 const Canvas = () => {

    return (
        <section id="canvas-component">
            <div id="canvas-area">
                <PixelRow />
            </div>
            <ColorPicker/>
        </section>
    )
}

export default Canvas;
