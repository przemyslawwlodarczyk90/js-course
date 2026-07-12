// ============================================================
// JS-071 — class: constructor i metody instancji
// ============================================================

// class to "ładniejsza składnia" nad function + prototype.
// Nadal używa tego samego mechanizmu this co widzieliśmy w rozdziale 07.

class Osoba {
  constructor(imie, wiek) {
    this.imie = imie; // pole instancji — ustawiane przy tworzeniu
    this.wiek = wiek;
  }

  // Metoda instancji — dostępna na każdym obiekcie stworzonym z tej klasy
  przywitajSie() {
    return `Cześć, jestem ${this.imie} i mam ${this.wiek} lat.`;
  }

  urodziny() {
    this.wiek++;
    return this.wiek;
  }
}

const jan = new Osoba("Jan", 30);
const ewa = new Osoba("Ewa", 25);

console.log(jan.przywitajSie()); // "Cześć, jestem Jan i mam 30 lat."
console.log(ewa.przywitajSie()); // "Cześć, jestem Ewa i mam 25 lat."
jan.urodziny();
console.log(jan.wiek); // 31 — ewa.wiek pozostaje 25, obiekty są niezależne

// ============================================================
// JS-072 — Pola klasy (class fields)
// ============================================================

// Pola można deklarować bezpośrednio w ciele klasy, z wartością domyślną,
// bez pisania ich w constructor — przydatne dla stałych wartości początkowych.

class Licznik {
  wartosc = 0; // pole klasy z wartością domyślną
  krok = 1;

  increment() {
    this.wartosc += this.krok;
    return this.wartosc;
  }
}

const licznik = new Licznik();
licznik.increment();
licznik.increment();
console.log(licznik.wartosc); // 2

// Pole klasy jako arrow function — automatycznie wiąże this (bez potrzeby bind!)
class PrzyciskV2 {
  wciśnięty = 0;

  // Arrow function jako pole klasy: this zawsze wskazuje na instancję,
  // nawet gdy metoda jest wyrwana i przekazana jako callback (patrz JS-070)
  onClick = () => {
    this.wciśnięty++;
    console.log("kliknięto:", this.wciśnięty);
  };
}

const btn2 = new PrzyciskV2();
const handlerBezBind = btn2.onClick; // wyrywamy metodę
handlerBezBind(); // działa poprawnie mimo braku bind()

// ============================================================
// JS-073 — Gettery i settery
// ============================================================

// get/set pozwalają zdefiniować właściwość, która oblicza wartość
// przy odczycie lub waliduje ją przy zapisie — wygląda jak zwykłe pole

class Prostokat {
  constructor(szerokosc, wysokosc) {
    this._szerokosc = szerokosc; // konwencja: _ oznacza "wewnętrzne"
    this._wysokosc = wysokosc;
  }

  get pole() {
    return this._szerokosc * this._wysokosc; // obliczane przy KAŻDYM odczycie
  }

  get szerokosc() {
    return this._szerokosc;
  }

  set szerokosc(nowaWartosc) {
    if (nowaWartosc <= 0) throw new Error("Szerokość musi być dodatnia");
    this._szerokosc = nowaWartosc;
  }
}

const rect = new Prostokat(10, 5);
console.log(rect.pole); // 50 — wywołane BEZ nawiasów, jak pole
rect.szerokosc = 20; // wywołuje setter
console.log(rect.pole); // 100 — pole przeliczone automatycznie

// ============================================================
// JS-074 — Metody i pola statyczne
// ============================================================

// static należy do KLASY, nie do instancji — brak dostępu przez `this` na obiekcie

class Matematyka {
  static PI = 3.14159;

  static kwadrat(x) {
    return x * x;
  }

  static kroki(a, b) {
    return Math.abs(a - b);
  }
}

console.log(Matematyka.PI); // 3.14159 — bez tworzenia instancji
console.log(Matematyka.kwadrat(5)); // 25

// Typowy wzorzec: licznik instancji
class Uzytkownik {
  static licznikUtworzonych = 0;

  constructor(nazwa) {
    this.nazwa = nazwa;
    Uzytkownik.licznikUtworzonych++;
  }
}

new Uzytkownik("A");
new Uzytkownik("B");
new Uzytkownik("C");
console.log(Uzytkownik.licznikUtworzonych); // 3

// ============================================================
// JS-075 — Dziedziczenie: extends i super
// ============================================================

class Zwierze {
  constructor(imie) {
    this.imie = imie;
  }

  wydajDzwiek() {
    return `${this.imie} wydaje jakiś dźwięk`;
  }
}

class Pies extends Zwierze {
  constructor(imie, rasa) {
    super(imie); // MUSI być wywołane przed użyciem `this` w konstruktorze
    this.rasa = rasa;
  }

  // Nadpisanie (override) metody z klasy bazowej
  wydajDzwiek() {
    return `${this.imie} (${this.rasa}) szczeka: Hau!`;
  }

  // Wywołanie oryginalnej metody z klasy bazowej wewnątrz nadpisanej
  wydajDzwiekZBazowa() {
    return super.wydajDzwiek() + " ale też potrafi szczekać";
  }
}

const reksio = new Pies("Reksio", "Owczarek");
console.log(reksio.wydajDzwiek()); // "Reksio (Owczarek) szczeka: Hau!"
console.log(reksio.wydajDzwiekZBazowa()); // "Reksio wydaje jakiś dźwięk ale też potrafi szczekać"
console.log(reksio instanceof Pies); // true
console.log(reksio instanceof Zwierze); // true — Pies dziedziczy po Zwierze

// ============================================================
// JS-076 — Prywatne pola i metody (#)
// ============================================================

// Pola i metody z prefiksem # są prawdziwie prywatne —
// niedostępne spoza klasy (nie tylko "konwencją" jak _pole)

class Konto {
  #saldo; // prywatne pole — musi być zadeklarowane w ciele klasy

  constructor(saldoPoczatkowe) {
    this.#saldo = saldoPoczatkowe;
  }

  wplac(kwota) {
    this.#saldo += this.#sprawdzKwote(kwota);
    return this.#saldo;
  }

  #sprawdzKwote(kwota) {
    // prywatna metoda — dostępna tylko wewnątrz klasy
    if (kwota <= 0) throw new Error("Kwota musi być dodatnia");
    return kwota;
  }

  get saldo() {
    return this.#saldo; // publiczny getter jako "okno" do prywatnego pola
  }
}

const konto = new Konto(100);
konto.wplac(50);
console.log(konto.saldo); // 150
// console.log(konto.#saldo); // SyntaxError — pole niedostępne spoza klasy

// ============================================================
// JS-077 — class vs zwykły obiekt/funkcja fabrykująca
// ============================================================

// To samo można zrobić bez class, przez funkcję zwracającą obiekt (closure) —
// wybór zależy od kontekstu (klasy dają dziedziczenie i instanceof "za darmo")

function stworzOsobeFabryka(imie, wiek) {
  return {
    imie,
    wiek,
    przywitajSie() {
      return `Cześć, jestem ${this.imie}`;
    },
  };
}

const marek = stworzOsobeFabryka("Marek", 40);
console.log(marek.przywitajSie());

// class Osoba(...) tworzy obiekty które są instanceof Osoba — fabryka nie
console.log(jan instanceof Osoba); // true
console.log(marek instanceof Object); // true, ale nie ma "klasy" fabrykującej
