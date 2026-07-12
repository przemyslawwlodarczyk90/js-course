// Dodatkowe ćwiczenia — kontrola przepływu
// Poziom: łatwy / językowy

// --- if / else / ternary ---

// 1. Napisz funkcję classify(n) zwracającą:
//    "ujemna" gdy n < 0, "zero" gdy n === 0, "dodatnia" gdy n > 0.

// 2. Napisz funkcję bmi(weight, height) obliczającą BMI (weight / height²)
//    i zwracającą kategorię: "niedowaga" (<18.5), "norma" (<25),
//    "nadwaga" (<30), "otyłość" (>=30).

// 3. Napisz funkcję canVote(age, citizenship) zwracającą true
//    jeśli age >= 18 ORAZ citizenship === true.

// 4. Przepisz poniższy if/else na ternary operator:
//    function isWeekend(day) {
//      if (day === "sobota" || day === "niedziela") {
//        return true;
//      } else {
//        return false;
//      }
//    }

// 5. Napisz funkcję max3(a, b, c) zwracającą największą z trzech liczb
//    używając tylko if/else (bez Math.max).

// 6. Napisz funkcję clamp(val, min, max) ograniczającą val do przedziału [min, max].
//    clamp(15, 0, 10) → 10, clamp(-5, 0, 10) → 0, clamp(5, 0, 10) → 5.

// --- switch ---

// 7. Napisz funkcję dayName(n) zwracającą nazwę dnia tygodnia (1=Poniedziałek, ..., 7=Niedziela).
//    Użyj switch.

// 8. Napisz funkcję season(month) zwracającą porę roku (1-3: zima, 4-6: wiosna itd.).
//    Użyj switch z fallthrough (case 1: case 2: case 3: return "zima").

// 9. Napisz obiekt-mapę zamiast switch: httpStatus(code) → opis.
//    200: "OK", 201: "Created", 400: "Bad Request", 401: "Unauthorized",
//    404: "Not Found", 500: "Server Error".

// --- for / for...of / for...in ---

// 10. Napisz funkcję range(start, end) zwracającą tablicę liczb od start do end.
//     range(3, 7) → [3, 4, 5, 6, 7].

// 11. Napisz funkcję repeat(str, n) zwracającą str powtórzony n razy przez pętlę.
//     (Nie używaj String.repeat — zrób pętlą.)

// 12. Napisz funkcję sumDigits(n) sumującą cyfry liczby.
//     sumDigits(123) → 6, sumDigits(9999) → 36.
//     Wskazówka: String(n), for...of po znakach, Number(char).

// 13. Napisz funkcję countVowels(str) liczącą samogłoski (a, e, i, o, u) w stringu.

// 14. Napisz funkcję flatten(arr) spłaszczającą tablicę tablic o jeden poziom
//     za pomocą for...of (bez flat()).
//     flatten([[1,2],[3,4],[5]]) → [1,2,3,4,5].

// 15. Napisz funkcję objectMap(obj, fn) zwracającą nowy obiekt
//     z wartościami przekształconymi przez fn.
//     objectMap({ a: 1, b: 2, c: 3 }, n => n * 10) → { a: 10, b: 20, c: 30 }.
//     Użyj for...in lub Object.entries.

// 16. Napisz funkcję groupByFirstLetter(words) zwracającą obiekt
//     gdzie klucze to pierwsze litery, wartości to tablice słów.
//     ["apple","avocado","banana","blueberry","cherry"] →
//     { a: ["apple","avocado"], b: ["banana","blueberry"], c: ["cherry"] }.

// --- try / catch ---

// 17. Napisz funkcję safeParseJSON(str) która zwraca sparsowany obiekt
//     lub null jeśli str jest nieprawidłowym JSON.

// 18. Napisz funkcję safeDivide(a, b) która rzuca Error("Dzielenie przez zero")
//     gdy b === 0, a w pozostałych przypadkach zwraca a/b.
//     Wywołaj ją w try/catch i wypisz wynik lub błąd.

// 19. Napisz własną klasę błędu ValidationError(field, message).
//     Napisz funkcję validateAge(age) która rzuca ValidationError("age", "...")
//     gdy age < 0 lub age > 150.
//     Wywołaj w try/catch i sprawdź instanceof.

// 20. Napisz funkcję readConfig(obj) która:
//     - rzuca Error jeśli obj jest null/undefined
//     - rzuca Error jeśli brakuje pola "apiUrl"
//     - zwraca obj jeśli wszystko OK
//     Przetestuj w try/catch/finally (finally wypisz "gotowe").

// --- == vs === ---

// 21. Napisz funkcję strictEqual(a, b) używającą === i napisz 5 przypadków
//     gdzie == i === dałyby różne wyniki. Przetestuj każdy.

// 22. Napisz funkcję isNullOrUndefined(val) sprawdzającą val == null.
//     Przetestuj na: null, undefined, 0, "", false.
//     Wyjaśnij w komentarzu dlaczego == null działa dla obu.
