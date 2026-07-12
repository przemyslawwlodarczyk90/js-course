// Dodatkowe ćwiczenia — moduły (import/export)
// Poziom: łatwy / językowy
//
// WAŻNE: import MUSI stać na samej górze pliku (przed jakimkolwiek innym kodem) —
// to zasada składni modułów ES, nie tego kursu. Dopisuj swoje importy
// w sekcji "TWOJE IMPORTY" poniżej, a wywołania funkcji niżej w pliku.
// Uruchamiasz ten plik przez: node dodatkowe.js

// ============================================================
// TWOJE IMPORTY (uzupełniaj tutaj w miarę zadań)
// ============================================================



// ============================================================
// ZADANIA
// ============================================================

// --- import named ---

// 1. Zaimportuj dodaj i odejmij z ./mathUtils.js.
//    Wywołaj dodaj(10, 5) i odejmij(10, 5). Wypisz oba wyniki.

// 2. Zaimportuj PI z ./mathUtils.js pod inną nazwą: LiczbaPi (import { PI as LiczbaPi }).
//    Wypisz LiczbaPi.

// 3. Zaimportuj poleKola z ./mathUtils.js. Oblicz i wypisz pole koła o promieniu 4.

// --- import default ---

// 4. Zaimportuj domyślny eksport z ./mathUtils.js (funkcja pomnoz) pod nazwą pomnoz.
//    Wywołaj pomnoz(6, 7). Wypisz wynik.

// 5. Zaimportuj domyślny eksport z ./stringUtils.js (funkcja odwracająca string)
//    pod nazwą odwroc. Wywołaj odwroc("hello"). Wypisz wynik.

// --- łączenie named + default ---

// 6. Zaimportuj JEDNĄ linią: default z ./stringUtils.js jako reverse
//    ORAZ named capitalize i WERSJA. Wywołaj wszystkie trzy i wypisz wyniki.

// --- namespace import ---

// 7. Zaimportuj wszystko z ./mathUtils.js jako obiekt MathUtils
//    (import * as MathUtils). Wypisz MathUtils.PI oraz MathUtils.dodaj(2,2).
//    Wypisz też MathUtils.default(3,3) — sprawdź pod jakim kluczem jest eksport domyślny.

// --- rozbudowa własnego modułu ---

// 8. Otwórz mathUtils.js i dopisz nową nazwaną funkcję: potega(podstawa, wykladnik)
//    zwracającą podstawa ** wykladnik. Zaimportuj ją tutaj i przetestuj potega(2, 10).

// 9. Otwórz stringUtils.js i dopisz nazwaną funkcję isPalindrome(str)
//    zwracającą true/false. Zaimportuj i przetestuj na "kajak" oraz "hello".

// --- import dynamiczny ---

// 10. Napisz funkcję async, która wewnątrz robi:
//     const modul = await import("./mathUtils.js");
//     i wywołuje modul.dodaj(1, 2). Uruchom tę funkcję i wypisz wynik.
