import React, { useState, useCallback,useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    //if not needed we can aviod writing render variable
    const [render, forceRender] = useState(0);

    //ref doen't change re-renders and we can save value
    const rerender = useRef(0)

    const handleReRender = () => {
        // Update state to force re-render
        //we are just updating state variable to force re-render
        forceRender(Math.random());
    };

    rerender.current++;

    return (
        <div>
            <p>This component has rendered {rerender.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};