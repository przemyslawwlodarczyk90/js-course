// Otwórz index.html w przeglądarce.

// ============================================================
// JS-058 — ZADANIE 1: window — wymiary i zdarzenia
// ============================================================

// a) Przy załadowaniu strony uzupełnij #info-size o rozmiar okna
// document.getElementById("info-size").textContent =
//   `Rozmiar: ${window.innerWidth}×${window.innerHeight}`;

// b) Dodaj listener "resize" — aktualizuj #info-size przy każdej zmianie rozmiaru
// window.addEventListener("resize", () => {
//   document.getElementById("info-size").textContent = `Rozmiar: ${window.innerWidth}×${window.innerHeight}`;
// });

// c) Dodaj listener "scroll" — aktualizuj #info-scroll
// window.addEventListener("scroll", () => {
//   document.getElementById("info-scroll").textContent = `Scroll: ${window.scrollX}, ${window.scrollY}`;
// });

// d) Wypisz w konsoli: navigator.language, navigator.userAgent, screen.width, screen.height
// console.log({
//   language: navigator.language,
//   userAgent: navigator.userAgent,
//   screenWidth: screen.width,
//   screenHeight: screen.height,
// });

// e) Napisz funkcję scrollToTop(), która płynnie scrolluje na górę strony
// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }

// ============================================================
// JS-059 — ZADANIE 2: localStorage — zapis i odczyt
// ============================================================

// a) Podepnij przyciski z index.html:
//    #btn-local-set → localStorage.setItem(key, value) z inputów
//    #btn-session-set → sessionStorage.setItem(key, value)
//    #btn-local-get → wyświetl wszystkie klucze/wartości z localStorage w #storage-display
//    #btn-local-clear → wyczyść localStorage, odśwież #storage-display

// function displayLocalStorage() {
//   const display = document.getElementById("storage-display");
//   const items = Object.entries(localStorage);
//   if (items.length === 0) { display.textContent = "Brak danych"; return; }
//   display.textContent = items.map(([k, v]) => `${k}: ${v}`).join("\n");
// }
//
// document.getElementById("btn-local-set")?.addEventListener("click", () => {
//   const key = document.getElementById("storage-key").value.trim();
//   const value = document.getElementById("storage-value").value.trim();
//   if (!key) return;
//   localStorage.setItem(key, value);
//   displayLocalStorage();
// });
//
// document.getElementById("btn-session-set")?.addEventListener("click", () => {
//   const key = document.getElementById("storage-key").value.trim();
//   const value = document.getElementById("storage-value").value.trim();
//   if (!key) return;
//   sessionStorage.setItem(key, value);
//   console.log("sessionStorage:", key, "=", value);
// });
//
// document.getElementById("btn-local-get")?.addEventListener("click", displayLocalStorage);
// document.getElementById("btn-local-clear")?.addEventListener("click", () => {
//   localStorage.clear();
//   displayLocalStorage();
// });

// ============================================================
// JS-059 — ZADANIE 3: localStorage — persystencja stanu
// ============================================================

// Napisz system persystencji ustawień użytkownika:
// - Zapisz obiekt settings do localStorage po każdej zmianie
// - Wczytaj settings przy starcie (z wartościami domyślnymi jeśli brak)
// - Dodaj przycisk "Reset ustawień" który czyści localStorage i wraca do domyślnych

const DEFAULT_SETTINGS = {
  theme: "light",
  fontSize: 14,
  language: "pl",
  notifications: true,
};

function loadSettings() {
  // TODO: localStorage.getItem + JSON.parse + fallback na DEFAULT_SETTINGS
}

function saveSettings(settings) {
  // TODO: JSON.stringify + localStorage.setItem
}

// let currentSettings = loadSettings();
// console.log("Wczytane ustawienia:", currentSettings);

// Symuluj zmianę i zapisz:
// currentSettings.theme = "dark";
// saveSettings(currentSettings);
// console.log("Po zmianie:", loadSettings());

// ============================================================
// JS-059 — ZADANIE 4: localStorage — koszyk zakupowy
// ============================================================

// Napisz moduł koszyka który persystuje w localStorage.
// Metody: addItem(product), removeItem(id), getItems(), getTotal(), clear()

function createPersistentCart(storageKey = "cart") {
  // TODO
  // - wczytaj z localStorage przy init
  // - zapisuj do localStorage po każdej operacji
  // - getTotal(): suma price * quantity
}

// Test:
// const cart = createPersistentCart();
// cart.addItem({ id: 1, name: "Laptop", price: 3499 });
// cart.addItem({ id: 2, name: "Myszka", price: 179 });
// cart.addItem({ id: 1, name: "Laptop", price: 3499 }); // zwiększ quantity
// console.log(cart.getItems()); // [{id:1, quantity:2, ...}, {id:2, quantity:1, ...}]
// console.log(cart.getTotal()); // 3499*2 + 179 = 7177
// Przeładuj stronę — dane nadal są w localStorage!

// ============================================================
// JS-060 — ZADANIE 5: location — parser URL
// ============================================================

// a) Pokaż wszystkie właściwości location w konsoli i #location-display
// document.getElementById("btn-show-location")?.addEventListener("click", () => {
//   const info = {
//     href: location.href,
//     protocol: location.protocol,
//     host: location.host,
//     pathname: location.pathname,
//     search: location.search,
//     hash: location.hash,
//     origin: location.origin,
//   };
//   document.getElementById("location-display").textContent = JSON.stringify(info, null, 2);
// });

// b) Dodaj param ?tab=home do URL bez przeładowania
// document.getElementById("btn-add-param")?.addEventListener("click", () => {
//   const params = new URLSearchParams(location.search);
//   params.set("tab", "home");
//   history.pushState(null, "", `${location.pathname}?${params.toString()}`);
//   document.getElementById("location-display").textContent = location.href;
// });

// c) Napisz funkcję getParam(name), która odczytuje parametr z URL
function getParam(name) {
  // TODO: new URLSearchParams(location.search).get(name)
}
// console.log(getParam("tab")); // null lub wartość z URL

// d) Napisz funkcję buildUrl(base, params), która buduje URL z obiektem params
function buildUrl(base, params) {
  // TODO: new URL(base) + searchParams
}
// console.log(buildUrl("https://api.example.com/users", { role: "admin", limit: 10 }));
// "https://api.example.com/users?role=admin&limit=10"

// ============================================================
// JS-061 — ZADANIE 6: History API — taby bez przeładowania
// ============================================================

// Napisz kompletną nawigację tabami używając pushState.
// Wymagania:
// - Kliknięcie tab-btn → pushState + renderTab + aktualizacja URL
// - Przycisk wstecz/naprzód przeglądarki → popstate → renderTab
// - Po odświeżeniu strony → odczytaj ?tab= z URL i renderuj właściwą zakładkę

// const tabs = {
//   home: "Zawartość strony głównej",
//   products: "Lista produktów: Laptop, Myszka, Słuchawki",
//   about: "O nas: Tworzymy świetne aplikacje JS",
// };
//
// function renderTab(tabName) {
//   const content = tabs[tabName] ?? tabs.home;
//   document.getElementById("tab-content").textContent = content;
//   document.querySelectorAll(".tab-btn").forEach(btn => {
//     btn.classList.toggle("active", btn.dataset.tab === tabName);
//   });
//   document.getElementById("history-display").textContent = `URL: ${location.href}`;
// }
//
// document.querySelectorAll(".tab-btn").forEach(btn => {
//   btn.addEventListener("click", () => {
//     const tab = btn.dataset.tab;
//     history.pushState({ tab }, "", `?tab=${tab}`);
//     renderTab(tab);
//   });
// });
//
// window.addEventListener("popstate", (e) => {
//   renderTab(e.state?.tab ?? "home");
// });
//
// // Inicjalizacja — obsłuż odświeżenie
// const initialTab = new URLSearchParams(location.search).get("tab") ?? "home";
// renderTab(initialTab);

// ============================================================
// JS-059/061 — ZADANIE 7: zapisywanie stanu nawigacji
// ============================================================

// Rozszerz zadanie 6 — zapamiętuj w sessionStorage ostatnią odwiedzoną zakładkę.
// Przy wejściu na stronę otwieraj tę zakładkę (sessionStorage nadrzędne nad URL).
//
// Kolejność priorytetu:
// 1. URL param ?tab=X (dla linków bezpośrednich)
// 2. sessionStorage (dla powrotu do karty)
// 3. "home" (domyślne)

// TODO

// ============================================================
// JS-062 — ZADANIE 8: sprawdzanie wsparcia ES
// ============================================================

// Sprawdź które funkcje są dostępne w tej przeglądarce i wypisz w konsoli

function checkSupport() {
  const results = {};

  // at() — ES2022
  results["Array.at"] = typeof Array.prototype.at === "function";

  // structuredClone — ES2022
  results["structuredClone"] = typeof structuredClone === "function";

  // Object.hasOwn — ES2022
  results["Object.hasOwn"] = typeof Object.hasOwn === "function";

  // Array.toSorted — ES2023
  results["Array.toSorted"] = typeof Array.prototype.toSorted === "function";

  // Array.findLast — ES2023
  results["Array.findLast"] = typeof Array.prototype.findLast === "function";

  // TODO: dodaj sprawdzenie:
  // - Promise.withResolvers (ES2024)
  // - Object.groupBy (ES2024)
  // - Map.groupBy (ES2024)

  return results;
}

// console.table(checkSupport());

// ============================================================
// JS-058/059/060/061 — ZADANIE 9: mini SPA (Single Page App)
// ============================================================

// Zbuduj prostą SPA łączącą wszystko z rozdziału 10:
// - Nawigacja przez History API (pushState + popstate)
// - Każda "strona" zapisuje swój stan w sessionStorage
// - Motyw (light/dark) trzymany w localStorage
// - URL odzwierciedla aktualną stronę i parametry
// - Przycisk "Toggle theme" zmienia motyw i zapisuje do localStorage

// Strony:
// /           → Home: "Witaj w SPA!"
// /?page=list → Lista: pobierz i wyświetl dane z localStorage lub fetch
// /?page=about → O aplikacji

// TODO: Zaimplementuj poniższy szablon

// function createRouter(routes, defaultRoute = "/") {
//   function getRoute() {
//     return new URLSearchParams(location.search).get("page") ?? "home";
//   }
//
//   function navigate(page, params = {}) {
//     const urlParams = new URLSearchParams({ page, ...params });
//     history.pushState({ page, params }, "", `?${urlParams.toString()}`);
//     render(page, params);
//   }
//
//   function render(page, params) {
//     const handler = routes[page] ?? routes.home;
//     if (handler) handler(params);
//     sessionStorage.setItem("lastPage", page);
//   }
//
//   window.addEventListener("popstate", (e) => {
//     render(e.state?.page ?? "home", e.state?.params ?? {});
//   });
//
//   return { navigate, getCurrentPage: getRoute };
// }
