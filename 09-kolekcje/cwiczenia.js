// Ćwiczenia — Map, Set, WeakMap
// Poziom: łatwy / językowy

// --- Set: tworzenie i podstawowe metody ---

// 1. Stwórz Set z tablicy [5, 5, 7, 7, 7, 9]. Wypisz jego .size.

// 2. Stwórz pusty Set. Dodaj trzy wartości "pl", "de", "fr" przez add() (po kolei).
//    Sprawdź has("pl") i has("es"). Wypisz oba wyniki.

// 3. Stwórz Set z imion ["Ala", "Bea", "Ala", "Cela"].
//    Usuń "Bea" przez delete(). Wypisz Set po usunięciu.

// 4. Stwórz Set liczb [2, 4, 6]. Sprawdź has(4) PRZED usunięciem i PO delete(4).

// 5. Stwórz Set z tablicy [1, "1", true, 1]. Wypisz .size.
//    Zapisz w komentarzu, dlaczego wynik jest taki, a nie inny (typy się liczą).

// --- Set: iteracja i konwersje ---

// 6. Zamień Set z zadania 1 na tablicę przez spread [...zbior]. Wypisz wynik.

// 7. Zamień ten sam Set na tablicę przez Array.from(). Zapisz w komentarzu,
//    czym różni się to podejście od spreadu (spoiler: niczym istotnym w praktyce).

// 8. Napisz pętlę for...of wypisującą każdy element Setu zbudowanego z ["a", "b", "c"].

// 9. Napisz tablicę ocen z duplikatami [3, 4, 4, 5, 5, 5, 2].
//    Usuń duplikaty jedną linijką przez Set + spread. Wypisz wynik.

// --- Map: podstawy ---

// 10. Stwórz pustą Map. Dodaj trzy pary przez .set(): "x"->10, "y"->20, "z"->30.
//     Wypisz .size oraz wynik .get("y").

// 11. Stwórz Map z tablicy par [["red","#f00"],["green","#0f0"],["blue","#00f"]].
//     Wypisz get("green"). Sprawdź has("yellow").

// 12. Stwórz obiekt {id: 99} i użyj go jako klucza w nowej Map z wartością "metadane".
//     Odczytaj tę wartość przez ten sam obiekt (get(obiekt)).

// 13. Usuń jeden klucz z Map z zadania 10 przez delete(). Wypisz .size po usunięciu.

// 14. Stwórz dowolną Map i sprawdź has() dla klucza, który istnieje,
//     oraz dla klucza, którego nie ma. Wypisz oba wyniki.

// --- Map: iteracja ---

// 15. Stwórz Map cen produktów: "chleb"->5, "mleko"->4, "maslo"->9.
//     Wypisz wszystkie pary przez for...of ([klucz, wartosc] of mapa).

// 16. Zrób to samo co w zadaniu 15, ale metodą forEach
//     (pamiętaj: forEach((wartosc, klucz) => ...) — taka kolejność argumentów!).

// 17. Wypisz same klucze z Map z zadania 15 przez .keys() rozwinięte w tablicę spreadem.

// 18. Wypisz same wartości z Map z zadania 15 przez .values() rozwinięte w tablicę spreadem.

// 19. Wypisz wszystkie pary z Map z zadania 15 przez .entries() rozwinięte w tablicę spreadem.

// --- konwersje: Map <-> Object, Set <-> Array ---

// 20. Napisz obiekt { imie: "Ola", wiek: 22, miasto: "Poznań" }.
//     Zamień go na Map przez new Map(Object.entries(obj)). Wypisz wynikową Map.

// 21. Zamień Map z zadania 20 z powrotem na obiekt przez Object.fromEntries().
//     Wypisz wynikowy obiekt.

// 22. Stwórz Set ["kot", "pies", "chomik"]. Zamień go na tablicę przez Array.from(). Wypisz wynik.

// 23. Stwórz tablicę [1, 2, 3, 2, 1]. Zamień ją na Set, a potem z powrotem na tablicę.
//     Zapisz w komentarzu, po co robi się taki "roundtrip" (podpowiedź: deduplikacja).

// --- Map/Set: kiedy używać, zliczanie wystąpień ---

// 24. Napisz tablicę zakupów ["chleb","mleko","chleb","jajka","mleko","chleb"].
//     Policz wystąpienia każdego produktu przez Map, korzystając ze wzorca z lekcji:
//     mapa.set(x, (mapa.get(x) ?? 0) + 1). Wypisz wynikową Map.

// 25. Zapisz w komentarzu jedno zdanie: kiedy wybrać Set zamiast Array,
//     a kiedy Map zamiast zwykłego obiektu (na podstawie lekcji JS-082).

// --- WeakMap i WeakSet ---

// 26. Stwórz WeakMap. Stwórz obiekt const sesja = {}.
//     Zapisz w WeakMap wartość "token-abc" pod kluczem sesja. Odczytaj ją przez .get(sesja).

// 27. Napisz funkcje ustawMetadane(obiekt, dane) i odczytajMetadane(obiekt),
//     które korzystają ze wspólnej WeakMap (jak w lekcji JS-083).
//     Przetestuj je na obiekcie { id: 5 }.

// 28. Zapisz w komentarzu dwie różnice między WeakMap a zwykłą Map
//     (na podstawie lekcji: iterowalność i dopuszczalne typy kluczy).
