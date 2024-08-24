import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext'

const ColorPicker = () => {

    const {selectedColor,
       setSelectedColor
    } = useContext(AppContext)

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value)
    }

    return (
        <div id="color-picker">
            <input type="color" id="primary-color" value={selectedColor} onChange={handleColorChange}/>
        </div>
    )

}

export default ColorPicker;