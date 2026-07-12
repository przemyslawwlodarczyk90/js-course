// Dodatkowe ćwiczenia — środowisko przeglądarkowe
// Otwórz index.html w przeglądarce.
// Poziom: łatwy / językowy

// --- window ---

// 1. Wypisz w konsoli:
//    - window.innerWidth i window.innerHeight
//    - screen.width i screen.height
//    - navigator.language
//    - document.title

// 2. Dodaj listener "resize" do window.
//    Przy każdej zmianie rozmiaru wypisz nowe wymiary okna.

// 3. Dodaj listener "scroll" do window.
//    Wypisz window.scrollY przy każdym scroll.

// 4. Wywołaj window.scrollTo({ top: 0, behavior: "smooth" }).
//    Obserwuj efekt (strona musi być dostatecznie długa).

// --- localStorage ---

// 5. Zapisz do localStorage klucz "username" z wartością swojego imienia.
//    Odczytaj i wypisz.

// 6. Zapisz obiekt { theme: "dark", fontSize: 16 } do localStorage.
//    Odczytaj i wypisz pole theme.
//    (Pamiętaj o JSON.stringify/parse.)

// 7. Wypisz wszystkie klucze i wartości z localStorage.
//    Użyj pętli po Object.entries(localStorage) lub Object.keys.

// 8. Usuń klucz "username" z localStorage. Sprawdź że getItem zwraca null.

// 9. Wyczyść cały localStorage. Sprawdź że jest pusty.

// 10. Napisz funkcję saveSettings(obj) i loadSettings(defaultVal).
//     saveSettings zapisuje obiekt, loadSettings odczytuje lub zwraca defaultVal.

// 11. Napisz prosty "licznik odwiedzin" używając localStorage.
//     Przy każdym załadowaniu strony zwiększ licznik i wypisz go w konsoli.

// --- sessionStorage ---

// 12. Zapisz do sessionStorage "sessionStart" z aktualną godziną.
//     Sprawdź że ta wartość znika po zamknięciu zakładki.

// 13. Wypisz różnicę: kiedy używasz localStorage, kiedy sessionStorage?
//     Napisz to jako komentarz w kodzie.

// 14. Napisz funkcję która zapisuje do sessionStorage tablicę ostatnich
//     5 odwiedzonych sekcji strony (np. "home", "products", "about").
//     Po każdym "odwiedzeniu" dodaj do tablicy, zachowując max 5 wpisów.

// --- window.location ---

// 15. Wypisz w konsoli wszystkie właściwości location:
//     href, protocol, host, pathname, search, hash, origin.

// 16. Wypisz wartość parametru "tab" z aktualnego URL.
//     Użyj: new URLSearchParams(location.search).get("tab").
//     (Dodaj ?tab=home do URL ręcznie i odśwież.)

// 17. Napisz funkcję getQueryParam(name) zwracającą wartość parametru z URL.

// 18. Napisz funkcję setQueryParam(name, value) zmieniającą parametr w URL
//     bez przeładowania strony (history.pushState).

// 19. Napisz funkcję buildApiUrl(endpoint, params) budującą URL:
//     buildApiUrl("/users", { role: "admin", limit: 10 })
//     → "https://api.example.com/users?role=admin&limit=10"
//     Użyj klasy URL i searchParams.

// --- History API ---

// 20. Wywołaj history.pushState({ page: "about" }, "", "?page=about").
//     Sprawdź że URL się zmienił bez przeładowania.

// 21. Wywołaj history.pushState kilka razy z różnymi wartościami.
//     Sprawdź history.length. Cofnij przez history.back().

// 22. Dodaj listener "popstate" do window.
//     Wypisz e.state przy każdym kliknięciu wstecz/naprzód.

// 23. Napisz nawigację dla 3 "stron" (home, products, about):
//     - kliknięcie przycisku → pushState + pokaż odpowiedni div
//     - popstate → przywróć odpowiedni widok
//     Wszystko bez przeładowania strony.

// --- Debugowanie ---

// 24. Użyj console.table do wypisania tablicy obiektów:
//     [{ id: 1, name: "Jan" }, { id: 2, name: "Anna" }].

// 25. Zmierz czas wykonania sortowania 100 000 elementów:
//     console.time("sort");
//     [... 100000 losowych].sort((a,b)=>a-b);
//     console.timeEnd("sort");

// 26. Dodaj debugger; w środku pętli i uruchom w DevTools.
//     Obserwuj wartości zmiennych w panelu debuggera.
