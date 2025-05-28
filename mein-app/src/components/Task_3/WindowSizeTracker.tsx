import React, { useState, useEffect } from 'react';

const WindowSizeTracker: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Function to update width state
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return (
        <div className="flex flex-col items-center">
            <div className="text-center p-4 border rounded-lg bg-gray-50">
                <p className="text-gray-600 mb-2">Current Window Width:</p>
                <p className="text-2xl font-bold transition-all duration-300">
                    {windowWidth}px
                </p>
            </div>
        </div>
    );
};

export default WindowSizeTracker;