// Otwórz index.html w przeglądarce. Każde zadanie odkomentuj i sprawdź
// efekt w oknie/konsoli (F12 → Console).
// API używane w ćwiczeniach: https://jsonplaceholder.typicode.com
// Poziom: łatwy / językowy

// --- JS-052 — setTimeout ---

// 1. Użyj setTimeout żeby po 1 sekundzie wypisać "Gotowe" w konsoli.

// 2. Użyj setTimeout żeby po 3 sekundach wypisać "Cześć", zapisz zwrócone
//    id do zmiennej.

// 3. Weź timeout z zadania 2 i anuluj go od razu przez clearTimeout,
//    zanim zdąży się wykonać. Sprawdź że "Cześć" się NIE pojawia.

// 4. Użyj setTimeout z dodatkowym argumentem:
//    setTimeout((imie) => console.log("Cześć,", imie), 1000, "Ania").

// 5. Zagnieżdź dwa setTimeouty: pierwszy po 1 sekundzie wypisuje "Krok 1",
//    a w jego callbacku kolejny setTimeout po 1 sekundzie wypisuje "Krok 2".

// --- JS-052 — setInterval ---

// 6. Użyj setInterval żeby co 1 sekundę wypisywać "Tick" w konsoli.
//    Zapisz zwrócone id do zmiennej.

// 7. Do intervalu z zadania 6 dodaj osobny setTimeout(5000), który
//    zatrzymuje ten interval przez clearInterval.

// 8. Napisz setInterval który liczy od 0: co sekundę zwiększa zmienną
//    i wypisuje ją, a przy wartości 5 sam siebie zatrzymuje przez
//    clearInterval wywołane wewnątrz własnego callbacku.

// --- JS-052 — teraz połącz to co napisałeś: stoper w index.html ---

// 9. Podepnij click na #btn-start-timer: startuje setInterval, który co
//    sekundę zwiększa zmienną seconds i wpisuje ją do
//    document.getElementById("timer-display").textContent.

// 10. Podepnij click na #btn-stop-timer: zatrzymuje ten interval przez
//     clearInterval (jeśli działa).

// 11. Podepnij click na #btn-reset-timer: zatrzymuje interval, zeruje
//     seconds i aktualizuje #timer-display na "0".

// --- JS-053 — Promise: tworzenie ---

// 12. Stwórz nowy Promise który od razu resolve'uje wartością "ok".
//     Obsłuż go przez .then().

// 13. Stwórz nowy Promise który od razu reject'uje z new Error("coś poszło
//     nie tak"). Obsłuż go przez .catch().

// 14. Stwórz Promise który wewnątrz setTimeout(1000) resolve'uje wartością
//     "gotowe po sekundzie". Obsłuż przez .then().

// 15. Napisz funkcję delay(ms) zwracającą Promise, który resolve'uje się
//     (bez wartości) po ms milisekundach. Wywołaj delay(1000).then(() =>
//     console.log("Minęła sekunda")).

// 16. Użyj Promise.resolve("od razu") i obsłuż przez .then().

// 17. Użyj Promise.reject(new Error("od razu błąd")) i obsłuż przez .catch().

// --- JS-053 — then / catch / finally ---

// 18. Weź Promise z zadania 14 i dodaj do łańcucha .finally(), które
//     zawsze wypisuje "Koniec operacji".

// 19. Napisz łańcuch dwóch .then: Promise.resolve(5).then(n => n * 2)
//     .then(wynik => console.log("Wynik:", wynik)).

// 20. Stwórz Promise który losowo resolve'uje albo reject'uje
//     (Math.random() > 0.5 ? resolve("wygrana") : reject("przegrana")).
//     Obsłuż oba przypadki przez .then i .catch. Uruchom kilka razy.

// --- JS-053 — kombinatory ---

// 21. Stwórz trzy Promise z różnym opóźnieniem (użyj delay z zadania 15):
//     delay(300).then(() => "A"), delay(100).then(() => "B"),
//     delay(200).then(() => "C"). Użyj Promise.all i wypisz tablicę wyników.

// 22. Użyj Promise.race z tymi samymi trzema Promise co w zadaniu 21.
//     Wypisz który wygrał i zastanów się dlaczego akurat ten.

// 23. Zamień jeden z trzech Promise z zadania 21 tak, żeby reject'ował
//     (delay(150).then(() => { throw new Error("błąd B"); })).
//     Użyj Promise.allSettled i wypisz status (fulfilled/rejected) każdego.

// 24. Użyj Promise.any z dwoma Promise: pierwszy reject'uje od razu,
//     drugi resolve'uje po 200ms wartością "sukces". Wypisz wynik.

// --- JS-054 — async/await ---

// 25. Napisz async function zwrocPiatke() która po prostu robi
//     return 5. Wywołaj ją i przez .then() sprawdź, że dostajesz Promise.

// 26. Napisz async function powitanie() która robi await delay(1000)
//     (użyj delay z zadania 15), a potem console.log("Witaj!").

// 27. Napisz async function pobierzImie() z linią:
//     const imie = await Promise.resolve("Ania");
//     console.log(imie);

// 28. Napisz async function z try/catch: w try zrób
//     await Promise.reject(new Error("ups")), złap błąd w catch
//     i wypisz err.message.

// 29. Napisz async function dwaKroki() która robi dwa await pod rząd
//     (dwa razy delay(500)) i na końcu wypisuje "Oba kroki gotowe".

// 30. Napisz async function rownolegle() która zamiast dwóch await pod
//     rząd pobiera dwie wartości naraz przez:
//     const [a, b] = await Promise.all([delay(500).then(() => "A"),
//     delay(500).then(() => "B")]);
//     Wypisz [a, b].

// --- JS-055 — fetch: podstawy ---

// 31. Zrób fetch("https://jsonplaceholder.typicode.com/posts/1") i w
//     .then(response => response.json()) wypisz otrzymany obiekt.

// 32. Zrób to samo co w zadaniu 31, ale przez async function z await —
//     await fetch(...), potem await response.json(), wypisz post.title.

// 33. Po fetchu na /posts/1 sprawdź response.ok i wypisz wynik (true/false)
//     w konsoli.

// 34. Zrób fetch na nieistniejący adres /posts/99999 i wypisz
//     response.status (powinno być 404). Zwróć uwagę, że fetch się NIE
//     odrzuca (nie ma catch) mimo błędu HTTP.

// 35. Napisz async function pobierzPost(id) która: robi fetch, sprawdza
//     !response.ok i wtedy rzuca new Error(`HTTP ${response.status}`),
//     w przeciwnym razie zwraca await response.json().

// 36. Wywołaj pobierzPost(1) wewnątrz try/catch w osobnej async function
//     i wypisz wynik albo err.message. Przetestuj też na złym id (np. -1
//     lub 99999).

// --- JS-055 — fetch: przyciski w index.html ---

// 37. Podepnij click na #btn-fetch-users: fetch listy użytkowników z
//     /users?_limit=5, po pobraniu wypisz w
//     document.getElementById("result").textContent liczbę pobranych
//     rekordów.

// 38. Podepnij click na #btn-fetch-posts: fetch 5 postów z
//     /posts?_limit=5, wypisz ich tytuły w #result (posts.map(p =>
//     p.title).join("\n")).

// 39. Przed fetchem w zadaniu 38 dodaj
//     document.getElementById("loader").classList.add("active"),
//     a po zakończeniu (w .finally albo na końcu async function) —
//     classList.remove("active").

// 40. Podepnij click na #btn-fetch-error: zrób fetch na nieistniejący URL
//     (np. /posts/99999999), sprawdź response.ok i w razie błędu wypisz
//     komunikat w #result zamiast rzucać niezłapany wyjątek.

// --- JS-056 — FormData ---

// 41. Stwórz ręcznie new FormData(), dodaj pola przez
//     formData.append("title", "Test") i formData.append("body", "Treść").
//     Wypisz formData.get("title").

// 42. Zrób pętlę for...of po formData.entries() z zadania 41 i wypisz
//     każdą parę klucz-wartość.

// --- JS-055/056 — wysyłanie danych POST ---

// 43. Napisz async function utworzPost(dane), która wysyła fetch POST na
//     https://jsonplaceholder.typicode.com/posts z headers:
//     { "Content-Type": "application/json" } i body: JSON.stringify(dane).
//     Zwraca await response.json().

// 44. Wywołaj utworzPost({ title: "Test", body: "Treść", userId: 1 })
//     i wypisz zwrócone id.

// 45. Podepnij submit na #post-form: e.preventDefault(), odczytaj wartości
//     przez document.getElementById("post-title").value i
//     ("post-body").value, wyślij je przez utworzPost, wypisz wynik w
//     document.getElementById("post-result").textContent.

// 46. W zadaniu 45 przed wysłaniem zablokuj przycisk submit (disabled =
//     true), a w finally odblokuj go z powrotem (disabled = false).

// --- JS-057 — REST API: pojedyncze wywołania ---

// 47. Zrób GET fetch na /todos/1, wypisz w konsoli todo.title i
//     todo.completed.

// 48. Zrób POST fetch na /todos z body { title: "Nowe zadanie",
//     completed: false, userId: 1 } (method: "POST"). Wypisz zwrócone id.

// 49. Zrób PATCH fetch na /todos/1 z body { completed: true }
//     (method: "PATCH"). Wypisz zaktualizowany obiekt.

// 50. Zrób PUT fetch na /todos/1, który podmienia cały obiekt
//     (method: "PUT", body z pełnym zestawem pól). Wypisz wynik.

// 51. Zrób DELETE fetch na /todos/1 (method: "DELETE"). Sprawdź
//     response.ok i wypisz wynik w konsoli.

// --- JS-057 — teraz połącz to co napisałeś: Promise.all z fetch ---

// 52. Podepnij click na #btn-parallel: użyj Promise.all żeby pobrać
//     naraz /users?_limit=5, /posts?_limit=5 i /todos?_limit=5. Po
//     zakończeniu wypisz w document.getElementById("parallel-result")
//     ile elementów ma każda z trzech list.

// --- JS-054 — kolejność wykonania (event loop) ---

// 53. Zanim uruchomisz poniższy kod, w komentarzu napisz PRZEWIDYWANĄ
//     kolejność wypisywanych liczb, a potem odkomentuj i sprawdź:
//     console.log("1");
//     setTimeout(() => console.log("2"), 0);
//     Promise.resolve().then(() => console.log("3"));
//     console.log("4");
//     Twoja przewidywana kolejność: ____
//     Rzeczywista kolejność: ____
//     Wyjaśnienie (microtask queue vs task queue): ____
