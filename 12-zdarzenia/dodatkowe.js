// Dodatkowe ćwiczenia — zdarzenia i regex
// Otwórz index.html w przeglądarce.
// Poziom: łatwy / językowy

// --- addEventListener ---

// 1. Dodaj listener "click" do #btn-single.
//    Wypisz w konsoli: "Kliknięto!" i aktualną godzinę (new Date().toLocaleTimeString()).

// 2. Dodaj listener "click" do #btn-double i listener "dblclick" — osobno.
//    Single click wypisuje "jedno", double click wypisuje "dwa razy".

// 3. Dodaj listener "mouseenter" do #click-area zmieniający tekst na "Najechano!".
//    Dodaj listener "mouseleave" przywracający tekst "Kliknij mnie!".

// 4. Dodaj listener "click" do #btn-single z opcją { once: true }.
//    Sprawdź że drugi klik już nic nie robi.

// 5. Dodaj dwa różne handlery click do #btn-single (handler1 i handler2).
//    Usuń handler1 przez removeEventListener. Sprawdź że handler2 nadal działa.

// --- event object ---

// 6. Dodaj listener click do #click-area.
//    Wypisz: e.clientX, e.clientY, e.offsetX, e.offsetY, e.target.id.

// 7. Dodaj listener "contextmenu" do #btn-right z e.preventDefault().
//    Wypisz "Prawy przycisk!" zamiast pokazywać menu kontekstowe.

// 8. Dodaj listener "submit" do #register-form z e.preventDefault().
//    Wypisz wartości wszystkich pól formularza jako obiekt.

// --- zdarzenia myszy ---

// 9. Dodaj "mousemove" do #click-area.
//    Aktualizuj #coords tekstem "x: [offsetX], y: [offsetY]".

// 10. Dodaj "click" do #click-area.
//     Zależnie od e.button wypisz: "lewy" (0), "środkowy" (1), "prawy" (2).

// 11. Przy "dblclick" na #click-area zmień kolor tła na losowy.
//     const randomColor = () => "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");

// --- klawiatura ---

// 12. Dodaj "keydown" do #key-input.
//     Wypisz e.key i e.code dla każdego klawisza.

// 13. Dodaj "keydown" do #key-input.
//     Przy Enter → wypisz wartość i wyczyść input.
//     Przy Escape → wyczyść input.

// 14. Dodaj globalny listener "keydown" do document.
//     Ctrl+K → przełącz focus na #key-input (e.preventDefault).

// 15. Dodaj "input" do #key-input.
//     Aktualizuj #key-display tekstem: "[n] znaków".

// --- propagacja i delegation ---

// 16. Dodaj listenery "click" do #parent-div, #child-div i #inner-btn.
//     Każdy wypisuje swoje ID. Kliknij button i obserwuj kolejność bubblingu.

// 17. Dodaj stopPropagation() do listenera #inner-btn.
//     Sprawdź że parent i child nie dostają eventu.

// 18. Dodaj jeden listener do #todo-list który obsługuje:
//     - klik na przycisk [data-action="delete"] → usuwa li
//     - klik na checkbox → przekreśla tekst (text-decoration: line-through)
//     Użyj e.target i closest().

// 19. Podepnij #todo-add:
//     przy kliku pobierz wartość z #todo-input, utwórz nowe li z checkboxem i przyciskiem,
//     dodaj do #todo-list, wyczyść input.

// --- Regex ---

// 20. Napisz regex sprawdzający czy string jest poprawnym emailem.
//     Przetestuj na: "jan@example.com", "jan@", "janemail.com", "j@a.b".

// 21. Napisz regex sprawdzający czy hasło ma min. 8 znaków, co najmniej 1 cyfrę.
//     Przetestuj na: "abc123", "abcdefg1", "ABCDEF1!", "short1".

// 22. Wyodrębnij wszystkie liczby z tekstu "Ceny: 49 zł, 199 zł, 3499 zł".
//     Użyj match() z flagą g. Wypisz tablicę liczb (jako numbery).

// 23. Zamień w stringu wszystkie powtórzenia spacji na jedną spację.
//     "Jan   Kowalski  z  Krakowa" → "Jan Kowalski z Krakowa".

// 24. Napisz funkcję extractHashtags(text) zwracającą tablicę hashtagów z tekstu.
//     extractHashtags("Uczę się #JavaScript i #React!") → ["#JavaScript", "#React"].

// 25. Napisz funkcję maskEmail(email) maskującą część emaila.
//     "jan.kowalski@example.com" → "jan.***@example.com"
//     Weź pierwsze 3 znaki przed @, resztę zastąp ***.
