import React, { useState } from 'react';

interface ToggleBoxProps {
    id: number;
}

const ToggleBox: React.FC<ToggleBoxProps> = ({ id }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(prevState => !prevState);
    };

    return (
        <div className="border rounded-lg p-4 flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-2">Box #{id}</p>
            <button
                onClick={toggleActive}
                className={`px-4 py-2 rounded transition-colors ${
                    isActive
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
            >
                Toggle
            </button>
            {isActive && (
                <p className="mt-2 font-medium text-green-600">Active</p>
            )}
        </div>
    );
};

export default ToggleBox;