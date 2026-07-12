// ============================================================
// JS-039 — Co to jest DOM
// ============================================================

// DOM (Document Object Model) — drzewiasta reprezentacja HTML
// w postaci obiektów JavaScript. Przeglądarka tworzy to drzewo
// po załadowaniu strony.
//
// document — korzeń drzewa, dostępny globalnie
// document.documentElement → <html>
// document.head → <head>
// document.body → <body>

console.log(document.title);             // "07 — DOM"
console.log(document.URL);               // aktualny URL
console.log(document.documentElement.lang); // "pl"

// ============================================================
// JS-040 — Pobieranie elementów DOM
// ============================================================

// getElementById — najszybszy, zwraca jeden element lub null
const title = document.getElementById("title");

// querySelector — CSS selector, pierwszy pasujący lub null
const subtitle = document.querySelector("#subtitle");
const firstTask = document.querySelector(".task");
const firstCard = document.querySelector("[data-category='electronics']");

// querySelectorAll — zwraca NodeList (nie Array, ale ma forEach)
const allTasks = document.querySelectorAll(".task");
const highPriority = document.querySelectorAll("[data-priority='high']");

console.log(allTasks.length);    // 3
console.log(firstTask.dataset.id); // "1"

// Konwersja NodeList → Array (żeby mieć filter, map itd.)
const tasksArray = Array.from(allTasks);
const taskTexts = tasksArray.map(el => el.textContent);
console.log(taskTexts);

// Relacje w drzewie
const list = document.getElementById("task-list");
console.log(list.children.length);    // liczba bezpośrednich dzieci (elementy)
console.log(list.firstElementChild);  // pierwszy element-dziecko
console.log(list.lastElementChild);   // ostatni
console.log(firstTask.parentElement); // ul#task-list
console.log(firstTask.nextElementSibling); // następny li

// ============================================================
// JS-041 — Manipulacja treścią elementów
// ============================================================

const titleEl = document.getElementById("title");

// textContent — bezpieczny (nie interpretuje HTML)
titleEl.textContent = "Zmieniony tytuł";

// innerHTML — interpretuje HTML (XSS risk przy user input!)
const container = document.getElementById("stats");
container.innerHTML = `<strong>Łącznie:</strong> <span id="task-count">3</span> zadań`;

// innerText — jak textContent ale uwzględnia CSS (ukryte elementy pominięte)
// i formatowanie (wolniejszy — wymaga reflow)

// Pobieranie wartości z inputa
const input = document.getElementById("search-input");
input.value = "laptop"; // ustawianie
// input.value             // odczytywanie aktualnej wartości

// ============================================================
// JS-042 — Tworzenie i usuwanie elementów
// ============================================================

// Tworzenie
const newTask = document.createElement("li");
newTask.textContent = "Nowe zadanie";
newTask.className = "task";
newTask.dataset.id = "4";
newTask.dataset.priority = "medium";

// Dodawanie do DOM
const taskList = document.getElementById("task-list");
taskList.appendChild(newTask);           // na koniec
taskList.prepend(document.createElement("li")); // na początek
taskList.insertBefore(newTask, firstTask);      // przed firstTask

// Wstawianie HTML — insertAdjacentHTML (nie resetuje event listeners!)
taskList.insertAdjacentHTML("beforeend", "<li class='task' data-id='5'>Zadanie 5</li>");
// pozycje: "beforebegin", "afterbegin", "beforeend", "afterend"

// Usuwanie
const toRemove = document.querySelector("[data-id='4']");
toRemove?.remove(); // nowoczesny sposób

// Klonowanie
const clone = firstTask.cloneNode(true); // true = z dziećmi
clone.textContent = "Klon zadania 1";
taskList.appendChild(clone);

// ============================================================
// JS-043 — Atrybuty i data-*
// ============================================================

const card = document.getElementById("product-1");

// Standardowe atrybuty
console.log(card.id);                  // "product-1"
console.log(card.getAttribute("id"));  // "product-1"
card.setAttribute("title", "Elektronika");
card.removeAttribute("title");
console.log(card.hasAttribute("data-price")); // true

// data-* atrybuty → dataset
console.log(card.dataset.category); // "electronics"
console.log(card.dataset.price);    // "599" (zawsze string!)
card.dataset.inStock = "true";      // ustawienie
console.log(card.dataset.inStock);  // "true"

// Iteracja po wszystkich data atrybutach
for (const [key, value] of Object.entries(card.dataset)) {
  console.log(`${key}: ${value}`);
}

// ============================================================
// JS-044 — classList — dynamiczne klasy
// ============================================================

const product = document.getElementById("product-2");

product.classList.add("active");          // dodaj klasę
product.classList.remove("active");       // usuń klasę
product.classList.toggle("active");       // dodaj jeśli brak, usuń jeśli jest
product.classList.toggle("active", true); // zawsze dodaj
product.classList.toggle("active", false); // zawsze usuń

console.log(product.classList.contains("card"));   // true
console.log(product.classList.contains("active")); // false po ostatnim toggle

// className — cały string klas
console.log(product.className); // "card"
product.className = "card active"; // nadpisuje wszystkie klasy

// classList z logiką
const cards = document.querySelectorAll(".card");
cards.forEach((c, i) => {
  c.classList.toggle("highlight", i % 2 === 0); // parzyste podświetlone
});

// ============================================================
// JS-045 — Zmiana stylów CSS przez JS
// ============================================================

const notification = document.getElementById("notification");

// style — inline styles
notification.style.display = "block";
notification.style.background = "#4caf50";
notification.style.padding = "1rem";
notification.textContent = "Sukces!";

// Odczyt obliczonego stylu (uwzględnia zewnętrzny CSS)
const computed = window.getComputedStyle(notification);
console.log(computed.display);    // "block"
console.log(computed.fontSize);   // np. "16px"

// Lepsza praktyka: CSS classes zamiast inline styles
// Dodaj klasę z gotowym stylem zamiast ustawiać style po linijce

// CSS Custom Properties przez JS
document.documentElement.style.setProperty("--main-color", "#e91e63");
const mainColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--main-color");
console.log(mainColor); // "#e91e63"

// Animacja przez JS — requestAnimationFrame
let opacity = 0;
function fadeIn() {
  opacity += 0.05;
  notification.style.opacity = opacity;
  if (opacity < 1) requestAnimationFrame(fadeIn);
}
// requestAnimationFrame(fadeIn);
