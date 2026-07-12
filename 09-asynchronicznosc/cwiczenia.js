// API używane w ćwiczeniach: https://jsonplaceholder.typicode.com
// Otwórz index.html w przeglądarce.

// ============================================================
// JS-052 — ZADANIE 1: setTimeout — timer z przyciskami
// ============================================================

// Zaimplementuj stoper dla przycisków w index.html:
// - #btn-start-timer → startuje odliczanie (co sekundę +1)
// - #btn-stop-timer → pauzuje
// - #btn-reset-timer → resetuje do 0

// let timerInterval = null;
// let seconds = 0;
//
// function updateDisplay() {
//   document.getElementById("timer-display").textContent = seconds;
// }
//
// document.getElementById("btn-start-timer")?.addEventListener("click", () => {
//   if (timerInterval) return; // już działa
//   timerInterval = setInterval(() => {
//     seconds++;
//     updateDisplay();
//   }, 1000);
// });
//
// document.getElementById("btn-stop-timer")?.addEventListener("click", () => {
//   clearInterval(timerInterval);
//   timerInterval = null;
// });
//
// document.getElementById("btn-reset-timer")?.addEventListener("click", () => {
//   clearInterval(timerInterval);
//   timerInterval = null;
//   seconds = 0;
//   updateDisplay();
// });

// ============================================================
// JS-052 — ZADANIE 2: setTimeout — kolejka
// ============================================================

// Napisz funkcję schedule(tasks) gdzie tasks to tablica
// { message: string, delay: number }
// Wypisuj każdą wiadomość po odpowiednim opóźnieniu.

function schedule(tasks) {
  // TODO: tasks.forEach z setTimeout
}

// schedule([
//   { message: "Start!", delay: 0 },
//   { message: "Po 1 sekundzie", delay: 1000 },
//   { message: "Po 2 sekundach", delay: 2000 },
//   { message: "Po 3 sekundach", delay: 3000 },
// ]);

// ============================================================
// JS-053 — ZADANIE 3: Promise — zbuduj własny
// ============================================================

// a) Napisz funkcję delay(ms), która zwraca Promise
//    rozwiązywany po ms milisekundach.
function delay(ms) {
  // TODO: new Promise + setTimeout
}

// delay(1000).then(() => console.log("Po sekundzie"));

// b) Napisz funkcję fetchWithTimeout(url, ms), która:
//    - wywołuje fetch(url)
//    - jeśli trwa dłużej niż ms → odrzuca Promise z błędem "Timeout"
//    Wskazówka: Promise.race

function fetchWithTimeout(url, ms) {
  // TODO: Promise.race([fetch(url), timeoutPromise])
}

// fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 5000)
//   .then(r => r.json())
//   .then(post => console.log(post.title));

// c) Napisz retryFetch(url, times, delayMs):
//    - wywołuje fetch(url)
//    - przy błędzie czeka delayMs i ponawia (max times razy)
async function retryFetch(url, times, delayMs = 1000) {
  // TODO
}

// ============================================================
// JS-053 — ZADANIE 4: Promise — łańcuchy i kombinatory
// ============================================================

// a) Pobierz post #1 z /posts/1 i jego komentarze z /comments?postId=1
//    Sekwencyjnie (jedna zależy od drugiej) — użyj .then chain
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(r => r.json())
//   .then(post => {
//     console.log("Post:", post.title);
//     return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
//   })
//   .then(r => r.json())
//   .then(comments => console.log("Komentarzy:", comments.length))
//   .catch(err => console.error(err.message));

// b) Pobierz równolegle: /users/1, /posts?userId=1, /albums?userId=1
//    Użyj Promise.all — wypisz ile postów i albumów ma user
// Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json()),
//   fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(r => r.json()),
//   fetch("https://jsonplaceholder.typicode.com/albums?userId=1").then(r => r.json()),
// ]).then(([user, posts, albums]) => {
//   console.log(`${user.name}: ${posts.length} postów, ${albums.length} albumów`);
// });

// c) Użyj Promise.allSettled dla 3 URL-ów (jeden błędny):
// Promise.allSettled([
//   fetch("https://jsonplaceholder.typicode.com/posts/1").then(r => r.json()),
//   fetch("https://jsonplaceholder.typicode.com/posts/9999").then(r => {
//     if (!r.ok) throw new Error(`HTTP ${r.status}`);
//     return r.json();
//   }),
//   fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json()),
// ]).then(results => {
//   results.forEach((r, i) => {
//     if (r.status === "fulfilled") console.log(`${i}: OK`);
//     else console.log(`${i}: ERR — ${r.reason.message}`);
//   });
// });

// ============================================================
// JS-054 — ZADANIE 5: async/await — pobieranie danych
// ============================================================

// a) Przepisz łańcuch z zadania 4a na async/await
async function getPostWithComments(postId) {
  // TODO
}
// getPostWithComments(1).then(result => console.log(result));

// b) Napisz async function loadUsers(), która:
//    - pobiera /users (limit 5)
//    - dla każdego pobiera jego posty /posts?userId=X
//    - zwraca users z polem postsCount
//    NIE używaj sekwencyjnego await w pętli — użyj Promise.all
async function loadUsersWithPostCount() {
  // TODO
  // const users = await fetch(...)
  // const usersWithPosts = await Promise.all(users.map(async user => {
  //   const posts = await fetch(...)
  //   return { ...user, postsCount: posts.length }
  // }))
}
// loadUsersWithPostCount().then(users =>
//   users.forEach(u => console.log(`${u.name}: ${u.postsCount} postów`))
// );

// c) Napisz loadWithIndicator(fetchFn), która:
//    - pokazuje #loader (classList.add("active"))
//    - wywołuje fetchFn()
//    - chowa loader w finally
//    - wyświetla wynik lub błąd w #result
async function loadWithIndicator(fetchFn) {
  // TODO
}

// Podepnij do przycisków:
// document.getElementById("btn-fetch-users")?.addEventListener("click", () => {
//   loadWithIndicator(() =>
//     fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
//       .then(r => r.json())
//   ).then(users => {
//     document.getElementById("result").textContent =
//       users.map(u => `${u.id}. ${u.name} (${u.email})`).join("\n");
//   });
// });

// ============================================================
// JS-055 — ZADANIE 6: obsługa błędów fetch
// ============================================================

// Napisz funkcję apiFetch(url), która:
// - wywołuje fetch(url)
// - rzuca HttpError(status, message) przy 4xx/5xx
// - rzuca NetworkError gdy fetch się nie powiódł (np. brak sieci)
// - parsuje JSON (może rzucić SyntaxError)

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "HttpError";
    this.status = status;
  }
}

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

async function apiFetch(url) {
  // TODO
}

// Testy:
// apiFetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(data => console.log("OK:", data.title));

// apiFetch("https://jsonplaceholder.typicode.com/posts/9999")
//   .catch(err => {
//     if (err instanceof HttpError) console.log(`HTTP ${err.status}: ${err.message}`);
//     else console.log("Inny błąd:", err.message);
//   });

// ============================================================
// JS-055/056 — ZADANIE 7: wysyłanie formularza
// ============================================================

// Podepnij #post-form:
// - przy submit zbierz tytuł i body
// - wyślij POST na https://jsonplaceholder.typicode.com/posts
// - pokaż wynik w #post-result
// - obsłuż błąd
// - zablokuj przycisk podczas wysyłania (disabled)

// document.getElementById("post-form")?.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const submitBtn = e.target.querySelector("button[type='submit']");
//   submitBtn.disabled = true;
//
//   const data = {
//     title: document.getElementById("post-title").value,
//     body: document.getElementById("post-body").value,
//     userId: 1,
//   };
//
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     if (!response.ok) throw new HttpError(response.status, response.statusText);
//     const created = await response.json();
//     document.getElementById("post-result").innerHTML =
//       `<span class="success">Utworzono post #${created.id}: "${created.title}"</span>`;
//   } catch (err) {
//     document.getElementById("post-result").innerHTML =
//       `<span class="error">Błąd: ${err.message}</span>`;
//   } finally {
//     submitBtn.disabled = false;
//   }
// });

// ============================================================
// JS-057 — ZADANIE 8: klient REST
// ============================================================

// Użyj createApiClient z lekcji lub zaimplementuj własny.
// Przetestuj każdą metodę HTTP:

// a) GET — pobierz listę todo dla userId=1
// b) GET — pobierz konkretne todo /todos/1
// c) POST — utwórz nowe todo { title, completed: false, userId: 1 }
// d) PATCH — zaktualizuj todo /todos/1, ustaw completed: true
// e) DELETE — usuń todo /todos/1

// const api = createApiClient("https://jsonplaceholder.typicode.com");
//
// (async () => {
//   // a)
//   const todos = await api.get("/todos?userId=1&_limit=5");
//   console.log("Todos:", todos.length);
//
//   // b)
//   const todo = await api.get("/todos/1");
//   console.log("Todo:", todo.title, "completed:", todo.completed);
//
//   // c)
//   const created = await api.post("/todos", { title: "Ćwiczenia JS", completed: false, userId: 1 });
//   console.log("Utworzono:", created);
//
//   // d)
//   const updated = await api.patch("/todos/1", { completed: true });
//   console.log("Zaktualizowano:", updated.completed);
//
//   // e)
//   await api.delete("/todos/1");
//   console.log("Usunięto");
// })();

// ============================================================
// JS-052–057 — ZADANIE 9: polling
// ============================================================

// Napisz funkcję poll(fetchFn, interval, shouldStop).
// Co `interval` ms wywołuje fetchFn(). Jeśli shouldStop(result) → true,
// kończy polling i zwraca ostatni wynik.

async function poll(fetchFn, interval, shouldStop) {
  // TODO: await delay(interval) w pętli while
}

// Przykład: sprawdzaj status zadania co sekundę aż skończy się processing
// let fakeStatus = "processing";
// setTimeout(() => { fakeStatus = "done"; }, 3500);
//
// poll(
//   async () => ({ status: fakeStatus }),
//   1000,
//   (result) => result.status === "done"
// ).then(result => console.log("Gotowe:", result.status));

// ============================================================
// JS-054 — ZADANIE 10: PRZEWIDAJ kolejność
// ============================================================

// Napisz PRZED uruchomieniem, w jakiej kolejności pojawią się logi

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Kolejność:
// 1.
// 2.
// 3.
// 4.
// Wyjaśnienie (event loop, task queue, microtask queue):
