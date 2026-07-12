// Ćwiczenia — typy danych
// Poziom: łatwy / językowy — proste wywołania metod, bez algorytmów.

// --- JS-007 — String: trzy sposoby definicji ---

// 1. Napisz trzy zmienne z tym samym słowem "kawa" — jedną w apostrofach,
//    jedną w cudzysłowie, jedną w backtickach. Wypisz wszystkie trzy.

// 2. Napisz zmienne produkt = "Rower" i cena = 1500. Za pomocą template
//    literal złóż zdanie "Produkt: Rower, cena: 1500 zł". Wypisz je.

// 3. Napisz template literal zawierający dwie linijki tekstu (użyj Enter
//    wewnątrz backticków, np. "Linia pierwsza" i "Linia druga"). Wypisz wynik.

// 4. Napisz template literal z wyrażeniem matematycznym w środku,
//    np. `Wynik: ${6 * 7}`. Wypisz go.

// 5. Napisz zmienną wiek = 15. Za pomocą template literal i operatora
//    trójargumentowego wypisz "pełnoletni" albo "niepełnoletni" w zależności
//    od wieku.

// --- JS-008 — Metody string ---

// 6. Napisz string "   Kraków   " i wypisz go po zastosowaniu .trim().

// 7. Napisz string "Warszawa" i wypisz go po .toLowerCase() oraz osobno
//    po .toUpperCase().

// 8. Napisz zdanie "Programowanie jest fajne". Sprawdź metodą .includes(),
//    czy zawiera słowo "fajne". Wypisz wynik.

// 9. Napisz nazwę pliku "raport-2024.pdf". Sprawdź .startsWith("raport")
//    i .endsWith(".pdf"). Wypisz oba wyniki.

// 10. Napisz string "banan,jabłko,gruszka,śliwka". Podziel go metodą
//     .split(",") i wypisz otrzymaną tablicę.

// 11. Napisz zdanie "Ala ma kota". Znajdź indeks słowa "kota" metodą
//     .indexOf(). Wypisz wynik.

// 12. Na tym samym zdaniu "Ala ma kota" zamień słowo "kota" na "psa"
//     metodą .replace(). Wypisz wynik.

// 13. Napisz string "JavaScript to super język". Wytnij fragment od znaku
//     0 do 10 metodą .slice(). Wypisz wynik.

// 14. Napisz string "77". Uzupełnij go zerami z lewej do długości 5
//     metodą .padStart(). Wypisz wynik.

// 15. Napisz string "77". Uzupełnij go gwiazdkami z prawej do długości 5
//     metodą .padEnd(). Wypisz wynik.

// 16. Napisz string "eee". Powtórz go 3 razy metodą .repeat(). Wypisz wynik.

// 17. Napisz email " KASIA@poczta.PL ". W jednej linii połącz .trim()
//     i .toLowerCase() łańcuchowo (jedna metoda po drugiej). Wypisz wynik.

// 18. Napisz nazwę pliku "zdjecie.PNG". Zamień rozszerzenie na ".jpg"
//     metodą .replace(). Wypisz wynik.

// 19. Napisz string "kod:1234". Znajdź indeks dwukropka metodą .indexOf(),
//     a następnie wytnij samą liczbę metodą .slice(). Wypisz wynik.

// 20. Napisz numer zamówienia "5". Uzupełnij go zerami z lewej do długości 4
//     metodą .padStart(). Wypisz wynik.

// 21. Napisz string "-". Powtórz go 20 razy metodą .repeat(), aby stworzyć
//     linię separatora. Wypisz wynik.

// 22. Napisz zdanie "Kot siedzi na macie". Sprawdź, czy zaczyna się od "Kot"
//     i czy kończy się na "macie" metodami .startsWith() / .endsWith().
//     Wypisz oba wyniki.

// --- JS-009 — Number i operatory arytmetyczne ---

// 23. Wypisz wynik dodawania 0.2 + 0.4. Zaokrąglij go do 1 miejsca po
//     przecinku metodą .toFixed(1). Wypisz oba wyniki i sprawdź ich typ
//     operatorem typeof.

// 24. Napisz zmienne a = 17 i b = 5. Wypisz wynik dzielenia (a / b),
//     dzielenia całkowitego (Math.floor(a / b)) i reszty z dzielenia (a % b).

// 25. Napisz zmienną liczba = 3. Podnieś ją do potęgi 4 operatorem **.
//     Wypisz wynik.

// 26. Napisz string "150". Skonwertuj go na liczbę funkcją Number().
//     Wypisz wynik i jego typ.

// 27. Napisz string "99zł". Wyciągnij z niego liczbę funkcją parseInt().
//     Wypisz wynik.

// 28. Napisz string "5.5kg". Wyciągnij z niego liczbę funkcją parseFloat().
//     Wypisz wynik.

// 29. Sprawdź funkcją Number.isNaN(), czy Number("abc") jest liczbą NaN.
//     Wypisz wynik.

// 30. Sprawdź Number.isFinite(1/0) oraz Number.isInteger(7.0).
//     Wypisz oba wyniki.

// 31. Napisz trzy liczby: 12, 45, 3. Znajdź największą metodą Math.max()
//     i najmniejszą metodą Math.min(). Wypisz obie.

// 32. Napisz liczbę -23. Wypisz jej wartość bezwzględną metodą Math.abs().

// 33. Napisz liczbę 6.5. Zaokrąglij ją metodą Math.round(). Wypisz wynik.

// 34. Napisz liczbę 6.1. Zaokrąglij ją w górę metodą Math.ceil() i w dół
//     metodą Math.floor(). Wypisz oba wyniki.

// 35. Wypisz wynik Math.random(). Pomnóż go przez 10 i zaokrąglij w dół
//     metodą Math.floor(), aby otrzymać losową liczbę całkowitą od 0 do 9.

// 36. Napisz funkcję losowaOcena(), zwracającą losową liczbę całkowitą
//     od 1 do 6 (Math.random() + Math.floor()). Wywołaj ją 3 razy
//     i wypisz wyniki.

// 37. Napisz dwie liczby: 8 i 2. Wypisz wynik potęgowania operatorem **
//     (8 ** 2) oraz wynik Math.pow(8, 2) — porównaj, czy dają ten sam wynik.

// 38. Wypisz Math.round(2.5), Math.round(2.4) i Math.round(-2.5).
//     Zanotuj w komentarzu, który wynik cię zaskoczył.

// --- JS-010 — BigInt ---

// 39. Napisz zmienną wielkaLiczba jako BigInt równą 20000000000000000n.
//     Wypisz ją.

// 40. Dodaj do wielkaLiczba wartość 1n. Wypisz wynik i sprawdź jego typ
//     operatorem typeof.

// 41. Napisz zwykłą liczbę zwykla = 42. Skonwertuj ją na BigInt funkcją
//     BigInt(). Wypisz wynik.

// 42. Skonwertuj BigInt 100n z powrotem na zwykłą liczbę funkcją Number().
//     Wypisz wynik i jego typ.

// --- JS-011 — Boolean, undefined, null ---

// 43. Sprawdź funkcją Boolean(), czy wartości 0, "", null, undefined, NaN
//     są truthy czy falsy. Wypisz każdy wynik osobno.

// 44. Sprawdź funkcją Boolean(), czy wartości [], {}, "0", " ", -1
//     są truthy czy falsy. Wypisz każdy wynik osobno — który cię zaskoczył?
//     Zapisz w komentarzu.

// 45. Napisz zmienną let x; (bez przypisania wartości). Wypisz jej wartość
//     i typ operatorem typeof.

// 46. Napisz zmienną let y = null. Wypisz jej wartość i typ operatorem
//     typeof — zanotuj w komentarzu ciekawostkę o typeof null.

// 47. Porównaj undefined i null operatorem == oraz operatorem ===.
//     Wypisz oba wyniki i zapisz różnicę w komentarzu.

// 48. Napisz funkcję sprawdzWartosc(x), która zwraca "pusta" jeśli x jest
//     null lub undefined, a w przeciwnym razie zwraca "ma wartość".
//     Przetestuj ją na null, undefined i 5.

// --- JS-012 — Symbol ---

// 49. Stwórz dwa symbole: Symbol("klucz") i Symbol("klucz"). Porównaj je
//     operatorem ===. Wypisz wynik.

// 50. Stwórz symbol tajnyKod = Symbol("kod"). Wypisz jego typ operatorem typeof.

// 51. Napisz obiekt produkt z właściwością name: "Rower" oraz z ukrytą
//     właściwością pod kluczem-symbolem (np. const wewnetrzneId = Symbol("id"))
//     o wartości 555. Wypisz wartość spod tego symbolu.

// 52. Na obiekcie z zadania 51 wywołaj Object.keys(). Wypisz wynik
//     i sprawdź w komentarzu, czy widać w nim klucz-symbol.

// --- JS-013 — Typy wartościowe vs referencyjne ---

// 53. Napisz zmienną punkty = 100 i skopiuj ją do zmiennej punktyKopia.
//     Zmień punktyKopia na 50. Wypisz obie zmienne.

// 54. Napisz tablicę owoce = ["jabłko", "banan"]. Przypisz ją do zmiennej
//     owoce2 (bez spreadu). Dodaj element do owoce2. Wypisz owoce —
//     co się stało? Zapisz wyjaśnienie w komentarzu.

// 55. Napisz tablicę liczby = [1, 2, 3]. Skopiuj ją poprawnie operatorem
//     spread do liczby2. Dodaj element do liczby2. Wypisz liczby —
//     czy się zmieniła?

// 56. Napisz obiekt auto = { marka: "Toyota", silnik: { moc: 120 } }.
//     Skopiuj go spreadem do auto2. Zmień auto2.marka. Wypisz auto.marka —
//     czy się zmieniło?

// 57. Na obiekcie auto2 z zadania 56 zmień auto2.silnik.moc. Wypisz
//     auto.silnik.moc — czy się zmieniło? Zapisz wyjaśnienie w komentarzu
//     (shallow copy).

// 58. Napisz funkcję zmienNazwe(obiekt), która ustawia obiekt.nazwa = "Zmieniono".
//     Wywołaj ją na obiekcie { nazwa: "Stare" } i wypisz obiekt po wywołaniu
//     — zauważ, że się zmienił mimo braku return.
