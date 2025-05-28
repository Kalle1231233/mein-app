import React from 'react';
import ToggleBox from './ToggleBox';

const ToggleBoxContainer: React.FC = () => {
    // Create an array of box IDs
    const boxes = [1, 2, 3, 4];

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {boxes.map(id => (
                    <ToggleBox key={id} id={id} />
                ))}
            </div>
        </div>
    );
};

export default ToggleBoxContainer;