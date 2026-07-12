// Dodatkowe ćwiczenia — asynchroniczność
// Niektóre zadania uruchamiaj w index.html (fetch), resztę w Node.js.
// Poziom: łatwy / językowy

// --- setTimeout / setInterval ---

// 1. Napisz kod który wypisuje "Hej!" po 2 sekundach przez setTimeout.

// 2. Napisz kod który wypisuje liczby 1, 2, 3, 4, 5 z sekundowym odstępem
//    przez setInterval, a potem się zatrzymuje.

// 3. Napisz funkcję delay(ms) zwracającą Promise który rozwiązuje się po ms ms.
//    Użyj jej: await delay(1000) albo delay(1000).then(() => console.log("gotowe")).

// 4. Napisz stoper: setInterval zwiększa co sekundę zmienną seconds.
//    Po 5 sekundach wypisz "Minęło 5 sekund" i zatrzymaj interval.

// 5. Napisz funkcję runAfter(fn, ms) wywołującą fn po ms ms.
//    Zwróć id timeouta żeby można było go anulować przez clearTimeout.

// --- Promise: tworzenie ---

// 6. Napisz Promise który:
//    - losuje liczbę 1-10
//    - jeśli >= 5 → resolve("Wygrałeś!")
//    - jeśli < 5 → reject("Przegrałeś!")
//    Obsłuż przez .then i .catch.

// 7. Napisz funkcję fetchUser(id) zwracającą Promise.
//    Wewnątrz setTimeout(1000): resolve({ id, name: "User " + id }) jeśli id > 0,
//    reject(new Error("Złe id")) jeśli id <= 0.
//    Przetestuj oba przypadki.

// 8. Napisz łańcuch .then:
//    fetchUser(1)
//      .then(user => user.name)
//      .then(name => name.toUpperCase())
//      .then(name => console.log("Imię:", name))
//      .catch(err => console.error("Błąd:", err.message));

// --- Promise: kombinatory ---

// 9. Napisz trzy funkcje zwracające Promise z różnymi opóźnieniami:
//    fetchA() → "A" po 300ms, fetchB() → "B" po 100ms, fetchC() → "C" po 200ms.
//    Użyj Promise.all żeby poczekać na wszystkie i wypisz wyniki.

// 10. Użyj Promise.race z tymi samymi trzema funkcjami.
//     Który wynik dostaniesz i dlaczego?

// 11. Napisz Promise.allSettled dla: fetchUser(1), fetchUser(-1), fetchUser(2).
//     Wypisz status każdego (fulfilled/rejected).

// --- async / await ---

// 12. Napisz async function getUser(id) która:
//     awaits na fetchUser(id) z zadania 7,
//     dodaje pole fetchedAt: new Date().toISOString(),
//     zwraca wzbogacony obiekt.
//     Wywołaj i wypisz wynik.

// 13. Napisz async function getUserSafe(id) z try/catch:
//     zwraca { data: user, error: null } lub { data: null, error: message }.
//     Przetestuj na id=1 i id=-1.

// 14. Napisz async function loadAll() która pobiera równolegle
//     getUser(1), getUser(2), getUser(3) przez Promise.all.
//     Wypisz imiona wszystkich.

// 15. Wyjaśnij w komentarzu co wypisze ten kod i dlaczego:
//     console.log("A");
//     setTimeout(() => console.log("B"), 0);
//     Promise.resolve().then(() => console.log("C"));
//     console.log("D");

// --- fetch (w przeglądarce, otwórz index.html) ---

// 16. Pobierz jeden post z https://jsonplaceholder.typicode.com/posts/1.
//     Wypisz tytuł i body.

// 17. Pobierz listę 5 użytkowników z /users?_limit=5.
//     Wypisz imię i email każdego.

// 18. Napisz async function getPostComments(postId):
//     pobierz post z /posts/postId,
//     pobierz komentarze z /comments?postId=postId,
//     zwróć { post, comments }.

// 19. Utwórz nowy post przez POST na /posts:
//     body: { title: "Test", body: "Treść", userId: 1 }
//     Wypisz zwrócone id.

// 20. Napisz funkcję apiFetch(url) która:
//     - wywołuje fetch(url)
//     - jeśli !response.ok → rzuca Error("HTTP " + response.status)
//     - zwraca response.json()
//     Przetestuj na poprawnym i błędnym URL.

// 21. Napisz async function withLoading(fn):
//     - wypisuje "Ładowanie..."
//     - wywołuje await fn()
//     - wypisuje "Gotowe!"
//     - zwraca wynik
//     Przetestuj z pobieraniem danych.

// 22. Napisz funkcję retry(fn, n) która wywołuje async fn(),
//     przy błędzie ponawia do n razy.
//     Przetestuj z funkcją która zawodzi 2 razy, potem działa.
