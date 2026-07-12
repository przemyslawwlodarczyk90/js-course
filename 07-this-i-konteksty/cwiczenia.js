// Ćwiczenia — this, call, apply, bind
// Poziom: łatwy / językowy

// --- this w zwykłych funkcjach i metodach ---

// 1. Napisz obiekt kot = { imie: "Filemon", miauknij() { ... } }.
//    Metoda miauknij() wypisuje `${this.imie} mówi: Miau!`. Wywołaj ją.

// 2. Napisz obiekt samochod = { marka: "Toyota", predkosc: 0, przyspiesz(o) { this.predkosc += o; } }.
//    Wywołaj przyspiesz(20) dwa razy. Wypisz samochod.predkosc.

// 3. Napisz zwykłą funkcję pokazTo() wypisującą console.log(this).
//    Wywołaj ją samodzielnie (bez żadnego obiektu przed kropką).
//    Zapisz w komentarzu, czym okazało się this.

// 4. Napisz obiekt sklep = { nazwa: "Kwiaciarnia u Ani", podajNazwe() { return this.nazwa; } }.
//    Wywołaj sklep.podajNazwe() i zapisz wynik w zmiennej. Wypisz ją.

// --- Gubienie this przy wyrywaniu metody ---

// 5. Wyciągnij metodę miauknij z zadania 1 do osobnej zmiennej samodzielnaFunkcja.
//    Wywołaj samodzielnaFunkcja() i zapisz w komentarzu, co się stało z this.

// 6. Napisz funkcję wykonaj(fn) która wewnątrz wywołuje fn().
//    Przekaż jej metodę podajNazwe z obiektu sklep (zadanie 4) jako argument.
//    Zapisz w komentarzu, dlaczego this się tu gubi.

// 7. Napisz obiekt uzytkownik = { imie: "Kasia", pokazImie() { return this.imie; } }.
//    Przypisz uzytkownik.pokazImie do zmiennej luznaFunkcja.
//    Porównaj w komentarzu wynik uzytkownik.pokazImie() z wynikiem luznaFunkcja().

// --- Arrow function i this ---

// 8. Napisz obiekt ptak = { imie: "Kiwi", odezwijSieArrow: () => console.log(this) }.
//    Wywołaj ptak.odezwijSieArrow(). Zapisz w komentarzu, czym jest this (na pewno nie ptak).

// 9. Napisz obiekt zegar = { godzina: 0, startArrow() { setTimeout(() => { this.godzina++; console.log(this.godzina); }, 10); } }.
//    Wywołaj zegar.startArrow().

// 10. Napisz obiekt zegar2 z metodą startZwykla() używającą wewnątrz setTimeout ZWYKŁEJ funkcji
//     (nie arrow) próbującej zrobić this.godzina++. Zakomentuj tę linię i zapisz w komentarzu,
//     dlaczego by nie zadziałała, w przeciwieństwie do zadania 9.

// 11. Napisz obiekt gracz = { punkty: 0, dodajPunktyPoCzasie() { setTimeout(() => { this.punkty += 10; console.log(this.punkty); }, 5); } }.
//     Wywołaj gracz.dodajPunktyPoCzasie().

// --- call() ---

// 12. Napisz funkcję opisz(zawod) zwracającą `${this.imie} pracuje jako ${zawod}`.
//     Wywołaj ją przez call() dla dwóch obiektów: { imie: "Tomek" } i { imie: "Zosia" }.

// 13. Napisz funkcję policzRabat(procent) zwracającą this.cena - (this.cena * procent) / 100.
//     Wywołaj ją przez call() na obiekcie { cena: 200 } z procent = 10. Wypisz wynik.

// 14. Napisz funkcję przedstawZWiekiem(miasto) zwracającą `${this.imie} (${this.wiek} lat) z ${miasto}`.
//     Wywołaj ją przez call() na dwóch różnych obiektach { imie, wiek }.

// --- apply() ---

// 15. Napisz tablicę temperatur [12, 25, 3, 40, -5].
//     Znajdź największą i najmniejszą wartość przez Math.max.apply i Math.min.apply.

// 16. Napisz funkcję zbuduj(a, b, c) zwracającą this.prefix + [a, b, c].join("-").
//     Wywołaj ją przez apply() na obiekcie { prefix: "kod" } z tablicą argumentów [1, 2, 3].

// 17. Napisz funkcję sumuj3(a, b, c) zwracającą a + b + c.
//     Wywołaj ją przez apply(null, [tablica]) z tablicą trzech liczb. Wypisz wynik.

// --- bind() ---

// 18. Napisz funkcję powitanieVIP() zwracającą `Witaj, drogi ${this.imie}`.
//     Stwórz przez bind() nową funkcję związaną z obiektem { imie: "Marta" }. Wywołaj ją.

// 19. Napisz funkcję pomnozPrzez(mnoznik, liczba) zwracającą mnoznik * liczba.
//     Stwórz przez bind(null, 3) funkcję razyTrzy. Wywołaj razyTrzy(4) i razyTrzy(9).

// 20. Napisz obiekt licznikKlikniec = { ile: 0, klik() { this.ile++; } }.
//     Wyciągnij metodę klik jako zmienną, zwiąż ją przez bind(licznikKlikniec).
//     Wywołaj związaną funkcję 4 razy. Wypisz licznikKlikniec.ile.

// 21. Napisz funkcję przedstawZFirma(firma, stanowisko) zwracającą `${this.imie} z ${firma} na stanowisku ${stanowisko}`.
//     Stwórz przez bind() funkcję z ustawionym this ORAZ firmą z góry (partial application).
//     Wywołaj ją dwukrotnie z różnymi stanowiskami.

// 22. Zapisz w komentarzu krótkie porównanie call() vs apply() vs bind():
//     który wywołuje funkcję od razu, który zwraca nową funkcję,
//     i jak każdy z nich przyjmuje argumenty.

// --- this w klasach i event handlerach ---

// 23. Napisz klasę Zegarek z constructor(marka), polem tykniecia = 0
//     i metodą tyknij() zwiększającą tykniecia. W konstruktorze zwiąż tyknij z bind(this).

// 24. Wyciągnij metodę tyknij z instancji Zegarek (zadanie 23) do osobnej zmiennej
//     i wywołaj ją samodzielnie. Sprawdź, że tykniecia się zwiększyło mimo wyrwania metody.

// 25. Napisz klasę PrzyciskEmail z polem wyslane = 0 i metodą wyslij() zwiększającą wyslane
//     — BEZ bind w konstruktorze. Wyciągnij metodę do zmiennej i wywołaj ją samodzielnie.
//     Zapisz w komentarzu, jaki błąd/problem tu wystąpi.

// 26. Napraw klasę z zadania 25, dodając this.wyslij = this.wyslij.bind(this) w konstruktorze.
//     Powtórz test z wyciągniętą metodą i sprawdź, że tym razem działa.
