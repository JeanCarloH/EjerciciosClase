import React, { useState, useEffect } from 'react';

const TriviaGame = () => {
  const [question, setQuestion] = useState(null); // Pregunta actual
  const [answers, setAnswers] = useState([]); // Respuestas posibles
  const [correctAnswer, setCorrectAnswer] = useState(''); // Respuesta correcta
  const [score, setScore] = useState(0); // Puntuación del jugador
  const [feedback, setFeedback] = useState(''); // Feedback para mostrar si la respuesta es correcta o no

  // Obtener una pregunta aleatoria de trivia cuando se carga el componente
  useEffect(() => {
    fetchQuestion();
  }, []);

  // Función para obtener una pregunta de trivia
  const fetchQuestion = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
    const data = await response.json();
    const triviaQuestion = data.results[0];

    setQuestion(triviaQuestion.question); // Establecer la pregunta
    setCorrectAnswer(triviaQuestion.correct_answer); // Establecer la respuesta correcta

    // Combinar respuestas incorrectas con la respuesta correcta y mezclarlas
    const allAnswers = [...triviaQuestion.incorrect_answers, triviaQuestion.correct_answer];
    setAnswers(shuffleArray(allAnswers));
  };

  // Función para mezclar las respuestas
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Función para manejar la selección de una respuesta
  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1); // Incrementar puntuación
      setFeedback('¡Correcto!');
    } else {
      setFeedback(`Incorrecto! La respuesta correcta era: ${correctAnswer}`);
    }

    // Obtener una nueva pregunta después de 2 segundos
    setTimeout(() => {
      setFeedback('');
      fetchQuestion();
    }, 2000);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Juego de Trivia</h1>
      <h3>Puntuación: {score}</h3>

      {question ? (
        <div>
          <h2>{decodeHTML(question)}</h2>
          <div>
            {answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                style={{ margin: '5px', padding: '10px' }}
              >
                {decodeHTML(answer)}
              </button>
            ))}
          </div>
          {feedback && <h3>{feedback}</h3>}
        </div>
      ) : (
        <p>Cargando pregunta...</p>
      )}
    </div>
  );
};

// Función para decodificar caracteres HTML especiales en las preguntas y respuestas
const decodeHTML = (html) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

export default TriviaGame;
