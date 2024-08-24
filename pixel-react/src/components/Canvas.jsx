 import Pixels from './Pixels'
 import PixelRow from './PixelRow'
 import {useState, useEffect} from 'react';
 
 const Canvas = () => {

    
    const [mouseDown, setMouseDown] = useState(false);
    const [selectedColor, setSelectedColor] = useState('black');
    const [pixelCount, setPixelCount] = useState(100);
    const [rowCount, setRowCount] = useState(100)

    const _mouseUp = () => {
        setMouseDown(false);
    }

    const _mouseDown = (e) => {
        setMouseDown(true);
        changeColor(e)
    }
    
    const _mouseOver = (e) => {
        if (mouseDown) {
            changeColor(e);
        }
    }

    const changeColor = (e) => {
        const _isPixel = (element) => element.classList.contains('pixel');
        if(mouseDown && _isPixel(e.target)){
            e.target.style.background = 'black';
        }
    }

    return (
        <section id="canvas-component">
            <div id="canvas-area">
                <PixelRow rowCount={rowCount} pixelCount={pixelCount} _mouseUp={_mouseUp} _mouseDown={_mouseDown} _mouseOver={_mouseOver} changeColor={changeColor}/>
            </div>
        </section>
    )
}

export default Canvas;
