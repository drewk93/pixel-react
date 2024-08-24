import React, {createContext, useState } from 'react';

export const AppContext = createContext('App Context');

function AppContextProvider({children}){

    // State
    const [mouseDown, setMouseDown] = useState(false);
    const [selectedColor, setSelectedColor] = useState('#000000');
    const [pixelCount, setPixelCount] = useState(100);
    const [rowCount, setRowCount] = useState(100);

    const handleMouseUp = () => {
        setMouseDown(false);
    }
    const handleMouseDown = (e) => {
        setMouseDown(true);
        changePixelColor(e)
    }
    const handleMouseOver = (e) => {
        if (mouseDown) {
            changePixelColor(e);
        }
    }
    const changePixelColor = (e) => {
        const _isPixel = (element) => element.classList.contains('pixel');
        if(mouseDown && _isPixel(e.target)){
            e.target.style.background = selectedColor;
        }
    }



    // Functions

    return (
        <AppContext.Provider value={{
            // State
            mouseDown, 
            setMouseDown,
            selectedColor, 
            setSelectedColor,
            pixelCount,
            setPixelCount,
            rowCount,
            setRowCount,
            // Functions
            handleMouseUp,
            handleMouseDown,
            handleMouseOver
            
        }}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider

