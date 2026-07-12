// ============================================================
// JS-007 — String: ZADANIE 1 — PRZEWIDAJ wynik: template literals
// ============================================================

const name = "Jan";
const age = 25;

console.log(`Hej ${name}, masz ${age} lat`); // ?
console.log(`2 + 2 = ${2 + 2}`);             // ?
console.log(`${age >= 18 ? "dorosły" : "nieletni"}`); // ?
console.log(`Wiersz 1
Wiersz 2`);
// Ile linii wypisze ostatni?

const tag = (strings, ...values) => strings.raw[0];
console.log(tag`Ścieżka: C:\nUsers`); // \n — escape czy dosłownie?

// Odpowiedzi:

// ============================================================
// JS-008 — Metody string: ZADANIE 2 — ćwicz każdą metodę
// ============================================================

const email = "  Jan.Kowalski@Example.COM  ";

// Wypisz wyniki każdej operacji:
console.log(email.trim());              // usuń spacje z obu stron
console.log(email.trimStart());         // usuń spacje tylko z lewej
console.log(email.trim().toLowerCase()); // trim + małe litery
console.log(email.includes("@"));       // zawiera @?
console.log(email.indexOf("@"));        // indeks @
console.log(email.split("@"));          // podziel na tablicę
console.log(email.trim().startsWith(" ")); // czy zaczyna się od spacji?
console.log(email.trim().endsWith(".COM")); // czy kończy się na .COM?
console.log(email.trim().replace("Example", "gmail")); // zastąp
console.log(email.trim().slice(4, 12)); // fragment
console.log("abc".padStart(6, "0"));    // dopełnij zerami z lewej
console.log("abc".padEnd(6, "-"));      // dopełnij myślnikami z prawej
console.log("ha".repeat(4));            // powtórz 4 razy
console.log("  spacious  ".trimEnd());  // usuń spacje z prawej

// ============================================================
// JS-008 — Metody string: ZADANIE 3 — ZAIMPLEMENTUJ
// ============================================================

// a) Napisz funkcję capitalizeWords(str), która zamienia pierwsze litery
//    każdego słowa na wielką (bez regex).
function capitalizeWords(str) {
  // TODO: split(" "), map, join
}
// console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"

// b) Napisz funkcję truncate(str, maxLen, suffix = "..."),
//    która przycina string do maxLen znaków (razem z suffix).
function truncate(str, maxLen, suffix = "...") {
  // TODO
}
// console.log(truncate("Długi tekst artykułu", 10)); // "Długi t..."
// console.log(truncate("Krótki", 20)); // "Krótki"

// c) Napisz funkcję countOccurrences(str, char),
//    która liczy ile razy znak char pojawia się w str.
function countOccurrences(str, char) {
  // TODO: split(char).length - 1 LUB pętla
}
// console.log(countOccurrences("hello world", "l")); // 3
// console.log(countOccurrences("banana", "a")); // 3

// d) Napisz isPalindrome(str) — czy string czyta się tak samo od obu stron.
function isPalindrome(str) {
  // TODO: usuń spacje, małe litery, porównaj z reversed
}
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("Kayak"));   // true (case insensitive)
// console.log(isPalindrome("hello"));   // false

// ============================================================
// JS-008 — Metody string: ZADANIE 4 — SCENARIUSZ: formatter
// ============================================================

// Napisz formatMessage(template, data), która podmienia {{placeholder}}
// w szablonie na wartości z obiektu data.

function formatMessage(template, data) {
  // TODO: nie używaj regex (użyj split + join lub replaceAll)
}

// console.log(formatMessage(
//   "Hej {{name}}! Twoje zamówienie #{{orderId}} zostało {{status}}.",
//   { name: "Anna", orderId: "12345", status: "wysłane" }
// ));
// "Hej Anna! Twoje zamówienie #12345 zostało wysłane."

// ============================================================
// JS-009 — Number: ZADANIE 5 — PRZEWIDAJ wynik
// ============================================================

// Wypisz odpowiedź przed uruchomieniem:

console.log(0.1 + 0.2);               // ?
console.log(0.1 + 0.2 === 0.3);       // ?
console.log((0.1 + 0.2).toFixed(1));  // ?  — jaki typ?
console.log(+"42");                    // ?  — operator jednoargumentowy +
console.log(+"");                      // ?
console.log(+null);                    // ?
console.log(+undefined);               // ?
console.log(+true);                    // ?
console.log(+false);                   // ?
console.log(+"abc");                   // ?
console.log(10 / 0);                   // ?
console.log(-10 / 0);                  // ?
console.log(0 / 0);                    // ?
console.log(Number.MAX_SAFE_INTEGER);  // ?
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // ?

// Odpowiedzi:

// ============================================================
// JS-009 — Number: ZADANIE 6 — metody Math i Number
// ============================================================

// Uzupełnij wyniki:
console.log(Math.floor(4.9));    // ?
console.log(Math.ceil(4.1));     // ?
console.log(Math.round(4.5));    // ?
console.log(Math.round(4.4));    // ?
console.log(Math.trunc(4.9));    // ?  (usuwa część dziesiętną)
console.log(Math.trunc(-4.9));   // ?
console.log(Math.abs(-42));      // ?
console.log(Math.pow(2, 10));    // ?
console.log(2 ** 10);            // ?  (operator potęgowania)
console.log(Math.sqrt(144));     // ?
console.log(Math.log2(1024));    // ?
console.log(Number.isNaN(NaN));          // ?
console.log(Number.isNaN("abc"));        // ?  (różni się od isNaN!)
console.log(isNaN("abc"));               // ?  (stara wersja — konwertuje!)
console.log(Number.isFinite(Infinity));  // ?
console.log(Number.isInteger(3.0));      // ?
console.log(Number.isInteger(3.1));      // ?

// Odpowiedzi:

// ============================================================
// JS-009 — Number: ZADANIE 7 — ZAIMPLEMENTUJ: formatowanie
// ============================================================

// a) Napisz formatCurrency(amount, currency = "PLN", locale = "pl-PL")
//    używając Intl.NumberFormat (wbudowane API JS)
function formatCurrency(amount, currency = "PLN", locale = "pl-PL") {
  // TODO: new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount)
}
// console.log(formatCurrency(1234.5));          // "1 234,50 zł"
// console.log(formatCurrency(1234.5, "USD", "en-US")); // "$1,234.50"

// b) Napisz clamp(value, min, max) — ogranicz liczbę do przedziału [min, max]
function clamp(value, min, max) {
  // TODO: Math.min / Math.max
}
// console.log(clamp(15, 0, 10)); // 10
// console.log(clamp(-5, 0, 10)); // 0
// console.log(clamp(7, 0, 10));  // 7

// c) Napisz randomInt(min, max) — losowa całkowita liczba z zakresu [min, max]
function randomInt(min, max) {
  // TODO: Math.random + Math.floor
}
// Przetestuj: console.log(Array.from({ length: 10 }, () => randomInt(1, 6)));

// d) Napisz toPrecision(num, decimals) — zaokrąglij do decimals miejsc po przecinku
//    i zwróć jako NUMBER (nie string)
function toPrecision(num, decimals) {
  // TODO: Number(num.toFixed(decimals))
}
// console.log(toPrecision(0.1 + 0.2, 2)); // 0.3

// ============================================================
// JS-010 — BigInt: ZADANIE 8 — operacje
// ============================================================

// BigInt — liczby całkowite dowolnej wielkości

const maxSafe = Number.MAX_SAFE_INTEGER;
const bigMax = BigInt(maxSafe);

console.log(maxSafe + 1 === maxSafe + 2);   // ?  (błąd precyzji)
console.log(bigMax + 1n === bigMax + 2n);   // ?  (dokładne)

console.log(typeof 42n);          // ?
console.log(typeof 42);           // ?
// console.log(42n + 42);         // odkomentuj — co się stanie?
console.log(42n + BigInt(42));    // ?  — konwersja
console.log(Number(42n));         // ?  — konwersja
console.log(10n / 3n);            // ?  — dzielenie całkowite!
console.log(10n % 3n);            // ?

// Kiedy używać BigInt?
// - ID z bazy danych większe niż MAX_SAFE_INTEGER
// - Kryptografia
// - Obliczenia finansowe z dużymi liczbami

// Odpowiedzi:

// ============================================================
// JS-011 — Boolean, undefined, null: ZADANIE 9 — falsy values
// ============================================================

// Które z tych wartości są falsy? Odpowiedz PRZED uruchomieniem.

const values = [
  false, 0, -0, 0n, "", null, undefined, NaN,  // wszystkie falsy
  true, 1, -1, "0", "false", [], {}, Infinity,  // wszystkie truthy!
];

values.forEach(v => {
  console.log(`${String(v).padEnd(10)} → ${Boolean(v) ? "TRUTHY" : "FALSY"}`);
});

// Zaskoczenia:
// "0" → ?
// [] → ?
// {} → ?
// 0n → ?

// ============================================================
// JS-011 — Boolean, undefined, null: ZADANIE 10 — null vs undefined
// ============================================================

// Uzupełnij wyniki i wyjaśnij różnicę:

let declared;
let empty = null;

console.log(typeof declared);     // ?
console.log(typeof empty);        // ?  — historyczny bug!
console.log(declared == empty);   // ?  — loose equality
console.log(declared === empty);  // ?  — strict equality
console.log(declared == null);    // ?  — przydatny pattern
console.log(declared === null);   // ?
console.log(empty == undefined);  // ?
console.log(empty === undefined); // ?
console.log(null + 1);            // ?  — konwersja null do 0!
console.log(undefined + 1);       // ?  — konwersja undefined do NaN!

// Odpowiedzi:

// ============================================================
// JS-011 — ZADANIE 11 — NAPRAW: sprawdzanie null/undefined
// ============================================================

// Ten kod ma bug — nie obsługuje poprawnie null/undefined/0/"".
// Zidentyfikuj błędy i popraw.

function displayUserCount(count) {
  if (count) {
    console.log(`Użytkowników: ${count}`);
  } else {
    console.log("Brak danych");
  }
}

// Co zwróci dla:
// displayUserCount(0);        // ? — oczekiwane: "Użytkowników: 0"
// displayUserCount(null);     // ? — oczekiwane: "Brak danych"
// displayUserCount(undefined);// ? — oczekiwane: "Brak danych"
// displayUserCount(42);       // ? — oczekiwane: "Użytkowników: 42"

// Poprawka (użyj ?? lub sprawdź explicit):
function displayUserCountFixed(count) {
  // TODO
}

// ============================================================
// JS-012 — Symbol: ZADANIE 12 — unikalność
// ============================================================

const s1 = Symbol("user");
const s2 = Symbol("user");
const s3 = Symbol.for("shared");
const s4 = Symbol.for("shared");

console.log(s1 === s2);        // ?
console.log(s3 === s4);        // ?  — Symbol.for rejestruje globalnie
console.log(typeof s1);        // ?
console.log(s1.toString());    // ?
console.log(s1.description);   // ?

// Symbol jako klucz obiektu
const ID = Symbol("id");
const user = { [ID]: 123, name: "Anna" };

console.log(user[ID]);                 // ?
console.log(Object.keys(user));        // ?  — czy Symbol jest widoczny?
console.log(Object.values(user));      // ?
console.log(JSON.stringify(user));     // ?  — czy Symbol w JSON?

// Odpowiedzi:

// ============================================================
// JS-012 — Symbol: ZADANIE 13 — praktyczne zastosowanie
// ============================================================

// Symbol zapobiega kolizji kluczy — użyteczne przy rozszerzaniu obiektów
// bez ryzyka nadpisania istniejących właściwości.

// Napisz funkcję addPrivateId(obj) która dodaje do obiektu
// ukrytą właściwość Symbol — unikalny ID (bez ryzyka kolizji z istniejącymi kluczami)

const _id = Symbol("privateId");
let nextId = 1;

function addPrivateId(obj) {
  // TODO: obj[_id] = nextId++
  // return obj
}

// Test:
// const u1 = addPrivateId({ name: "Anna" });
// const u2 = addPrivateId({ name: "Jan" });
// console.log(u1[_id]); // 1
// console.log(u2[_id]); // 2
// console.log(Object.keys(u1)); // ["name"] — _id jest ukryty
// console.log("id" in u1);      // false

// ============================================================
// JS-013 — Typy referencyjne: ZADANIE 14 — PRZEWIDAJ wynik
// ============================================================

// Prymitywy
let p1 = 42;
let p2 = p1;
p2 = 100;
console.log(p1); // ?

let s = "hello";
let t = s;
t = t.toUpperCase();
console.log(s);  // ?

// Obiekty
const o1 = { x: 1 };
const o2 = o1;
o2.x = 99;
console.log(o1.x); // ?

const o3 = { ...o1 };
o3.x = 999;
console.log(o1.x); // ?

// Tablice
const a1 = [1, 2, 3];
const a2 = a1;
a2.push(4);
console.log(a1.length); // ?

const a3 = [...a1];
a3.push(5);
console.log(a1.length); // ?

// Odpowiedzi:

// ============================================================
// JS-013 — Typy referencyjne: ZADANIE 15 — GŁĘBOKA KOPIA
// ============================================================

// Porównaj metody kopiowania obiektów:

const original = {
  name: "Laptop",
  specs: { ram: 16, storage: 512 },
  tags: ["work", "home"],
};

// Metoda 1: spread (płytka kopia)
const copy1 = { ...original };
copy1.name = "Desktop";           // izolowane?
copy1.specs.ram = 32;             // izolowane?
copy1.tags.push("gaming");        // izolowane?

console.log(original.name);        // ?
console.log(original.specs.ram);   // ?
console.log(original.tags.length); // ?

// Metoda 2: JSON.parse + JSON.stringify (głęboka kopia)
const original2 = { name: "Laptop", specs: { ram: 16 }, tags: ["work"] };
const copy2 = JSON.parse(JSON.stringify(original2));
copy2.specs.ram = 64;
copy2.tags.push("gaming");

console.log(original2.specs.ram);   // ?
console.log(original2.tags.length); // ?

// Metoda 3: structuredClone (ES2022, głęboka kopia)
const copy3 = structuredClone(original2);
copy3.specs.ram = 128;
console.log(original2.specs.ram);   // ?

// Kiedy która metoda zawodzi?
// spread: PRZY ZAGNIEŻDŻENIU
// JSON: PRZY FUNKCJACH, Date, undefined, Symbol
// structuredClone: PRZY FUNKCJACH (ale obsługuje Date, Map, Set, etc.)

// Odpowiedzi:

// ============================================================
// JS-007–013 — ZADANIE 16 — SCENARIUSZ: normalizacja danych
// ============================================================

const rawData = {
  name: "  anna kowalska  ",
  email: "  ANNA@Example.COM  ",
  age: "28",
  score: "92.5",
  isActive: "true",
  createdAt: null,
  metadata: undefined,
};

function normalizeRecord(data) {
  // TODO:
  // - name: trim + capitalize each word
  // - email: trim + toLowerCase
  // - age: Number (rzuć Error jeśli NaN)
  // - score: Number (zaokrąglij do 2 miejsc)
  // - isActive: zamień "true"/"false" → boolean
  // - createdAt: jeśli null → new Date().toISOString()
  // - metadata: jeśli undefined → pomiń w wyniku (nie wkładaj do obiektu)
  // Zwróć czysty obiekt
}

// console.log(normalizeRecord(rawData));
