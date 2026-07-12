// Ćwiczenia — zmienne i zasięgi
// Poziom: łatwy / językowy — proste wywołania i mechaniki, bez algorytmów.

// --- JS-001 — var ---

// 1. Napisz zmienną var liczbaKotow = 2. Zadeklaruj ją ponownie przez var
//    z wartością 5 (redeklaracja). Wypisz liczbaKotow.

// 2. Napisz funkcję sprawdzStatus() z blokiem if (true) { var status = "aktywny"; }
//    wewnątrz. Wypisz status POZA blokiem if, ale wewnątrz funkcji —
//    sprawdź, że var "wycieka" z bloku.

// 3. Napisz pętlę for (var i = 0; i < 3; i++) { ... } wewnątrz funkcji liczPetle().
//    Po pętli wypisz i wewnątrz tej samej funkcji.

// 4. Napisz funkcję zmienStan() z var stan = "start" na górze.
//    Wewnątrz pętli for zmień stan na "koniec" (bez deklarowania nowej zmiennej).
//    Wypisz stan po pętli.

// 5. Napisz zmienną var jezyk = "polski" wewnątrz bloku { }.
//    Wypisz ją POZA blokiem — sprawdź, czy działa (var nie ma zasięgu blokowego).

// --- JS-002 — Hoisting ---

// 6. Wypisz zmienną wynik ZANIM ją zadeklarujesz przez var wynik = 100.
//    Wypisz ją jeszcze raz PO deklaracji. Porównaj oba wyniki.

// 7. Napisz function declaration policzPole(bok) zwracającą bok * bok.
//    Wywołaj ją w linijce PRZED jej deklaracją w pliku. Sprawdź, czy działa.

// 8. Napisz const policzObwod = function(bok) { return bok * 4; }.
//    W komentarzu opisz, co by się stało, gdybyś wywołał policzObwod
//    PRZED tą linijką — nie musisz tego uruchamiać.

// 9. Napisz komentarz z krótkim kodem: console.log(x); let x = 5;
//    NIE odkomentowuj go — napisz obok w komentarzu, jaki błąd by to
//    spowodowało i dlaczego (Temporal Dead Zone).

// 10. Napisz funkcję test() z var a na górze (bez wartości) i let b na końcu
//     (z wartością). Wypisz a od razu na początku funkcji (przed przypisaniem)
//     — sprawdź, co zwraca.

// --- JS-003 — let ---

// 11. Napisz zmienną let temperatura = 18. Zmień ją na 22, a potem na 25.
//     Wypisz każdą zmianę osobno.

// 12. Napisz let miasto = "Gdańsk". W komentarzu napisz, jak wyglądałaby
//     próba redeklaracji (let miasto = "Poznań";) w tym samym zasięgu
//     i dlaczego to błąd — nie musisz jej uruchamiać.

// 13. Napisz pętlę for (let i = 0; i < 4; i++) wypisującą i w każdej iteracji.
//     Po pętli spróbuj wypisać i — zanotuj w komentarzu, co się stanie.

// 14. Napisz blok { let sekret = "ukryty"; console.log(sekret); }.
//     Spróbuj wypisać sekret zaraz po bloku — zanotuj wynik w komentarzu.

// 15. Napisz let poziom = "zewnętrzny" poza blokiem { }.
//     Wewnątrz bloku napisz let poziom = "wewnętrzny" (shadowing) i wypisz
//     oba — jeden przed blokiem, jeden w środku.

// --- JS-004 — const ---

// 16. Napisz const PI = 3.14. W komentarzu napisz, jaki błąd spowodowałaby
//     próba przypisania jej nowej wartości.

// 17. Napisz const samochod = { marka: "Toyota", kolor: "czerwony" }.
//     Zmień samochod.kolor na "niebieski" (bez przepisywania stałej).
//     Wypisz cały obiekt.

// 18. Napisz const zakupy = ["chleb", "mleko"]. Dodaj "masło" metodą push().
//     Wypisz tablicę.

// 19. Na tej samej tablicy zakupy wywołaj pop(), aby usunąć ostatni element.
//     Wypisz tablicę po usunięciu.

// 20. Napisz w komentarzu wyjaśnienie: dlaczego const pozwala modyfikować
//     zawartość tablicy/obiektu, ale nie pozwala przypisać nowej wartości
//     do całej zmiennej?

// --- JS-005 — Zasięgi zmiennych ---

// 21. Napisz const nazwaFirmy = "TechCorp" poza funkcją.
//     Napisz funkcję pokazFirme(), która wypisuje nazwaFirmy. Wywołaj funkcję.

// 22. Napisz funkcję zewnetrzna() z const haslo = "tajneHaslo123" w środku.
//     Wewnątrz niej napisz funkcję wewnetrzna(), która wypisuje haslo.
//     Wywołaj wewnetrzna() wewnątrz zewnetrzna().

// 23. W komentarzu napisz, jaki błąd spowodowałaby próba wywołania funkcji
//     wewnetrzna() z zadania 22 POZA funkcją zewnetrzna().

// 24. Napisz dwie oddzielne funkcje, każda z własną zmienną let licznik = 0,
//     niezależną od drugiej. W jednej zwiększ licznik dwa razy, w drugiej raz.
//     Wypisz obie wartości i sprawdź, że się nie mieszają.

// 25. Napisz const kolor = "zielony" poza funkcją. Napisz funkcję pokazKolor()
//     z własną const kolor = "czerwony" w środku (shadowing).
//     Wypisz kolor na zewnątrz i wewnątrz funkcji — porównaj.

// 26. Napisz funkcję trzyPoziomy() z const a = "poziom 1". Wewnątrz zagnieżdżoną
//     funkcję z const b = "poziom 2", a wewnątrz niej kolejną z const c = "poziom 3",
//     która wypisuje a, b i c. Wywołaj całość.

// --- JS-006 — var vs let vs const: kiedy co? ---

// 27. Napisz stałą MAX_PUNKTOW = 100, która nigdy się nie zmienia.
//     Uzasadnij w komentarzu, dlaczego użyłeś/aś const.

// 28. Napisz zmienną aktualnyWynik = 0, która będzie się zmieniać w trakcie gry.
//     Uzasadnij w komentarzu wybór let.

// 29. Napisz trzy zmienne opisujące użytkownika: identyfikator (nigdy się
//     nie zmienia), liczbaOdwiedzin (zmienia się), ostatniaAktywnosc (zmienia się).
//     Wybierz odpowiednie słowo kluczowe dla każdej i uzasadnij krótko w komentarzu.

// 30. Napisz pętlę for używając let do iteracji oraz const SUMA_POCZATKOWA = 0
//     poza pętlą jako punkt odniesienia (nieużywany do modyfikacji).
//     Wypisz w pętli każdą wartość i.

// 31. Napisz krótki fragment kodu z var w miejscu, gdzie powinno być let
//     (np. w pętli for). Przepisz go poprawnie na let i zanotuj w komentarzu,
//     dlaczego to lepszy wybór.

// 32. Napisz funkcję stworzWitacza(powitanie), która zwraca funkcję przyjmującą
//     imie i zwracającą `${powitanie}, ${imie}!`. Stwórz dwie zmienne:
//     witajPolski i witajAngielski z różnym powitaniem. Wywołaj obie
//     z różnymi imionami.

// 33. Napisz const listaZadan = ["kupić mleko", "posprzątać"]. Napisz funkcję
//     dodajZadanie(zadanie), która dodaje zadanie do listaZadan (odwołuje się
//     do zmiennej z zewnętrznego zasięgu). Wywołaj ją dwa razy z różnymi
//     zadaniami i wypisz listaZadan.

// 34. Napisz let aktywny = true w głównym zasięgu pliku. Napisz funkcję
//     przelacz(), która zmienia aktywny na przeciwną wartość (użyj !aktywny)
//     i wypisuje nową wartość. Wywołaj przelacz() trzy razy pod rząd.

// 35. Napisz const konfiguracja = { motyw: "ciemny" } w głównym zasięgu.
//     Napisz funkcję zmienMotyw(nowyMotyw), która zmienia konfiguracja.motyw
//     (bez przepisywania stałej). Wywołaj z "jasny" i wypisz konfiguracja.
