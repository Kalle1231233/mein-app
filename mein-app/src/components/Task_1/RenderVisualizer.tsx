import React, { useState, useEffect } from 'react';

interface RenderVisualizerProps {
    count: number;
}

const RenderVisualizer: React.FC<RenderVisualizerProps> = ({ count }) => {
    const colors = ['red', 'green', 'blue', 'orange', 'purple'];
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        // Cycle through colors when count changes
        setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, [count]); // Re-run when count changes

    return (
        <div className="flex flex-col items-center">
            <div
                className="w-24 h-24 flex items-center justify-center transition-colors duration-300 rounded"
                style={{ backgroundColor: colors[colorIndex] }}
            >
                <span className="text-white font-semibold">Count: {count}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
                Current color: <span className="font-semibold">{colors[colorIndex]}</span>
            </p>
        </div>
    );
};

export default RenderVisualizer;