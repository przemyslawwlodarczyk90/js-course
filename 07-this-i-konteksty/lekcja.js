// ============================================================
// JS-064 — this: podstawy
// ============================================================

// "this" to odniesienie do kontekstu wywołania funkcji.
// Jego wartość NIE zależy od tego GDZIE funkcja jest zdefiniowana,
// tylko od tego JAK i SKĄD została wywołana.

// W zwykłej funkcji (wywołanej "samodzielnie") — this to globalny obiekt
// (w przeglądarce: window; w Node w module CommonJS: {} lub undefined w strict mode)
function pokazThis() {
  console.log(this);
}
pokazThis();

// Wewnątrz metody obiektu — this to obiekt PRZED kropką w miejscu wywołania
const user = {
  name: "Anna",
  greet() {
    console.log(`Cześć, jestem ${this.name}`);
  },
};
user.greet(); // "Cześć, jestem Anna" — this === user

// ============================================================
// JS-065 — this gubi kontekst
// ============================================================

// Najczęstszy błąd: wyciągnięcie metody z obiektu jako "gołej" referencji
const greetFn = user.greet;
// greetFn(); // "Cześć, jestem undefined" — this to już NIE user!

// To samo dzieje się przy przekazywaniu metody jako callback
function runLater(fn) {
  fn();
}
// runLater(user.greet); // this znowu "zgubiony"

// Dlaczego to ważne: dokładnie ten sam problem pojawia się w event listenerach
// i przy przekazywaniu handlerów onClick — funkcja jest "wyrywana" z obiektu.

// ============================================================
// JS-066 — Arrow function i this
// ============================================================

// Arrow function NIE MA WŁASNEGO this — używa this z otaczającego zasięgu
// (this leksykalne, ustalane raz, w miejscu zdefiniowania funkcji)

const userArrow = {
  name: "Basia",
  greet: () => {
    console.log(this); // this arrow function = this z zewnątrz obiektu, NIE userArrow!
  },
  greetCorrect() {
    // Zwykła metoda ma własne this, wewnątrz niej arrow "dziedziczy" poprawnie
    const inner = () => {
      console.log(`Cześć, jestem ${this.name}`); // this === userArrow
    };
    inner();
  },
};
userArrow.greetCorrect(); // "Cześć, jestem Basia"

// Klasyczny wzorzec: setTimeout w metodzie
const timer = {
  seconds: 0,
  startZlyThis() {
    setTimeout(function () {
      // this tutaj to NIE timer (zwykła funkcja jako callback)
      // this.seconds++; // błąd logiczny
    }, 100);
  },
  startDobryThis() {
    setTimeout(() => {
      this.seconds++; // arrow → this === timer, poprawnie
      console.log("sekundy:", this.seconds);
    }, 100);
  },
};
timer.startDobryThis();

// ============================================================
// JS-067 — call()
// ============================================================

// call(thisArg, arg1, arg2, ...) — wywołuje funkcję NATYCHMIAST
// z podanym this i argumentami wypisanymi po przecinku

function przedstawSie(miasto, kraj) {
  console.log(`${this.name} mieszka w ${miasto}, ${kraj}`);
}

const osoba1 = { name: "Jan" };
const osoba2 = { name: "Ewa" };

przedstawSie.call(osoba1, "Kraków", "Polska"); // "Jan mieszka w Kraków, Polska"
przedstawSie.call(osoba2, "Berlin", "Niemcy"); // "Ewa mieszka w Berlin, Niemcy"

// ============================================================
// JS-068 — apply()
// ============================================================

// apply(thisArg, [argumenty]) — jak call(), ale argumenty jako TABLICA

przedstawSie.apply(osoba1, ["Gdańsk", "Polska"]); // "Jan mieszka w Gdańsk, Polska"

// Praktyczne zastosowanie: funkcje wariadyczne przed spread operatorem
const liczby = [3, 7, 2, 9, 1];
console.log(Math.max.apply(null, liczby)); // 9 — dziś zamiast tego: Math.max(...liczby)

// ============================================================
// JS-069 — bind()
// ============================================================

// bind(thisArg, ...args) — NIE wywołuje funkcji od razu.
// Zwraca NOWĄ funkcję z na stałe "przypiętym" this (i opcjonalnie argumentami).

const przedstawJana = przedstawSie.bind(osoba1);
przedstawJana("Wrocław", "Polska"); // "Jan mieszka w Wrocław, Polska"

// bind naprawia problem gubienia this przy przekazywaniu metod jako callback
const boundGreet = user.greet.bind(user);
boundGreet(); // "Cześć, jestem Anna" — działa mimo wyrwania z obiektu
runLater(boundGreet); // też działa

// bind może też "z góry" ustawić część argumentów (partial application)
function pomnóż(a, b) {
  return a * b;
}
const podwój = pomnóż.bind(null, 2); // pierwszy argument zawsze = 2
console.log(podwój(5)); // 10
console.log(podwój(10)); // 20

// ============================================================
// JS-070 — this w klasach i event handlerach (przedsmak)
// ============================================================

// W metodach klas (JS-071+) obowiązują te same zasady co w metodach obiektu:
// this zależy od SPOSOBU wywołania, nie od miejsca deklaracji.
// To dlatego w event handlerach i komponentach klasowych
// tak często spotyka się .bind(this) w konstruktorze albo arrow function jako pole klasy —
// to naprawia dokładnie ten sam problem, który widzieliśmy w JS-065/JS-066.

class Przycisk {
  constructor(etykieta) {
    this.etykieta = etykieta;
    this.wciśnięty = 0;
    // Bez bind, przekazanie this.onClick jako callback zgubiłoby this
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.wciśnięty++;
    console.log(`${this.etykieta}: kliknięto ${this.wciśnięty} razy`);
  }
}

const btn = new Przycisk("Zapisz");
const handler = btn.onClick; // wyrywamy metodę — bez bind() this by się zgubiło
handler(); // "Zapisz: kliknięto 1 razy" — działa dzięki bind w konstruktorze
