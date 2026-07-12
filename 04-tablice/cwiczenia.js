// Ćwiczenia — tablice
// Poziom: łatwy / językowy — proste wywołania metod i mechanik, bez algorytmów.

const temperatury = [15, 22, 8, 30, 19, 3, 25];
const zwierzeta = ["kot", "pies", "papuga", "chomik", "żółw", "kot"];
const pracownicy = [
  { imie: "Marta", wiek: 34, dzial: "IT", zatrudniona: true },
  { imie: "Tomek", wiek: 19, dzial: "Sprzedaż", zatrudniona: false },
  { imie: "Ola", wiek: 41, dzial: "IT", zatrudniona: true },
  { imie: "Kuba", wiek: 27, dzial: "Marketing", zatrudniona: true },
  { imie: "Zosia", wiek: 16, dzial: "Sprzedaż", zatrudniona: false },
];

// --- JS-019: dostęp do elementów tablicy ---

// 1. Wypisz pierwszy element tablicy temperatury (notacja z indeksem [0]).

// 2. Wypisz ostatni element tablicy temperatury za pomocą .at(-1).

// 3. Wypisz przedostatni element tablicy zwierzeta za pomocą .at(-2).

// 4. Wypisz długość tablicy pracownicy (.length).

// 5. Wypisz trzeci element tablicy zwierzeta (indeks 2).

// --- JS-019: push / pop / shift / unshift ---

// 6. Stwórz pustą tablicę koszyk. Dodaj do niej 4 nazwy zakupów przez push
//    (osobne wywołania). Wypisz tablicę.

// 7. Do tablicy ["mleko", "chleb"] dodaj jednym wywołaniem push dwa produkty
//    naraz: "masło" i "jajka". Wypisz.

// 8. Weź tablicę [1, 2, 3, 4, 5]. Usuń ostatni element przez pop i zapisz go
//    do osobnej zmiennej. Wypisz zmienną i tablicę po usunięciu.

// 9. Weź tablicę ["a", "b", "c"]. Usuń pierwszy element przez shift i zapisz
//    do osobnej zmiennej. Wypisz zmienną i tablicę.

// 10. Weź tablicę [10, 20, 30]. Dodaj 0 na początku przez unshift. Wypisz.

// 11. Weź pustą tablicę. Wykonaj po kolei: push("start"), push("środek"),
//     unshift("początek"), pop(). Po każdym kroku wypisz aktualny stan tablicy.

// --- JS-019: splice ---

// 12. Weź tablicę [1, 2, 3, 4, 5, 6]. Usuń dwa elementy zaczynając od indeksu 2
//     przez splice. Wypisz tablicę po operacji.

// 13. Weź tablicę ["a", "b", "d", "e"]. Wstaw "c" na indeks 2 bez usuwania
//     (splice z drugim argumentem 0). Wypisz.

// 14. Weź tablicę ["pon", "wt", "czw"]. Wstaw "śr" na właściwe miejsce
//     (indeks 2) przez splice. Wypisz.

// 15. Weź tablicę [100, 200, 300, 400]. Zamień element na indeksie 1
//     na wartość 999 przez splice (usuń 1 element, wstaw 1 element). Wypisz.

// --- JS-019: reverse / sort (podstawowe) ---

// 16. Weź tablicę zwierzeta. Odwróć jej kolejność przez reverse
//     (uwaga: mutuje oryginał!). Wypisz.

// 17. Weź tablicę ["c", "a", "b"]. Posortuj domyślnym sort() (alfabetycznie).
//     Wypisz.

// 18. Skopiuj tablicę temperatury przez spread, odwróć KOPIĘ przez reverse.
//     Sprawdź że oryginał się nie zmienił — wypisz oba.

// --- JS-019: slice / join (niemutujące) ---

// 19. Z tablicy [1, 2, 3, 4, 5, 6, 7] wytnij fragment od indeksu 1 do 4
//     (bez mutacji) przez slice. Wypisz wynik i oryginał.

// 20. Z tablicy zwierzeta wytnij ostatnie dwa elementy przez slice
//     z ujemnym indeksem (slice(-2)). Wypisz.

// 21. Połącz tablicę ["Ala", "ma", "kota"] w jeden string przez join(" ").
//     Wypisz.

// 22. Połącz tablicę [2024, 6, 15] w string w formacie "2024-6-15"
//     przez join("-"). Wypisz.

// --- JS-019: indexOf / lastIndexOf / includes / find / findIndex ---

// 23. Znajdź indeks wartości "chomik" w tablicy zwierzeta przez indexOf.
//     Wypisz.

// 24. Tablica zwierzeta ma dwa razy "kot" — znajdź indeks OSTATNIEGO
//     wystąpienia przez lastIndexOf. Wypisz.

// 25. Sprawdź czy tablica temperatury zawiera wartość 25 przez includes.
//     Wypisz true/false.

// 26. Znajdź pierwszą temperaturę większą niż 20 w tablicy temperatury
//     przez find. Wypisz.

// 27. Znajdź indeks pierwszej temperatury mniejszej lub równej 5
//     w tablicy temperatury przez findIndex. Wypisz.

// 28. Spróbuj znaleźć w tablicy zwierzeta zwierzę zaczynające się na "z"
//     przez find. Wypisz wynik (powinien być undefined).

// --- JS-020: filter() ---

// 29. Z tablicy temperatury wyfiltruj wartości powyżej 18 stopni. Wypisz.

// 30. Z tablicy pracownicy wyfiltruj osoby zatrudnione
//     (zatrudniona === true). Wypisz same imiona.

// 31. Z tablicy pracownicy wyfiltruj osoby pełnoletnie (wiek >= 18).
//     Wypisz imiona.

// 32. Z tablicy pracownicy wyfiltruj osoby z działu "IT". Wypisz.

// 33. Z tablicy zwierzeta wyfiltruj nazwy dłuższe niż 4 znaki. Wypisz.

// --- JS-021: map() ---

// 34. Z tablicy temperatury utwórz nową tablicę z wartościami przeliczonymi
//     na Fahrenheit (°F = °C * 9/5 + 32). Wypisz.

// 35. Z tablicy pracownicy utwórz tablicę samych imion przez map. Wypisz.

// 36. Z tablicy pracownicy utwórz tablicę stringów w formacie "Marta - IT".
//     Wypisz.

// 37. Z tablicy zwierzeta utwórz tablicę z długościami nazw (length każdego
//     stringa). Wypisz.

// 38. Z tablicy temperatury utwórz tablicę obiektów { stopnie, czyCieplo },
//     gdzie czyCieplo to true dla temperatury >= 20. Wypisz.

// --- JS-022: forEach() ---

// 39. Wypisz każdy element tablicy zwierzeta razem z jego indeksem,
//     w formacie "0: kot" (użyj forEach).

// 40. Wypisz każdego pracownika z tablicy pracownicy w formacie
//     "Marta (34 lata)" używając forEach.

// 41. Użyj forEach żeby zsumować wszystkie wartości tablicy temperatury
//     w osobnej zmiennej (bez reduce) i wypisać wynik.

// --- JS-023: sort() — szczegółowo ---

// 42. Weź tablicę [40, 5, 100, 25, 1]. Wywołaj domyślny sort() bez
//     comparatora i wypisz wynik — zauważ że jest błędny dla liczb.

// 43. Posortuj KOPIĘ tablicy [40, 5, 100, 25, 1] rosnąco przez comparator
//     (a, b) => a - b. Wypisz.

// 44. Posortuj KOPIĘ tej samej tablicy malejąco przez comparator
//     (a, b) => b - a. Wypisz.

// 45. Posortuj KOPIĘ tablicy pracownicy po wieku rosnąco (comparator
//     na polu wiek). Wypisz imiona i wieki.

// 46. Posortuj KOPIĘ tablicy pracownicy po imieniu alfabetycznie przez
//     localeCompare. Wypisz same imiona.

// --- JS-024: flat() i flatMap() ---

// 47. Spłaszcz tablicę [[1, 2], [3, 4], [5]] o jeden poziom przez flat().
//     Wypisz.

// 48. Spłaszcz głęboko zagnieżdżoną tablicę [1, [2, [3, [4, [5]]]]] w całości
//     przez flat(Infinity). Wypisz.

// 49. Masz tablicę zdań ["Kot śpi", "Pies biega po parku"]. Użyj flatMap
//     żeby dostać jedną płaską tablicę wszystkich słów.

// 50. Masz tablicę zamówień:
//     [{ id: 1, produkty: ["chleb", "mleko"] }, { id: 2, produkty: ["masło"] }]
//     Użyj flatMap żeby dostać płaską tablicę wszystkich produktów.

// --- JS-025: dekonstrukcja tablicy ---

// 51. Zdestrukturyzuj tablicę [5, 10, 15, 20, 25]: pobierz pierwszy element,
//     drugi element, i resztę jako tablicę rest.

// 52. Zdestrukturyzuj tablicę ["a", "b", "c", "d"] pomijając pierwsze dwa
//     elementy — pobierz od razu trzeci element.

// 53. Zdestrukturyzuj tablicę [1, 2] do trzech zmiennych z wartościami
//     domyślnymi: trzecia powinna dostać wartość domyślną 0.

// 54. Zamień wartości dwóch zmiennych let p = "lewo" i q = "prawo" miejscami
//     przez destrukturyzację tablicową: [p, q] = [q, p].

// 55. Napisz funkcję minMax(arr) zwracającą tablicę dwuelementową
//     [min, max] dla podanej tablicy liczb. Zdestrukturyzuj wynik wywołania
//     minMax([4, 1, 9, 2, 7]) na dwie zmienne min i max.

// 56. Zdestrukturyzuj tablicę zwróconą przez "abc".split("") na trzy osobne
//     zmienne (litery).

// --- JS-026: spread operator na tablicach ---

// 57. Połącz tablice ["pon", "wt", "śr"] i ["czw", "pt"] przez spread
//     w jedną tablicę. Wypisz.

// 58. Wstaw dodatkowy element pomiędzy dwiema połączonymi przez spread
//     tablicami: [0, ...tab1, 99, ...tab2, 100]. Wypisz.

// 59. Skopiuj tablicę temperatury przez spread do nowej zmiennej. Dodaj
//     element do kopii przez push. Sprawdź że oryginał się nie zmienił.

// 60. Użyj spread żeby przekazać elementy tablicy [3, 7, 2, 9] jako osobne
//     argumenty do Math.max(). Wypisz wynik.

// 61. Zamień string "kurs" na tablicę pojedynczych znaków przez spread
//     ([..."kurs"]). Wypisz.

// 62. Masz Set z duplikatami: new Set([1, 1, 2, 3, 3, 3, 4]). Zamień go
//     na tablicę unikalnych wartości przez spread. Wypisz.
