// Dodatkowe ćwiczenia — this, call, apply, bind
// Poziom: łatwy / językowy

// --- this w obiektach ---

// 1. Napisz obiekt pies = { imie: "Reksio", szczekaj() { ... } }.
//    Metoda szczekaj() wypisuje `${this.imie} mówi: Hau!`. Wywołaj ją.

// 2. Napisz obiekt kalkulator = { wynik: 0, dodaj(n) { this.wynik += n; } }.
//    Wywołaj dodaj(5) i dodaj(3). Wypisz kalkulator.wynik.

// 3. Wyciągnij metodę szczekaj z zadania 1 do osobnej zmiennej
//    i wywołaj ją samodzielnie. Zapisz w komentarzu co się stało z this.

// --- arrow function i this ---

// 4. Napisz obiekt kot = { imie: "Mruczek", miauknijArrow: () => console.log(this) }.
//    Wywołaj miauknijArrow(). Zapisz w komentarzu czym jest this.

// 5. Napisz obiekt licznik = { wartosc: 0, start() { setTimeout(() => { this.wartosc++; console.log(this.wartosc); }, 10); } }.
//    Wywołaj licznik.start(). Wyjaśnij dlaczego arrow function tutaj działa poprawnie.

// --- call ---

// 6. Napisz funkcję przywitaj(jezyk) zwracającą `${jezyk}: cześć, ${this.imie}!`.
//    Wywołaj ją przez call() dla dwóch różnych obiektów { imie: "Tomek" } i { imie: "Zosia" }.

// 7. Napisz funkcję pomnozWiek(mnoznik) zwracającą this.wiek * mnoznik.
//    Wywołaj ją przez call() na obiekcie { wiek: 10 } z mnoznik = 3. Wypisz wynik.

// --- apply ---

// 8. Napisz tablicę liczb [4, 8, 15, 16, 23, 42].
//    Znajdź największą i najmniejszą wartość przez Math.max.apply i Math.min.apply.

// 9. Napisz funkcję opisz(a, b, c) zwracającą this.tag + ": " + [a,b,c].join(",").
//    Wywołaj ją przez apply() na obiekcie { tag: "info" } z tablicą argumentów [1, 2, 3].

// --- bind ---

// 10. Napisz funkcję powitanie() zwracającą `Witaj, ${this.imie}`.
//     Stwórz przez bind() nową funkcję związaną z obiektem { imie: "Marta" }.
//     Wywołaj nową funkcję.

// 11. Napisz funkcję pomnoz(a, b) zwracającą a * b.
//     Stwórz przez bind(null, 10) funkcję razyDziesiec.
//     Wywołaj razyDziesiec(4) i razyDziesiec(7).

// 12. Napisz obiekt stoper = { sekundy: 0, tick() { this.sekundy++; } }.
//     Wyciągnij metodę tick jako zmienną, zwiąż ją przez bind(stoper).
//     Wywołaj związaną funkcję 3 razy. Wypisz stoper.sekundy.

// 13. Napisz klasę Przycisk (lub obiekt) z metodą kliknij() zwiększającą licznik.
//     W konstruktorze/inicjalizacji zwiąż kliknij z bind(this).
//     Wyciągnij metodę do zmiennej i wywołaj ją — sprawdź że this działa.
