// ============================================================
// JS-019 — Podstawy tablic i metody mutujące
// ============================================================

const fruits = ["jabłko", "banan", "czereśnia"];

// Dostęp
console.log(fruits[0]);          // "jabłko"
console.log(fruits.at(-1));      // "czereśnia" (od końca)
console.log(fruits.length);      // 3

// Mutujące (zmieniają oryginalną tablicę)
fruits.push("daktyl");           // dodaje na koniec → zwraca nową długość
fruits.pop();                    // usuwa ostatni → zwraca usunięty element
fruits.unshift("awokado");       // dodaje na początek
fruits.shift();                  // usuwa pierwszy

fruits.splice(1, 1);             // usuń 1 element od indeksu 1
fruits.splice(1, 0, "mango");    // wstaw "mango" przed indeksem 1 (nic nie usuwa)

fruits.reverse();                // odwraca w miejscu
fruits.sort();                   // sortuje leksykograficznie (w miejscu!)

// Niemutujące — zwracają nową tablicę
const copy = fruits.slice(1, 3); // elementy [1, 3) — nie modyfikuje oryginału
const joined = fruits.join(", "); // "jabłko, mango, czereśnia"

// Szukanie
console.log(fruits.indexOf("mango"));         // 1
console.log(fruits.lastIndexOf("mango"));     // 1
console.log(fruits.includes("mango"));        // true
console.log(fruits.find(f => f.startsWith("m"))); // "mango"
console.log(fruits.findIndex(f => f.length > 7));  // index

// ============================================================
// JS-020 — filter()
// ============================================================

const products = [
  { name: "Laptop", price: 3000, category: "electronics", inStock: true },
  { name: "T-shirt", price: 49, category: "clothing", inStock: true },
  { name: "Phone", price: 1500, category: "electronics", inStock: false },
  { name: "Book", price: 39, category: "education", inStock: true },
  { name: "Tablet", price: 800, category: "electronics", inStock: true },
];

// filter zwraca NOWĄ tablicę z elementami spełniającymi predykat
const affordable = products.filter(p => p.price < 100);
const electronics = products.filter(p => p.category === "electronics");
const availableElectronics = products.filter(p =>
  p.category === "electronics" && p.inStock
);

console.log(affordable.length);          // 2
console.log(availableElectronics.length); // 2

// ============================================================
// JS-021 — map()
// ============================================================

// map zwraca NOWĄ tablicę tej samej długości, przekształcając każdy element
const names = products.map(p => p.name);
console.log(names); // ["Laptop", "T-shirt", "Phone", "Book", "Tablet"]

const discounted = products.map(p => ({
  ...p,
  price: p.price * 0.9,
  discounted: true,
}));

// Mapowanie na inne typy
const prices = products.map(p => p.price);
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 5388

// ============================================================
// JS-022 — forEach()
// ============================================================

// forEach: dla efektów ubocznych, nie do transformacji — nic nie zwraca
const log = [];
products.forEach((p, index) => {
  log.push(`${index + 1}. ${p.name} — ${p.price} zł`);
});
console.log(log);

// forEach vs map:
// forEach → efekty (console.log, push do zewnętrznej tablicy)
// map     → transformacja → nowa tablica

// ============================================================
// JS-023 — sort() — szczegółowo
// ============================================================

const nums = [10, 2, 21, 1, 100, 3];

// BŁĄD: domyślny sort() sortuje leksykograficznie!
console.log([...nums].sort()); // [1, 10, 100, 2, 21, 3] — ŹLE dla liczb

// Poprawnie: comparator (a, b) → negative/0/positive
console.log([...nums].sort((a, b) => a - b)); // rosnąco
console.log([...nums].sort((a, b) => b - a)); // malejąco

// Sort obiektów
const sorted = [...products].sort((a, b) => a.price - b.price);
console.log(sorted.map(p => `${p.name}:${p.price}`));

// Sort po stringu
const byName = [...products].sort((a, b) => a.name.localeCompare(b.name));

// Sort stabilny (ES2019+) — elementy równe zachowują względną kolejność
const byCategory = [...products].sort((a, b) =>
  a.category.localeCompare(b.category)
);

// ============================================================
// JS-024 — flatMap() i flat()
// ============================================================

const nested = [[1, 2], [3, 4], [5, 6]];
console.log(nested.flat()); // [1, 2, 3, 4, 5, 6]

const deepNested = [1, [2, [3, [4]]]];
console.log(deepNested.flat(Infinity)); // [1, 2, 3, 4]

// flatMap = map + flat(1) — przydatne gdy map zwraca tablice
const sentences = ["Ala ma kota", "Kot ma Alę"];
const words = sentences.flatMap(s => s.split(" "));
console.log(words); // ["Ala", "ma", "kota", "Kot", "ma", "Alę"]

// flatMap do filtrowania z transformacją
const cartItems = [
  { name: "Laptop", quantity: 2, variants: ["silver", "black"] },
  { name: "Phone", quantity: 1, variants: ["white"] },
];
const allVariants = cartItems.flatMap(item =>
  item.variants.map(v => `${item.name} - ${v}`)
);
console.log(allVariants); // ["Laptop - silver", "Laptop - black", "Phone - white"]

// ============================================================
// JS-025 — Dekonstrukcja tablicy
// ============================================================

const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40, 50]

// Pomijanie elementów
const [, , third] = [1, 2, 3];
console.log(third); // 3

// Wartości domyślne
const [a = 0, b = 0, c = 0] = [1, 2];
console.log(c); // 0

// Zamiana zmiennych
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1

// Dekonstrukcja zwracanej tablicy
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
const [min, max] = minMax([3, 1, 4, 1, 5, 9]);
console.log(min, max); // 1 9

// ============================================================
// JS-026 — Spread operator na tablicach
// ============================================================

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const merged = [...a1, ...a2];          // [1, 2, 3, 4, 5, 6]
const withExtra = [0, ...a1, 3.5, ...a2, 7]; // łączenie
const copy = [...a1];                   // płytka kopia

// Spread przy wywołaniu funkcji
console.log(Math.max(...a1));           // 3
console.log(Math.max(...merged));       // 6

// Konwersja iterable → tablica
const chars = [..."javascript"];        // ["j","a","v","a","s","c","r","i","p","t"]
const unique = [...new Set([1,2,2,3,3,3])]; // [1, 2, 3]
