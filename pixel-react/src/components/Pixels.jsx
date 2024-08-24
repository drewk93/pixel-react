import React, { useState } from 'react';

const Pixels = ({ pixelCount }) => {
    // Create an array with pixelData number of elements and initial color for each pixel
    const initialColors = Array.from({ length: pixelCount }, () => 'white');
    const [colors, setColors] = useState(initialColors);

    // Handle click event to change the color of the clicked pixel
    const handleClick = (index) => {
        // Create a new colors array with the updated color for the clicked pixel
        const newColors = [...colors];
        newColors[index] = 'black'; // Change color to black on click
        setColors(newColors);

        // Optionally, you might want to update pixelData or perform other actions here
        // setPixelData(...);
    };

    return (
        <>
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="pixel"
                    style={{ backgroundColor: color }} // Set background color for each pixel
                    onClick={() => handleClick(index)} // Handle click event
                >
                    {/* Render content for each pixel here */}
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
