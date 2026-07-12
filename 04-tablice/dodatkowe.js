// Dodatkowe ćwiczenia — tablice
// Poziom: łatwy / językowy

const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const words = ["banan", "jabłko", "czereśnia", "daktyl", "awokado"];
const users = [
  { name: "Anna",  age: 25, active: true  },
  { name: "Jan",   age: 17, active: false },
  { name: "Kasia", age: 30, active: true  },
  { name: "Piotr", age: 22, active: true  },
  { name: "Ela",   age: 15, active: false },
];

// --- push / pop / shift / unshift / splice ---

// 1. Stwórz pustą tablicę. Dodaj 5 owoców przez push. Wypisz.

// 2. Weź tablicę [1, 2, 3, 4, 5]. Usuń ostatni element przez pop.
//    Usuń pierwszy przez shift. Wypisz tablicę i oba usunięte elementy.

// 3. Weź tablicę ["a", "b", "c"]. Dodaj "z" na początku przez unshift.
//    Dodaj "x" i "y" na koniec przez push. Wypisz.

// 4. Weź tablicę [10, 20, 30, 40, 50].
//    Usuń elementy na pozycji 1 i 2 (dwa elementy) przez splice.
//    Wypisz tablicę po operacji.

// 5. Weź tablicę ["a", "b", "d", "e"].
//    Wstaw "c" na pozycję 2 (bez usuwania) przez splice. Wypisz.

// --- filter ---

// 6. Z tablicy nums wyfiltruj liczby większe niż 4. Wypisz.

// 7. Z tablicy users wyfiltruj aktywnych użytkowników. Wypisz ich imiona.

// 8. Z tablicy users wyfiltruj pełnoletnich (>= 18). Wypisz ich imiona.

// 9. Z tablicy words wyfiltruj słowa dłuższe niż 6 znaków. Wypisz.

// 10. Z tablicy nums usuń duplikaty — wypisz unikalne wartości.
//     (Podpowiedź: filter + indexOf lub Set + spread.)

// --- map ---

// 11. Z tablicy nums utwórz nową tablicę z kwadratami każdej liczby. Wypisz.

// 12. Z tablicy users utwórz tablicę samych imion. Wypisz.

// 13. Z tablicy users utwórz tablicę stringów "Anna (25 lat)". Wypisz.

// 14. Z tablicy words utwórz tablicę ich długości. Wypisz.

// 15. Z tablicy nums utwórz tablicę { value, isEven } dla każdej liczby.

// --- forEach ---

// 16. Wypisz każdy element tablicy words razem z jego indeksem:
//     "0: banan", "1: jabłko", itd.

// 17. Wypisz każdego aktywnego użytkownika z users w formacie:
//     "✓ Anna, 25 lat" lub "✗ Jan, 17 lat".

// --- sort ---

// 18. Posortuj kopię tablicy nums rosnąco. Wypisz (nie mutuj oryginału!).

// 19. Posortuj kopię tablicy nums malejąco. Wypisz.

// 20. Posortuj tablicę words alfabetycznie. Wypisz.

// 21. Posortuj users po wieku rosnąco. Wypisz imiona i wieki.

// 22. Posortuj users po nazwie alfabetycznie (localeCompare). Wypisz imiona.

// --- find / findIndex / includes / indexOf ---

// 23. Znajdź pierwszy element tablicy nums większy niż 5.

// 24. Znajdź użytkownika o imieniu "Kasia" w tablicy users.

// 25. Sprawdź czy tablica nums zawiera liczbę 9.

// 26. Znajdź indeks słowa "daktyl" w tablicy words.

// --- reduce ---

// 27. Zsumuj wszystkie liczby z tablicy nums.

// 28. Znajdź największą liczbę w tablicy nums używając reduce.

// 29. Policz ile razy każda liczba pojawia się w tablicy nums.
//     Wynik: obiekt { 1: 2, 3: 2, 4: 1, 5: 2, ... }.

// --- spread i dekonstrukcja ---

// 30. Połącz tablice [1, 2, 3] i [4, 5, 6] przez spread. Wypisz.

// 31. Skopiuj tablicę nums do nowej tablicy przez spread.
//     Dodaj element do kopii. Sprawdź że oryginał się nie zmienił.

// 32. Destrukturyzuj tablicę [10, 20, 30, 40, 50]:
//     pobierz pierwszy, drugi, i resztę jako tablicę.

// 33. Napisz funkcję first(arr) i last(arr) używające dekonstrukcji.
//     first([1,2,3]) → 1, last([1,2,3]) → 3.

// --- flat / flatMap ---

// 34. Spłaszcz tablicę [[1,2],[3,4],[5,6]] o jeden poziom.

// 35. Spłaszcz tablicę [1,[2,[3,[4]]]] w całości.

// 36. Masz tablicę zdań ["Ala ma kota", "Kot je rybę"].
//     Użyj flatMap żeby dostać tablicę wszystkich słów.
