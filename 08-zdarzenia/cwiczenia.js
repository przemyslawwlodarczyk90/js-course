// Otwórz index.html w przeglądarce i odkomentuj zadania po kolei.

// ============================================================
// JS-046 — ZADANIE 1: addEventListener — podstawy
// ============================================================

// a) Dodaj do #btn-double nasłuchiwacz dblclick, który zmienia tekst przycisku na
//    "Kliknięto dwa razy!" i z powrotem na "Kliknij dwukrotnie" po 1 sekundzie
// document.getElementById("btn-double")?.addEventListener("dblclick", () => {
//   const btn = document.getElementById("btn-double");
//   btn.textContent = "Kliknięto dwa razy!";
//   setTimeout(() => { btn.textContent = "Kliknij dwukrotnie (dblclick)"; }, 1000);
// });

// b) Dodaj mouseenter i mouseleave do KAŻDEGO przycisku — przy najechaniu
//    zmień opacity na 0.7, przy opuszczeniu wróć do 1
// document.querySelectorAll("button").forEach(btn => {
//   TODO
// });

// c) Dodaj listener "once: true" do #btn-single — wypisz "Tylko raz!"
//    Sprawdź, że drugie kliknięcie już nic nie robi
// document.getElementById("btn-single")?.addEventListener("click",
//   () => console.log("Tylko raz!"), { once: true }
// );

// d) Dodaj DWA różne listenery click do #btn-single i sprawdź że oba działają
// function handler1() { console.log("Handler 1"); }
// function handler2() { console.log("Handler 2"); }
// document.getElementById("btn-single")?.addEventListener("click", handler1);
// document.getElementById("btn-single")?.addEventListener("click", handler2);
// — Po sprawdzeniu usuń handler1 przez removeEventListener
// document.getElementById("btn-single")?.removeEventListener("click", handler1);

// ============================================================
// JS-047 — ZADANIE 2: event object
// ============================================================

// a) Na #click-area dodaj listener click i wypisz:
//    e.type, e.target.id, e.clientX, e.clientY, e.timeStamp
// document.getElementById("click-area")?.addEventListener("click", (e) => {
//   console.log({
//     type: e.type,
//     targetId: e.target.id,
//     x: e.clientX,
//     y: e.clientY,
//     time: Math.round(e.timeStamp),
//   });
// });

// b) Na #register-form dodaj submit z preventDefault.
//    Wypisz wszystkie wartości formularza jako obiekt.
// document.getElementById("register-form")?.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const data = {
//     username: document.getElementById("username").value,
//     email: document.getElementById("email").value,
//     password: document.getElementById("password").value,
//     role: document.getElementById("role").value,
//   };
//   console.log("Formularz:", data);
// });

// c) Na #btn-right dodaj contextmenu z preventDefault.
//    Pokaż w #event-log "Prawy przycisk zablokowany"
// TODO

// ============================================================
// JS-047 — ZADANIE 3: stopPropagation
// ============================================================

// a) Dodaj listenery click do #parent-div, #child-div i #inner-btn.
//    Każdy log do #event-log. Sprawdź kolejność bubblingu.
// TODO

// b) Na #inner-btn dodaj stopPropagation. Sprawdź że parent i child
//    nie dostają eventu po kliknięciu BUTTON.
// TODO

// c) Wyjaśnij w komentarzu: jaka jest różnica między
//    stopPropagation() a stopImmediatePropagation()?
//
// stopPropagation():
// stopImmediatePropagation():

// ============================================================
// JS-048 — ZADANIE 4: zdarzenia myszy
// ============================================================

// a) Na #click-area:
//    - click → wypisz "Lewy" / "Środkowy" / "Prawy" zależnie od e.button
//    - mousemove → aktualizuj #coords z offsetX i offsetY
//    - dblclick → zmień kolor tła na losowy (Math.random)

// Losowy kolor:
// const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`;

// document.getElementById("click-area")?.addEventListener("click", (e) => {
//   const labels = { 0: "Lewy", 1: "Środkowy", 2: "Prawy" };
//   console.log(labels[e.button] ?? "Nieznany");
// });
// TODO: mousemove
// TODO: dblclick

// b) Napisz drag-and-drop (prostą wersję):
//    - mousedown → zacznij śledzić ruch
//    - mousemove → przesuń element
//    - mouseup → zatrzymaj śledzenie
// const area = document.getElementById("click-area");
// let dragging = false, startX, startY, origX = 0, origY = 0;
// TODO

// ============================================================
// JS-049 — ZADANIE 5: klawiatura
// ============================================================

// a) Na #key-input:
//    - keydown z Enter → wypisz wartość i wyczyść input
//    - keydown z Escape → wyczyść input
//    - input → aktualizuj w czasie rzeczywistym licznik znaków obok inputa

// document.getElementById("key-input")?.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") { console.log(e.target.value); e.target.value = ""; }
//   if (e.key === "Escape") { e.target.value = ""; }
// });
// document.getElementById("key-input")?.addEventListener("input", (e) => {
//   document.getElementById("key-display").textContent = `${e.target.value.length} znaków`;
// });

// b) Napisz skrót klawiszowy globalny: Ctrl+K → fokusuje #key-input
// document.addEventListener("keydown", (e) => {
//   if (e.ctrlKey && e.key === "k") {
//     e.preventDefault();
//     document.getElementById("key-input").focus();
//   }
// });

// c) Na #role (select): po zmianie wypisz w #form-result wybraną rolę
// TODO

// ============================================================
// JS-049 — ZADANIE 6: walidacja formularza
// ============================================================

// Napisz pełną walidację #register-form:
// Przy submit (preventDefault):
// - username: wymagany, min 3 znaki → #username-error
// - email: wymagany, musi zawierać "@" i "." po "@" → #email-error
// - password: wymagany, min 8 znaków → #password-error
// - role: musi być wybrany → error w #form-result
// Jeśli błędów brak → wypisz w #form-result "Rejestracja OK!" i dane
// Klasa "error" na inpucie z błędem (usuń ją po poprawce przy "input" evencie)

// document.getElementById("register-form")?.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let valid = true;
//
//   const username = document.getElementById("username");
//   const usernameError = document.getElementById("username-error");
//   if (username.value.trim().length < 3) {
//     usernameError.textContent = "Min. 3 znaki";
//     username.classList.add("error");
//     valid = false;
//   } else {
//     usernameError.textContent = "";
//     username.classList.remove("error");
//   }
//   // TODO: email, password, role
//
//   if (valid) {
//     document.getElementById("form-result").textContent = "Rejestracja OK!";
//   }
// });

// Usuń klasę error w czasie wpisywania:
// document.getElementById("username")?.addEventListener("input", (e) => {
//   if (e.target.value.trim().length >= 3) {
//     e.target.classList.remove("error");
//     document.getElementById("username-error").textContent = "";
//   }
// });
// TODO: analogicznie dla email i password

// ============================================================
// JS-050 — ZADANIE 7: event delegation
// ============================================================

// a) #todo-add button: pobierz wartość z #todo-input, stwórz nowe <li>
//    z checkboxem i przyciskiem delete. Dodaj do #todo-list.
// document.getElementById("todo-add")?.addEventListener("click", () => {
//   const input = document.getElementById("todo-input");
//   const text = input.value.trim();
//   if (!text) return;
//   const li = document.createElement("li");
//   li.innerHTML = `<input type="checkbox"> ${text} <button data-action="delete">✕</button>`;
//   document.getElementById("todo-list").appendChild(li);
//   input.value = "";
// });

// b) Na #todo-list JEDEN listener który obsłuży:
//    - klik na [data-action="delete"] → usuwa <li>
//    - klik na checkbox → przekreśla tekst (text-decoration: line-through)
// document.getElementById("todo-list")?.addEventListener("click", (e) => {
//   if (e.target.dataset.action === "delete") {
//     e.target.closest("li").remove();
//   }
//   if (e.target.type === "checkbox") {
//     TODO
//   }
// });

// c) Wyjaśnij w komentarzu: dlaczego delegation działa też dla elementów
//    dodanych DYNAMICZNIE (po załadowaniu strony)?
//
// Odpowiedź:

// ============================================================
// JS-051 — ZADANIE 8: Regex — walidacja
// ============================================================

// Napisz walidatory używające regex (użyj w formularzu z zadania 6)

// a) Walidator email (regex)
function isValidEmailRegex(email) {
  // TODO: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}

// b) Walidator hasła: min 8 znaków, co najmniej 1 cyfra, 1 wielka litera
function isStrongPassword(password) {
  // TODO: kilka .test() lub jeden złożony regex
}

// c) Walidator polskiego numeru telefonu
//    Akceptuj: +48 123 456 789, 123-456-789, 123456789
function isPolishPhone(phone) {
  // TODO
}

// d) Wyodrębnij wszystkie adresy URL z tekstu
function extractUrls(text) {
  // TODO: matchAll lub match z /https?:\/\/\S+/g
}

// console.log(isValidEmailRegex("jan@example.com")); // true
// console.log(isStrongPassword("Secret1")); // false (za krótkie)
// console.log(isStrongPassword("Secret12")); // true
// console.log(isPolishPhone("+48 123 456 789")); // true
// console.log(isPolishPhone("abc")); // false
// console.log(extractUrls("Sprawdź https://google.com i https://github.com/user/repo"));

// ============================================================
// JS-051 — ZADANIE 9: Regex — parsowanie i transformacja
// ============================================================

// a) Zamień wszystkie daty z formatu YYYY-MM-DD na DD.MM.YYYY
function reformatDates(text) {
  // TODO: replace z callback lub grupami
}
// console.log(reformatDates("Termin: 2024-06-15, deadline: 2024-12-31"));
// "Termin: 15.06.2024, deadline: 31.12.2024"

// b) Wyodrębnij ceny z tekstu i zwróć jako tablicę liczb
function extractPrices(text) {
  // TODO: match, zamień string na number
}
// console.log(extractPrices("Laptop: 3 499 zł, Tablet: 1 299,99 zł, Słuchawki: 599 zł"));
// [3499, 1299.99, 599]

// c) Napisz highlight(text, query): otacza każde wystąpienie query
//    (case-insensitive) tagiem <mark>
function highlight(text, query) {
  // TODO: new RegExp(query, "gi") + replace
}
// console.log(highlight("JavaScript jest świetny! JS to js.", "js"));
// "<mark>JavaScript</mark> jest świetny! <mark>JS</mark> to <mark>js</mark>."

// d) Zwaliduj i sparsuj wyrażenie matematyczne — tylko cyfry, +,-,*,/,(,),spacje
function isSafeMathExpression(expr) {
  // TODO
}
// console.log(isSafeMathExpression("2 + 3 * (4 - 1)")); // true
// console.log(isSafeMathExpression("alert('hack')")); // false
