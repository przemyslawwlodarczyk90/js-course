// Otwórz index.html w przeglądarce.
// Każde zadanie odkomentuj i sprawdź efekt w oknie.

// ============================================================
// JS-039/040 — ZADANIE 1: pobieranie elementów
// ============================================================

// a) Pobierz element #title i wypisz jego textContent
// const title = ...;
// console.log(title.textContent);

// b) Pobierz WSZYSTKIE elementy .task i wypisz ich treść
// const tasks = ...;
// tasks.forEach(t => console.log(t.textContent));

// c) Pobierz zadania z data-priority="high"
// const highPriority = ...;
// console.log(highPriority.length);

// d) Pobierz pierwszy .card z kategorią "electronics" (użyj selektora atrybutowego)
// const firstElectronics = ...;
// console.log(firstElectronics.dataset.price); // "3499"

// e) Przekształć NodeList z wszystkich .task na prawdziwą tablicę,
//    przefiltruj tylko te z data-id >= 2 i wypisz ich treść
// const taskArray = Array.from(document.querySelectorAll(".task"));
// const filtered = ...;
// console.log(filtered.map(t => t.textContent));

// ============================================================
// JS-040 — ZADANIE 2: nawigacja w drzewie DOM
// ============================================================

// a) Pobierz #task-list i sprawdź ile ma bezpośrednich dzieci
// const list = document.getElementById("task-list");
// console.log(list.children.length);

// b) Pobierz rodzica pierwszego .task
// const firstTask = document.querySelector(".task");
// console.log(firstTask.parentElement.id); // "task-list"

// c) Pobierz następny element po pierwszym .task (nextElementSibling)
// console.log(firstTask.nextElementSibling.textContent);

// d) Pobierz ostatnie dziecko #task-list
// console.log(list.lastElementChild.textContent);

// ============================================================
// JS-041 — ZADANIE 3: zmiana treści
// ============================================================

// a) Zmień tekst #title na "Moje zadania JS"
// document.getElementById("title").textContent = ...;

// b) Zmień #subtitle dodając pogrubione słowo "DOM" przez innerHTML
// document.querySelector("#subtitle").innerHTML = ...;

// c) Pobierz wartość z #search-input
//    Ustaw wartość "javascript" i odczytaj ją z powrotem
// const input = document.getElementById("search-input");
// input.value = ...;
// console.log(input.value);

// d) Zamień treść WSZYSTKICH .task na "Zadanie X" gdzie X to ich indeks+1
// document.querySelectorAll(".task").forEach((task, i) => {
//   task.textContent = ...;
// });

// ============================================================
// JS-042 — ZADANIE 4: tworzenie elementów
// ============================================================

// a) Utwórz nowe <li> z tekstem "Zadanie z createElement", klasą "task",
//    data-id="10", data-priority="high" i dodaj je na końcu #task-list
// const newTask = document.createElement("li");
// TODO...
// document.getElementById("task-list").appendChild(newTask);

// b) Używając insertAdjacentHTML dodaj na POCZĄTKU #task-list nowy element
//    z tekstem "Pilne zadanie!" i klasą "task error"
// document.getElementById("task-list").insertAdjacentHTML("afterbegin", `...`);

// c) Klonuj pierwszy .card z #product-container,
//    zmień w klonie nazwę i cenę, dodaj klon na końcu kontenera
// const firstCard = document.querySelector("#product-container .card");
// const clone = firstCard.cloneNode(true);
// clone.querySelector(".product-name").textContent = "Nowy Produkt";
// clone.querySelector(".product-price").textContent = "999 zł";
// document.getElementById("product-container").appendChild(clone);

// ============================================================
// JS-042 — ZADANIE 5: usuwanie elementów
// ============================================================

// a) Usuń element z data-id="2" z listy zadań
// document.querySelector("[data-id='2']")?.remove();

// b) Usuń WSZYSTKIE .card z kategorią "clothing"
// document.querySelectorAll("[data-category='clothing']").forEach(el => el.remove());

// c) Wyczyść całą zawartość #product-container (wszystkie dzieci)
// Sposób 1: innerHTML = ""
// Sposób 2: while (container.firstChild) container.removeChild(container.firstChild)
// Który jest szybszy i dlaczego?

// ============================================================
// JS-043 — ZADANIE 6: atrybuty i data-*
// ============================================================

// a) Pobierz wszystkie .card i wypisz ich data-price jako LICZBY (nie stringi)
// document.querySelectorAll(".card").forEach(card => {
//   const price = Number(card.dataset.price);
//   console.log(card.querySelector(".product-name").textContent, price);
// });

// b) Ustaw data-discount="10" dla wszystkich kart elektronicznych
// document.querySelectorAll("[data-category='electronics']").forEach(card => {
//   card.dataset.discount = "10";
// });

// c) Dodaj atrybut title do każdej karty z wartością: "Cena: X zł"
// TODO

// d) Sprawdź który produkt ma najwyższy data-price i dodaj mu klasę "best-deal"
// TODO: użyj querySelectorAll, Array.from, sort lub reduce

// ============================================================
// JS-044 — ZADANIE 7: classList
// ============================================================

// a) Przełącz klasę "active" na karcie #product-1
// document.getElementById("product-1").classList.toggle("active");

// b) Wszystkim .card dodaj klasę "loaded", usuń klasę "hidden" jeśli ją mają
// document.querySelectorAll(".card").forEach(card => {
//   card.classList.add("loaded");
//   card.classList.remove("hidden");
// });

// c) Napisz funkcję highlightCategory(category), która:
//    - dodaje klasę "active" do kart z daną kategorią
//    - usuwa klasę "active" z pozostałych
// function highlightCategory(category) {
//   document.querySelectorAll(".card").forEach(card => {
//     TODO
//   });
// }
// highlightCategory("electronics");

// d) Sprawdź za pomocą classList.contains czy #product-2 ma klasę "card"
// console.log(document.getElementById("product-2").classList.contains("card"));

// ============================================================
// JS-044 — ZADANIE 8: toggle z warunkiem
// ============================================================

// Napisz funkcję setActiveTask(taskId), która:
// - dodaje klasę "active" do elementu .task z danym data-id
// - usuwa "active" ze wszystkich pozostałych .task

// function setActiveTask(taskId) {
//   document.querySelectorAll(".task").forEach(task => {
//     task.classList.toggle("active", task.dataset.id === String(taskId));
//   });
// }
// setActiveTask(2);

// ============================================================
// JS-045 — ZADANIE 9: style inline i computed
// ============================================================

// a) Pokaż #notification (ustaw display: "block"), zmień tło na "#2196f3",
//    ustaw treść na "Pomyślnie zapisano!"
// const notif = document.getElementById("notification");
// notif.style.display = "block";
// notif.style.background = ...;
// notif.textContent = ...;

// b) Odczytaj obliczony styl (getComputedStyle) pierwszego .card:
//    wypisz border-radius, padding, background-color
// const card = document.querySelector(".card");
// const style = window.getComputedStyle(card);
// console.log(style.borderRadius, style.padding, style.backgroundColor);

// c) Usuń #notification po 3 sekundach (setTimeout)
// setTimeout(() => {
//   document.getElementById("notification").style.display = "none";
// }, 3000);

// ============================================================
// JS-039–045 — ZADANIE 10: mini aplikacja lista zadań
// ============================================================

// Napisz kompletną logikę dla listy zadań używając TYLKO DOM API:
// - Przycisk #btn-add: pobiera wartość z #search-input (traktuje jako tekst zadania),
//   tworzy nowe <li class="task">, dodaje do #task-list, czyści input
// - Przycisk #btn-clear: usuwa wszystkie .task z #task-list
// - Po każdej operacji aktualizuj #task-count aktualną liczbą .task
//
// BONUS: kliknięcie na .task przełącza klasę "active" (wizualne zaznaczenie)

// function getTaskCount() {
//   return document.querySelectorAll("#task-list .task").length;
// }
//
// function updateCount() {
//   document.getElementById("task-count").textContent = getTaskCount();
// }
//
// document.getElementById("btn-add").addEventListener("click", () => {
//   const input = document.getElementById("search-input");
//   const text = input.value.trim();
//   if (!text) return;
//   TODO: stwórz li, dodaj, wyczyść input, updateCount()
// });
//
// document.getElementById("btn-clear").addEventListener("click", () => {
//   TODO: usuń wszystkie .task, updateCount()
// });
//
// document.getElementById("task-list").addEventListener("click", (e) => {
//   if (e.target.classList.contains("task")) {
//     e.target.classList.toggle("active");
//   }
// });
