// ============================================================
// JS-058 — Obiekt window
// ============================================================

// window — globalny obiekt przeglądarki
// Wszystkie zmienne globalne i funkcje globalne to właściwości window
// W przeglądarce: window === globalThis === this (w top-level)
// W Node.js: globalThis, ale nie window

// Wymiary
console.log(window.innerWidth, window.innerHeight);   // viewport (bez pasków)
console.log(window.outerWidth, window.outerHeight);   // okno przeglądarki
console.log(document.documentElement.clientWidth);    // bez scrollbar
console.log(screen.width, screen.height);             // fizyczny ekran

// Scroll
console.log(window.scrollX, window.scrollY);          // aktualna pozycja
window.scrollTo({ top: 0, behavior: "smooth" });      // płynny scroll na górę
window.scrollBy({ top: 100 });                        // scroll o 100px

// Nasłuchiwanie na zdarzenia window
window.addEventListener("resize", () => {
  document.getElementById("info-size").textContent =
    `Rozmiar: ${window.innerWidth}×${window.innerHeight}`;
});

window.addEventListener("scroll", () => {
  document.getElementById("info-scroll").textContent =
    `Scroll: ${window.scrollX}, ${window.scrollY}`;
});

// Ładowanie strony
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM gotowy (bez obrazów)");
});

window.addEventListener("load", () => {
  console.log("Wszystko załadowane (obrazy, CSS)");
});

window.addEventListener("beforeunload", (e) => {
  // e.preventDefault() + e.returnValue = "" → dialog "Czy opuścić stronę?"
  // Używaj ostrożnie — irytuje użytkowników
});

// Inicjalizacja
document.getElementById("info-origin").textContent = `Origin: ${location.origin}`;
document.getElementById("info-lang").textContent = `Język: ${navigator.language}`;
document.getElementById("info-size").textContent = `Rozmiar: ${window.innerWidth}×${window.innerHeight}`;

// ============================================================
// JS-059 — localStorage i sessionStorage
// ============================================================

// localStorage: persystuje między sesjami (do ręcznego wyczyszczenia)
// sessionStorage: persystuje tylko do zamknięcia zakładki
// Oba: string → string (wymagana serializacja obiektów)

// Zapis
localStorage.setItem("theme", "dark");
localStorage.setItem("lang", "pl");

// Odczyt
console.log(localStorage.getItem("theme"));  // "dark"
console.log(localStorage.getItem("missing")); // null (nie undefined!)

// Usuwanie
localStorage.removeItem("lang");
// localStorage.clear(); // usuwa wszystko

// Obiekty — musisz serializować
const userData = { name: "Anna", role: "admin", lastLogin: new Date().toISOString() };
localStorage.setItem("user", JSON.stringify(userData));
const restoredUser = JSON.parse(localStorage.getItem("user"));
console.log(restoredUser.name); // "Anna"

// Pomocnicze funkcje — zawsze używaj takich wrappery
function storageGet(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn("localStorage pełny lub niedostępny:", e.message);
  }
}

// Zdarzenie storage — synchronizacja między zakładkami!
window.addEventListener("storage", (e) => {
  console.log(`Zmiana w ${e.key}: "${e.oldValue}" → "${e.newValue}"`);
});

// ============================================================
// JS-060 — window.location
// ============================================================

// location — aktualny URL z możliwością modyfikacji
// Dla URL: https://example.com:8080/products?category=js&page=2#reviews

console.log(location.href);      // cały URL
console.log(location.protocol);  // "https:"
console.log(location.host);      // "example.com:8080"
console.log(location.hostname);  // "example.com"
console.log(location.port);      // "8080"
console.log(location.pathname);  // "/products"
console.log(location.search);    // "?category=js&page=2"
console.log(location.hash);      // "#reviews"
console.log(location.origin);    // "https://example.com:8080"

// Parsowanie query string (nowoczesny sposób)
const params = new URLSearchParams(location.search);
console.log(params.get("category")); // "js"
console.log(params.get("page"));     // "2"
params.set("page", "3");
console.log(params.toString());      // "category=js&page=3"

// Budowanie URL
const url = new URL("https://api.example.com/users");
url.searchParams.set("role", "admin");
url.searchParams.set("limit", "20");
console.log(url.toString()); // "https://api.example.com/users?role=admin&limit=20"

// Nawigacja
// location.href = "/other-page";         // redirect (dodaje do historii)
// location.assign("/other-page");        // to samo
// location.replace("/other-page");       // bez dodawania do historii
// location.reload();                     // odśwież

// ============================================================
// JS-061 — window.history i History API
// ============================================================

// history — stos nawigacji
// history.back(), history.forward(), history.go(-2)

// pushState — zmień URL bez przeładowania strony
// history.pushState(state, title, url)
// state: dowolny obiekt JS (max 640kB)
// title: ignorowany przez większość przeglądarek
// url: nowy URL (musi być tego samego origin)

function navigateTo(tab) {
  const state = { tab, timestamp: Date.now() };
  const url = `?tab=${tab}`;
  history.pushState(state, "", url);
  renderTab(tab);
}

function renderTab(tab) {
  const content = {
    home: "Zawartość: Home",
    products: "Zawartość: Produkty",
    about: "Zawartość: O nas",
  };
  const tabContent = document.getElementById("tab-content");
  if (tabContent) tabContent.textContent = content[tab] ?? "Nieznana zakładka";

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });

  const histDisplay = document.getElementById("history-display");
  if (histDisplay) histDisplay.textContent = `URL: ${location.href}`;
}

// Obsługa przycisku "Wstecz" / "Naprzód"
window.addEventListener("popstate", (e) => {
  const tab = e.state?.tab ?? "home";
  renderTab(tab);
  console.log("popstate — state:", e.state);
});

// Podpięcie przycisków tabs
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => navigateTo(btn.dataset.tab));
});

// replaceState — zmień obecny wpis bez dodawania nowego
// history.replaceState(state, "", url);

// ============================================================
// JS-062 — Standardy ECMAScript
// ============================================================

// ES5 (2009) — strict mode, JSON, Array.forEach/map/filter/reduce
// ES6/ES2015 — let/const, arrow, class, Promise, template literals,
//              destructuring, spread, import/export, Symbol, Map, Set
// ES2017 — async/await, Object.entries/values
// ES2018 — rest/spread w obiektach, Promise.finally, for-await-of
// ES2019 — Array.flat/flatMap, Object.fromEntries, optional catch
// ES2020 — BigInt, nullish coalescing (??), optional chaining (?.), Promise.allSettled
// ES2021 — Promise.any, String.replaceAll, ||= &&= ??=
// ES2022 — Array.at(), Object.hasOwn(), await na top-level modułu, #private fields
// ES2023 — Array.findLast, toSorted, toReversed (niemutujące kopie)
// ES2024 — Promise.withResolvers, Object.groupBy, Map.groupBy

// Sprawdzanie wsparcia: https://caniuse.com, https://compat-table.github.io/compat-table

// Przykłady nowości:
console.log([1,2,3,4,5].at(-1));     // 5 (ES2022)
console.log([1,2,3].toReversed());   // [3,2,1] — niemutujące (ES2023)
console.log([3,1,2].toSorted());     // [1,2,3] — niemutujące (ES2023)

// ============================================================
// JS-063 — Debugowanie w VS Code
// ============================================================

// Skróty VS Code debuggera:
// F5     — uruchom
// F9     — toggle breakpoint
// F10    — step over (przejdź do następnej linii)
// F11    — step into (wejdź do funkcji)
// Shift+F11 — step out (wyjdź z funkcji)
// Shift+F5  — zatrzymaj

// Debugowanie w przeglądarce:
// F12 → DevTools → Sources → zaznacz plik → kliknij numer linii
// Console: console.log, console.error, console.warn, console.table, console.group
// console.time("label") / console.timeEnd("label") — mierzenie czasu

// Testowanie wydajności:
console.time("operacja");
const arr = Array.from({ length: 100000 }, (_, i) => i);
const sum = arr.reduce((a, b) => a + b, 0);
console.timeEnd("operacja");
console.log(sum);

// debugger — breakpoint w kodzie (działa w DevTools i VS Code)
// debugger; // odkomentuj żeby zatrzymać wykonywanie

// console.table — dla tablic obiektów
const users = [
  { id: 1, name: "Anna", role: "admin" },
  { id: 2, name: "Jan", role: "user" },
];
console.table(users);
