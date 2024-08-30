import React from 'react';

// React.memo evita renderizaciones innecesarias si las props no cambian
const ChildComponent = React.memo(({ text }) => {
    console.log('ChildComponent rendered');

    // Simulando una tarea costosa
    const computeHeavyOperation = (input) => {
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += input * i;
        }
        return result;
    };

    const heavyResult = computeHeavyOperation(text.length);

    return (
        <div>
            <h2>Child Component</h2>
            <p>Text Length: {text.length}</p>
            <p>Heavy Result: {heavyResult}</p>
        </div>
    );
});

export default ChildComponent;
