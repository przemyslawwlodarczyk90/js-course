// ============================================================
// JS-078 — Set: unikalne wartości
// ============================================================

// Set przechowuje TYLKO unikalne wartości — duplikaty są ignorowane
const zbior = new Set([1, 2, 2, 3, 3, 3]);
console.log(zbior); // Set(3) {1, 2, 3}
console.log(zbior.size); // 3 — nie .length!

zbior.add(4);
zbior.add(4); // bez efektu — 4 już istnieje
console.log(zbior.has(4)); // true
console.log(zbior.has(99)); // false
zbior.delete(2);
console.log(zbior); // Set(3) {1, 3, 4}

// Set jest iterowalny — for...of i spread działają
for (const wartosc of zbior) {
  console.log(wartosc);
}
const tablicaZeSetu = [...zbior]; // [1, 3, 4]

// Klasyczne zastosowanie: usuwanie duplikatów z tablicy
const liczbyZDuplikatami = [1, 2, 2, 3, 4, 4, 4, 5];
const unikalne = [...new Set(liczbyZDuplikatami)];
console.log(unikalne); // [1, 2, 3, 4, 5]

// ============================================================
// JS-079 — Map: klucz-wartość z dowolnym typem klucza
// ============================================================

// Object wymaga kluczy string/symbol — Map przyjmuje DOWOLNY typ klucza
// (obiekt, funkcję, liczbę, boolean...) i zachowuje kolejność wstawiania

const mapa = new Map();
mapa.set("imie", "Anna");
mapa.set(42, "liczba jako klucz");
mapa.set(true, "boolean jako klucz");

const kluczObiekt = { id: 1 };
mapa.set(kluczObiekt, "wartość dla obiektu-klucza");

console.log(mapa.get("imie")); // "Anna"
console.log(mapa.get(kluczObiekt)); // "wartość dla obiektu-klucza"
console.log(mapa.has("imie")); // true
console.log(mapa.size); // 4 — nie .length!

mapa.delete(42);
console.log(mapa.size); // 3

// Tworzenie Map od razu z tablicy par [klucz, wartość]
const konfiguracja = new Map([
  ["host", "localhost"],
  ["port", 3000],
]);
console.log(konfiguracja.get("port")); // 3000

// ============================================================
// JS-080 — Iteracja po Map
// ============================================================

const oceny = new Map([
  ["Jan", 5],
  ["Anna", 4],
  ["Piotr", 3],
]);

// for...of zwraca pary [klucz, wartość]
for (const [imie, ocena] of oceny) {
  console.log(`${imie}: ${ocena}`);
}

// forEach — kolejność argumentów: (wartość, klucz)!
oceny.forEach((ocena, imie) => {
  console.log(`${imie} ma ocenę ${ocena}`);
});

// keys(), values(), entries()
console.log([...oceny.keys()]); // ["Jan", "Anna", "Piotr"]
console.log([...oceny.values()]); // [5, 4, 3]
console.log([...oceny.entries()]); // [["Jan",5], ["Anna",4], ["Piotr",3]]

// ============================================================
// JS-081 — Konwersje Map <-> Object, Set <-> Array
// ============================================================

// Object → Map (przydatne bo Map ma gwarantowaną kolejność i metody)
const configObj = { debug: true, retries: 3 };
const configMap = new Map(Object.entries(configObj));
console.log(configMap.get("retries")); // 3

// Map → Object
const backToObj = Object.fromEntries(configMap);
console.log(backToObj); // { debug: true, retries: 3 }

// Array → Set → Array (dedup, patrz JS-078)
// Set → Array
const jakiesSet = new Set(["a", "b", "c"]);
const jakasTablica = Array.from(jakiesSet); // alternatywa dla [...jakiesSet]
console.log(jakasTablica);

// ============================================================
// JS-082 — Kiedy Map/Set zamiast Object/Array?
// ============================================================

// Set zamiast Array: gdy liczy się unikalność i szybkie sprawdzanie has()
// (Set.has() jest szybsze niż Array.includes() dla dużych zbiorów)

// Map zamiast Object: gdy klucze nie są znane z góry, są dynamiczne,
// albo gdy potrzebujesz kluczy innych niż string (np. obiekty jako klucze)
// i chcesz mieć pewność co do kolejności iteracji

// Przykład: liczenie wystąpień (typowy wzorzec z Map)
const slowa = ["kot", "pies", "kot", "kot", "pies", "chomik"];
const licznikSlow = new Map();
for (const slowo of slowa) {
  licznikSlow.set(slowo, (licznikSlow.get(slowo) ?? 0) + 1);
}
console.log(licznikSlow); // Map { "kot" => 3, "pies" => 2, "chomik" => 1 }

// ============================================================
// JS-083 — WeakMap i WeakSet (krótko)
// ============================================================

// WeakMap/WeakSet — jak Map/Set, ale:
// - klucze (WeakMap) / wartości (WeakSet) MUSZĄ być obiektami
// - nie są iterowalne (brak for...of, keys(), values(), size)
// - "słabo" trzymają referencję — garbage collector może usunąć wpis,
//   gdy obiekt-klucz nie jest już używany nigdzie indziej w programie
//
// Zastosowanie: przechowywanie metadanych powiązanych z obiektem
// bez ryzyka wycieku pamięci, gdy ten obiekt przestanie być potrzebny.

const prywatneDane = new WeakMap();

function ustawPrywatne(obiekt, dane) {
  prywatneDane.set(obiekt, dane);
}

function odczytajPrywatne(obiekt) {
  return prywatneDane.get(obiekt);
}

const elementUzytkownika = { id: 1 };
ustawPrywatne(elementUzytkownika, { haslo: "tajne-hashowane" });
console.log(odczytajPrywatne(elementUzytkownika)); // { haslo: "tajne-hashowane" }
// Gdy elementUzytkownika przestanie być gdziekolwiek używany,
// wpis w WeakMap automatycznie zniknie — Map trzymałaby go wiecznie.
