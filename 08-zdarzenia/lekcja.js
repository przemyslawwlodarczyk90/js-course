// ============================================================
// JS-046 — addEventListener
// ============================================================

// addEventListener(typ, handler, options)
// options: { once, capture, passive }

const btn = document.getElementById("btn-single");

// Podstawowe użycie
btn.addEventListener("click", function(e) {
  console.log("Kliknięto!", e.type, e.target);
});

// Usuwanie: handler MUSI być nazwaną funkcją (arrow nie działa z removeEventListener)
function onBtnClick(e) {
  console.log("Obsługa kliknięcia");
}
btn.addEventListener("click", onBtnClick);
btn.removeEventListener("click", onBtnClick); // usuwa ten konkretny handler

// once: handler wywołany tylko raz, potem automatycznie usunięty
btn.addEventListener("click", () => console.log("Tylko raz!"), { once: true });

// Jeden element — wiele handlerów, jeden event — wiele elementów
document.querySelectorAll("button").forEach(b => {
  b.addEventListener("mouseenter", () => b.style.opacity = "0.8");
  b.addEventListener("mouseleave", () => b.style.opacity = "1");
});

// ============================================================
// JS-047 — Obiekt event: target, preventDefault, stopPropagation
// ============================================================

// e.target — element który wywołał zdarzenie (gdzie kliknięto)
// e.currentTarget — element na którym jest nasłuchiwacz
// e.type — typ zdarzenia
// e.timeStamp — kiedy wystąpiło (ms od navigacji)

document.getElementById("register-form")?.addEventListener("submit", function(e) {
  e.preventDefault(); // blokuje domyślne wysłanie formularza

  const username = document.getElementById("username").value;
  console.log("Formularz przechwycony. Username:", username);
  console.log("e.target:", e.target);         // form element
  console.log("e.currentTarget:", e.currentTarget); // też form
});

// preventDefault — inne zastosowania:
document.getElementById("btn-right")?.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // blokuje kontekstowe menu przeglądarki
  console.log("Własna obsługa prawego przycisku");
});

// stopPropagation — zatrzymuje bubbling
document.getElementById("inner-btn")?.addEventListener("click", (e) => {
  e.stopPropagation(); // event nie dotrze do .child i .parent
  console.log("button kliknięty — zatrzymano propagację");
});

// ============================================================
// JS-048 — Zdarzenia myszy
// ============================================================

const clickArea = document.getElementById("click-area");
const coords = document.getElementById("coords");

// click, dblclick, contextmenu
clickArea?.addEventListener("click", (e) => {
  console.log("click — button:", e.button); // 0=lewy, 1=środkowy, 2=prawy
});

clickArea?.addEventListener("dblclick", () => {
  clickArea.style.background = "#bbdefb";
});

// mousemove — współrzędne
clickArea?.addEventListener("mousemove", (e) => {
  // e.clientX/Y — względem viewport
  // e.pageX/Y — względem dokumentu
  // e.offsetX/Y — względem elementu
  coords.textContent = `client: ${e.clientX},${e.clientY}  offset: ${e.offsetX},${e.offsetY}`;
});

// mouseenter/mouseleave — nie bubblingują (vs mouseover/mouseout)
clickArea?.addEventListener("mouseenter", () => {
  clickArea.style.borderColor = "#0d47a1";
});
clickArea?.addEventListener("mouseleave", () => {
  clickArea.style.borderColor = "#1565c0";
  coords.textContent = "x: -, y: -";
});

// ============================================================
// JS-049 — Zdarzenia klawiatury i formularza
// ============================================================

const keyInput = document.getElementById("key-input");
const keyDisplay = document.getElementById("key-display");

// keydown: e.key (czytelna nazwa), e.code (fizyczny klawisz), e.ctrlKey, e.shiftKey
keyInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Enter — wartość:", e.target.value);
  }
  if (e.key === "Escape") {
    e.target.value = "";
  }
  if (e.ctrlKey && e.key === "z") {
    e.preventDefault(); // blokuj Ctrl+Z w tym inpucie
  }
  keyDisplay.textContent = `key: ${e.key}  code: ${e.code}`;
});

// input: odpala przy każdej zmianie wartości (w tym paste)
keyInput?.addEventListener("input", (e) => {
  console.log("Aktualna wartość:", e.target.value);
});

// change: odpala gdy element traci fokus i wartość się zmieniła
document.getElementById("role")?.addEventListener("change", (e) => {
  console.log("Wybrana rola:", e.target.value);
});

// focus i blur
keyInput?.addEventListener("focus", () => keyInput.style.outline = "2px solid #1565c0");
keyInput?.addEventListener("blur", () => keyInput.style.outline = "");

// ============================================================
// JS-050 — Propagacja zdarzeń i event delegation
// ============================================================

// Bubbling: zdarzenie wędruje od elementu w górę drzewa DOM
const log = document.getElementById("event-log");

function logEvent(who) {
  if (!log) return;
  const line = document.createElement("div");
  line.textContent = `[${new Date().toLocaleTimeString()}] ${who}`;
  log.prepend(line);
}

document.getElementById("parent-div")?.addEventListener("click", () => logEvent("PARENT kliknięty"));
document.getElementById("child-div")?.addEventListener("click", () => logEvent("CHILD kliknięty"));
// inner-btn ma stopPropagation z sekcji JS-047

// Event delegation: jeden listener na rodzicu obsługuje wszystkich dzieci
// Zamiast dodawać listener do każdego <li> osobno:
document.getElementById("todo-list")?.addEventListener("click", (e) => {
  // e.target wskazuje dokładny element który wywołał zdarzenie
  if (e.target.dataset.action === "delete") {
    e.target.closest("li").remove();
  }
  if (e.target.type === "checkbox") {
    e.target.closest("li").style.opacity = e.target.checked ? "0.5" : "1";
  }
});

// Dodawanie elementów (działają z delegation bez dodatkowych listenerów)
document.getElementById("todo-add")?.addEventListener("click", () => {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox"> ${text} <button data-action="delete">✕</button>`;
  document.getElementById("todo-list").appendChild(li);
  input.value = "";
});

// ============================================================
// JS-051 — Wyrażenia regularne (Regex)
// ============================================================

// Tworzenie regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[\d\s\-()]{7,15}$/;
const urlRegex = /^https?:\/\/.+\..+/;

// Metody string z regex
const text = "Ceny: 49 zł, 199 zł, 3499 zł i 19.99 zł";
const numbers = text.match(/\d+\.?\d*/g);
console.log(numbers); // ["49", "199", "3499", "19.99"]

const slugified = "Hello World — JS!".replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
console.log(slugified); // "hello-world---js-"

// test() — sprawdź czy pasuje
console.log(emailRegex.test("jan@example.com")); // true
console.log(emailRegex.test("jan@"));            // false

// exec() — znajdź z capture groups
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
const match = dateRegex.exec("Termin: 2024-06-15");
if (match) {
  console.log(`Rok: ${match[1]}, Miesiąc: ${match[2]}, Dzień: ${match[3]}`);
}

// Named groups
const namedDate = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const m = namedDate.exec("2024-06-15");
console.log(m?.groups); // { year: "2024", month: "06", day: "15" }

// Flagi: g (global), i (case insensitive), m (multiline)
const text2 = "JavaScript JS js Javascript";
const matches = text2.match(/javascript/gi);
console.log(matches); // ["JavaScript", "JS"... — wszystkie pasujące]

// matchAll() — iteracja po wszystkich dopasowaniach z grupami
const prices = "laptop: 3499 PLN, phone: 1999 PLN, tablet: 899 PLN";
const priceRegex = /(\w+): (\d+) PLN/g;
for (const match of prices.matchAll(priceRegex)) {
  console.log(`${match[1]} kosztuje ${match[2]} PLN`);
}
