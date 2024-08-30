import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // useCallback asegura que la función solo se cree una vez a menos que `text` cambie
    const handleTextChange = useCallback((e) => {
        setText(e.target.value);
    }, []);

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <input type="text" value={text} onChange={handleTextChange} />
            {/* ChildComponent solo se renderizará si `text` cambia */}
            <ChildComponent text={text} />
        </div>
    );
};

export default ParentComponent;
