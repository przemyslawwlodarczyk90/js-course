// Otwórz index.html w przeglądarce. Każde zadanie odkomentuj i sprawdź
// efekt w oknie/konsoli (F12 → Console).
// Poziom: łatwy / językowy

// --- JS-058 — window: wymiary ---

// 1. Wypisz w konsoli window.innerWidth i window.innerHeight.

// 2. Wypisz w konsoli window.outerWidth i window.outerHeight.

// 3. Wypisz w konsoli screen.width i screen.height.

// 4. Uzupełnij document.getElementById("info-size").textContent tekstem
//    `Rozmiar: ${window.innerWidth}×${window.innerHeight}` zaraz po
//    załadowaniu strony.

// 5. Uzupełnij document.getElementById("info-origin").textContent
//    tekstem `Origin: ${location.origin}`.

// 6. Uzupełnij document.getElementById("info-lang").textContent tekstem
//    `Język: ${navigator.language}`.

// --- JS-058 — window: scroll ---

// 7. Wypisz w konsoli window.scrollX i window.scrollY.

// 8. Wywołaj window.scrollTo({ top: 300, behavior: "smooth" }) i
//    obserwuj efekt na stronie.

// 9. Wywołaj window.scrollBy({ top: 100, behavior: "smooth" }).

// 10. Wywołaj window.scrollTo({ top: 0, behavior: "smooth" }), żeby
//     wrócić na górę strony.

// --- JS-058 — window: nasłuchiwanie zdarzeń ---

// 11. Dodaj listener "resize" na window, który wypisuje w konsoli
//     aktualne window.innerWidth i window.innerHeight.

// 12. Podłącz listener resize z zadania 11 do uzupełniania
//     #info-size tekstem `Rozmiar: ${window.innerWidth}×${window.innerHeight}`.

// 13. Dodaj listener "scroll" na window, który wypisuje w konsoli
//     window.scrollY.

// 14. Podłącz listener scroll z zadania 13 do uzupełniania #info-scroll
//     tekstem `Scroll: ${window.scrollX}, ${window.scrollY}`.

// 15. Dodaj listener "DOMContentLoaded" na window, który wypisuje w
//     konsoli "DOM gotowy (bez obrazów)".

// 16. Dodaj listener "load" na window, który wypisuje w konsoli
//     "Strona w pełni załadowana".

// --- JS-059 — localStorage: podstawy ---

// 17. Zapisz w localStorage klucz "test" z wartością "abc" przez
//     setItem, potem odczytaj go przez getItem i wypisz w konsoli.

// 18. Odczytaj przez getItem klucz, którego na pewno nie ma
//     (np. "brak"). Sprawdź w konsoli, że wynik to null, a nie undefined.

// 19. Nadpisz wartość klucza "test" nową wartością przez setItem,
//     odczytaj ją i sprawdź, że rzeczywiście się zmieniła.

// 20. Usuń klucz "test" przez removeItem, potem sprawdź getItem("test") —
//     powinno zwrócić null.

// 21. Zapisz trzy różne klucze w localStorage, potem wywołaj
//     localStorage.clear() i sprawdź, że wszystkie zniknęły.

// --- JS-059 — localStorage: obiekty (JSON) ---

// 22. Stwórz obiekt { name: "Ania", age: 25 }, zapisz go w localStorage
//     pod kluczem "user" przez JSON.stringify, potem odczytaj go i
//     odtwórz obiekt przez JSON.parse.

// 23. Wypisz w konsoli pole name z obiektu odtworzonego w zadaniu 22.

// 24. Napisz funkcję storageGet(key, defaultValue), która odczytuje
//     wartość z localStorage, parsuje ją przez JSON.parse i zwraca
//     defaultValue, jeśli klucza nie ma.

// 25. Napisz funkcję storageSet(key, value), która zapisuje wartość w
//     localStorage przez JSON.stringify.

// 26. Przetestuj storageGet/storageSet z zadań 24-25 na obiekcie
//     ustawień { theme: "dark" }.

// --- JS-059 — teraz połącz to co napisałeś: przyciski w index.html ---

// 27. Podepnij click na #btn-local-set: odczytaj wartości z
//     #storage-key i #storage-value (przez .value), zapisz je w
//     localStorage przez setItem.

// 28. Napisz funkcję displayLocalStorage(), która wypisuje wszystkie
//     pary klucz-wartość z localStorage (Object.entries(localStorage))
//     do document.getElementById("storage-display").textContent.

// 29. Podepnij click na #btn-local-get: wywołaj displayLocalStorage()
//     z zadania 28.

// 30. Podepnij click na #btn-local-clear: wywołaj localStorage.clear(),
//     a potem odśwież #storage-display przez displayLocalStorage().

// --- JS-059 — sessionStorage ---

// 31. Zapisz w sessionStorage klucz "test" z wartością "xyz", odczytaj
//     go przez getItem i wypisz w konsoli.

// 32. Usuń klucz "test" z sessionStorage przez removeItem, sprawdź że
//     getItem zwraca null.

// 33. Podepnij click na #btn-session-set: zapisz wartości z
//     #storage-key i #storage-value w sessionStorage (analogicznie do
//     zadania 27, ale sessionStorage.setItem).

// 34. Napisz jednym zdaniem w komentarzu różnicę między localStorage a
//     sessionStorage — kiedy dane znikają.

// --- JS-060 — location: odczyt właściwości ---

// 35. Wypisz w konsoli location.href bieżącej strony.

// 36. Wypisz w konsoli location.pathname bieżącej strony.

// 37. Wypisz w konsoli location.search bieżącej strony.

// 38. Wypisz w konsoli location.hash bieżącej strony.

// 39. Wypisz w konsoli location.origin bieżącej strony.

// 40. Podepnij click na #btn-show-location: wypisz wszystkie właściwości
//     z zadań 35-39 naraz (jako obiekt przez JSON.stringify(obj, null, 2))
//     w document.getElementById("location-display").textContent.

// --- JS-060 — URLSearchParams ---

// 41. Stwórz const params = new URLSearchParams(location.search) i
//     wypisz w konsoli params.toString().

// 42. Dodaj ręcznie ?tab=home do URL w pasku adresu i odśwież stronę,
//     potem odczytaj wartość parametru przez params.get("tab") i wypisz.

// 43. Ustaw nowy parametr przez params.set("page", "2"), wypisz w
//     konsoli params.toString() po zmianie.

// 44. Napisz funkcję getParam(name), która zwraca
//     new URLSearchParams(location.search).get(name). Przetestuj na
//     "tab" i na nieistniejącym parametrze.

// 45. Podepnij click na #btn-add-param: dodaj parametr tab=home do
//     obecnego URL przez history.pushState (bez przeładowania strony),
//     zaktualizuj #location-display tekstem location.href.

// --- JS-060 — budowanie URL ---

// 46. Stwórz const url = new URL("https://api.example.com/users"),
//     dodaj parametr przez url.searchParams.set("role", "admin") i
//     wypisz w konsoli url.toString().

// --- JS-061 — History API ---

// 47. Wywołaj history.pushState({ krok: 1 }, "", "?krok=1") i sprawdź,
//     że URL w pasku adresu zmienił się bez przeładowania strony.

// 48. Wywołaj history.pushState jeszcze raz z innym stanem
//     (np. { krok: 2 }, "", "?krok=2"), potem wywołaj history.back() —
//     obserwuj zmianę URL.

// 49. Po history.back() z zadania 48 wywołaj history.forward() —
//     obserwuj powrót do poprzedniego URL.

// 50. Dodaj listener "popstate" na window, który wypisuje w konsoli
//     e.state przy każdym kliknięciu wstecz/naprzód w przeglądarce.

// --- JS-061 — teraz połącz to co napisałeś: taby w index.html ---

// 51. Napisz funkcję renderTab(tab), która ustawia
//     document.getElementById("tab-content").textContent na tekst
//     zależny od nazwy taba (home/products/about) i przez
//     classList.toggle("active", ...) podświetla właściwy .tab-btn.

// 52. Podepnij click na każdym elemencie .tab-btn (przez
//     querySelectorAll + forEach): wywołaj
//     history.pushState({ tab }, "", `?tab=${tab}`) na podstawie
//     btn.dataset.tab, a potem renderTab(tab).

// 53. Dodaj listener "popstate", który odczytuje e.state?.tab (z
//     wartością domyślną "home") i wywołuje renderTab z tą wartością.

// 54. W renderTab z zadania 51 dopisz uzupełnianie
//     document.getElementById("history-display").textContent tekstem
//     `URL: ${location.href}`.

// --- JS-063 — console.table / console.time ---

// 55. Stwórz tablicę obiektów
//     [{ id: 1, name: "Jan" }, { id: 2, name: "Anna" }]
//     i wypisz ją przez console.table.

// 56. Zmierz czas sortowania tablicy 100 000 losowych liczb przez
//     console.time("sort") przed sortowaniem i console.timeEnd("sort")
//     po nim.

// 57. Dodaj instrukcję debugger; wewnątrz prostej pętli for (0..5) i
//     uruchom stronę z otwartym DevTools (F12 → Sources) — sprawdź, że
//     wykonanie się zatrzymuje na tej linii.
