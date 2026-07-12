// ============================================================
// SEKCJA A — ŁATWE / TEORETYCZNE
// ============================================================

// JS-034 — ZADANIE 1: uzupełnij — if / else / ternary
// ============================================================

// Uzupełnij ___ odpowiednimi wartościami/operatorami:

const score = 75;

if (score ___ 90) {
  console.log("A");
} ___ if (score ___ 75) {
  console.log("B");
} ___ {
  console.log("C");
}

// Zapisz to samo jako ternary (jeden poziom):
const grade = score >= 90 ___ "A" ___ "B lub gorzej";

// Zagnieżdżony ternary (dobre dla prostych przypadków):
const label = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "D";
console.log(label); // ?

// Odpowiedzi:

// ============================================================
// JS-034 — ZADANIE 2: PRAWDA czy FAŁSZ — truthy/falsy
// ============================================================

// Co wypisze każde if?

if (0)         console.log("0 jest truthy");
if ("")        console.log('"" jest truthy');
if (null)      console.log("null jest truthy");
if (undefined) console.log("undefined jest truthy");
if (false)     console.log("false jest truthy");
if ([])        console.log("[] jest truthy");
if ({})        console.log("{} jest truthy");
if ("0")       console.log('"0" jest truthy');
if (NaN)       console.log("NaN jest truthy");

// Które linie wypisały się? Zaznacz:

// ============================================================
// JS-035 — ZADANIE 3: switch — uzupełnij
// ============================================================

const day = "monday";

switch (___) {
  ___ "monday":
  ___ "tuesday":
  ___ "wednesday":
  ___ "thursday":
  ___ "friday":
    console.log("Dzień roboczy");
    ___;  // słowo kluczowe które zatrzymuje switch
  ___ "saturday":
  ___ "sunday":
    console.log("Weekend");
    ___;
  ___:
    console.log("Nieznany dzień");
}

// Odpowiedzi:

// ============================================================
// JS-035 — ZADANIE 4: zamień switch na mapę obiektów
// ============================================================

// Dlaczego mapa obiektów jest często lepsza niż switch?
// Odpowiedź:

// Zamień poniższy switch na obiekt:
function getHttpLabel(status) {
  switch (status) {
    case 200: return "OK";
    case 201: return "Created";
    case 400: return "Bad Request";
    case 401: return "Unauthorized";
    case 404: return "Not Found";
    case 500: return "Internal Server Error";
    default: return "Unknown";
  }
}

// Wersja z mapą:
const HTTP_LABELS = {
  200: ___,
  201: ___,
  // ...
};

function getHttpLabelMap(status) {
  return HTTP_LABELS[___] ?? "Unknown";
}

// ============================================================
// JS-036 — ZADANIE 5: pętle — uzupełnij
// ============================================================

const arr = ["a", "b", "c"];

// for klasyczny — wypisz z indeksem:
for (let ___ = 0; ___ < arr.length; _++) {
  console.log(`${___}: ${arr[___]}`);
}

// for...of — wypisz wartości:
for (const ___ of arr) {
  console.log(___);
}

// for...of z entries() — wypisz z indeksem:
for (const [___, ___] of arr.entries()) {
  console.log(`${___}: ${___}`);
}

// for...in na obiekcie (tylko własne właściwości):
const obj = { x: 1, y: 2, z: 3 };
for (const ___ in obj) {
  if (Object.___(obj, ___)) { // sprawdź własną właściwość
    console.log(`${___}: ${obj[___]}`);
  }
}

// Odpowiedzi:

// ============================================================
// JS-036 — ZADANIE 6: for vs for...of vs for...in — kiedy co?
// ============================================================

// Napisz która pętla jest najlepsza dla każdego przypadku:

// a) Iteracja po elementach tablicy (bez indeksu): ___
// b) Iteracja po elementach tablicy (z indeksem lub wstecz): ___
// c) Iteracja po właściwościach obiektu: ___
// d) Iteracja po znakach stringa: ___
// e) Iteracja po elementach Set lub Map: ___
// f) Kiedy NIE używać for...in na tablicach? Dlaczego?

// Odpowiedzi:

// ============================================================
// JS-037 — ZADANIE 7: try/catch — uzupełnij
// ============================================================

// Uzupełnij ___ odpowiednimi słowami kluczowymi lub kodem:

function divide(a, b) {
  ___  {
    if (b === 0) ___ new Error("Dzielenie przez zero!");
    return a / b;
  } ___ (e) {
    console.error("Złapano:", e.message);
    return null;
  } ___ {
    console.log("Ta linia ZAWSZE się wykona");
  }
}

console.log(divide(10, 2));  // ?
console.log(divide(10, 0));  // ?

// Odpowiedzi (słowa kluczowe): try / throw / catch / finally

// ============================================================
// JS-037 — ZADANIE 8: PRAWDA czy FAŁSZ — try/catch
// ============================================================

// ___ finally zawsze się wykonuje, nawet gdy jest return w try
// ___ catch() bez parametru (catch {}) jest niedozwolone
// ___ można rzucić (throw) cokolwiek: string, number, obiekt
// ___ try/catch działa z błędami asynchronicznymi bez async/await
// ___ instanceof pozwala sprawdzić typ złapanego błędu
// ___ po throw kod kontynuuje wykonywanie w tym samym bloku

// Odpowiedzi:

// ============================================================
// JS-038 — ZADANIE 9: == vs === — PRZEWIDAJ wynik
// ============================================================

// Napisz T (true) lub F (false) PRZED uruchomieniem:

console.log(1 == "1");         // ?
console.log(1 === "1");        // ?
console.log(0 == false);       // ?
console.log(0 === false);      // ?
console.log("" == false);      // ?
console.log("" === false);     // ?
console.log(null == undefined);  // ?
console.log(null === undefined); // ?
console.log(NaN == NaN);       // ?
console.log(NaN === NaN);      // ?
console.log([] == false);      // ?
console.log([] === false);     // ?
console.log("0" == false);     // ?
console.log("0" === false);    // ?

// Odpowiedzi:

// ============================================================
// SEKCJA B — ŚREDNIO TRUDNE
// ============================================================

// JS-034 — ZADANIE 10: NAPRAW — zamień na early return
// ============================================================

// Przepisz używając guard clauses (early return)

function processOrder(order) {
  let result;
  if (order) {
    if (order.userId) {
      if (order.items && order.items.length > 0) {
        if (order.total > 0) {
          result = { success: true, orderId: Math.random() };
        } else {
          result = { error: "Kwota musi być > 0" };
        }
      } else {
        result = { error: "Koszyk jest pusty" };
      }
    } else {
      result = { error: "Brak użytkownika" };
    }
  } else {
    result = { error: "Brak zamówienia" };
  }
  return result;
}

function processOrderClean(order) {
  // TODO: early return
}

// ============================================================
// JS-036 — ZADANIE 11: pętle w praktyce
// ============================================================

// a) Napisz funkcję sum(n) — sumuje liczby od 1 do n (for klasyczny)
function sum(n) {
  // TODO
}
// console.log(sum(10)); // 55

// b) Napisz funkcję findFirstDuplicate(arr) — używa for...of i Set
function findFirstDuplicate(arr) {
  // TODO
}
// console.log(findFirstDuplicate([1,2,3,2,4])); // 2
// console.log(findFirstDuplicate([1,2,3]));      // null

// c) Napisz funkcję objectToQuery(params) — zamienia obiekt na query string
function objectToQuery(params) {
  // TODO: for...in lub Object.entries
}
// console.log(objectToQuery({ page: 1, limit: 10, sort: "name" }));
// "page=1&limit=10&sort=name"

// ============================================================
// JS-037 — ZADANIE 12: własne klasy błędów
// ============================================================

class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NotFoundError extends Error {
  constructor(resource, id) {
    super(`${resource} #${id} nie istnieje`);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

// Napisz funkcję fetchUser(id, role) która:
// - rzuca ValidationError gdy id <= 0
// - rzuca NotFoundError gdy id > 1000
// - rzuca Error("Brak uprawnień") gdy role !== "admin"
// - zwraca { id, name: `User ${id}` }

function fetchUser(id, role) {
  // TODO
}

// Przetestuj każdy przypadek:
// function test(id, role) {
//   try {
//     console.log(fetchUser(id, role));
//   } catch (e) {
//     if (e instanceof ValidationError) console.log(`VALIDATION [${e.field}]: ${e.message}`);
//     else if (e instanceof NotFoundError) console.log(`${e.statusCode}: ${e.message}`);
//     else console.log(`ERROR: ${e.message}`);
//   }
// }
// test(-1, "admin");
// test(5, "user");
// test(2000, "admin");
// test(5, "admin");

// ============================================================
// SEKCJA C — TRUDNE / SCENARIUSZE
// ============================================================

// JS-034–038 — ZADANIE 13: parser komendy CLI
// ============================================================

// "create user --role admin --active"
// → { command: "create", args: ["user"], flags: { role: "admin", active: true } }

function parseCommand(input) {
  // TODO
}

// console.log(parseCommand("create user --role admin --active"));
// console.log(parseCommand("list --limit 10 --sort name"));
// console.log(parseCommand("delete 42 99 --force"));

// ============================================================
// JS-036/037 — ZADANIE 14: maszyna stanów
// ============================================================

// Zamówienie: pending → confirmed → shipped → delivered
//             pending → cancelled
//             confirmed → cancelled
// (shipped i delivered nie mogą być anulowane)

function createOrderMachine(initial = "pending") {
  const transitions = {
    pending: ["confirmed", "cancelled"],
    confirmed: ["shipped", "cancelled"],
    shipped: ["delivered"],
    delivered: [],
    cancelled: [],
  };

  // TODO: state, history, getState(), transition(newState), getHistory()
}

// const order = createOrderMachine();
// console.log(order.transition("confirmed")); // true
// console.log(order.transition("cancelled")); // true
// console.log(order.transition("shipped"));   // false (cancelled jest terminalny)
// console.log(order.getHistory());           // ["pending","confirmed","cancelled"]

// ============================================================
// JS-034–038 — ZADANIE 15: obsługa błędów HTTP
// ============================================================

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "HttpError";
    this.status = status;
  }
}

const auditLog = [];

async function handleApiResponse(response) {
  // TODO: try/catch/finally
  // - sprawdź status → rzuć HttpError dla 4xx/5xx
  // - parsuj JSON (SyntaxError jeśli nieprawidłowy)
  // - finally: dodaj do auditLog { timestamp, status, success }
}

// Testy:
// const testCases = [
//   { status: 200, json: () => Promise.resolve({ name: "Anna" }) },
//   { status: 404, json: () => Promise.resolve({ error: "Not found" }), ok: false },
//   { status: 500, json: () => Promise.reject(new SyntaxError("bad json")), ok: false },
// ];
