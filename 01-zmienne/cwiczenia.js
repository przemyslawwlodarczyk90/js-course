// ============================================================
// SEKCJA A — ŁATWE: NAPISZ KOD
// ============================================================

// --- JS-003/004: let i const ---

// ZADANIE 1
// Napisz stałą ze swoim imieniem i zmienną z wiekiem.
// Wypisz zdanie: "Nazywam się [imię] i mam [wiek] lat."


// ZADANIE 2
// Napisz stałą CONFIG zawierającą obiekt { host: "localhost", port: 3000 }.
// Zmień port na 8080 (nie przepisując stałej).
// Wypisz cały obiekt.


// ZADANIE 3
// Napisz stałą COLORS jako tablicę kolorów ["red", "green", "blue"].
// Dodaj kolor "yellow" do tablicy.
// Wypisz długość tablicy i wszystkie kolory.


// ZADANIE 4
// Napisz zmienną let isLoggedIn = false.
// Zmień ją na true.
// Wypisz jej wartość przed i po zmianie.


// ZADANIE 5
// Napisz trzy zmienne: imię (const), wiek (let), adres (let).
// Zmień wiek o +1 (urodziny).
// Zmień adres.
// Wypisz wszystkie trzy.


// --- JS-001: var ---

// ZADANIE 6
// Napisz zmienną var score = 0 wewnątrz funkcji gra().
// Zwiększ score trzy razy o 10.
// Wypisz score wewnątrz funkcji.
// Spróbuj wypisać score poza funkcją — napisz komentarz co się stanie.


// ZADANIE 7
// Napisz pętlę for z var i = 0.
// Wewnątrz pętli (3 iteracje) wypisz i.
// Po pętli wypisz i — i zanotuj w komentarzu jaką ma wartość i dlaczego.


// ZADANIE 8
// Zrób to samo co w zadaniu 7, ale z let.
// Spróbuj wypisać i po pętli.
// Zapisz w komentarzu co się różni.


// --- JS-002: hoisting ---

// ZADANIE 9
// Napisz kod który wywołuje funkcję sayHi("Jan") PRZED jej deklaracją.
// Sprawdź czy działa i napisz dlaczego.


// ZADANIE 10
// Napisz const greet = function(name) { ... } która zwraca "Cześć, [name]!".
// Spróbuj wywołać greet PRZED deklaracją — napisz w komentarzu co się stanie.
// Wywołaj ją PO deklaracji.


// ZADANIE 11
// Napisz kod z var x (bez przypisania) na górze funkcji.
// Wypisz x przed przypisaniem — zanotuj wynik.
// Przypisz x = 42.
// Wypisz x po przypisaniu.


// --- JS-005: zasięgi ---

// ZADANIE 12
// Napisz zmienną language = "polski" na zewnątrz funkcji.
// Napisz funkcję showLanguage() która wypisuje language.
// Wywołaj funkcję. Zademonstruj że ma dostęp do zewnętrznej zmiennej.


// ZADANIE 13
// Napisz funkcję outer() z zmienną secret = "tajemnica".
// Wewnątrz napisz funkcję inner() która wypisuje secret.
// Wywołaj outer(). Spróbuj wywołać inner() poza outer() — co się stanie?


// ZADANIE 14
// Napisz dwie zmienne o tej samej nazwie counter:
// jedną na zewnątrz funkcji, jedną wewnątrz.
// Wypisz counter z obu miejsc i zanotuj różnicę (variable shadowing).


// ZADANIE 15
// Napisz funkcję makeGreeter(greeting) która zwraca funkcję.
// Zwrócona funkcja przyjmuje name i zwraca "[greeting], [name]!".
// Stwórz helloGreeter i hiGreeter.
// Wywołaj oba z różnymi imionami.


// ZADANIE 16
// Napisz blok { } z let blockVar = "wewnątrz bloku".
// Wypisz blockVar wewnątrz bloku.
// Spróbuj wypisać poza blokiem — co się stanie?


// ZADANIE 17
// Napisz funkcję countDown(from) która wypisuje liczby od from do 1
// używając let w pętli for.
// Wywołaj countDown(5).


// --- JS-006: var vs let vs const ---

// ZADANIE 18
// Napisz kod konfiguracji aplikacji.
// MAX_USERS — nie zmienia się → wybierz odpowiedni słowo kluczowe.
// currentUserCount — zmienia się → wybierz odpowiednie.
// sessionToken — raz ustawiony, nie zmienia się → ?
// Uzasadnij w komentarzu swój wybór dla każdej zmiennej.


// ZADANIE 19
// Napisz funkcję refaktorowaną: zamień WSZYSTKIE var na const lub let.
// Zdecyduj samodzielnie które jest które.

function calculateBill(items) {
  var total = 0;
  var tax = 0.23;
  var discount = 0;
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var itemTotal = item.price * item.quantity;
    total += itemTotal;
  }
  var taxAmount = total * tax;
  var finalTotal = total + taxAmount - discount;
  return finalTotal;
}

// Przepisana wersja:


// ZADANIE 20
// Napisz moduł "licznik kliknięć" używając closure.
// Funkcja createClickCounter() powinna zwracać obiekt z metodami:
// click() — zwiększa licznik, getCount() — zwraca wynik, reset() — zeruje.
// Użyj const i let we właściwych miejscach.
// Stwórz dwa osobne liczniki i sprawdź że są niezależne.


// ============================================================
// SEKCJA B — ŚREDNIO TRUDNE
// ============================================================

// ZADANIE 21 — PRZEWIDAJ wynik: var + hoisting

console.log(typeof mystery);
var mystery = "znaleziony";
console.log(mystery);
// Wyniki (przed uruchomieniem):

// ZADANIE 22 — NAPRAW: var w pętli z setTimeout

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 0);
}
// a) Co wypisze? Dlaczego?
// b) Napraw za pomocą let:


// ZADANIE 23 — NAPRAW: const z obiektem

// Ten kod rzuca TypeError — znajdź przyczynę i napraw

// const settings = { theme: "dark", lang: "pl" };
// settings = { theme: "light", lang: "en" };
// console.log(settings.theme);

// Naprawiona wersja:


// ZADANIE 24 — ZAIMPLEMENTUJ: generator ID

// Napisz funkcję makeIdGenerator(prefix) zwracającą funkcję.
// Każde wywołanie zwraca kolejny ID: "user-1", "user-2", ...

function makeIdGenerator(prefix) {
  // TODO
}

// const nextUserId = makeIdGenerator("user");
// console.log(nextUserId()); // "user-1"
// console.log(nextUserId()); // "user-2"
// console.log(makeIdGenerator("order")()); // "order-1" — własny licznik!


// ============================================================
// SEKCJA C — TRUDNE
// ============================================================

// ZADANIE 25 — session tracker

// Napisz moduł sessionTracker z metodami:
// start(userId): zapisz userId i timestamp startu
// isExpired(): upłynęło > 30 minut od startu?
// getRemainingMs(): ile ms zostało
// end(): wyczyść sesję
// Użyj const dla SESSION_DURATION, let dla reszty stanu.

const sessionTracker = (function() {
  // TODO
})();
