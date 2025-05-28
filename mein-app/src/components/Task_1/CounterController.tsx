import React, { useState } from 'react';
import RenderVisualizer from './RenderVisualizer';

const CounterController: React.FC = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="mb-4">
                <p className="text-lg mb-2">Counter: <span className="font-semibold">{count}</span></p>
                <button
                    onClick={handleIncrement}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Increment Count
                </button>
            </div>
            <div className="mt-4">
                <RenderVisualizer count={count} />
            </div>
        </div>
    );
};

export default CounterController;