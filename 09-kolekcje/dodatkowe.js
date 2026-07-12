// Dodatkowe ćwiczenia — Map i Set
// Poziom: łatwy / językowy

// --- Set ---

// 1. Napisz Set z tablicy [1, 1, 2, 3, 3, 3, 4]. Wypisz jego .size.

// 2. Dodaj do pustego Set trzy wartości: "a", "b", "c" (metoda add, po kolei).
//    Sprawdź has("b") i has("z"). Wypisz oba wyniki.

// 3. Napisz Set z owocami ["jabłko", "banan", "jabłko"].
//    Usuń "banan" przez delete(). Wypisz Set po usunięciu.

// 4. Zamień Set z zadania 1 z powrotem na tablicę (spread lub Array.from).
//    Wypisz wynikową tablicę.

// 5. Napisz tablicę kolorów z duplikatami ["red","blue","red","green","blue"].
//    Usuń duplikaty jedną linijką przez Set. Wypisz wynik.

// 6. Napisz pętlę for...of która wypisuje każdy element Setu
//    zbudowanego z [10, 20, 30].

// --- Map: podstawy ---

// 7. Stwórz pustą Map. Dodaj trzy pary przez .set(): "a"->1, "b"->2, "c"->3.
//    Wypisz .size oraz wynik .get("b").

// 8. Napisz Map z tablicy par [["pl","Polska"],["de","Niemcy"],["fr","Francja"]].
//    Wypisz get("de"). Sprawdź has("es").

// 9. Napisz Map z kluczem-obiektem: stwórz obiekt {id: 1} i użyj go jako klucza
//    w Map z wartością "dane obiektu". Odczytaj wartość przez ten sam obiekt.

// 10. Usuń jeden klucz z Map z zadania 7 przez delete(). Wypisz .size po usunięciu.

// --- Map: iteracja ---

// 11. Napisz Map ocen: "Jan"->5, "Ewa"->4, "Piotr"->3.
//     Wypisz wszystkie pary przez for...of ([klucz, wartosc] of mapa).

// 12. Zrób to samo co w zadaniu 11, ale użyj metody forEach
//     (pamiętaj: forEach(wartosc, klucz) — kolejność!).

// 13. Wypisz same klucze przez .keys() (rozwinięte w tablicę przez spread).

// 14. Wypisz same wartości przez .values() (rozwinięte w tablicę przez spread).

// --- konwersje ---

// 15. Napisz zwykły obiekt { a: 1, b: 2, c: 3 }.
//     Zamień go na Map przez new Map(Object.entries(obj)).
//     Wypisz wynikową Map.

// 16. Zamień Map z zadania 15 z powrotem na obiekt przez Object.fromEntries().
//     Wypisz wynikowy obiekt.

// --- zastosowanie: liczenie wystąpień ---

// 17. Napisz tablicę słów ["kot","pies","kot","ryba","pies","kot"].
//     Policz wystąpienia każdego słowa używając Map (wzorzec z lekcji:
//     mapa.set(slowo, (mapa.get(slowo) ?? 0) + 1)).
//     Wypisz wynikową Map.

// --- WeakMap (krótko) ---

// 18. Stwórz WeakMap. Stwórz obiekt const klucz = {}.
//     Zapisz w WeakMap wartość "sekret" pod tym kluczem.
//     Odczytaj ją przez .get(klucz). Wypisz wynik.
