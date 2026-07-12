// ============================================================
// JS-034 — if / else / operator trójargumentowy
// ============================================================

const score = 75;

if (score >= 90) {
  console.log("Celujący");
} else if (score >= 75) {
  console.log("Dobry");
} else if (score >= 60) {
  console.log("Dostateczny");
} else {
  console.log("Niedostateczny");
}

// Ternary — krótka forma dla prostych wyrażeń
const grade = score >= 75 ? "Dobry" : "Niedostateczny";
console.log(grade);

// Zagnieżdżony ternary — używaj ostrożnie (czytelność)
const label = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "D";

// Częsty wzorzec: early return (guard clause) — zamiast głębokiego if-else
function processPayment(payment) {
  if (!payment) return { error: "Brak danych płatności" };
  if (!payment.amount) return { error: "Brak kwoty" };
  if (payment.amount <= 0) return { error: "Kwota musi być > 0" };
  if (!payment.currency) return { error: "Brak waluty" };

  // Tu wiemy, że dane są poprawne
  return { success: true, amount: payment.amount };
}

// ============================================================
// JS-035 — switch i obiekt jako mapa
// ============================================================

const httpMethod = "GET";

// switch — dobre do stałych wartości
switch (httpMethod) {
  case "GET":
    console.log("Pobieranie zasobu");
    break;
  case "POST":
    console.log("Tworzenie zasobu");
    break;
  case "PUT":
  case "PATCH":
    console.log("Aktualizacja zasobu");
    break;
  case "DELETE":
    console.log("Usuwanie zasobu");
    break;
  default:
    console.log("Nieznana metoda");
}

// Obiekt jako mapa — często czytelniejszy niż switch
const HTTP_LABELS = {
  GET: "Pobieranie zasobu",
  POST: "Tworzenie zasobu",
  PUT: "Aktualizacja zasobu",
  PATCH: "Aktualizacja zasobu",
  DELETE: "Usuwanie zasobu",
};

console.log(HTTP_LABELS[httpMethod] ?? "Nieznana metoda");

// Mapa akcji (funkcji)
const STATUS_HANDLERS = {
  200: () => "OK",
  201: () => "Utworzono",
  400: () => "Nieprawidłowe żądanie",
  401: () => "Brak autoryzacji",
  404: () => "Nie znaleziono",
  500: () => "Błąd serwera",
};

const handle = STATUS_HANDLERS[404] ?? (() => "Nieznany status");
console.log(handle()); // "Nie znaleziono"

// ============================================================
// JS-036 — for, for...of, for...in
// ============================================================

// Klasyczny for — gdy potrzebujesz indeksu lub iterujesz wstecz
for (let i = 0; i < 5; i++) {
  if (i === 3) continue; // pomiń
  if (i === 4) break;    // zatrzymaj
  console.log(i);
}

// for...of — iteracja po wartościach (tablice, stringe, Map, Set)
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// for...of z entries() — gdy potrzebujesz indeksu
for (const [index, color] of colors.entries()) {
  console.log(`${index}: ${color}`);
}

// for...of na string
for (const char of "JS") {
  console.log(char); // "J", "S"
}

// for...in — iteracja po kluczach obiektu
// UWAGA: iteruje też po kluczach z prototype chain — ostrożnie
const settings = { theme: "dark", lang: "pl", debug: true };
for (const key in settings) {
  if (Object.hasOwn(settings, key)) { // sprawdź własne właściwości
    console.log(`${key}: ${settings[key]}`);
  }
}

// for...in na tablicach — ZŁE (kolejność nie gwarantowana + klucze to stringi)
// Używaj for...of lub forEach dla tablic

// ============================================================
// JS-037 — try / catch / finally
// ============================================================

function parseJSON(str) {
  try {
    const result = JSON.parse(str);
    return { data: result, error: null };
  } catch (e) {
    return { data: null, error: `Błąd parsowania: ${e.message}` };
  }
}

console.log(parseJSON('{"name":"Jan"}'));  // { data: { name: "Jan" }, error: null }
console.log(parseJSON("invalid"));         // { data: null, error: "Błąd parsowania: ..." }

// finally — zawsze się wykonuje (sprzątanie, logi)
function readFile(path) {
  console.log("Otwieranie pliku...");
  try {
    if (!path) throw new Error("Ścieżka jest wymagana");
    return `Zawartość: ${path}`;
  } catch (e) {
    console.error("Błąd:", e.message);
    return null;
  } finally {
    console.log("Zamykanie pliku (zawsze!)"); // wykonuje się zawsze
  }
}

// Własne klasy błędów
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NotFoundError extends Error {
  constructor(resource, id) {
    super(`${resource} o id ${id} nie istnieje`);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

try {
  throw new ValidationError("email", "Niepoprawny format e-mail");
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(`Błąd walidacji pola "${e.field}": ${e.message}`);
  } else if (e instanceof NotFoundError) {
    console.log(`${e.statusCode}: ${e.message}`);
  } else {
    throw e; // nieznany błąd — przepuść dalej
  }
}

// ============================================================
// JS-038 — == vs ===
// ============================================================

// === (strict): bez konwersji typów — używaj zawsze
console.log(1 === "1");    // false
console.log(1 === 1);      // true
console.log(null === undefined); // false

// == (loose): z konwersją typów — unikaj
console.log(1 == "1");     // true (konwersja)
console.log(0 == false);   // true (konwersja)
console.log(null == undefined); // true — jedyny przydatny wyjątek

// Sprawdzanie null i undefined jednocześnie — oba sposoby OK
const val = null;
if (val == null) console.log("null lub undefined"); // loose OK tutaj
if (val === null || val === undefined) console.log("null lub undefined"); // explicit

// NaN nie równa się niczemu, nawet sobie
console.log(NaN === NaN);           // false
console.log(Number.isNaN(NaN));     // true — prawidłowy sposób sprawdzenia
console.log(Number.isNaN("hello")); // false (nie konwertuje jak isNaN)
