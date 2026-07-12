// ============================================================
// JS-001 — var
// ============================================================

// var: zasięg funkcyjny, można redeklarować i przypisać ponownie
var count = 1;
var count = 2; // redeklaracja — brak błędu
console.log(count); // 2

function showVar() {
  if (true) {
    var inner = "wewnątrz bloku";
  }
  console.log(inner); // "wewnątrz bloku" — var wycieka z bloku if!
}
showVar();

// ============================================================
// JS-002 — Hoisting
// ============================================================

// var jest hoistowany z wartością undefined
console.log(hoisted); // undefined — nie błąd!
var hoisted = "wartość";
console.log(hoisted); // "wartość"

// Deklaracje funkcji też są hoistowane (w całości)
greet("Anna"); // działa mimo że definicja jest niżej
function greet(name) {
  console.log("Cześć", name);
}

// let/const — hoisting istnieje, ale są w Temporal Dead Zone
// console.log(tdzVar); // ReferenceError!
// let tdzVar = 1;

// ============================================================
// JS-003 — let
// ============================================================

// let: zasięg blokowy, nie można redeklarować w tym samym zasięgu
let score = 10;
score = 20; // przypisanie OK
// let score = 30; // SyntaxError — redeklaracja

for (let i = 0; i < 3; i++) {
  // i jest dostępne tylko wewnątrz pętli
}
// console.log(i); // ReferenceError

// ============================================================
// JS-004 — const
// ============================================================

const MAX_RETRIES = 3;
// MAX_RETRIES = 5; // TypeError — nie można przypisać

// const z obiektem: sam wskaźnik jest stały, zawartość nie
const user = { name: "Jan", age: 30 };
user.age = 31; // OK — modyfikujemy właściwość, nie zmienną
// user = {};   // TypeError — nie można przepisać referencji

const tags = ["js", "node"];
tags.push("react"); // OK
console.log(tags); // ["js", "node", "react"]

// ============================================================
// JS-005 — Zasięgi zmiennych
// ============================================================

const globalNote = "globalny";

function outer() {
  const outerNote = "zewnętrzny";

  function inner() {
    const innerNote = "wewnętrzny";
    console.log(globalNote);  // dostęp do globalnego
    console.log(outerNote);   // dostęp do zasięgu nadrzędnego (closure)
    console.log(innerNote);
  }

  inner();
  // console.log(innerNote); // ReferenceError
}

outer();

// ============================================================
// JS-006 — var vs let vs const: kiedy co?
// ============================================================

// Zasada prosta:
// 1. Domyślnie: const
// 2. Jeśli wartość się zmienia: let
// 3. var: tylko przy pracy ze starym kodem

const API_URL = "https://api.example.com"; // stała konfiguracja
let retryCount = 0;                         // zmienia się w pętli

for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
  retryCount++;
}
console.log(retryCount); // 3
