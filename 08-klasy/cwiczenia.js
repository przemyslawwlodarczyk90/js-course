// Ćwiczenia — klasy
// Poziom: łatwy / językowy

// --- constructor i metody instancji ---

// 1. Napisz klasę Film z constructor(tytul, rezyser).
//    Dodaj metodę opis() zwracającą `"${tytul}" reż. ${rezyser}`.
//    Stwórz instancję i wywołaj opis().

// 2. Napisz klasę Rower z constructor(marka, przebieg = 0).
//    Dodaj metodę jedz(km) zwiększającą przebieg o km.
//    Stwórz instancję, wywołaj jedz(10) i jedz(5). Wypisz przebieg.

// 3. Stwórz dwie instancje klasy Film z różnymi danymi.
//    Zmień tytuł jednej instancji (np. film1.tytul = "Nowy tytuł") i pokaż,
//    że druga instancja pozostaje bez zmian (obiekty są niezależne).

// 4. Napisz klasę Zamowienie z constructor(produkt, ilosc).
//    Dodaj metodę wartosc(cenaJednostkowa) zwracającą ilosc * cenaJednostkowa.
//    Stwórz instancję i wypisz wynik wartosc(15).

// --- pola klasy ---

// 5. Napisz klasę Plecak z polem items = [] zadeklarowanym w ciele klasy (nie w constructor).
//    Dodaj metodę spakuj(nazwa) robiącą items.push(nazwa).
//    Dodaj 3 przedmioty i wypisz items.

// 6. Napisz klasę Profil z polami widocznosc = "publiczny" i powiadomienia = true.
//    Stwórz instancję bez żadnych argumentów i wypisz oba pola.

// 7. Napisz klasę PrzyciskLike z polem polubienia = 0 i polem-funkcją strzałkową
//    kliknij = () => { this.polubienia++; }.
//    Wyciągnij kliknij do osobnej zmiennej i wywołaj ją bez obiektu przed kropką —
//    sprawdź, że this mimo to działa (bo pole klasy jako arrow function samo wiąże this).

// 8. Zapisz w komentarzu, kiedy warto zainicjować pole w ciele klasy (jak w zadaniu 5/6),
//    a kiedy lepiej ustawić je w constructor (jak w zadaniu 1).

// --- gettery i settery ---

// 9. Napisz klasę Krag z constructor(promien).
//    Dodaj getter pole zwracający Math.PI * promien ** 2.
//    Stwórz instancję z promieniem 3 i wypisz .pole.

// 10. Napisz klasę KontoBankowe z constructor(saldo).
//     Dodaj setter saldo, który rzuca błąd gdy nowa wartość jest ujemna.
//     Spróbuj ustawić saldo na -50 w bloku try/catch i wypisz komunikat błędu.

// 11. Napisz klasę Prostokat2 (jak w lekcji) z getterem/setterem szerokosc.
//     Zmień szerokość przez setter, a potem sprawdź, że getter pole zwraca przeliczoną wartość.

// 12. Napisz klasę Pracownik z constructor(imie, pensjaMiesieczna).
//     Dodaj getter pensjaRoczna zwracający pensjaMiesieczna * 12. Wypisz .pensjaRoczna.

// --- pola i metody statyczne ---

// 13. Napisz klasę Konwerter2 ze statyczną metodą celsjuszNaKelwiny(c) zwracającą c + 273.15.
//     Wywołaj ją jako Konwerter2.celsjuszNaKelwiny(20) — bez tworzenia instancji.

// 14. Napisz klasę Produkt3 ze statycznym polem RABAT = 0.1
//     i statyczną metodą cenaPoRabacie(cena) zwracającą cena * (1 - Produkt3.RABAT).

// 15. Napisz klasę RejestrUzytkownikow ze statycznym polem licznik = 0,
//     zwiększanym w constructor przy każdym new RejestrUzytkownikow().
//     Stwórz 4 instancje i wypisz RejestrUzytkownikow.licznik.

// 16. Weź dowolną instancję klasy z zadania 14 (np. new Produkt3()) i spróbuj odczytać
//     z niej instancja.RABAT. Zapisz w komentarzu, co zwraca i dlaczego
//     (pole statyczne należy do klasy, nie do instancji).

// --- dziedziczenie: extends i super ---

// 17. Napisz klasę Pojazd2 z constructor(marka) i metodą opis() zwracającą prosty opis.
//     Napisz klasę Ciezarowka extends Pojazd2, dodaj pole ladownoscTon w constructor
//     (pamiętaj o super(marka) na początku). Stwórz instancję i wywołaj opis().

// 18. Napisz klasę Ksztalt2 z metodą pole() zwracającą 0.
//     Napisz klasę Kolo extends Ksztalt2 z constructor(promien)
//     i NADPISZ metodę pole() zwracającą Math.PI * promien ** 2.

// 19. W klasie Zwierze2 z metodą wydajDzwiek() zwracającą ogólny tekst
//     napisz klasę Kot extends Zwierze2, nadpisz wydajDzwiek(),
//     a potem dodaj metodę wydajDzwiekZBazowa() wywołującą super.wydajDzwiek()
//     i doklejającą do wyniku własny tekst.

// 20. Sprawdź instanceof: stwórz instancję klasy Kolo (zadanie 18) i wypisz
//     (instancja instanceof Kolo) oraz (instancja instanceof Ksztalt2).

// 21. Napisz klasę Pracownik2 z constructor(imie, pensja) i metodą opis().
//     Napisz klasę Kierownik extends Pracownik2, dodaj pole zespol (tablica nazwisk)
//     w constructor (super(imie, pensja)) i nadpisz opis(), doklejając super.opis()
//     do informacji o liczbie osób w zespole.

// --- pola i metody prywatne (#) ---

// 22. Napisz klasę Sejf z prywatnym polem #kod ustawianym w konstruktorze.
//     Dodaj publiczną metodę otworz(proba) zwracającą proba === this.#kod.
//     Przetestuj z poprawnym i niepoprawnym kodem.

// 23. Napisz klasę LicznikOdwiedzin z prywatnym polem #odwiedziny = 0
//     oraz metodami zwieksz() i getterem pobierz() zwracającym #odwiedziny.
//     Wywołaj zwieksz() 5 razy i wypisz pobierz().

// 24. Napisz klasę Karta z prywatnym polem #numer (string cyfr) ustawianym w konstruktorze
//     oraz prywatną metodą #maskuj() zwracającą tylko ostatnie 4 znaki z gwiazdkami przed nimi.
//     Dodaj publiczną metodę pokaz() wywołującą #maskuj(). Przetestuj.

// 25. Weź instancję Sejf z zadania 22 i zapisz w komentarzu, co by się stało,
//     gdyby spróbować odczytać sejf.#kod bezpośrednio spoza klasy.

// --- class vs funkcja fabrykująca ---

// 26. Napisz funkcję fabrykującą stworzKota(imie) zwracającą zwykły obiekt
//     z polem imie i metodą miauknij() zwracającą `${imie} mówi: Miau!`.
//     Stwórz obiekt przez tę fabrykę i wywołaj miauknij().

// 27. Napisz prostą klasę Kot z constructor(imie) i metodą miauknij().
//     Stwórz jedną instancję przez `new Kot(...)` i jedną przez fabrykę z zadania 26.
//     Sprawdź instanceof Kot dla obu i zapisz wynik w komentarzu — czym różni się
//     obiekt z fabryki od instancji klasy.
