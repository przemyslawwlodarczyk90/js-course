// ============================================================
// JS-084 — Czym są moduły ES i dlaczego React ich używa
// ============================================================

// Do tej pory każdy plik w kursie był samodzielnym skryptem.
// W prawdziwych projektach (i w KAŻDYM projekcie React) kod dzieli się
// na wiele plików, które komunikują się przez import/export.
// Ten plik jest modułem ES — pozwala na to package.json obok
// z ustawieniem { "type": "module" }. Uruchom go: node lekcja.js

// ============================================================
// JS-085 — Named import (import nazwany)
// ============================================================

// Importujemy dokładnie te nazwy, które plik wyeksportował przez `export`
import { dodaj, odejmij, PI } from "./mathUtils.js";

console.log(dodaj(2, 3)); // 5
console.log(odejmij(10, 4)); // 6
console.log(PI); // 3.14159

// Ścieżka MUSI zawierać rozszerzenie .js w natywnych modułach ES
// (inaczej niż w bundlerach typu Vite/Webpack używanych w React, gdzie
// rozszerzenie często można pominąć)

// ============================================================
// JS-086 — Default import (import domyślny)
// ============================================================

// Plik może mieć TYLKO JEDEN `export default`.
// Import domyślny NIE używa klamerek i można go nazwać dowolnie po stronie importu.
import pomnoz from "./mathUtils.js"; // to samo co "export default function pomnoz"

console.log(pomnoz(4, 5)); // 20

// Można zaimportować nazwaną wartość pod inną nazwą po swojej stronie:
import { PI as LiczbaPi } from "./mathUtils.js";
console.log(LiczbaPi); // 3.14159

// ============================================================
// JS-087 — Łączenie named i default w jednym imporcie
// ============================================================

import odwroc, { capitalize, slugify, WERSJA } from "./stringUtils.js";

console.log(odwroc("javascript")); // "tpircsavaj" — default import
console.log(capitalize("react")); // "React"       — named import
console.log(slugify("  Kurs   JS  ")); // "kurs-js"
console.log(WERSJA); // "1.0.0"

// ============================================================
// JS-088 — Import wszystkiego jako obiekt (namespace import)
// ============================================================

import * as MathUtils from "./mathUtils.js";

console.log(MathUtils.dodaj(1, 1)); // 2
console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.default(3, 3)); // 9 — default trafia pod klucz "default"

// ============================================================
// JS-089 — Import dynamiczny (import())
// ============================================================

// import() zwraca Promise — moduł ładowany jest "na żądanie" (lazy loading).
// W React ten dokładny mechanizm stoi za React.lazy() i code-splittingiem.

async function zaladujModulNaZadanie() {
  const modul = await import("./stringUtils.js");
  console.log(modul.capitalize("dynamiczny import")); // "Dynamiczny import"
}
zaladujModulNaZadanie();

// ============================================================
// JS-090 — Analogia do React
// ============================================================

// W projekcie React zamiast mathUtils.js/stringUtils.js masz komponenty:
//
//   // Button.jsx
//   export default function Button() { ... }
//   export const BUTTON_SIZES = { small: "sm", large: "lg" };
//
//   // App.jsx
//   import Button, { BUTTON_SIZES } from "./Button.jsx";
//
// To DOKŁADNIE ta sama składnia, którą właśnie przećwiczyłeś —
// tylko zamiast funkcji matematycznych importujesz komponenty.
