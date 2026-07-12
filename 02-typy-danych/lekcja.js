// ============================================================
// JS-007 — String: trzy sposoby definicji
// ============================================================

const single = 'tekst z apostrofem';
const double = "tekst z cudzysłowem";
const template = `tekst z backtick`;

const name = "Marek";
const age = 28;

// Template literal: interpolacja i wielolinie
const bio = `Imię: ${name}
Wiek: ${age}
Rocznik: ${2024 - age}`;
console.log(bio);

// Wyrażenia w template literal
console.log(`Kwadrat z 7: ${7 ** 2}`);

// ============================================================
// JS-008 — Metody string
// ============================================================

const email = "  Jan.Kowalski@Example.COM  ";

console.log(email.trim());                    // "Jan.Kowalski@Example.COM"
console.log(email.trim().toLowerCase());      // "jan.kowalski@example.com"
console.log(email.includes("@"));             // true
console.log(email.trim().split("@"));         // ["Jan.Kowalski", "Example.COM"]

const path = "/api/users/42";
console.log(path.startsWith("/api"));         // true
console.log(path.endsWith("/42"));            // true
console.log(path.replace("/api", ""));        // "/users/42"
console.log(path.slice(5));                   // "users/42"
console.log(path.indexOf("users"));           // 5

const csv = "Jan,Kowalski,jan@example.com,admin";
const [firstName, lastName, userEmail, role] = csv.split(",");
console.log(firstName, role); // "Jan" "admin"

"abc".padStart(5, "0"); // "00abc"
"42".padEnd(6, "-");    // "42----"
"ha".repeat(3);         // "hahaha"

// ============================================================
// JS-009 — Number i operatory arytmetyczne
// ============================================================

console.log(0.1 + 0.2);                          // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2));             // "0.30" — string!
console.log(Number((0.1 + 0.2).toFixed(2)));     // 0.3 — number

console.log(10 / 3);           // 3.3333...
console.log(Math.floor(10/3)); // 3
console.log(10 % 3);           // 1 (reszta z dzielenia)
console.log(2 ** 10);          // 1024

console.log(Number("42"));     // 42
console.log(Number(""));       // 0
console.log(Number("abc"));    // NaN
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14em")); // 3.14

console.log(Number.isNaN(NaN));           // true
console.log(Number.isNaN("abc"));         // false — uwaga!
console.log(Number.isFinite(Infinity));   // false
console.log(Number.isInteger(3.0));       // true

console.log(Math.max(1, 5, 3));  // 5
console.log(Math.min(1, 5, 3));  // 1
console.log(Math.abs(-7));       // 7
console.log(Math.round(4.5));    // 5
console.log(Math.ceil(4.1));     // 5
console.log(Math.floor(4.9));    // 4
console.log(Math.random());      // [0, 1)

// ============================================================
// JS-010 — BigInt
// ============================================================

const huge = 9007199254740991n; // Number.MAX_SAFE_INTEGER jako BigInt
const bigger = huge + 1n;
console.log(bigger); // 9007199254740992n

// BigInt i Number nie mieszają się
// console.log(huge + 1); // TypeError
console.log(Number(huge)); // konwersja

// ============================================================
// JS-011 — Boolean, undefined, null
// ============================================================

// Falsy values — jedyne 6 w JS:
// false, 0, "", null, undefined, NaN

console.log(Boolean(0));          // false
console.log(Boolean(""));        // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean([]));         // true  — uwaga!
console.log(Boolean({}));         // true  — uwaga!
console.log(Boolean("0"));        // true  — uwaga!

// null vs undefined
let declared;        // undefined — nie przypisano wartości
let empty = null;    // null — celowo puste

console.log(typeof declared);   // "undefined"
console.log(typeof empty);      // "object" — historyczny błąd w JS

// ============================================================
// JS-012 — Symbol
// ============================================================

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2);     // false — każdy Symbol jest unikalny
console.log(typeof id1);      // "symbol"

// Zastosowanie: unikalne klucze obiektów (nie kolidują z niczym)
const SECRET = Symbol("secret");
const obj = {
  name: "publiczne",
  [SECRET]: "prywatne",
};
console.log(obj[SECRET]);     // "prywatne"
console.log(Object.keys(obj)); // ["name"] — Symbol nie jest widoczny

// ============================================================
// JS-013 — Typy wartościowe vs referencyjne
// ============================================================

// Wartościowe (primitive): kopiują wartość
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 — oryginał niezmieniony

// Referencyjne (object): kopiują wskaźnik
const arr1 = [1, 2, 3];
const arr2 = arr1;    // arr2 wskazuje NA TO SAMO miejsce w pamięci
arr2.push(4);
console.log(arr1);    // [1, 2, 3, 4] — oryginał zmieniony!

// Jak skopiować tablicę? Spread lub slice:
const arr3 = [...arr1];
arr3.push(99);
console.log(arr1);    // [1, 2, 3, 4] — teraz oryginał bezpieczny

// Jak skopiować obiekt?
const userA = { name: "Anna", address: { city: "Poznań" } };
const userB = { ...userA }; // shallow copy
userB.name = "Basia";
userB.address.city = "Gdańsk"; // modyfikuje address w obu!
console.log(userA.name);          // "Anna" — OK
console.log(userA.address.city);  // "Gdańsk" — NiE OK! to ta sama ref
