// Dodatkowe ćwiczenia — klasy
// Poziom: łatwy / językowy

// --- constructor i metody ---

// 1. Napisz klasę Ksiazka z constructor(tytul, autor).
//    Dodaj metodę opis() zwracającą `"${tytul}" - ${autor}`.
//    Stwórz instancję i wywołaj opis().

// 2. Napisz klasę Samochod z constructor(marka, przebieg = 0).
//    Dodaj metodę jedz(km) zwiększającą przebieg o km.
//    Stwórz instancję, wywołaj jedz(100) i jedz(50). Wypisz przebieg.

// 3. Stwórz dwie instancje klasy z zadania 1 lub 2 i pokaż że mają
//    niezależny stan (zmiana jednej nie wpływa na drugą).

// --- pola klasy ---

// 4. Napisz klasę Koszyk z polem items = [] (pole klasy, nie w constructor).
//    Dodaj metodę dodaj(nazwa) robiącą items.push(nazwa).
//    Dodaj 3 produkty i wypisz items.

// 5. Napisz klasę Ustawienia z polami motyw = "jasny" i jezyk = "pl".
//    Stwórz instancję bez argumentów i wypisz oba pola.

// --- gettery i settery ---

// 6. Napisz klasę Temperatura z constructor(celsjusz).
//    Dodaj getter fahrenheit zwracający celsjusz * 9/5 + 32.
//    Stwórz instancję z 20 i wypisz .fahrenheit.

// 7. Napisz klasę Produkt z constructor(nazwa, cena).
//    Dodaj setter cena który rzuca błąd gdy wartość < 0.
//    Spróbuj ustawić cenę na -10 w try/catch i wypisz komunikat błędu.

// 8. Napisz klasę Prostokat (jak w lekcji) i dodaj getter obwod
//    zwracający 2 * (szerokosc + wysokosc).

// --- static ---

// 9. Napisz klasę Konwerter ze statyczną metodą kmNaMile(km)
//    zwracającą km * 0.6214. Wywołaj Konwerter.kmNaMile(10) bez tworzenia instancji.

// 10. Napisz klasę Produkt2 ze statycznym polem VAT = 0.23
//     i statyczną metodą cenaZVat(cena) zwracającą cena * (1 + Produkt2.VAT).

// 11. Napisz klasę Rejestr ze statycznym polem licznik = 0.
//     Każde wywołanie new Rejestr() ma zwiększać licznik w konstruktorze.
//     Stwórz 3 instancje i wypisz Rejestr.licznik.

// --- dziedziczenie ---

// 12. Napisz klasę Pojazd z constructor(marka) i metodą opis().
//     Napisz klasę Motocykl extends Pojazd, dodaj pole silnikCC w constructor
//     (pamiętaj o super(marka)). Stwórz instancję i wywołaj opis().

// 13. Napisz klasę Ksztalt z metodą pole() zwracającą 0.
//     Napisz klasę Kwadrat extends Ksztalt z constructor(bok)
//     i NADPISZ metodę pole() zwracającą bok * bok.

// 14. W klasie z zadania 13 dodaj metodę opis() która wywołuje
//     super.pole() (jeśli istnieje) i dopisuje własny tekst — albo po prostu
//     napisz metodę opisz() w Kwadrat wywołującą this.pole().

// 15. Sprawdź instanceof: stwórz instancję Kwadrat i wypisz
//     (instancja instanceof Kwadrat) oraz (instancja instanceof Ksztalt).

// --- pola prywatne ---

// 16. Napisz klasę Haslo z prywatnym polem #wartosc ustawianym w konstruktorze.
//     Dodaj publiczną metodę sprawdz(proba) zwracającą proba === this.#wartosc.
//     Przetestuj z poprawnym i niepoprawnym hasłem.

// 17. Napisz klasę LicznikPrywatny z prywatnym polem #count = 0
//     i metodami increment() oraz wartosc() (getter zwracający #count).
//     Spróbuj odczytać #count spoza klasy w komentarzu — zapisz co się stanie.
