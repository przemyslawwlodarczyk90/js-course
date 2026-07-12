// ============================================================
// SEKCJA A — ŁATWE / TEORETYCZNE
// ============================================================

// JS-027 — ZADANIE 1: uzupełnij — tworzenie i dostęp
// ============================================================

// Utwórz obiekt użytkownika z polami: id, name, email, role
const user = {
  id: ___,
  name: ___,
  email: ___,
  role: "user",
};

// Dostęp notacją kropkową:
console.log(user.___);    // "user"

// Dostęp notacją nawiasową (użyj zmiennej):
const field = "name";
console.log(user[___]);   // wartość pola name

// Sprawdź czy pole "phone" istnieje:
console.log(___ in user);   // false

// Usuń pole role:
delete user.___;
console.log(user.role);   // undefined

// Odpowiedzi:

// ============================================================
// JS-027 — ZADANIE 2: shorthand + computed properties
// ============================================================

const name = "Jan";
const age = 30;

// Shorthand (zamiast { name: name, age: age }):
const person = { ___, ___ };
console.log(person); // { name: "Jan", age: 30 }

// Computed property key:
const key = "role";
const obj = { [___]: "admin" };
console.log(obj.role); // "admin"

// Odpowiedzi:

// ============================================================
// JS-028 — ZADANIE 3: uzupełnij — Object.*
// ============================================================

const config = { host: "localhost", port: 3000, debug: true };

const keys   = Object.___( config );  // ["host", "port", "debug"]
const values = Object.___( config );  // ["localhost", 3000, true]
const entries = Object.___( config ); // [["host","localhost"], ...]

// Zamień klucze na UPPERCASE:
const upper = Object.fromEntries(
  Object.entries(config).map(([k, v]) => [k.___, v])
);

// Skopiuj z nadpisaniem:
const merged = Object.___({}, config, { debug: false, timeout: 5000 });

console.log(keys);
console.log(values);
console.log(upper);
console.log(merged);

// Odpowiedzi (metody): keys / values / entries / toUpperCase() / assign

// ============================================================
// JS-029 — ZADANIE 4: uzupełnij — dekonstrukcja obiektu
// ============================================================

const product = { id: 1, name: "Laptop", price: 3499, category: "electronics" };

// Podstawowa dekonstrukcja:
const { id, name: productName, price } = product;
// productName = ?  price = ?

// Z wartością domyślną (pole nie istnieje):
const { rating = 0 } = product;
// rating = ?

// Reszta właściwości:
const { id: _, ...rest } = product;
// rest = ?  (bez id)

// Dekonstrukcja zagnieżdżona:
const company = { name: "Acme", address: { city: "Warszawa", zip: "00-001" } };
const { address: { city } } = company;
// city = ?

// Odpowiedzi:

// ============================================================
// JS-030 — ZADANIE 5: ?. i ?? — uzupełnij
// ============================================================

const response = {
  data: {
    user: null,
  },
};

// Bez optional chaining — TypeError!
// response.data.user.name → BŁĄD

// Z optional chaining:
console.log(response.data?.___.___);   // undefined (nie rzuca błędu)

// Nullish coalescing:
const count = 0;
console.log(count || 10);   // ? — czy to poprawne gdy 0 jest prawidłową wartością?
console.log(count ?? 10);   // ? — poprawne użycie

const username = null;
console.log(username ?? "Gość");   // ?

// Odpowiedzi:

// ============================================================
// JS-030 — ZADANIE 6: PRAWDA czy FAŁSZ — ?. i ??
// ============================================================

// ___ ?. zwraca undefined (nie null) gdy nie może przejść dalej
// ___ ?? daje fallback gdy wartość jest 0
// ___ ?? daje fallback gdy wartość jest ""
// ___ ?? daje fallback gdy wartość jest null
// ___ ?? daje fallback gdy wartość jest undefined
// ___ || daje fallback gdy wartość jest 0
// ___ || i ?? są zawsze wymienne

// Odpowiedzi:

// ============================================================
// JS-031 — ZADANIE 7: spread obiektów — uzupełnij
// ============================================================

const defaults = { theme: "light", lang: "pl", notifications: true };
const overrides = { theme: "dark", timeout: 5000 };

// Scal z nadpisaniem (overrides wygrywa):
const merged2 = { ___defaults, ___overrides };
console.log(merged2);
// { theme: "dark", lang: "pl", notifications: true, timeout: 5000 }

// Płytka kopia:
const copy = { ___defaults };
copy.theme = "custom";
console.log(defaults.theme); // ? — czy oryginał zmieniony?

// Odpowiedzi:

// ============================================================
// JS-032 — ZADANIE 8: JSON — uzupełnij
// ============================================================

const data = { name: "Anna", score: 95, active: true };

// Serializacja:
const json = JSON.___( data );
console.log(typeof json); // ?

// Deserializacja:
const parsed = JSON.___( json );
console.log(typeof parsed); // ?
console.log(parsed.name);   // ?

// Co JSON ignoruje?
const tricky = { fn: () => "test", undef: undefined, num: Infinity };
console.log(JSON.stringify(tricky)); // ?
// Wyjaśnij co się stało z fn, undef, num:

// Odpowiedzi (metody): stringify / parse

// ============================================================
// JS-033 — ZADANIE 9: Date — uzupełnij
// ============================================================

const now = new Date();

// Wypełnij metody:
console.log(now.___()); // rok (np. 2024)
console.log(now.___()); // miesiąc 0-11 (!) — styczeń = 0
console.log(now.___()); // dzień miesiąca 1-31
console.log(now.___()); // dzień tygodnia 0-6 (niedziela = 0)
console.log(now.___()); // ms od epoki

// Uwaga: miesiące są 0-indexed! Nowa data 31 grudnia 2024:
const deadline = new Date(2024, ___, 31); // który numer miesiąca?

// Formatowanie:
console.log(now.toLocaleDateString("pl-PL")); // np. "15.06.2024"
console.log(now.toISOString());               // np. "2024-06-15T10:30:00.000Z"

// Odpowiedzi (metody): getFullYear / getMonth / getDate / getDay / getTime

// ============================================================
// SEKCJA B — ŚREDNIO TRUDNE
// ============================================================

// JS-028 — ZADANIE 10: Object.entries pipeline
// ============================================================

const pricesUSD = { Laptop: 1200, Phone: 800, Headphones: 250, Monitor: 450 };
const rate = 4.02;

// Przelicz wszystkie ceny na PLN i zaokrąglij do 2 miejsc:
const pricesPLN = Object.fromEntries(
  Object.entries(pricesUSD).map(([name, usd]) => [name, ___])
);
// console.log(pricesPLN);

// ============================================================
// JS-029 — ZADANIE 11: dekonstrukcja w parametrach
// ============================================================

// Przepisz funkcję używając dekonstrukcji w parametrach
function displayUser(user) {
  return `${user.name} (${user.age}) — ${user.role}`;
}

// Wersja z dekonstrukcją:
function displayUserDestructured({ ___, ___, ___ }) {
  return `${name} (${age}) — ${role}`;
}

// Wersja z wartościami domyślnymi:
function displayUserWithDefaults({ name = "Anonim", age = 0, role = "user" } = {}) {
  return `${name} (${age}) — ${role}`;
}
// console.log(displayUserWithDefaults()); // "Anonim (0) — user"
// console.log(displayUserWithDefaults({ name: "Anna", age: 28 })); // "Anna (28) — user"

// ============================================================
// JS-030 — ZADANIE 12: NAPRAW — optional chaining
// ============================================================

// Ten kod rzuca TypeError dla niektórych danych. Napraw.

const apiResponses = [
  { status: 200, data: { users: [{ name: "Anna" }] } },
  { status: 404, data: null },
  { status: 200, data: { users: [] } },
];

function getFirstUserName(response) {
  return response.data.users[0].name; // BUG
}

function getFirstUserNameFixed(response) {
  // TODO: użyj ?. i ??
}

// apiResponses.forEach(r => console.log(getFirstUserNameFixed(r)));
// "Anna", "Brak użytkownika", "Brak użytkownika"

// ============================================================
// JS-031 — ZADANIE 13: immutable update
// ============================================================

// Zaktualizuj zagnieżdżony stan BEZ mutacji (wzorzec React/Redux).
// Użyj tylko spread.

const appState = {
  user: { name: "Jan", preferences: { theme: "light", notifications: { push: false } } },
  cart: { items: [], total: 0 },
};

// Utwórz nowy stan: user.name = "Marek", theme = "dark", push = true
const newState = {
  ...appState,
  user: {
    ...appState.user,
    name: "Marek",
    preferences: {
      ...appState.user.preferences,
      theme: "dark",
      notifications: {
        ...appState.user.preferences.notifications,
        push: true,
      },
    },
  },
};

// Sprawdź że oryginał niezmieniony:
console.log(appState.user.name);                        // "Jan"
console.log(newState.user.name);                        // "Marek"
console.log(appState.user.preferences.theme);           // "light"
console.log(newState.user.preferences.theme);           // "dark"

// ============================================================
// SEKCJA C — TRUDNE / SCENARIUSZE
// ============================================================

// JS-027–033 — ZADANIE 14: transformacja danych API
// ============================================================

// Serwer zwraca snake_case. Zamień na camelCase.

function toCamelCase(str) {
  // "first_name" → "firstName"
  // TODO: split("_"), map, join
}

function transformUser(raw) {
  // TODO: Object.entries + fromEntries + toCamelCase
}

const apiUser = {
  first_name: "Anna", last_name: "Nowak",
  email_address: "anna@example.com", user_role: "admin",
};

// console.log(transformUser(apiUser));
// { firstName: "Anna", lastName: "Nowak", emailAddress: "anna@example.com", userRole: "admin" }

// ============================================================
// JS-028/031 — ZADANIE 15: deep merge
// ============================================================

function deepMerge(target, source) {
  // TODO: rekurencja dla zagnieżdżonych obiektów
}

const defaultConfig = {
  server: { host: "localhost", port: 3000 },
  db: { host: "localhost", port: 5432, name: "dev" },
};

const prodConfig = {
  server: { port: 8080 },
  db: { name: "production", password: "secret" },
};

// console.log(deepMerge(defaultConfig, prodConfig));
// { server: { host: "localhost", port: 8080 }, db: { host: "localhost", port: 5432, name: "production", password: "secret" } }

// ============================================================
// JS-033 — ZADANIE 16: kalkulator dat
// ============================================================

function dateDiff(date1, date2) {
  // Zwróć { days, hours, minutes, isOverdue }
  // TODO: getTime, Math.abs, Math.floor
}

// console.log(dateDiff("2024-01-01", "2024-01-05T14:30:00"));
// { days: 4, hours: 14, minutes: 30, isOverdue: false }

// ============================================================
// JS-027–033 — ZADANIE 17: normalizacja zamówień (Redux pattern)
// ============================================================

const orders = [
  { id: "ord-1", userId: "u1", amount: 299, status: "completed" },
  { id: "ord-2", userId: "u2", amount: 4999, status: "pending" },
  { id: "ord-3", userId: "u1", amount: 49, status: "completed" },
];

// Zamień na { byId: {"ord-1": {...}}, allIds: ["ord-1", "ord-2", "ord-3"] }
function normalize(arr) {
  // TODO
}

// const n = normalize(orders);
// console.log(n.byId["ord-1"].status);    // "completed"
// console.log(n.allIds.length);           // 3
// Pobierz zamówienia userId = "u1":
// console.log(n.allIds.filter(id => n.byId[id].userId === "u1").map(id => n.byId[id]));
