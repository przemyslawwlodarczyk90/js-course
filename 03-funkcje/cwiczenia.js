// ============================================================
// SEKCJA A — ŁATWE / TEORETYCZNE
// ============================================================

// JS-014 — ZADANIE 1: uzupełnij — typy funkcji
// Uzupełnij puste miejsca (___)

// Deklaracja funkcji (hoistowana):
___ greet(name) {
  return `Cześć, ${name}!`;
}

// Wyrażenie funkcyjne (nie hoistowane):
const square = ___ (n) {
  return n * n;
};

// Arrow function (pełna forma):
const cube = (n) ___ {
  return n ** 3;
};

// Arrow function (skrót — jedno wyrażenie):
const double = n ___ n * 2;

// Arrow function (bez parametrów):
const getTimestamp = ___ Date.now();

// Odpowiedzi: function / function / => / => / () =>

// ============================================================
// JS-014 — ZADANIE 2: PRAWDA czy FAŁSZ?
// ============================================================

// Napisz T (prawda) lub F (fałsz) przy każdym stwierdzeniu:

// ___ Deklaracja funkcji jest hoistowana w całości (z ciałem).
// ___ Wyrażenie funkcyjne jest hoistowane jak var (undefined).
// ___ Arrow function przypisana do const jest hoistowana.
// ___ Można wywołać function declaration przed jej definicją w kodzie.
// ___ Można wywołać function expression przed jej definicją w kodzie.
// ___ function declaration i function expression są zawsze wymienne.

// Odpowiedzi:

// ============================================================
// JS-015 — ZADANIE 3: uzupełnij — arrow functions
// ============================================================

// Przepisz na skróconą formę arrow function:

const addFull = (a, b) => {
  return a + b;
};
// Skrót:
const add = ___; // (a, b) => a + b

const getNameFull = (user) => {
  return user.name;
};
// Skrót:
const getName = ___; // user => user.name

const getEmptyObjFull = () => {
  return {};
};
// Skrót: return {} wymaga nawiasów — dlaczego?
const getEmptyObj = ___; // () => ({})

// Wyjaśnij dlaczego {} wymaga ():

// ============================================================
// JS-015 — ZADANIE 4: PRZEWIDAJ — arrow vs regular i this
// ============================================================

const counter = {
  count: 0,

  incrementRegular: function() {
    this.count++;
    return this.count;
  },

  incrementArrow: () => {
    // this tutaj — co wskazuje? Dlaczego?
    return "this.count nie istnieje tu";
  },
};

console.log(counter.incrementRegular()); // ?
console.log(counter.count);              // ?
console.log(counter.incrementArrow());   // ?

// Odpowiedzi:
// incrementRegular():
// count po regular:
// incrementArrow():
// Wyjaśnij dlaczego arrow nie działa tu jako metoda obiektu:

// ============================================================
// JS-016 — ZADANIE 5: co to jest funkcja anonimowa?
// ============================================================

// Które z poniższych to funkcje anonimowe? Zaznacz A (anonimowa) lub N (nazwana):

// ___ function add(a, b) { return a + b; }
// ___ const fn = function(x) { return x; }
// ___ const fn2 = function namedExpr(x) { return x; }
// ___ arr.forEach(function(item) { console.log(item); })
// ___ arr.forEach(item => console.log(item))
// ___ setTimeout(function showAlert() { alert("!"); }, 1000)

// Odpowiedzi:

// ============================================================
// JS-017 — ZADANIE 6: callback — co to i jak działa?
// ============================================================

// Wyjaśnij w komentarzu co robi poniższy kod, linijka po linijce:

function processNumber(n, fn) {
  // TODO: wyjaśnij co to jest fn
  return fn(n);
}

const result1 = processNumber(5, x => x * 2);     // →
const result2 = processNumber(5, x => x + 100);   // →
const result3 = processNumber(5, Math.sqrt);        // →

// Uzupełnij wyniki:
// result1:
// result2:
// result3:

// ============================================================
// JS-017 — ZADANIE 7: predykaty — uzupełnij
// ============================================================

// Predykat to funkcja zwracająca boolean. Uzupełnij predykaty:

const users = [
  { name: "Anna", age: 17, active: true },
  { name: "Jan",  age: 25, active: false },
  { name: "Kasia", age: 30, active: true },
];

const isAdult   = user => ___; // wiek >= 18
const isActive  = user => ___; // active === true
const isAdultAndActive = user => ___ && ___;

// Odpowiedzi:

// console.log(users.filter(isAdult));          // Jan, Kasia
// console.log(users.filter(isActive));         // Anna, Kasia
// console.log(users.filter(isAdultAndActive)); // Kasia

// ============================================================
// JS-018 — ZADANIE 8: closure — wyjaśnij
// ============================================================

// Przeczytaj kod. Odpowiedz na pytania w komentarzach.

function makeMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const times3 = makeMultiplier(3);
const times7 = makeMultiplier(7);

console.log(times3(4));  // ?
console.log(times7(4));  // ?
console.log(times3(10)); // ?

// Pytania:
// 1. Gdzie jest przechowywana wartość factor po zakończeniu makeMultiplier()?
// 2. Czy times3 i times7 mają wspólny factor czy osobne?
// 3. Jak nazywamy ten mechanizm?

// Odpowiedzi:
// 1.
// 2.
// 3.

// ============================================================
// SEKCJA B — ŚREDNIO TRUDNE
// ============================================================

// JS-014 — ZADANIE 9: PRZEWIDAJ wynik: hoisting
// ============================================================

sayHello("Jan");
// sayGoodbye("Jan"); // odkomentuj — co się stanie?

function sayHello(name) {
  console.log(`Hej, ${name}!`);
}

const sayGoodbye = function(name) {
  console.log(`Do widzenia, ${name}!`);
};

// Wyniki:
// sayHello:
// sayGoodbye (przed def.):

// ============================================================
// JS-015 — ZADANIE 10: ZAMIEŃ na arrow
// ============================================================

// Przepisz używając arrow functions. Skracaj tam gdzie można.

function isEven(n) { return n % 2 === 0; }
function formatName(first, last) { return `${first} ${last}`; }
function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function wrapInObject(name, role) { return { name, role }; }

// const isEven = ...
// const formatName = ...
// const getRandomInt = ...
// const wrapInObject = ...

// ============================================================
// JS-017 — ZADANIE 11: ZAIMPLEMENTUJ pipeline
// ============================================================

// Napisz funkcję pipe(...fns), która łączy funkcje w pipeline:
// wynik pierwszej idzie na wejście drugiej itd.

function pipe(...fns) {
  // TODO: fns.reduce(...)
}

const process = pipe(
  x => x * 2,
  x => x + 10,
  x => `Wynik: ${x}`,
);

// console.log(process(5)); // "Wynik: 20"

// ============================================================
// JS-018 — ZADANIE 12: ZAIMPLEMENTUJ once()
// ============================================================

// Napisz funkcję once(fn), która zwraca wrapper.
// Wrapper wywołuje fn() tylko przy pierwszym wywołaniu.

function once(fn) {
  // TODO: closure + flaga called + cached result
}

const initDB = once(() => {
  console.log("Inicjalizacja...");
  return { connected: true };
});

// console.log(initDB()); // "Inicjalizacja..." + { connected: true }
// console.log(initDB()); // { connected: true } (bez "Inicjalizacja...")

// ============================================================
// SEKCJA C — TRUDNE / SCENARIUSZE
// ============================================================

// JS-017/018 — ZADANIE 13: walidator z callbackami
// ============================================================

function validate(value, ...rules) {
  // Każda reguła to fn(value) → { valid: bool, error?: string }
  // Zwróć { valid: bool, errors: string[] }
  // TODO
}

const required = v => v != null && v !== ""
  ? { valid: true }
  : { valid: false, error: "Pole wymagane" };

const minLength = min => v => String(v).length >= min
  ? { valid: true }
  : { valid: false, error: `Min. ${min} znaków` };

const maxLength = max => v => String(v).length <= max
  ? { valid: true }
  : { valid: false, error: `Max. ${max} znaków` };

// console.log(validate("ab", required, minLength(3)));
// → { valid: false, errors: ["Min. 3 znaków"] }

// console.log(validate("Anna", required, minLength(3), maxLength(10)));
// → { valid: true, errors: [] }

// ============================================================
// JS-018 — ZADANIE 14: memoize
// ============================================================

function memoize(fn) {
  // TODO: closure + cache object
}

let callCount = 0;
const slowCalc = memoize(n => { callCount++; return n * n; });

// console.log(slowCalc(4));  // 16
// console.log(slowCalc(4));  // 16 (z cache)
// console.log(slowCalc(5));  // 25
// console.log("Wywołań:", callCount); // 2

// ============================================================
// JS-018 — ZADANIE 15: debounce
// ============================================================

function debounce(fn, delay) {
  // TODO: closure + let timerId + setTimeout + clearTimeout
}

const search = debounce(q => console.log("Szukam:", q), 300);

// search("j");
// search("ja");
// search("jav");
// search("java"); // tylko to wypisze (po 300ms)

// ============================================================
// JS-014–018 — ZADANIE 16: system eventów (EventEmitter)
// ============================================================

function createEventEmitter() {
  // TODO: closure + obiekt listeners
  // Metody: on(event, callback), off(event, callback), emit(event, ...args)
}

// const emitter = createEventEmitter();
// const handler = data => console.log("Event:", data);
// emitter.on("data", handler);
// emitter.emit("data", { value: 42 }); // "Event: { value: 42 }"
// emitter.off("data", handler);
// emitter.emit("data", { value: 99 }); // brak wypisania
