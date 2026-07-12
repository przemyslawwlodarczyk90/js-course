// ============================================================
// JS-014 — Function declaration vs function expression
// ============================================================

// Declaration: hoistowana — można wywołać przed definicją
console.log(add(2, 3)); // 5 — działa dzięki hoistingowi
function add(a, b) {
  return a + b;
}

// Expression: nie jest hoistowana
// console.log(multiply(2, 3)); // TypeError
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(2, 3)); // 6

// Różnica praktyczna: expression → zamknięta w stałej zmiennej
// → łatwiej przekazać jako argument, nie "wycieka" przez hoisting

// ============================================================
// JS-015 — Arrow function
// ============================================================

// Pełna forma
const square = (x) => {
  return x * x;
};

// Skrót: jeden parametr, jedno wyrażenie
const double = x => x * 2;
const greet = name => `Cześć, ${name}!`;
const getPi = () => 3.14159;

// Zwracanie obiektu — musisz owinąć w nawiasy
const makeUser = (name, age) => ({ name, age });
console.log(makeUser("Anna", 28)); // { name: "Anna", age: 28 }

// Arrow function NIE ma własnego this — kluczowe dla klas i callbacków
function Timer() {
  this.seconds = 0;
  // Arrow: this odnosi się do Timer, nie do setInterval
  setInterval(() => {
    this.seconds++;
  }, 1000);
}

// ============================================================
// JS-016 — Funkcja anonimowa
// ============================================================

// Funkcja bez nazwy — używana "w miejscu"
const nums = [3, 1, 4, 1, 5, 9];

nums.sort(function(a, b) { return a - b; }); // anonimowa
nums.sort((a, b) => a - b);                  // arrow (też anonimowa)

// IIFE — Immediately Invoked Function Expression
const result = (function() {
  const x = 10;
  const y = 20;
  return x + y;
})();
console.log(result); // 30 — x i y nie istnieją poza IIFE

// ============================================================
// JS-017 — Funkcja callbackowa i predykatowa
// ============================================================

// Callback: funkcja przekazana jako argument, wywołana przez odbiorcę
function runTwice(callback, value) {
  console.log(callback(value));
  console.log(callback(value));
}

runTwice(x => x * 2, 5);  // 10, 10
runTwice(String, 42);      // "42", "42"

// Predykat: callback zwracający boolean
const isAdult = user => user.age >= 18;
const isActive = user => user.active === true;

const users = [
  { name: "Jan", age: 16, active: true },
  { name: "Anna", age: 25, active: false },
  { name: "Piotr", age: 32, active: true },
];

console.log(users.filter(isAdult));   // Anna, Piotr
console.log(users.filter(isActive));  // Jan, Piotr
console.log(users.filter(u => isAdult(u) && isActive(u))); // Piotr

// Higher-order function: przyjmuje lub zwraca funkcję
function createMultiplier(factor) {
  return value => value * factor;
}

const triple = createMultiplier(3);
const quadruple = createMultiplier(4);
console.log(triple(5));    // 15
console.log(quadruple(5)); // 20

// ============================================================
// JS-018 — Closures (domknięcia)
// ============================================================

// Closure: funkcja "pamięta" zmienne ze swojego leksykalnego zasięgu
// nawet gdy zewnętrzna funkcja już skończyła działać

function makeCounter(start = 0) {
  let count = start; // ta zmienna "żyje" w domknięciu

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => { count = start; },
    value: () => count,
  };
}

const counter = makeCounter(10);
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value()); // 11

// Dwa oddzielne countery mają oddzielne closure
const c1 = makeCounter();
const c2 = makeCounter(100);
c1.increment();
c2.increment();
console.log(c1.value()); // 1
console.log(c2.value()); // 101 — niezależne

// Closure do zapamiętania konfiguracji
function createLogger(prefix) {
  return (message) => console.log(`[${prefix}] ${message}`);
}

const infoLog = createLogger("INFO");
const errorLog = createLogger("ERROR");

infoLog("Serwer uruchomiony");   // [INFO] Serwer uruchomiony
errorLog("Baza danych offline"); // [ERROR] Baza danych offline

// Closure z memoizacją
function memoize(fn) {
  const cache = {};
  return function(n) {
    if (n in cache) {
      console.log("cache hit:", n);
      return cache[n];
    }
    cache[n] = fn(n);
    return cache[n];
  };
}

const slowSquare = memoize(n => n * n);
console.log(slowSquare(4));  // 16 (obliczono)
console.log(slowSquare(4));  // 16 cache hit
console.log(slowSquare(5));  // 25 (obliczono)
