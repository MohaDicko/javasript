// Fonctions de manipulation de chaînes

function reverseString(str) {
    return str.split('').reverse().join('');
}

function countCharacters(str) {
    return str.length;
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Fonctions du tableau

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Fonctions mathématiques

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function fibonacciSequence(numTerms) {
    const sequence = [0, 1];
    for (let i = 2; i < numTerms; i++) {
        const nextNum = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNum);
    }
    return sequence;
}

// Test des fonctions

const outputElement = document.getElementById('output');

// Fonctions de manipulation de chaînes
outputElement.innerHTML += "<h2>Fonctions de manipulation de chaînes</h2>";
outputElement.innerHTML += "<p>Chaîne inversée de 'Hello': " + reverseString('Hello') + "</p>";
outputElement.innerHTML += "<p>Nombre de caractères dans 'Hello World': " + countCharacters('Hello World') + "</p>";
outputElement.innerHTML += "<p>Mise en majuscule des premières lettres de chaque mot dans 'hello world': " + capitalizeWords('hello world') + "</p>";

// Fonctions du tableau
outputElement.innerHTML += "<h2>Fonctions du tableau</h2>";
const numbersArray = [1, 2, 3, 4, 5];
outputElement.innerHTML += "<p>Valeur maximale dans le tableau [1, 2, 3, 4, 5]: " + findMax(numbersArray) + "</p>";
outputElement.innerHTML += "<p>Valeur minimale dans le tableau [1, 2, 3, 4, 5]: " + findMin(numbersArray) + "</p>";
outputElement.innerHTML += "<p>Somme des éléments du tableau [1, 2, 3, 4, 5]: " + sumArray(numbersArray) + "</p>";
outputElement.innerHTML += "<p>Filtrage du tableau [1, 2, 3, 4, 5] pour les nombres pairs: " + filterArray(numbersArray, num => num % 2 === 0) + "</p>";

// Fonctions mathématiques
outputElement.innerHTML += "<h2>Fonctions mathématiques</h2>";
outputElement.innerHTML += "<p>Factorielle de 5: " + factorial(5) + "</p>";
outputElement.innerHTML += "<p>Est-ce que 7 est premier? " + isPrime(7) + "</p>";
outputElement.innerHTML += "<p>Séquence de Fibonacci des 10 premiers termes: " + fibonacciSequence(10) + "</p>";
