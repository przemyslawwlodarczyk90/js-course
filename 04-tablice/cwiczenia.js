// ============================================================
// SEKCJA A — ŁATWE / TEORETYCZNE
// ============================================================

// JS-019 — ZADANIE 1: uzupełnij — metody mutujące
// Uzupełnij ___ właściwą metodą lub wartością

const arr = [1, 2, 3];

arr.___( 4 );               // dodaj 4 na koniec → [1,2,3,4]
arr.___( 0 );               // dodaj 0 na początek → [0,1,2,3,4]
const last = arr.___();     // usuń i zwróć ostatni → last = 4, arr = [0,1,2,3]
const first = arr.___();    // usuń i zwróć pierwszy → first = 0, arr = [1,2,3]

arr.___(1, 1);              // usuń 1 element od indeksu 1 → arr = [1,3]
arr.___(1, 0, 99);          // wstaw 99 na indeks 1 bez usuwania → arr = [1,99,3]

// Odpowiedzi (metody): push / unshift / pop / shift / splice / splice

// ============================================================
// JS-019 — ZADANIE 2: PRAWDA czy FAŁSZ — metody tablicowe
// ============================================================

// ___ push() zwraca nową tablicę
// ___ pop() zwraca usunięty element
// ___ filter() modyfikuje oryginalną tablicę
// ___ map() zawsze zwraca tablicę tej samej długości
// ___ sort() domyślnie sortuje leksykograficznie (nie numerycznie)
// ___ slice() nie modyfikuje oryginalnej tablicy
// ___ forEach() zwraca undefined
// ___ find() zwraca element lub undefined (nie -1)
// ___ includes() zwraca boolean
// ___ indexOf() zwraca -1 gdy brak elementu

// Odpowiedzi:

// ============================================================
// JS-020 — ZADANIE 3: uzupełnij — filter
// ============================================================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens    = numbers.filter(n => ___);    // parzyste
const odds     = numbers.filter(n => ___);    // nieparzyste
const gt5      = numbers.filter(n => ___);    // większe niż 5
const between3and7 = numbers.filter(n => ___); // od 3 do 7 włącznie

console.log(evens);         // [2, 4, 6, 8, 10]
console.log(odds);          // [1, 3, 5, 7, 9]
console.log(gt5);           // [6, 7, 8, 9, 10]
console.log(between3and7);  // [3, 4, 5, 6, 7]

// ============================================================
// JS-021 — ZADANIE 4: uzupełnij — map
// ============================================================

const words = ["hello", "world", "javascript"];

const upper   = words.map(w => ___);    // HELLO, WORLD, JAVASCRIPT
const lengths = words.map(w => ___);    // [5, 5, 10]
const initials = words.map(w => ___);   // "H", "W", "J"

const prices = [10, 25, 50, 100];
const withTax = prices.map(p => ___);   // +23% VAT, zaokrąglij do 2 miejsc
                                         // [12.3, 30.75, 61.5, 123]

console.log(upper);
console.log(lengths);
console.log(initials);
console.log(withTax);

// ============================================================
// JS-021/020 — ZADANIE 5: RÓŻNICA map vs filter
// ============================================================

// Wyjaśnij w komentarzu dlaczego te dwie instrukcje robią coś innego:

const nums = [1, 2, 3, 4, 5];

const a = nums.map(n => n > 3);     // co zwraca?
const b = nums.filter(n => n > 3);  // co zwraca?

console.log(a); // ?
console.log(b); // ?

// Wyjaśnienie map vs filter:

// Kiedy użyć map? Kiedy filter?

// ============================================================
// JS-022 — ZADANIE 6: forEach vs map — kiedy co?
// ============================================================

// Które zadanie wymaga map, a które forEach? Wpisz odpowiedź.

// a) Stwórz nową tablicę z kwadratami liczb → ___
// b) Wypisz każdy element na konsoli → ___
// c) Wyślij każdy element do API (efekt uboczny) → ___
// d) Przekształć tablicę stringów na tablicę liczb → ___
// e) Zsumuj wszystkie elementy → ___ (ani map ani forEach — co?)

// Odpowiedzi:

// ============================================================
// JS-023 — ZADANIE 7: sort — uzupełnij comparator
// ============================================================

const n2 = [10, 2, 21, 1, 100, 3];

// Sortuj ROSNĄCO (liczby):
const asc = [...n2].sort((a, b) => ___);  // a - b

// Sortuj MALEJĄCO:
const desc = [...n2].sort((a, b) => ___); // b - a

// Co zwróci domyślny sort()?
const defaultSort = [...n2].sort();
console.log(defaultSort); // ? — czy to poprawne dla liczb?

// Obiekty: sortuj po price rosnąco
const items = [{ price: 30 }, { price: 10 }, { price: 20 }];
const sortedItems = [...items].sort((a, b) => ___);
console.log(sortedItems.map(i => i.price)); // [10, 20, 30]

// Odpowiedzi (comparatory):

// ============================================================
// JS-024 — ZADANIE 8: flat i flatMap — uzupełnij
// ============================================================

const nested = [[1, 2], [3, 4], [5, 6]];
const flat1 = nested.___();            // [1, 2, 3, 4, 5, 6]

const deepNested = [1, [2, [3, [4]]]];
const flatAll = deepNested.___(___);   // [1, 2, 3, 4]

const sentences = ["Ala ma kota", "Kot ma Alę"];
const words = sentences.___(s => s.___(___)); // ["Ala","ma","kota","Kot","ma","Alę"]

// Odpowiedzi:

// ============================================================
// JS-025 — ZADANIE 9: dekonstrukcja — uzupełnij
// ============================================================

const [a, b, ...rest] = [10, 20, 30, 40, 50];
// a = ?    b = ?    rest = ?

const [, , third] = [1, 2, 3];
// third = ?

const [x = 0, y = 0, z = 0] = [1, 2];
// z = ?  (wartość domyślna)

// Zamiana zmiennych:
let p = 1, q = 2;
[p, q] = [q, p];
// p = ?    q = ?

// Odpowiedzi:

// ============================================================
// JS-026 — ZADANIE 10: spread — co zwróci?
// ============================================================

const c = [1, 2, 3];
const d = [4, 5, 6];

console.log([...c, ...d]);       // ?
console.log([0, ...c, 3.5, ...d]); // ?
console.log([..."abc"]);          // ?
console.log([...new Set([1,2,2,3,3])]);  // ?
console.log(Math.max(...c));      // ?

// Odpowiedzi:

// ============================================================
// SEKCJA B — ŚREDNIO TRUDNE
// ============================================================

// Dane używane w sekcji B i C:
const products = [
  { id: 1, name: "Laptop Pro", price: 3499, category: "electronics", rating: 4.5, inStock: true },
  { id: 2, name: "Koszulka",   price: 49,   category: "clothing",    rating: 4.1, inStock: true },
  { id: 3, name: "iPhone 15",  price: 4999, category: "electronics", rating: 4.8, inStock: false },
  { id: 4, name: "Kurs JS",    price: 299,  category: "education",   rating: 4.9, inStock: true },
  { id: 5, name: "Słuchawki",  price: 599,  category: "electronics", rating: 4.2, inStock: true },
  { id: 6, name: "Spodnie",    price: 129,  category: "clothing",    rating: 3.8, inStock: true },
];

// JS-020 — ZADANIE 11: filter w praktyce
// ============================================================

// a) Dostępne produkty elektroniczne
const availableElectronics = products.filter(___);

// b) Produkty tańsze niż 200 zł
const cheap = products.filter(___);

// c) Produkty z ratingiem >= 4.5
const topRated = products.filter(___);

// console.log(availableElectronics.map(p => p.name)); // Laptop Pro, Słuchawki
// console.log(cheap.map(p => p.name));                // Koszulka, Spodnie
// console.log(topRated.map(p => p.name));             // Laptop Pro, iPhone 15, Kurs JS

// ============================================================
// JS-021 — ZADANIE 12: map w praktyce
// ============================================================

// a) Lista nazw wszystkich produktów
const names = products.map(___);

// b) Lista cen po rabacie 10% (zaokrąglone)
const discounted = products.map(p => ({
  name: p.name,
  originalPrice: p.price,
  discountedPrice: ___,
}));

// c) Lista stringów formatu "Laptop Pro — 3499 zł (⭐4.5)"
const labels = products.map(p => `${p.___} — ${p.___} zł (⭐${p.___})`);

// console.log(names);
// console.log(discounted);
// console.log(labels);

// ============================================================
// JS-023 — ZADANIE 13: sort w praktyce
// ============================================================

// a) Posortuj po cenie rosnąco (nie mutuj oryginału!)
const byPriceAsc = ___; // TODO

// b) Posortuj po nazwie alfabetycznie
const byName = ___; // TODO: localeCompare

// c) Posortuj: najpierw inStock: true, potem po ratingu malejąco
const byStockThenRating = [...products].sort((a, b) => {
  // TODO
});

// console.log(byPriceAsc.map(p => `${p.name}:${p.price}`));

// ============================================================
// JS-021 + JS-020 — ZADANIE 14: map + filter chain
// ============================================================

// W jednym łańcuchu:
// 1. Filtruj dostępne produkty
// 2. Przekształć na format { name, priceWithTax }
// 3. Posortuj po priceWithTax rosnąco

const result = products
  .filter(___)
  .map(p => ({ name: p.name, priceWithTax: Math.round(p.price * 1.23) }))
  .sort(___);

// console.log(result);

// ============================================================
// SEKCJA C — TRUDNE / SCENARIUSZE
// ============================================================

// JS-019–026 — ZADANIE 15: reduce — statystyki
// ============================================================

// a) Suma cen wszystkich dostępnych produktów
const totalInStock = products
  .filter(p => p.inStock)
  .reduce((sum, p) => sum + p.price, 0);

// b) Obiekt: liczba produktów w każdej kategorii
const countByCategory = products.reduce((acc, p) => {
  acc[p.category] = (acc[p.category] ?? 0) + 1;
  return acc;
}, {});

// c) Najdroższy produkt (używając reduce — bez sort)
const mostExpensive = products.reduce((best, p) => ___);

// console.log(totalInStock);
// console.log(countByCategory);
// console.log(mostExpensive.name);

// ============================================================
// JS-024 — ZADANIE 16: flatMap — tagi
// ============================================================

const articles = [
  { title: "JS basics", tags: ["javascript", "beginner"] },
  { title: "React intro", tags: ["react", "javascript"] },
  { title: "Node.js API", tags: ["nodejs", "api", "javascript"] },
];

// a) Wszystkie tagi (z duplikatami)
const allTags = articles.flatMap(a => ___);

// b) Unikalne tagi
const uniqueTags = [...new Set(allTags)];

// c) Mapa: tag → liczba artykułów z tym tagiem
const tagCount = allTags.reduce((acc, tag) => {
  acc[tag] = (acc[tag] ?? 0) + 1;
  return acc;
}, {});

// console.log(uniqueTags);
// console.log(tagCount); // { javascript: 3, beginner: 1, react: 1, nodejs: 1, api: 1 }

// ============================================================
// JS-019–026 — ZADANIE 17: koszyk zakupowy
// ============================================================

// Masz koszyk: { productId, quantity }
// Napisz calculateCart(cart, products) zwracające:
// { items: [{name, price, quantity, lineTotal}], subtotal, tax, total }

const cart = [
  { productId: 1, quantity: 1 },
  { productId: 5, quantity: 2 },
  { productId: 4, quantity: 1 },
];

function calculateCart(cartItems, catalog) {
  // TODO: find product, map, reduce
}

// console.log(calculateCart(cart, products));

// ============================================================
// JS-025/026 — ZADANIE 18: dekonstrukcja w praktyce
// ============================================================

// a) Napisz funkcję getMinMax(arr) używając dekonstrukcji i spread
function getMinMax(arr) {
  // TODO: const sorted = [...arr].sort((a,b)=>a-b); const [min,...rest] = sorted;
}
// console.log(getMinMax([3, 1, 4, 1, 5, 9, 2, 6])); // { min: 1, max: 9 }

// b) Napisz funkcję swapAll(pairs) — zamień elementy w każdej parze
function swapAll(pairs) {
  // TODO: pairs.map(([a, b]) => [b, a])
}
// console.log(swapAll([[1, 2], [3, 4], [5, 6]])); // [[2,1],[4,3],[6,5]]

// c) Napisz funkcję zip(arr1, arr2) — spleć dwie tablice w tablicę par
function zip(arr1, arr2) {
  // TODO: arr1.map((item, i) => [item, arr2[i]])
}
// console.log(zip(["a","b","c"], [1,2,3])); // [["a",1],["b",2],["c",3]]
