// Otwórz index.html w przeglądarce. Każde zadanie odkomentuj i sprawdź efekt w oknie.
// Poziom: łatwy / językowy

// --- JS-039 — Co to jest DOM ---

// 1. Wypisz w konsoli document.title.

// 2. Wypisz w konsoli document.URL.

// 3. Wypisz w konsoli document.documentElement.lang (język strony).

// 4. Wypisz w konsoli document.body.childElementCount
//    (ile bezpośrednich dzieci-elementów ma <body>).

// --- JS-040 — getElementById ---

// 5. Pobierz element #subtitle przez getElementById.
//    Wypisz jego textContent.

// 6. Pobierz element #task-count przez getElementById.
//    Wypisz jego textContent.

// 7. Pobierz element #notification przez getElementById.
//    Wypisz w konsoli, czy zmienna jest różna od null.

// 8. Pobierz element o id "nie-istnieje" przez getElementById.
//    Wypisz wynik — powinien być null.

// --- JS-040 — querySelector ---

// 9. Pobierz #controls przez querySelector('#controls').
//    Wypisz jego id.

// 10. Pobierz pierwszy element .card przez querySelector('.card').
//     Wypisz jego id.

// 11. Pobierz element z atrybutem data-priority="low"
//     przez querySelector('[data-priority="low"]'). Wypisz jego textContent.

// 12. Pobierz #product-2 znajdujący się wewnątrz #product-container
//     przez querySelector('#product-container #product-2'). Wypisz dataset.price.

// --- JS-040 — querySelectorAll ---

// 13. Pobierz wszystkie button wewnątrz #controls
//     przez querySelectorAll('#controls button'). Wypisz ile ich jest.

// 14. Pobierz wszystkie elementy z data-category="electronics".
//     Wypisz ile ich jest.

// 15. Pobierz wszystkie .card, zamień na tablicę przez Array.from
//     i wypisz tablicę samych id (użyj .map).

// 16. Pobierz wszystkie .task przez querySelectorAll.
//     Użyj forEach i wypisz textContent każdego.

// --- JS-040 — nawigacja w drzewie DOM ---

// 17. Pobierz #product-container. Wypisz liczbę jego children.

// 18. Pobierz #product-container. Wypisz textContent jego firstElementChild.

// 19. Pobierz #product-container. Wypisz id jego lastElementChild.

// 20. Pobierz #product-2. Wypisz id jego parentElement.

// 21. Pobierz #product-1. Wypisz id jego nextElementSibling.

// 22. Pobierz #product-3. Wypisz id jego previousElementSibling
//     (powinno wypisać "product-2").

// --- JS-041 — textContent ---

// 23. Pobierz #subtitle. Zmień jego textContent na "Ćwiczę DOM krok po kroku".

// 24. Pobierz #task-count. Zmień jego textContent na "0".

// 25. Pobierz drugi element .task (indeks 1 z querySelectorAll).
//     Zmień jego textContent na "Zmienione zadanie".

// --- JS-041 — innerHTML ---

// 26. Pobierz #stats. Zmień jego innerHTML na
//     "<strong>Uwaga:</strong> dane zaktualizowane".

// 27. Pobierz #notification. Ustaw jego innerHTML na
//     "<em>Wiadomość</em> systemowa".

// 28. W jednym zdaniu (jako komentarz) wyjaśnij, dlaczego ustawianie innerHTML
//     danymi wpisanymi przez użytkownika jest ryzykowne (XSS).
//
// Odpowiedź:

// --- JS-041 — value (pole input) ---

// 29. Pobierz #search-input. Ustaw jego value na "telefon".

// 30. Pobierz #search-input. Odczytaj jego value i wypisz w konsoli.

// --- JS-042 — createElement + appendChild / prepend ---

// 31. Utwórz element <li> z textContent "Nauka DOM".
//     Dodaj go na koniec #task-list przez appendChild.

// 32. Utwórz element <li> z textContent "Pierwsze w kolejce".
//     Dodaj go na POCZĄTEK #task-list przez prepend.

// 33. Utwórz element <div> z className "card" i textContent "Nowy produkt".
//     Dodaj go na koniec #product-container przez appendChild.

// --- JS-042 — insertBefore / insertAdjacentHTML ---

// 34. Pobierz #task-list i pierwszy element .task.
//     Utwórz nowe <li> z tekstem "Wstawione przed" i wstaw je
//     PRZED pierwszym .task przez insertBefore.

// 35. Użyj insertAdjacentHTML z pozycją "afterbegin" na #task-list,
//     żeby wstawić "<li class='task'>Wstawione przez HTML</li>".

// 36. Użyj insertAdjacentHTML z pozycją "beforeend" na #product-container,
//     żeby dodać "<div class='card'>Testowa karta</div>".

// --- JS-042 — remove ---

// 37. Pobierz element z data-id="3" (querySelector) i usuń go przez remove().

// 38. Pobierz #product-3 i usuń go przez remove().

// 39. Pobierz wszystkie .task przez querySelectorAll
//     i usuń je wszystkie w pętli forEach (wywołaj remove() na każdym).

// --- JS-042 — cloneNode ---

// 40. Pobierz #product-1, sklonuj go przez cloneNode(true).
//     W klonie zmień textContent elementu .product-name na "Klon laptopa".
//     Dodaj klon na koniec #product-container.

// 41. Pobierz #subtitle, sklonuj go przez cloneNode(true).
//     Zmień textContent klonu na "Sklonowany podtytuł"
//     i dodaj klon na koniec <body> przez document.body.appendChild.

// --- JS-043 — atrybuty standardowe ---

// 42. Pobierz #product-3. Wypisz jego id przez własność .id
//     oraz przez getAttribute('id') — porównaj oba wyniki.

// 43. Pobierz #product-1. Ustaw atrybut title na "Najlepszy laptop"
//     przez setAttribute.

// 44. Pobierz #product-1. Usuń atrybut title przez removeAttribute
//     (najpierw wykonaj zadanie 43).

// 45. Pobierz #search-input. Sprawdź hasAttribute('placeholder')
//     i wypisz wynik w konsoli.

// --- JS-043 — data-* i dataset ---

// 46. Pobierz #product-2. Wypisz dataset.category i dataset.price.

// 47. Pobierz #product-3. Ustaw dataset.discount na "15".
//     Odczytaj je z powrotem przez dataset.discount.

// 48. Pobierz element .task z data-id="1" przez querySelector.
//     Wypisz jego dataset.priority.

// 49. Pobierz #product-1. Przejdź przez Object.entries(dataset)
//     w pętli for...of i wypisz każdą parę klucz: wartość.

// --- JS-044 — classList: add / remove ---

// 50. Pobierz #product-2. Dodaj klasę "active" przez classList.add.

// 51. Pobierz #product-2. Usuń klasę "active" przez classList.remove
//     (najpierw wykonaj zadanie 50).

// 52. Pobierz #product-1. Dodaj klasę "highlight" przez classList.add.

// --- JS-044 — classList: toggle / contains ---

// 53. Pobierz #product-3. Przełącz klasę "active" przez classList.toggle.
//     Wywołaj tę linijkę dwukrotnie i obserwuj efekt za każdym razem.

// 54. Pobierz #product-3. Sprawdź classList.contains("card")
//     i wypisz wynik w konsoli.

// 55. Pobierz #product-1. Użyj classList.toggle("error", true),
//     żeby klasa "error" była ZAWSZE dodana niezależnie od stanu początkowego.

// --- JS-044 — className ---

// 56. Pobierz #product-2. Wypisz całe jego className jako string.

// 57. Pobierz #product-2. Nadpisz className na "card active"
//     (uwaga: to kasuje wszystkie dotychczasowe klasy naraz).

// --- JS-045 — style (inline) ---

// 58. Pobierz #notification. Ustaw style.display na "block"
//     i style.background na "#ff9800".

// 59. Pobierz #title. Ustaw style.color na "#1565c0"
//     i style.fontSize na "2rem".

// 60. Pobierz document.body. Ustaw jego style.backgroundColor na "#f5f5f5".

// --- JS-045 — getComputedStyle ---

// 61. Pobierz #product-1. Odczytaj window.getComputedStyle(...)
//     i wypisz computed.borderRadius.

// 62. Pobierz #notification. Odczytaj window.getComputedStyle(...)
//     i wypisz computed.padding.

// --- JS-045 — CSS Custom Properties ---

// 63. Ustaw zmienną CSS --main-color na "#e91e63"
//     na document.documentElement przez style.setProperty.

// 64. Odczytaj wartość --main-color przez
//     getComputedStyle(document.documentElement).getPropertyValue("--main-color")
//     i wypisz ją w konsoli (najpierw wykonaj zadanie 63).

// --- Na koniec: mały task łączony ---

// 65. Połącz zadania z sekcji classList i style: pobierz #product-2,
//     dodaj mu klasę "active" (classList.add) ORAZ ustaw
//     style.border na "2px solid #2e7d32" — jedno po drugim, na tym samym elemencie.
