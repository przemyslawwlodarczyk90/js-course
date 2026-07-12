// Dodatkowe ćwiczenia — funkcje
// Poziom: łatwy / językowy

// --- Deklaracja vs wyrażenie ---

// 1. Napisz function declaration o nazwie square(n) zwracającą n do kwadratu.
//    Wywołaj ją przed i po deklaracji. Sprawdź co się dzieje.

// 2. Napisz function expression: const cube = function(n) { ... }.
//    Wywołaj ją po deklaracji. Wypisz cube(3).

// 3. Napisz funkcję add(a, b) z domyślnymi wartościami parametrów (a = 0, b = 0).
//    Wywołaj bez argumentów, z jednym, z dwoma.

// 4. Napisz funkcję sum(...nums) przyjmującą dowolną liczbę argumentów (rest params).
//    Zwróć sumę wszystkich. Przetestuj: sum(1, 2, 3), sum(10, 20), sum().

// --- Arrow functions ---

// 5. Przepisz poniższe na arrow functions (skrócona forma gdzie można):
//    function double(n) { return n * 2; }
//    function isEven(n) { return n % 2 === 0; }
//    function greet(name) { return "Hej, " + name + "!"; }
//    function noop() { return undefined; }

// 6. Napisz arrow function getUser(id) zwracającą obiekt { id, name: "User " + id }.
//    Pamiętaj o nawiasach przy zwracaniu obiektu.

// 7. Napisz tablicę liczb [5, 2, 8, 1, 9, 3].
//    Użyj arrow functions we wszystkich poniższych:
//    a) posortuj rosnąco
//    b) odfiltruj liczby > 4
//    c) pomnóż każdą przez 3

// --- Callback ---

// 8. Napisz funkcję applyTwice(fn, value) która wywołuje fn(value) dwa razy
//    i zwraca tablicę obu wyników.
//    Przetestuj z: n => n * 2, n => n + 10.

// 9. Napisz funkcję runAfterDelay(fn, ms) która wywołuje fn() po ms milisekund.
//    Sprawdź w konsoli że działa (użyj setTimeout).

// 10. Napisz funkcję filter(arr, predicate) (własna, bez Array.filter).
//     Iteruj po arr, zbieraj elementy dla których predicate(element) === true.
//     Przetestuj na [1, 2, 3, 4, 5] z predykatem n => n % 2 === 0.

// 11. Napisz funkcję map(arr, transform) (własna, bez Array.map).
//     Zwróć nową tablicę z wynikami transform(element).
//     Przetestuj na ["a", "b", "c"] z n => n.toUpperCase().

// --- Closures ---

// 12. Napisz funkcję makeMultiplier(factor) zwracającą funkcję.
//     Zwrócona funkcja mnoży argument przez factor.
//     Stwórz times2 i times5. Przetestuj oba z różnymi liczbami.

// 13. Napisz funkcję makeGreeter(greeting) zwracającą funkcję przyjmującą imię.
//     const sayHello = makeGreeter("Cześć");
//     const sayHey = makeGreeter("Hej");
//     Wywołaj obie z kilkoma imionami.

// 14. Napisz funkcję createStack() zwracającą obiekt z metodami:
//     push(item), pop(), peek(), size(), isEmpty().
//     Zaimplementuj jako closure (let items = [] wewnątrz).
//     Przetestuj wszystkie metody.

// 15. Napisz funkcję memoize(fn) która cachuje wyniki.
//     Wywołanie z tymi samymi argumentami zwraca wynik z cache bez ponownego obliczania.
//     Sprawdź przez zliczanie wywołań fn.

// 16. Napisz funkcję once(fn) — fn może być wywołana tylko raz.
//     Każde kolejne wywołanie zwraca ten sam wynik bez ponownego wywołania fn.
//     Przetestuj z funkcją która wypisuje "inicjalizuję..." i zwraca 42.

// 17. Napisz funkcję compose(f, g) zwracającą funkcję będącą złożeniem f(g(x)).
//     Przetestuj z: double = x => x * 2, addOne = x => x + 1.
//     compose(double, addOne)(5) → double(addOne(5)) → double(6) → 12.

// 18. Napisz funkcję curry2(fn) zamieniającą funkcję dwuargumentową
//     w dwie jednoargumentowe.
//     curry2((a, b) => a + b)(3)(4) → 7.
