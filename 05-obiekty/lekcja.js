// ============================================================
// JS-027 — Podstawy obiektów
// ============================================================

// Tworzenie
const user = {
  id: 1,
  name: "Anna Nowak",
  age: 28,
  address: {
    city: "Kraków",
    zip: "30-001",
  },
  greet() {
    return `Hej, jestem ${this.name}!`;
  },
};

// Dostęp
console.log(user.name);             // "Anna Nowak" — notacja kropkowa
console.log(user["address"]["city"]); // "Kraków" — notacja nawiasowa
console.log(user.greet());

// Dynamiczny klucz
const field = "name";
console.log(user[field]);           // "Anna Nowak"

// Obliczany klucz (computed property)
const prefix = "user";
const dynamic = {
  [`${prefix}Name`]: "Jan",
  [`${prefix}Age`]: 25,
};
console.log(dynamic.userName); // "Jan"

// Shorthand properties
const name = "Basia";
const age = 22;
const person = { name, age }; // zamiast { name: name, age: age }

// Sprawdzanie i usuwanie właściwości
console.log("address" in user);     // true
console.log("phone" in user);       // false
delete user.age;
console.log(user.age);              // undefined

// ============================================================
// JS-028 — Metody Object.*
// ============================================================

const config = { host: "localhost", port: 3000, debug: true };

console.log(Object.keys(config));    // ["host", "port", "debug"]
console.log(Object.values(config));  // ["localhost", 3000, true]
console.log(Object.entries(config)); // [["host","localhost"], ["port",3000], ...]

// entries → Map
const configMap = new Map(Object.entries(config));
console.log(configMap.get("port")); // 3000

// fromEntries: entries → obiekt
const upper = Object.fromEntries(
  Object.entries(config).map(([k, v]) => [k.toUpperCase(), v])
);
console.log(upper); // { HOST: "localhost", PORT: 3000, DEBUG: true }

// assign: kopiuje właściwości (płytko, mutuje target)
const defaults = { timeout: 5000, retries: 3, debug: false };
const overrides = { debug: true, timeout: 1000 };
const merged = Object.assign({}, defaults, overrides);
console.log(merged); // { timeout: 1000, retries: 3, debug: true }

// freeze: uniemożliwia modyfikację
const SETTINGS = Object.freeze({ maxItems: 100, pageSize: 20 });
SETTINGS.maxItems = 999; // cicha odmowa (lub TypeError w strict mode)
console.log(SETTINGS.maxItems); // 100

// ============================================================
// JS-029 — Dekonstrukcja obiektu
// ============================================================

const { name: userName, age: userAge = 30, address: { city } } = user;
console.log(userName); // "Anna Nowak"
console.log(userAge);  // 30 (wartość domyślna bo usunęliśmy age)
console.log(city);     // "Kraków"

// Reszta właściwości
const { id, ...rest } = user;
console.log(id);   // 1
console.log(rest); // { name, address, greet }

// Dekonstrukcja w parametrach funkcji
function displayUser({ name, address: { city } = {} }) {
  return `${name} z ${city}`;
}
console.log(displayUser(user)); // "Anna Nowak z Kraków"

// ============================================================
// JS-030 — Optional chaining ?. i nullish coalescing ??
// ============================================================

const apiResponse = {
  data: {
    user: {
      profile: null,
    },
  },
};

// Bez optional chaining — ryzyko TypeError
// console.log(apiResponse.data.user.profile.avatar); // TypeError!

// Z optional chaining
console.log(apiResponse.data?.user?.profile?.avatar); // undefined (nie rzuca błędu)
console.log(apiResponse.data?.posts?.[0]?.title);     // undefined

// Wywołanie metody z ?.
const logger = null;
logger?.log("test"); // brak błędu, nic nie robi

// ?? — nullish coalescing: fallback tylko dla null i undefined
// || daje fallback dla każdego falsy (0, "", false też!)
const count = 0;
console.log(count || 10);  // 10 — BŁĄD jeśli 0 jest poprawną wartością!
console.log(count ?? 10);  // 0  — poprawnie

const username = null;
console.log(username ?? "Gość"); // "Gość"

const settings = null;
const pageSize = settings?.pageSize ?? 20;
console.log(pageSize); // 20

// ============================================================
// JS-031 — Spread operator na obiektach
// ============================================================

const base = { a: 1, b: 2, c: 3 };
const extended = { ...base, d: 4, b: 99 }; // b nadpisany
console.log(extended); // { a: 1, b: 99, c: 3, d: 4 }

// Płytka kopia
const original = { name: "Jan", scores: [10, 20] };
const copy = { ...original };
copy.name = "Marek"; // OK — nie wpływa na oryginał
copy.scores.push(30); // ! wpływa — scores to ta sama referencja

// Wzorzec: immutable update (popularny w React/Redux)
const state = { user: null, loading: false, error: null };
const loadingState = { ...state, loading: true };
const successState = { ...state, user: { name: "Anna" }, loading: false };
console.log(state.loading); // false — oryginał niezmieniony

// ============================================================
// JS-032 — JSON.stringify() i JSON.parse()
// ============================================================

const product = { id: 1, name: "Laptop", price: 3000, tags: ["work", "gaming"] };

// Serializacja
const json = JSON.stringify(product);
console.log(json);         // '{"id":1,"name":"Laptop",...}'
console.log(typeof json);  // "string"

// Formatowanie (indent)
console.log(JSON.stringify(product, null, 2));

// Deserializacja
const parsed = JSON.parse(json);
console.log(parsed.tags[0]); // "work"

// Głęboka kopia (tylko proste typy danych — bez funkcji, Date, undefined)
const deepCopy = JSON.parse(JSON.stringify(product));
deepCopy.tags.push("test");
console.log(product.tags.length); // 2 — oryginał bezpieczny

// Co JSON.stringify ignoruje / konwertuje:
const tricky = {
  fn: () => "ignorowana",    // undefined w JSON
  undef: undefined,          // pominięty klucz
  date: new Date(),          // konwertowane do string
  symbol: Symbol("x"),       // pominięty klucz
  num: Infinity,             // null
};
console.log(JSON.stringify(tricky));

// ============================================================
// JS-033 — Obiekt Date
// ============================================================

const now = new Date();
console.log(now.getFullYear());    // np. 2024
console.log(now.getMonth());       // 0-11 (!) — styczeń = 0
console.log(now.getDate());        // dzień miesiąca 1-31
console.log(now.getDay());         // 0-6 (niedziela = 0)
console.log(now.getTime());        // ms od 1970-01-01

// Tworzenie konkretnej daty
const deadline = new Date(2024, 11, 31); // 31 grudzień 2024 (miesiąc 11!)
const fromISO = new Date("2024-06-15T10:30:00");

// Różnica dat w dniach
const diff = deadline.getTime() - now.getTime();
const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
console.log(`Dni do końca roku: ${days}`);

// Formatowanie
console.log(now.toLocaleDateString("pl-PL")); // "15.06.2024"
console.log(now.toLocaleTimeString("pl-PL")); // "10:30:00"
console.log(now.toISOString());               // "2024-06-15T08:30:00.000Z"
