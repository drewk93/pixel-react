import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'

const Pixels = props => {

    // Create an array with pixelData number of elements and initial color for each pixel
    const {
        pixelCount,
        handleMouseUp,
        handleMouseDown,
        handleMouseOver,
    } = useContext(AppContext)
   
    return (
        <>
           {Array.from({length: pixelCount}).map((_, index) => (
                <div className="pixel" key={index}   onMouseOver={handleMouseOver}
                onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>

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
