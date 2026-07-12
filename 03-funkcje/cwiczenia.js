// Ćwiczenia — funkcje
// Poziom: łatwy / językowy — proste wywołania i mechaniki, bez algorytmów.

// --- JS-014 — Function declaration vs function expression ---

// 1. Napisz function declaration o nazwie odejmij(a, b), zwracającą a - b.
//    Wywołaj ją w linijce PRZED jej deklaracją w pliku. Wypisz wynik.

// 2. Napisz function expression: const podziel = function(a, b) { ... },
//    zwracającą a / b. Wywołaj ją PO deklaracji. Wypisz wynik.

// 3. Napisz function expression o nazwie pomnoz. W komentarzu zapisz,
//    co by się stało, gdybyś wywołał ją PRZED tą linijką — nie musisz
//    tego uruchamiać.

// 4. Napisz function declaration policzSrednia(a, b, c), zwracającą średnią
//    trzech liczb. Wywołaj ją z dwoma różnymi zestawami liczb i wypisz
//    oba wyniki.

// 5. Napisz function expression policzPole = function(bok) { return bok * bok; }.
//    Wywołaj ją i wypisz wynik.

// --- JS-015 — Arrow function ---

// 6. Napisz arrow function w pełnej formie o nazwie potegaKwadrat(x),
//    zwracającą x * x (z klamrami i return). Wywołaj z liczbą 6.

// 7. Napisz tę samą funkcję w formie skróconej (jedna linia, bez return
//    i klamer). Wywołaj z 6 i porównaj wynik z zadaniem 6.

// 8. Napisz arrow function bezArgumentow(), zwracającą stały tekst
//    "Brak argumentów". Wywołaj i wypisz wynik.

// 9. Napisz arrow function przywitaj(imie), zwracającą w formie skróconej
//    `Cześć, ${imie}!`. Wywołaj ją z dwoma różnymi imionami.

// 10. Napisz arrow function stworzKsiazke(tytul, autor), zwracającą obiekt
//     { tytul, autor } (pamiętaj o nawiasach). Wywołaj i wypisz wynik.

// 11. Napisz arrow function podwoj = x => x * 2. Wywołaj ją trzy razy
//     z różnymi liczbami i wypisz każdy wynik.

// 12. Napisz arrow function czyPelnoletni = wiek => wiek >= 18.
//     Przetestuj ją na wieku 15 i 20, wypisz oba wyniki.

// 13. Napisz arrow function polacz = (a, b) => a + " " + b, łączącą dwa
//     słowa ze spacją. Przetestuj na dwóch dowolnych słowach.

// --- JS-016 — Funkcja anonimowa, IIFE ---

// 14. Napisz tablicę liczb [4, 1, 7, 2]. Posortuj ją funkcją anonimową
//     przekazaną do .sort() w formie function(a, b) { ... }. Wypisz wynik.

// 15. Napisz to samo sortowanie co w zadaniu 14, ale funkcją anonimową
//     w formie arrow. Wypisz wynik.

// 16. Napisz IIFE, które od razu wykonuje działanie 5 + 7 i zapisuje wynik
//     do stałej suma. Wypisz suma.

// 17. Napisz IIFE, wewnątrz którego zadeklarujesz zmienną pomocnicza.
//     Spróbuj wypisać ją zaraz POZA IIFE — zanotuj w komentarzu, co się stanie.

// 18. Napisz IIFE w formie arrow function: (() => { ... })(), które wypisuje
//     "IIFE działa!".

// 19. Napisz tablicę słów ["kot", "pies", "chomik"]. Użyj funkcji anonimowej
//     w .forEach(), aby wypisać każde słowo razem z jego numerem porządkowym.

// --- JS-017 — Funkcja callbackowa, predykat, higher-order function ---

// 20. Napisz funkcję wykonajRazy(fn, wartosc, ile), która wywołuje
//     fn(wartosc) "ile" razy i wypisuje każdy wynik. Przetestuj z
//     fn = x => x + 1, wartosc = 10, ile = 3.

// 21. Wywołaj wykonajRazy z zadania 20, ale zamiast własnej arrow function
//     przekaż wbudowaną funkcję String. Wypisz wyniki.

// 22. Napisz tablicę liczb [12, 5, 8, 19, 3]. Napisz predykat
//     jestParzysta = n => n % 2 === 0. Użyj go z metodą .filter(). Wypisz wynik.

// 23. Napisz tablicę obiektów produkty (co najmniej 3, każdy z name i cena).
//     Napisz predykat jestDrogi = p => p.cena > 100. Użyj go z .filter().
//     Wypisz wynik.

// 24. Na tej samej tablicy produktów napisz predykat
//     jestTani = p => p.cena <= 100. Wypisz wynik .filter(jestTani).

// 25. Napisz funkcję wyższego rzędu stworzDodawacz(liczba), zwracającą
//     funkcję dodającą "liczba" do przekazanego argumentu. Stwórz dodaj10
//     i dodaj100. Wywołaj oba z różnymi liczbami.

// 26. Napisz funkcję stworzFormatter(jednostka), zwracającą funkcję
//     dopisującą jednostkę do liczby (np. "5 km"). Stwórz formatterKm
//     i formatterKg. Przetestuj oba.

// 27. Napisz tablicę imion ["Ala", "Bartek", "Celina"]. Użyj .map()
//     z funkcją strzałkową zwracającą długość każdego imienia. Wypisz wynik.

// 28. Napisz funkcję uruchomZWarunkiem(fn, warunek, wartosc), która wywołuje
//     fn(wartosc) tylko jeśli warunek(wartosc) === true, w przeciwnym razie
//     wypisuje "pominięto". Przetestuj z warunek = n => n > 0 na wartościach
//     5 i -5.

// --- JS-018 — Closures (domknięcia) ---

// 29. Napisz funkcję stworzLicznik(), zwracającą obiekt z metodami
//     increment() i wartosc(). Użyj let count = 0 wewnątrz. Wywołaj
//     increment() trzy razy i wypisz wartosc().

// 30. Stwórz DWA niezależne liczniki (licznikA i licznikB) z funkcji
//     z zadania 29. Zwiększ licznikA dwa razy, a licznikB raz. Wypisz oba
//     wyniki i sprawdź, że są niezależne.

// 31. Napisz funkcję stworzLicznikOd(start), zwracającą licznik zaczynający
//     się od podanej wartości start (analogicznie do zadania 29). Stwórz
//     licznik od 100, zwiększ go raz i wypisz wynik.

// 32. Napisz funkcję stworzMagazyn(poczatkowyStan), zwracającą obiekt
//     z metodami dodaj(ile) i stan(). Przetestuj wywołując dodaj() kilka
//     razy i sprawdzając stan() po każdym wywołaniu.

// 33. Napisz funkcję stworzLogger(prefiks), zwracającą funkcję przyjmującą
//     wiadomosc i wypisującą `[prefiks] wiadomosc`. Stwórz loggerInfo
//     i loggerBlad z różnymi prefiksami. Wywołaj oba.

// 34. Napisz funkcję stworzMnoznik(czynnik), zwracającą funkcję mnożącą
//     argument przez czynnik. Stwórz razyDwa i razyDziesiec. Wywołaj oba
//     z tą samą liczbą i porównaj wyniki.

// 35. Napisz funkcję stworzSejf(), która wewnątrz ma prywatną zmienną
//     let kod = "1234" (niedostępną z zewnątrz) i zwraca obiekt z metodą
//     sprawdz(proba) zwracającą true/false. Przetestuj z poprawnym
//     i błędnym kodem.

// 36. Napisz funkcję zewnetrzna(), zwracającą funkcję, która zwraca kolejną
//     funkcję (trzy poziomy zagnieżdżenia) — każdy poziom dodaje przekazaną
//     liczbę do sumy z zamknięcia. Wywołaj wszystkie trzy poziomy po kolei
//     i wypisz końcowy wynik.

// 37. Napisz funkcję stworzWitacza(powitanie), zwracającą funkcję przyjmującą
//     imie i zwracającą `${powitanie}, ${imie}!`. Stwórz witajPolski
//     i witajAngielski z różnym powitaniem. Wywołaj oba z różnymi imionami.

// 38. Napisz let aktywny = true w głównym zasięgu pliku. Napisz funkcję
//     przelacz(), zmieniającą aktywny na przeciwną wartość i wypisującą
//     nową wartość. Wywołaj przelacz() trzy razy pod rząd.

// 39. Napisz funkcję stworzKopilke(), zwracającą obiekt z metodami
//     wplac(kwota) i saldo(). Użyj let saldo = 0 w zamknięciu. Przetestuj
//     wpłacając kilka różnych kwot i sprawdzając saldo po każdej.

// 40. Napisz funkcję stworzGeneratorPowitan(jezyk), zwracającą funkcję
//     zwracającą powitanie w zależności od jezyka ("pl" → "Cześć",
//     "en" → "Hello", inny → "Hi"). Stwórz powitaniePL i powitanieEN
//     i wywołaj obie.

// 41. Napisz funkcję policzWywolania(), zwracającą funkcję zliczającą,
//     ile razy została wywołana (closure z let licznik = 0 zwiększanym
//     przy każdym wywołaniu, zwracającym aktualną liczbę). Wywołaj ją
//     cztery razy i wypisz wynik każdego wywołania.
