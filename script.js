const questions = [
    { question: "¿Cuál es la capital de Francia?", answer: "paris" },
    { question: "¿Cuál es la capital de España?", answer: "madrid" },
    { question: "¿Cuál es la capital de Italia?", answer: "roma" },
    { question: "¿Cuál es la capital de Alemania?", answer: "berlin" },
    { question: "¿De qué color es el cielo en un día despejado?", answer: "azul" },
    { question: "¿De qué color es el sol?", answer: "amarillo" },
    { question: "¿De qué color es la nieve?", answer: "blanco" },
    { question: "¿De qué color es una banana madura?", answer: "amarillo" },
    { question: "¿Cuánto es 2 + 2?", answer: "4" },
    { question: "¿Cuánto es 5 x 3?", answer: "15" },
    { question: "¿Cuánto es 10 / 2?", answer: "5" },
    { question: "¿Cuánto es 7 - 3?", answer: "4" },
    { question: "¿Quién ganó el Mundial de Fútbol en 1986?", answer: "argentina" },
    { question: "¿En qué año ganó Argentina la Copa América más reciente?", answer: "2021" },
    { question: "¿Quién es el máximo goleador histórico de la selección argentina?", answer: "messi" },
    { question: "¿Cuál es la fecha de la Revolución de Mayo en Argentina?", answer: "25 de mayo" },
    { question: "¿Cuál es la fecha de la Declaración de la Independencia de Argentina?", answer: "9 de julio" },
    { question: "¿Cuál es la fecha del Día de la Bandera en Argentina?", answer: "20 de junio" }
];

let currentLevel = 0;
let score = 0;

function updateQuestion() {
    document.getElementById("level").textContent = `Nivel: ${currentLevel + 1}`;
    document.getElementById("question").textContent = questions[currentLevel].question;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
}

function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase().trim();
    const result = document.getElementById("result");

    if (answer === questions[currentLevel].answer) {
        result.textContent = "¡Correcto!";
        result.style.color = "green";
        score++;
    } else {
        result.textContent = "Incorrecto.";
        result.style.color = "red";
    }

    currentLevel++;
    if (currentLevel < questions.length) {
        setTimeout(updateQuestion, 1000);
    } else {
        setTimeout(showFinalScore, 1000);
    }
}

function showFinalScore() {
    const result = document.getElementById("result");
    result.textContent = `¡Juego terminado! Tu puntuación es: ${score} de ${questions.length}`;
    document.getElementById("question").textContent = "";
    document.getElementById("answer").style.display = "none";
    document.querySelector("button[onclick='checkAnswer()']").style.display = "none";
    document.getElementById("restart").style.display = "block";
}

function restartGame() {
    currentLevel = 0;
    score = 0;
    document.getElementById("answer").style.display = "block";
    document.querySelector("button[onclick='checkAnswer()']").style.display = "block";
    document.getElementById("restart").style.display = "none";
    updateQuestion();
}

window.onload = updateQuestion;
