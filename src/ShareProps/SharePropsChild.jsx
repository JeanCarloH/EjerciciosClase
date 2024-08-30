import react from 'react';

const SharePropsChild = ({contador, handleIncrementar, handleDecrementar, handleResetear,restarDiez}) => {



    return (
        <div>
            <h1>Child Component</h1>
            <h1>Contador: {contador}</h1>
            <button onClick={handleIncrementar}>Incrementar</button>
            <button onClick={handleDecrementar}>Decrementar</button>
            <button onClick={handleResetear}>Resetear</button>
            <button onClick={restarDiez}>Restar 10</button>

        </div>
    );
}
export default SharePropsChild;