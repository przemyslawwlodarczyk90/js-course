// Ćwiczenia — kontrola przepływu
// Poziom: łatwy / językowy — proste wywołania metod i mechanik, bez algorytmów.

// --- JS-034: if / else ---

// 1. Napisz funkcję ocenPogode(temperatura) zwracającą "zimno" gdy < 10,
//    "przyjemnie" gdy < 25, "gorąco" w pozostałych przypadkach
//    — użyj if/else if/else. Przetestuj na kilku wartościach.

// 2. Napisz funkcję czyPelnoletni(wiek) zwracającą true gdy wiek >= 18,
//    w przeciwnym razie false — użyj if/else.

// 3. Napisz funkcję sprawdzHaslo(haslo) zwracającą "za krótkie" gdy
//    haslo.length < 8, w przeciwnym razie "OK".

// 4. Napisz funkcję znakLiczby(n) zwracającą "dodatnia", "ujemna" lub
//    "zero" — if/else if/else.

// 5. Napisz funkcję czyParzysta(n) zwracającą true/false używając
//    if/else (bez operatora trójargumentowego).

// --- JS-034: operator trójargumentowy (ternary) ---

// 6. Przepisz funkcję czyPelnoletni z zadania 2 używając operatora
//    trójargumentowego zamiast if/else.

// 7. Masz const godzina = 14. Jedną linijką ustaw const poraDnia
//    na "dzień" gdy godzina < 18, inaczej "wieczór" — użyj ternary.

// 8. Napisz zagnieżdżony ternary dla zmiennej ocena (liczba 0-100)
//    zwracający "A" (>=90), "B" (>=75), "C" (>=50), "D" (poniżej).
//    Przetestuj na kilku wartościach.

// --- JS-034: guard clause / early return ---

// 9. Napisz funkcję zarejestrujUzytkownika(dane), która przez early return
//    zwraca { blad: "..." } gdy: brak dane, brak dane.email, brak
//    dane.haslo — a na końcu zwraca { sukces: true }.

// 10. Napisz funkcję policzRabat(cena, kodRabatowy), która przez early
//     return zwraca cenę bez zmian gdy kodRabatowy nie jest podany,
//     inaczej zwraca cenę pomniejszoną o 10%.

// --- JS-035: switch ---

// 11. Napisz funkcję nazwaMiesiaca(numer) zwracającą nazwę miesiąca
//     (1-12) — użyj switch.

// 12. Napisz funkcję typDnia(dzien) zwracającą "weekend" dla "sobota"
//     i "niedziela", a "dzień roboczy" dla pozostałych — użyj switch
//     z fallthrough (kilka case-ów pod rząd dla dni roboczych).

// 13. Napisz funkcję ocenaSlownie(ocena) zwracającą słowny opis oceny
//     1-6 (niedostateczny...celujący) przez switch.

// 14. Dodaj do funkcji nazwaMiesiaca z zadania 11 przypadek default
//     zwracający "nieznany miesiąc" dla numerów spoza 1-12.

// --- JS-035: obiekt jako mapa zamiast switch ---

// 15. Zamień funkcję nazwaMiesiaca z zadania 11 na wersję z obiektem-mapą
//     zamiast switch.

// 16. Stwórz obiekt-mapę KOLORY_STATUSU: "aktywny" → "zielony",
//     "wstrzymany" → "żółty", "zakonczony" → "czerwony". Napisz funkcję
//     kolorStatusu(status) odczytującą z mapy z fallbackiem "szary" przez ??.

// 17. Stwórz mapę funkcji OPERACJE: "dodaj" → (a, b) => a + b,
//     "odejmij" → (a, b) => a - b, "mnoz" → (a, b) => a * b. Napisz funkcję
//     wykonajOperacje(nazwa, a, b) korzystającą z tej mapy.

// --- JS-036: pętla for (klasyczna) ---

// 18. Napisz pętlę for wypisującą liczby od 1 do 10.

// 19. Napisz pętlę for wypisującą liczby od 10 do 1 (malejąco).

// 20. Napisz pętlę for po tablicy ["a", "b", "c", "d", "e"] pomijającą
//     indeks 2 przez continue.

// 21. Napisz pętlę for po tablicy [1, 2, 3, 4, 5, 6, 7, 8] przerywającą
//     się (break) gdy element jest większy niż 5.

// 22. Napisz pętlę for wypisującą tylko liczby parzyste od 0 do 20.

// 23. Napisz pętlę for wypisującą tabliczkę mnożenia liczby 5
//     (5x1 do 5x10).

// 24. Napisz pętlę for iterującą WSTECZ po tablicy ["x", "y", "z"]
//     (od ostatniego indeksu do 0) i wypisującą elementy.

// --- JS-036: for...of ---

// 25. Napisz pętlę for...of po tablicy ["poniedziałek", "wtorek", "środa"]
//     wypisującą każdy element.

// 26. Napisz pętlę for...of po tablicy [5, 10, 15] z użyciem entries(),
//     żeby wypisać indeks i wartość każdego elementu.

// 27. Napisz pętlę for...of po stringu "Kraków" wypisującą każdy znak
//     osobno.

// 28. Napisz pętlę for...of sumującą wartości tablicy [4, 8, 15, 16, 23]
//     w zmiennej suma. Wypisz sumę.

// 29. Napisz pętlę for...of po tablicy par [[1, "jeden"], [2, "dwa"],
//     [3, "trzy"]], destrukturyzując każdą parę na [numer, slowo]
//     bezpośrednio w nagłówku pętli.

// --- JS-036: for...in ---

// 30. Napisz obiekt osoba = { imie: "Ala", wiek: 30, miasto: "Gdańsk" }.
//     Iteruj po nim pętlą for...in i wypisz każdą parę "klucz: wartość".

// 31. Do pętli z zadania 30 dodaj sprawdzenie Object.hasOwn(osoba, klucz)
//     przed wypisaniem (tylko własne właściwości).

// 32. Napisz obiekt cennik = { bilet: 20, napoj: 8, popcorn: 15 }.
//     Zsumuj wszystkie jego wartości pętlą for...in (bez Object.values).
//     Wypisz sumę.

// 33. Wyjaśnij w komentarzu, dlaczego for...in NIE powinno być używane
//     do iteracji po tablicach. Zilustruj to przykładem z tablicą
//     [10, 20, 30] pokazującym, że klucze zwracane przez for...in
//     to stringi indeksów, nie liczby.

// --- JS-037: try / catch / finally ---

// 34. Napisz funkcję bezpieczneParsowanie(str) zwracającą sparsowany JSON
//     lub null w przypadku błędu — użyj try/catch.

// 35. Napisz funkcję podziel(a, b) rzucającą
//     new Error("Nie można dzielić przez zero") gdy b === 0, w innym
//     przypadku zwracającą a / b. Wywołaj ją w try/catch i wypisz wynik
//     lub komunikat błędu.

// 36. Napisz funkcję otworzPlik(nazwa), która wypisuje "Otwieranie..."
//     przed try, rzuca błąd gdy nazwa jest pustym stringiem, a w finally
//     zawsze wypisuje "Zamykanie pliku".

// 37. Wywołaj funkcję z zadania 36 raz z poprawną nazwą i raz z pustym
//     stringiem — sprawdź, że finally wykonuje się w obu przypadkach.

// --- JS-037: własne klasy błędów ---

// 38. Napisz klasę BladWalidacji rozszerzającą Error, przyjmującą
//     w konstruktorze pole i wiadomość, ustawiającą this.name =
//     "BladWalidacji" oraz this.pole.

// 39. Napisz funkcję sprawdzWiek(wiek) rzucającą
//     new BladWalidacji("wiek", "Wiek musi być od 0 do 120")
//     gdy wiek < 0 lub wiek > 120.

// 40. Wywołaj sprawdzWiek w try/catch dla nieprawidłowej wartości.
//     Sprawdź e instanceof BladWalidacji i wypisz e.pole oraz e.message.

// 41. Napisz drugą klasę błędu BladNieZnaleziono rozszerzającą Error,
//     z polem statusKod = 404. Rzuć ją w przykładowej funkcji i złap
//     w catch, rozróżniając typ błędu przez instanceof (if/else if
//     dla dwóch typów błędów + else, które rzuca błąd dalej).

// --- JS-038: == vs === ---

// 42. Wypisz wynik porównania 5 === "5" i skomentuj dlaczego jest taki.

// 43. Wypisz wynik porównania 5 == "5" i skomentuj, dlaczego różni się
//     od poprzedniego.

// 44. Wypisz wynik porównania null === undefined oraz
//     null == undefined — skomentuj różnicę.

// 45. Wypisz wynik porównania 0 == false oraz 0 === false.

// 46. Wypisz wynik porównania "" == false oraz "" === false — skomentuj.

// 47. Wypisz wynik porównania [] == false — skomentuj, że tablica jest
//     najpierw konwertowana do stringa, a potem do liczby.

// 48. Sprawdź NaN === NaN (wypisz wynik), a następnie sprawdź tę samą
//     wartość poprawnym sposobem: Number.isNaN(NaN).

// 49. Napisz funkcję jestPusteLubBrak(wartosc) sprawdzającą
//     wartosc == null (łapie zarówno null, jak i undefined jednym
//     porównaniem). Przetestuj na: null, undefined, 0, "", "tekst".

// 50. Napisz funkcję porownajScisle(a, b) zwracającą wynik porównania
//     === i wywołaj ją dla pięciu różnych par wartości, w tym przynajmniej
//     jednej pary, gdzie == i === dają różne wyniki.

// --- Dodatkowe powtórzenia — if/else i switch na nowych przykładach ---

// 51. Napisz funkcję czyRokPrzestepny(rok) zwracającą true, gdy rok jest
//     podzielny przez 4, ale nie przez 100, chyba że jest podzielny
//     przez 400 — użyj zagnieżdżonych if/else.

// 52. Napisz funkcję statusZamowienia(kwota) zwracającą "odrzucone" gdy
//     kwota <= 0, "male" gdy kwota < 100, "duze" w pozostałych
//     przypadkach.

// 53. Napisz funkcję liczbaDniWMiesiacu(miesiac) zwracającą liczbę dni
//     w danym miesiącu (bez uwzględniania lat przestępnych) przez switch
//     z fallthrough dla miesięcy mających 31 dni.

// 54. Napisz funkcję ocenaSlowem(litera) przyjmującą "A"/"B"/"C"/"D"
//     i zwracającą opis słowny przez switch, z przypadkiem default
//     zwracającym "nieznana ocena".

// --- Dodatkowe powtórzenie — try/catch ---

// 55. Napisz funkcję pobierzElement(tablica, indeks) rzucającą
//     new Error("Indeks poza zakresem") gdy indeks < 0 lub
//     indeks >= tablica.length. Wywołaj ją w try/catch dla poprawnego
//     i niepoprawnego indeksu.
