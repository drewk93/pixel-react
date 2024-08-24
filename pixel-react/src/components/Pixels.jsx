import React, { useState } from 'react';

const Pixels = props => {

    const [mouseDown, setMouseDown] = useState(false);
    // Create an array with pixelData number of elements and initial color for each pixel
    const {
        pixelCount,
        _mouseUp,
        _mouseDown,
        _mouseOver,
        changeColor
    } = props;

   


    return (
        <>
           {Array.from({length: pixelCount}).map((_, index) => (
                <div className="pixel" key={index}   onMouseOver={_mouseOver}
                onMouseDown={_mouseDown} onMouseUp={_mouseUp}>

                </div>
           ))}
        </>
    );
};

export default Pixels;


// Consider using this

// const MyComponent = () => {
//   const size = 10;
//   const numArray = [];

//   for (let i = 0; i < size; i++) {
//     numArray.push(size - i);
//   }

//   return (
//     <div>
//       {numArray.map((num, index) => (
//         <div key={index}>Item {num}</div>
//       ))}
//     </div>
//   );
// };
