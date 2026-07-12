// Ćwiczenia — moduły (import/export)
// Poziom: łatwy / językowy
//
// WAŻNE: import MUSI stać na samej górze pliku (przed jakimkolwiek innym kodem) —
// to zasada składni modułów ES, nie tego kursu. Dopisuj swoje importy
// w sekcji "TWOJE IMPORTY" poniżej, a wywołania funkcji niżej w pliku.
// Uruchamiasz ten plik przez: node cwiczenia.js

// ============================================================
// TWOJE IMPORTY (uzupełniaj tutaj w miarę zadań)
// ============================================================



// ============================================================
// ZADANIA
// ============================================================

// --- import named ---

// 1. Zaimportuj poleKola z ./mathUtils.js. Oblicz i wypisz pole koła o promieniu 7.

// 2. Zaimportuj dodaj i odejmij z ./mathUtils.js.
//    Wywołaj dodaj(100, 23) i odejmij(100, 23). Wypisz oba wyniki.

// 3. Zaimportuj capitalize i slugify z ./stringUtils.js.
//    Wywołaj capitalize("kurs") i slugify("  Moj   Kurs JS  "). Wypisz wyniki.

// --- import z aliasem (as) ---

// 4. Zaimportuj PI z ./mathUtils.js pod inną nazwą: Ludolfina
//    (import { PI as Ludolfina }). Wypisz Ludolfina.

// 5. Zaimportuj WERSJA z ./stringUtils.js pod nazwą wersjaBiblioteki. Wypisz ją.

// --- import default ---

// 6. Zaimportuj domyślny eksport z ./mathUtils.js (funkcja pomnoz) pod nazwą razy.
//    Wywołaj razy(8, 9). Wypisz wynik.

// 7. Zaimportuj domyślny eksport z ./stringUtils.js (funkcja odwracająca string)
//    pod nazwą odwrocString. Wywołaj odwrocString("kurs"). Wypisz wynik.

// --- łączenie named + default w jednym imporcie ---

// 8. Zaimportuj JEDNĄ linią z ./stringUtils.js: default jako obroc,
//    oraz named capitalize i WERSJA. Wywołaj wszystkie trzy i wypisz wyniki.

// 9. Zaimportuj JEDNĄ linią z ./mathUtils.js: default jako pomnozAlias,
//    oraz named PI i dodaj. Wywołaj pomnozAlias(2, 2), dodaj(2, 2) i wypisz PI.

// --- namespace import ---

// 10. Zaimportuj wszystko z ./stringUtils.js jako obiekt StrUtils (import * as StrUtils).
//     Wypisz StrUtils.WERSJA, wywołaj StrUtils.capitalize("test")
//     oraz StrUtils.default("test") — sprawdź pod jakim kluczem trafia eksport domyślny.

// 11. Zaimportuj wszystko z ./mathUtils.js jako MathAll.
//     Wypisz MathAll.PI i wywołaj MathAll.default(5, 5).

// --- ćwiczenie z nowymi eksportami (już dodanymi do plików) ---

// 12. W mathUtils.js jest już gotowa funkcja procent(wartosc, proc).
//     Zaimportuj ją tutaj i oblicz procent(200, 15). Wypisz wynik.

// 13. W stringUtils.js jest już gotowa funkcja powtorz(str, n).
//     Zaimportuj ją tutaj i wywołaj powtorz("ab", 3). Wypisz wynik.

// --- rozbudowa własnego modułu ---

// 14. Otwórz mathUtils.js i dopisz nową nazwaną funkcję sredniaDwoch(a, b)
//     zwracającą (a + b) / 2. Zaimportuj ją tutaj i przetestuj sredniaDwoch(10, 20).

// --- import dynamiczny ---

// 15. Napisz funkcję async, która wewnątrz robi:
//     const modul = await import("./mathUtils.js");
//     i wywołuje modul.poleKola(3). Uruchom tę funkcję i wypisz wynik.

// 16. Napisz funkcję async, która dynamicznie ładuje ./stringUtils.js
//     i wywołuje modul.slugify("Dynamiczny Import Modulu"). Uruchom ją i wypisz wynik.

// --- podsumowanie / analogia do React ---

// 17. Zapisz w komentarzu, jak wyglądałby import komponentu Card.jsx (default export)
//     razem z nazwaną stałą CARD_VARIANTS — użyj dokładnie takiej samej składni,
//     jakiej użyłeś/aś w zadaniach 8-9 (default + named w jednej linii).

// 18. Zapisz w komentarzu różnicę między importem statycznym (na górze pliku)
//     a import() dynamicznym — kiedy używamy którego (na podstawie JS-089 z lekcji).
