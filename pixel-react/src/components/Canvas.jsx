 import Pixels from './Pixels'
 import PixelRow from './PixelRow'
 import {useState, useEffect} from 'react';
 
 const Canvas = () => {

    const colors = ['black']
    const [currentColor, setCurrentColor] = useState(colors[0]);
    const [pixelCount, setPixelCount] = useState(1000);
    const [rowCount, setRowCount] = useState(140)
    const colorPixel = (currentColor) => {
        
    }



    return (
        <section id="canvas-component">
            <div id="canvas-area">
                <PixelRow rowCount={rowCount} pixelCount={pixelCount}/>
            </div>
        </section>
    )
}

export default Canvas;
