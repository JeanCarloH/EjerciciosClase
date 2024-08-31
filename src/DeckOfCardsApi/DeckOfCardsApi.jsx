import React, { useState, useEffect } from 'react';

const CardGame = () => {
  const [deckId, setDeckId] = useState(null); // ID del mazo
  const [playerCard, setPlayerCard] = useState(null); // Carta del jugador
  const [computerCard, setComputerCard] = useState(null); // Carta de la computadora
  const [playerScore, setPlayerScore] = useState(0); // Puntuación del jugador
  const [computerScore, setComputerScore] = useState(0); // Puntuación de la computadora
  const [message, setMessage] = useState('¡Empecemos el juego!'); // Mensaje para mostrar el resultado

  // Barajar un nuevo mazo al cargar el componente
  useEffect(() => {
    const shuffleDeck = async () => {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
      const data = await response.json();
      setDeckId(data.deck_id); // Guardar el ID del mazo barajado
    };

    shuffleDeck();
  }, []);

  // Función para sacar dos cartas (una para el jugador y otra para la computadora)
  const drawTwoCards = async () => {
    if (!deckId) return;

    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
    const data = await response.json();

    if (data.cards.length < 2) {
      setMessage('No hay suficientes cartas para continuar. ¡Barajemos de nuevo!');
      return;
    }

    const playerCard = data.cards[0];
    const computerCard = data.cards[1];

    setPlayerCard(playerCard);
    setComputerCard(computerCard);

    // Determinar el ganador de la ronda
    determineWinner(playerCard, computerCard);
  };

  // Función para determinar el ganador basado en el valor de las cartas
  const determineWinner = (playerCard, computerCard) => {
    const playerValue = getValue(playerCard.value);
    const computerValue = getValue(computerCard.value);

    if (playerValue > computerValue) {
      setPlayerScore(playerScore + 1);
      setMessage('¡Ganaste esta ronda!');
    } else if (computerValue > playerValue) {
      setComputerScore(computerScore + 1);
      setMessage('¡La computadora gana esta ronda!');
    } else {
      setMessage('Es un empate en esta ronda.');
    }
  };

  // Función para obtener el valor numérico de una carta
  const getValue = (value) => {
    if (value === 'ACE') return 14;
    if (value === 'KING') return 13;
    if (value === 'QUEEN') return 12;
    if (value === 'JACK') return 11;
    return parseInt(value);
  };

  // Función para reiniciar el juego (nuevas barajas y puntuaciones)
  const resetGame = async () => {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const data = await response.json();
    setDeckId(data.deck_id);
    setPlayerCard(null);
    setComputerCard(null);
    setPlayerScore(0);
    setComputerScore(0);
    setMessage('¡Nuevo juego, buena suerte!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Juego de Cartas: Jugador vs Computadora</h1>
      <p>{message}</p>
      <div>
        <button onClick={drawTwoCards} style={{ marginRight: '10px' }}>Sacar Cartas</button>
        <button onClick={resetGame}>Reiniciar Juego</button>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ marginRight: '50px' }}>
          <h2>Jugador</h2>
          {playerCard ? (
            <img src={playerCard.image} alt={playerCard.code} style={{ width: '100px' }} />
          ) : (
            <p>No hay carta</p>
          )}
          <h3>Puntuación: {playerScore}</h3>
        </div>

        <div>
          <h2>Computadora</h2>
          {computerCard ? (
            <img src={computerCard.image} alt={computerCard.code} style={{ width: '100px' }} />
          ) : (
            <p>No hay carta</p>
          )}
          <h3>Puntuación: {computerScore}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardGame;
