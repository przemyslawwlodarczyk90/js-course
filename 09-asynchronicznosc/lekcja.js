// ============================================================
// JS-052 — setTimeout i setInterval
// ============================================================

// setTimeout(fn, delay, ...args) — jednorazowe opóźnienie
const timeoutId = setTimeout(() => {
  console.log("Po 2 sekundach");
}, 2000);

clearTimeout(timeoutId); // anulowanie (zanim odpali)

// setInterval(fn, interval) — cykliczne wywołanie
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("Tick:", count);
  if (count >= 5) clearInterval(intervalId);
}, 500);

// Ważne: setTimeout/setInterval są częścią Web API / Node.js,
// NIE samego języka JavaScript. Są asynchroniczne — callback
// trafia do kolejki i czeka na wolny callstack.

// "Dokładny" interwał (nie dryfuje)
function precisInterval(fn, interval) {
  let expected = Date.now() + interval;

  function tick() {
    fn();
    const drift = Date.now() - expected;
    expected += interval;
    setTimeout(tick, Math.max(0, interval - drift));
  }

  setTimeout(tick, interval);
}

// ============================================================
// JS-053 — Promise
// ============================================================

// Promise: obiekt reprezentujący wynik operacji asynchronicznej
// Stany: pending → fulfilled lub rejected

const fetchUser = (id) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (id > 0) {
      resolve({ id, name: `User ${id}`, email: `user${id}@example.com` });
    } else {
      reject(new Error(`Nieprawidłowe id: ${id}`));
    }
  }, 1000);
});

// then/catch/finally
fetchUser(1)
  .then(user => {
    console.log("Użytkownik:", user);
    return user.id; // wartość przekazana do kolejnego .then
  })
  .then(id => console.log("ID:", id))
  .catch(err => console.error("Błąd:", err.message))
  .finally(() => console.log("Zawsze wykonane"));

// Promise.resolve / Promise.reject — gotowe promise
const ready = Promise.resolve("od razu");
ready.then(v => console.log(v)); // "od razu"

// Promise.all — czeka na WSZYSTKIE, failuje przy pierwszym błędzie
Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)])
  .then(users => console.log("Wszyscy:", users.map(u => u.name)))
  .catch(err => console.error("Jeden zawiódł:", err.message));

// Promise.allSettled — czeka na wszystkie, niezależnie od błędów
Promise.allSettled([fetchUser(1), fetchUser(-1), fetchUser(3)])
  .then(results => {
    results.forEach(r => {
      if (r.status === "fulfilled") console.log("OK:", r.value.name);
      else console.log("ERR:", r.reason.message);
    });
  });

// Promise.race — wygrywa pierwszy zakończony
// Promise.any — wygrywa pierwszy zakończony sukcesem

// Łańcuch z transformacją
fetchUser(1)
  .then(user => ({ ...user, role: "admin" }))
  .then(user => JSON.stringify(user, null, 2))
  .then(json => console.log("JSON:", json));

// ============================================================
// JS-054 — async / await
// ============================================================

// async function zawsze zwraca Promise
// await czeka na Promise wewnątrz async function

async function getUser(id) {
  const user = await fetchUser(id); // czeka na fetchUser(id)
  return { ...user, fetchedAt: new Date().toISOString() };
}

// getUser zwraca Promise mimo że "wygląda synchronicznie"
getUser(1).then(u => console.log("async/await:", u));

// Obsługa błędów z async/await
async function getUserSafe(id) {
  try {
    const user = await fetchUser(id);
    return { data: user, error: null };
  } catch (err) {
    return { data: null, error: err.message };
  }
}

// Równoległe await (nie czekaj sekwencyjnie!)
async function loadDashboard(userId) {
  // WOLNE — sekwencyjnie (2 sekundy razem)
  // const user = await fetchUser(userId);
  // const posts = await fetchPosts(userId);

  // SZYBKIE — równolegle (1 sekunda razem)
  const [user, posts] = await Promise.all([
    fetchUser(userId),
    Promise.resolve([{ id: 1, title: "Post 1" }]), // zastępcze
  ]);

  return { user, posts };
}

// ============================================================
// JS-055 — fetch()
// ============================================================

// fetch zwraca Promise<Response>
// Response.json() zwraca Promise<data>

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

  // Sprawdź HTTP status — fetch NIE rzuca dla 4xx/5xx!
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const posts = await response.json();
  return posts;
}

// Kompletna obsługa
async function loadPosts() {
  try {
    const posts = await fetchPosts();
    console.log(`Załadowano ${posts.length} postów`);
    return posts;
  } catch (err) {
    if (err instanceof TypeError) {
      console.error("Błąd sieci:", err.message);
    } else {
      console.error("Błąd HTTP:", err.message);
    }
    return [];
  }
}

// ============================================================
// JS-056 — FormData i wysyłanie danych
// ============================================================

// FormData automatycznie zbiera pola formularza
// const form = document.getElementById("post-form");
// const formData = new FormData(form);
// console.log(formData.get("title"));

// Wysyłanie POST z JSON
async function createPost(data) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

// Wysyłanie POST z FormData (multipart/form-data — dla plików)
async function uploadFile(file, description) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("description", description);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData, // NIE ustawiaj Content-Type — fetch robi to sam
  });

  return response.json();
}

// ============================================================
// JS-057 — REST API
// ============================================================

// Konwencje REST:
// GET    /posts          → lista
// GET    /posts/1        → jeden
// POST   /posts          → utwórz
// PUT    /posts/1        → zamień cały
// PATCH  /posts/1        → zaktualizuj część
// DELETE /posts/1        → usuń

// Klient REST — wielokrotnego użytku
function createApiClient(baseUrl) {
  async function request(path, options = {}) {
    const url = `${baseUrl}${path}`;
    const config = {
      headers: { "Content-Type": "application/json", ...options.headers },
      ...options,
    };

    if (config.body && typeof config.body !== "string") {
      config.body = JSON.stringify(config.body);
    }

    const response = await fetch(url, config);

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: response.statusText }));
      throw Object.assign(new Error(error.message), { status: response.status });
    }

    return response.json();
  }

  return {
    get: (path) => request(path),
    post: (path, body) => request(path, { method: "POST", body }),
    put: (path, body) => request(path, { method: "PUT", body }),
    patch: (path, body) => request(path, { method: "PATCH", body }),
    delete: (path) => request(path, { method: "DELETE" }),
  };
}

// Użycie
const api = createApiClient("https://jsonplaceholder.typicode.com");
// api.get("/posts/1").then(post => console.log(post));
// api.post("/posts", { title: "Test", body: "Treść", userId: 1 }).then(console.log);
