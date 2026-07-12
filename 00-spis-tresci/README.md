# Spis treści — Kurs JavaScript pod React

Cel kursu: solidne opanowanie **mechaniki, składni i metod** czystego JavaScriptu,
zanim zacznie się naukę Reacta. React sam w sobie uczy nowych rzeczy (JSX, komponenty,
hooki, stan) — ten kurs ma sprawić, że sam JavaScript **przestanie być przeszkodą**
i zacznie być narzędziem, którym się już swobodnie posługujesz.

## Jak zbudowany jest każdy rozdział

Każdy folder zawiera do trzech plików:

- **`lekcja.js`** — materiał teoretyczny z przykładami. Czytaj i uruchamiaj (`node lekcja.js`).
  Zawiera gotowy, działający kod z komentarzami tłumaczącymi *dlaczego*, nie tylko *co*.
- **`cwiczenia.js`** — główny plik ćwiczeniowy. Dużo prostych, mechanicznych zadań
  ćwiczących pojedynczą metodę/składnię na raz — bez algorytmów, bez łamigłówek,
  bez wieloetapowych "mini-projektów". Chodzi o powtórzenie, aż mechanika wejdzie w nawyk.
- **`dodatkowe.js`** — dodatkowa porcja ćwiczeń w tym samym duchu, gdy chcesz więcej powtórek.

Rozdziały z folderem `index.html` (DOM, zdarzenia, asynchroniczność, środowisko
przeglądarkowe) ćwiczysz **w przeglądarce**: otwórz `index.html`, odkomentowuj
kolejne zadania w `cwiczenia.js` i sprawdzaj efekt na żywo.

## Filozofia ćwiczeń

Świadomie **nie ma tu** zadań w stylu leetcode/algorytmicznym (sortowanie od zera,
rekurencyjne łamigłówki, "zoptymalizuj to"), ani rozbudowanych scenariuszy biznesowych
(koszyk zakupowy, system sesji, generator ID). Na tym etapie liczy się co innego:
żebyś bez zastanowienia sięgał po `.map()`, `.filter()`, destrukturyzację, spread,
`this`, klasy, `import/export` — bo *znasz* te narzędzia z pamięci mięśniowej, a nie
dlatego, że rozwiązałeś nimi jedną spektakularną łamigłówkę.

---

## Kolejność rozdziałów

### Część 1 — Rdzeń języka

| # | Folder | Temat |
|---|--------|-------|
| 01 | `01-zmienne` | `var`, `let`, `const`, hoisting, zasięgi (scope), TDZ |
| 02 | `02-typy-danych` | String, Number, BigInt, Boolean, null/undefined, Symbol, typy wartościowe vs referencyjne |
| 03 | `03-funkcje` | function declaration/expression, arrow function, callbacki, IIFE, funkcje wyższego rzędu, domknięcia (closures) |
| 04 | `04-tablice` | metody tablicowe (push/pop/splice/slice/sort/filter/map/forEach/flat/flatMap...), destrukturyzacja tablic, spread |
| 05 | `05-obiekty` | tworzenie obiektów, `Object.*`, destrukturyzacja obiektów, optional chaining `?.`, nullish coalescing `??`, spread na obiektach, JSON, `Date` |
| 06 | `06-kontrola-przeplywu` | `if/else`, ternary, `switch`, pętle `for`/`for...of`/`for...in`, `try/catch/finally`, własne klasy błędów, `==` vs `===` |

### Część 2 — Tematy dopisane pod React *(nowość w tej wersji kursu)*

| # | Folder | Temat | Dlaczego to ważne pod React |
|---|--------|-------|------------------------------|
| 07 | `07-this-i-konteksty` | `this`, `call()`, `apply()`, `bind()`, gubienie kontekstu | Event handlery, klasy, przekazywanie metod jako callbacków — źródło większości "dziwnych bugów" u początkujących |
| 08 | `08-klasy` | `class`, konstruktor, pola, gettery/settery, `static`, `extends`/`super`, pola prywatne `#` | Komponenty klasowe (starszy React), zrozumienie OOP, biblioteki spoza Reacta które używają klas |
| 09 | `09-kolekcje` | `Map`, `Set`, `WeakMap`/`WeakSet` | Częste w logice stanu (unikalne ID, deduplikacja, liczenie wystąpień) |
| 10 | `10-moduly` | `import`/`export` (nazwane, domyślne, aliasy, `import *`, `import()` dynamiczny) | To dosłownie składnia, którą zaczyna się KAŻDY plik `.jsx` w Reakcie |

### Część 3 — Środowisko przeglądarkowe

| # | Folder | Temat |
|---|--------|-------|
| 11 | `11-dom` | drzewo DOM, selektory, `textContent`/`innerHTML`, tworzenie/usuwanie elementów, atrybuty i `data-*`, `classList`, style przez JS |
| 12 | `12-zdarzenia` | `addEventListener`, obiekt `event`, zdarzenia myszy/klawiatury/formularza, bubbling, event delegation, wyrażenia regularne |
| 13 | `13-asynchronicznosc` | `setTimeout`/`setInterval`, `Promise`, `async`/`await`, `fetch`, `FormData`, wzorce REST |
| 14 | `14-srodowisko-przegladarkowe` | `window`, `localStorage`/`sessionStorage`, `location`, `history`/History API, standardy ECMAScript, debugowanie |

---

## Co dokładnie dopisano w tej wersji i dlaczego

Kurs pierwotnie kończył się na środowisku przeglądarkowym. Do pełnego przygotowania
pod React brakowało czterech filarów czystego JS, które React zakłada, że już znasz:

1. **`this` i konteksty wywołania** (rozdz. 07) — zanim zrozumiesz, czemu w klasowym
   komponencie robi się `this.handleClick = this.handleClick.bind(this)`, musisz
   rozumieć *skąd się bierze* problem, który to naprawia.
2. **Klasy** (rozdz. 08) — mniej centralne niż kiedyś (dziś dominują komponenty
   funkcyjne + hooki), ale wciąż pojawiają się w starszym kodzie, bibliotekach
   i pytaniach rekrutacyjnych. Bez tego czytanie cudzego kodu bywa trudniejsze niż musi.
3. **Map/Set** (rozdz. 09) — codzienne narzędzia przy pracy ze stanem i listami danych.
4. **Moduły `import`/`export`** (rozdz. 10) — to nie jest dodatek, to **fundament**
   organizacji każdego projektu React. Bez tego pierwszy kontakt z `import App from "./App"`
   byłby zgadywaniem składni zamiast świadomym użyciem.

Reszta kursu (rozdziały 01–06, 11–14) pozostała nietknięta w warstwie `lekcja.js` —
to już był mocny, dobrze ułożony materiał. Zmieniły się tylko **numery folderów**
(07–10 "środowiskowe" przesunęły się na 11–14, żeby zrobić miejsce nowym tematom
rdzenia języka) oraz **treść plików `cwiczenia.js`** we wszystkich rozdziałach —
przepisane od zera tak, żeby ćwiczyły samą mechanikę, a nie łamigłówki.

Ponadto: operatory rozproszenia (spread), callbacki i destrukturyzacja — o które
pytałeś wprost — były już w kursie od dawna (spread: rozdz. 04 i 05; callbacki:
rozdz. 03; destrukturyzacja: rozdz. 04 i 05) i teraz mają dodatkowo dużo świeżych,
mechanicznych ćwiczeń w przepisanych plikach `cwiczenia.js`.

---

## Jak z tego korzystać dzień po dniu

1. Otwórz `lekcja.js` danego rozdziału, czytaj sekcja po sekcji (oznaczone `JS-XXX`),
   uruchamiaj (`node lekcja.js`), eksperymentuj — zmieniaj wartości, dopisuj własne `console.log`.
2. Przejdź do `cwiczenia.js` — rób zadania po kolei, każde zajmuje 1–3 minuty.
   Nie przechodź dalej, dopóki dana metoda nie jest odruchem.
3. Jeśli chcesz więcej powtórek na ten sam temat — `dodatkowe.js`.
4. Rozdziały 11–14: pracuj z otwartym `index.html` w przeglądarce obok edytora.

## Docelowy porządek nauki po zakończeniu kursu

Po rozdziale 14 jesteś gotowy na: JSX i pierwszy komponent → propsy → `useState` →
listy i `key` (tu wprost przyda się `.map()` z rozdz. 04) → zdarzenia w JSX (tu wprost
przyda się rozdz. 07 i 12) → `useEffect` i pobieranie danych (rozdz. 13) → dzielenie
komponentów na pliki (rozdz. 10).
