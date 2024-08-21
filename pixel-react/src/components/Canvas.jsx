 import Pixels from './Pixels'
 import {useState, useEffect} from 'react';
 
 const Canvas = () => {

    const colors = ['black']
    const [currentColor, setCurrentColor] = useState(colors[0]);
    const [pixelData, setPixelData] = useState(10000);
    const colorPixel = (currentColor) => {
        
    }

    return (
        <section id="canvas-component">
            <div id="canvas-area">
                <Pixels pixelData={pixelData} setPixelData={setPixelData} />
            </div>
        </section>
    )
}

export default Canvas;
