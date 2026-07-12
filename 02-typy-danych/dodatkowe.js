// Dodatkowe ćwiczenia — typy danych
// Poziom: łatwy / językowy

// --- String ---

// 1. Napisz zmienną z pełnym imieniem i nazwiskiem ze spacją pośrodku.
//    Wypisz samo imię (slice lub split).

// 2. Napisz string "  witaj świecie  " i wypisz go po trim().

// 3. Napisz email "jan@EXAMPLE.com" i zamień go na lowercase. Wypisz.

// 4. Napisz zdanie "Uczę się JavaScript".
//    Sprawdź czy zawiera słowo "JavaScript" (includes). Wypisz true/false.

// 5. Napisz URL "/api/users/42".
//    Sprawdź czy zaczyna się od "/api" i kończy na "/42". Wypisz oba wyniki.

// 6. Napisz string "Jan,Anna,Kasia,Piotr".
//    Podziel go po przecinku (split). Wypisz tablicę i jej długość.

// 7. Napisz numer telefonu "123-456-789".
//    Usuń myślniki (replace lub replaceAll). Wypisz sam ciąg cyfr.

// 8. Napisz funkcję initials(fullName) która zwraca inicjały.
//    "Jan Kowalski" → "J.K."
//    Użyj split i map.

// 9. Napisz template literal który wypisuje tabliczkę mnożenia dla 7:
//    7 × 1 = 7
//    7 × 2 = 14
//    ...
//    7 × 10 = 70
//    Użyj pętli for w środku backtick (lub osobnych console.log).

// 10. Napisz funkcję repeat(str, n) która zwraca str powtórzony n razy.
//     "ha" + 3 → "hahaha". Użyj metody repeat().

// --- Number ---

// 11. Napisz funkcję celsiusToFahrenheit(c) zwracającą wynik (c × 9/5) + 32.
//     Przetestuj na 0, 100, 37.

// 12. Napisz funkcję roundTo(num, decimals) zwracającą liczbę zaokrągloną
//     do podanej liczby miejsc po przecinku. Wypisz roundTo(3.14159, 2).

// 13. Napisz funkcję isInteger(n) zwracającą true jeśli n jest liczbą całkowitą.
//     Użyj Number.isInteger(). Przetestuj na 4, 4.5, 4.0.

// 14. Napisz funkcję randomBetween(min, max) zwracającą losową liczbę całkowitą
//     z zakresu [min, max] włącznie. Wypisz 5 losowych z zakresu [1, 10].

// 15. Napisz kod który próbuje skonwertować "abc" na Number.
//     Sprawdź czy wynik jest NaN używając Number.isNaN().
//     Wypisz komunikat "Nieprawidłowa liczba" jeśli tak.

// --- Typy i konwersje ---

// 16. Napisz funkcję getType(val) która zwraca typ wartości jako string.
//     Przetestuj na: 42, "hello", true, null, undefined, [], {}, () => {}.
//     (Uwaga: typeof null zwraca "object" — odnotuj to.)

// 17. Napisz funkcję toBool(val) która konwertuje wartość na boolean
//     i wypisuje czy jest truthy czy falsy. Przetestuj na:
//     0, 1, "", "0", null, undefined, [], {}, NaN.

// --- Referencje vs wartości ---

// 18. Napisz dwie zmienne: a = 10, b = a.
//     Zmień b na 20. Wypisz a. Wyjaśnij w komentarzu dlaczego a się nie zmieniło.

// 19. Napisz tablicę arr1 = [1, 2, 3].
//     Przypisz arr2 = arr1.
//     Dodaj element do arr2. Wypisz arr1. Co widzisz i dlaczego?

// 20. Napisz tablicę arr1 = [1, 2, 3].
//     Stwórz kopię arr2 = [...arr1].
//     Dodaj element do arr2. Wypisz arr1. Czym różni się od zadania 19?
