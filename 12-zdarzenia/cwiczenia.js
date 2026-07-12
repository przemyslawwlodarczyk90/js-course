// Otwórz index.html w przeglądarce. Każde zadanie odkomentuj i sprawdź efekt w oknie.
// Poziom: łatwy / językowy

// --- JS-046 — addEventListener: podstawy ---

// 1. Dodaj listener "click" do #btn-double.
//    Wypisz w konsoli "Podwójny przycisk kliknięty!".

// 2. Dodaj listener "click" do #btn-right.
//    Wypisz w konsoli e.type.

// 3. Dodaj listener "click" do #btn-stop-propagation.
//    Wypisz w konsoli "Toggle kliknięty".

// 4. Dodaj listener "click" do #btn-single z opcją { once: true }.
//    Wypisz "Zadziała tylko raz". Kliknij dwukrotnie i sprawdź w konsoli różnicę.

// 5. Zapisz nazwaną funkcję logClick(e), która wypisuje "log".
//    Dodaj ją do #btn-double przez addEventListener, potem usuń
//    przez removeEventListener i sprawdź, że kliknięcie już nic nie robi.

// 6. Dodaj DWA różne, nazwane handlery do #btn-single: pierwszy wypisuje "A",
//    drugi wypisuje "B". Sprawdź, że oba wykonują się przy jednym kliknięciu.

// --- JS-046 — nasłuchiwanie na wielu elementach naraz ---

// 7. Pobierz wszystkie button przez querySelectorAll.
//    W pętli forEach dodaj do każdego listener "mouseenter"
//    ustawiający style.cursor na "pointer".

// 8. Pobierz wszystkie button przez querySelectorAll.
//    W pętli forEach dodaj do każdego listener "mouseleave"
//    wypisujący w konsoli textContent tego przycisku.

// --- JS-047 — obiekt event: target i currentTarget ---

// 9. Dodaj listener "click" do #parent-div. Wypisz e.target.id
//    oraz e.currentTarget.id — kliknij w różne miejsca (PARENT, CHILD, BUTTON)
//    i porównaj wyniki.

// 10. Dodaj listener "click" do #click-area. Wypisz e.type i e.timeStamp.

// --- JS-047 — preventDefault ---

// 11. Dodaj listener "submit" do #register-form z wywołaniem e.preventDefault().
//     Wypisz "Formularz zablokowany przed wysłaniem".

// 12. Dodaj listener "contextmenu" do #click-area z e.preventDefault().
//     Wypisz "Menu kontekstowe zablokowane".

// --- JS-047 — stopPropagation ---

// 13. Dodaj listener "click" do #child-div, który wypisuje "CHILD"
//     i wywołuje e.stopPropagation().

// 14. Dodaj listener "click" do #parent-div, który wypisuje "PARENT".
//     Po dodaniu stopPropagation w zadaniu 13 sprawdź, czy kliknięcie
//     w #child-div nadal dociera do #parent-div.

// --- JS-048 — zdarzenia myszy: click / dblclick / contextmenu ---

// 15. Dodaj listener "click" do #click-area. Wypisz wartość e.button.

// 16. Dodaj listener "dblclick" do #click-area.
//     Zmień jego style.background na "#c8e6c9".

// 17. Dodaj listener "contextmenu" do #parent-div z preventDefault.
//     Wypisz "Prawy przycisk na parent".

// --- JS-048 — mousemove ---

// 18. Dodaj listener "mousemove" do #click-area.
//     Zaktualizuj textContent #coords na "clientX: " + e.clientX.

// 19. Dodaj listener "mousemove" do #click-area.
//     Zaktualizuj textContent #coords, korzystając z e.offsetX i e.offsetY.

// --- JS-048 — mouseenter / mouseleave ---

// 20. Dodaj listener "mouseenter" do #click-area,
//     zmieniający style.borderColor na "#e91e63".

// 21. Dodaj listener "mouseleave" do #click-area,
//     przywracający style.borderColor na "#1565c0".

// 22. Dodaj listenery "mouseenter" i "mouseleave" do #event-log,
//     zmieniające jego style.opacity między "1" a "0.5".

// --- JS-049 — klawiatura: keydown ---

// 23. Dodaj listener "keydown" do #key-input.
//     Wypisz e.key przy każdym naciśnięciu klawisza.

// 24. Dodaj listener "keydown" do #key-input.
//     Wypisz e.code przy każdym naciśnięciu klawisza.

// 25. Dodaj listener "keydown" do #key-input.
//     Jeśli e.key === "Enter", wypisz aktualną wartość inputa (e.target.value).

// 26. Dodaj listener "keydown" do #key-input.
//     Jeśli e.key === "Escape", wyczyść wartość inputa (e.target.value = "").

// 27. Dodaj listener "keydown" do #key-input.
//     Jeśli e.ctrlKey && e.key === "s", wywołaj e.preventDefault()
//     i wypisz "Zapis zablokowany".

// --- JS-049 — input / change ---

// 28. Dodaj listener "input" do #key-input.
//     Wypisz aktualną długość wartości (e.target.value.length).

// 29. Dodaj listener "input" do #username.
//     Wypisz aktualną wartość pola przy każdej zmianie.

// 30. Dodaj listener "change" do #role.
//     Wypisz wybraną wartość (e.target.value) — zdarzenie odpala po utracie fokusu.

// --- JS-049 — focus / blur ---

// 31. Dodaj listener "focus" do #key-input,
//     ustawiający style.outline na "2px solid #4caf50".

// 32. Dodaj listener "blur" do #key-input,
//     czyszczący style.outline (ustaw na pusty string).

// 33. Dodaj listener "focus" do #email,
//     zmieniający jego style.background na "#e3f2fd".

// 34. Dodaj listener "blur" do #email,
//     przywracający style.background na pusty string.

// --- JS-050 — bubbling ---

// 35. Dodaj listener "click" do document.body.
//     Wypisz "Kliknięto gdzieś na stronie: " + e.target.tagName.

// 36. Dodaj listenery "click" do #parent-div i #child-div (BEZ stopPropagation).
//     Kliknij #inner-btn i zaobserwuj w konsoli kolejność wypisywanych logów.

// --- JS-050 — event delegation ---

// 37. Dodaj JEDEN listener "click" do #todo-list. W środku sprawdź, czy
//     e.target.dataset.action === "delete" — jeśli tak, usuń najbliższe <li>
//     przez e.target.closest("li").remove().

// 38. Rozszerz listener z zadania 37 (lub dodaj kolejny "if" w tym samym
//     listenerze): jeśli e.target.type === "checkbox", ustaw
//     e.target.closest("li").style.textDecoration na "line-through",
//     gdy checkbox jest zaznaczony, a na "none" gdy nie jest.

// 39. Dodaj listener "click" do #todo-add. Pobierz wartość z #todo-input,
//     utwórz nowy <li> z checkboxem i tekstem, dodaj go do #todo-list,
//     wyczyść input.

// 40. Bez pisania nowego kodu — dopisz komentarzem odpowiedź: dlaczego listener
//     z zadania 37 działa też na elementy dodane dynamicznie w zadaniu 39,
//     mimo że nie dodawałeś do nich osobnego addEventListener?
//
// Odpowiedź:

// --- JS-051 — regex: tworzenie i test() ---

// 41. Utwórz regex /^\d+$/ sprawdzający, czy string to same cyfry.
//     Przetestuj przez .test() na "12345" i na "12a45".

// 42. Utwórz regex sprawdzający, czy string zaczyna się od wielkiej litery:
//     /^[A-ZĄĆĘŁŃÓŚŹŻ]/. Przetestuj na "Kraków" i "kraków".

// 43. Utwórz regex sprawdzający kod pocztowy w formacie XX-XXX: /^\d{2}-\d{3}$/.
//     Przetestuj na "00-950" i "00950".

// --- JS-051 — match / matchAll ---

// 44. Wyodrębnij wszystkie słowa z tekstu "Ala ma kota i psa"
//     przez match(/\w+/g).

// 45. Wyodrębnij wszystkie adresy e-mail z tekstu
//     "kontakt: jan@firma.pl lub anna@test.com" przez match z flagą g.

// 46. Użyj matchAll z regexem /(\w+)=(\d+)/g na tekście "a=1 b=2 c=3"
//     i w pętli for...of wypisz każdą parę klucz-wartość.

// --- JS-051 — exec i grupy ---

// 47. Użyj regexu /(\d{2}):(\d{2})/ z exec() na tekście "Spotkanie o 14:30"
//     i wypisz godzinę oraz minuty osobno (match[1], match[2]).

// 48. Użyj named groups /(?<day>\d{2})\.(?<month>\d{2})\.(?<year>\d{4})/
//     z exec() na tekście "Data: 12.07.2026" i wypisz match.groups.

// --- JS-051 — replace ---

// 49. Zamień wszystkie wielokrotne spacje w tekście "Jan   Kowalski"
//     na pojedynczą spację przez replace(/\s+/g, " ").

// 50. Zamień wszystkie cyfry w tekście "Kod: A1B2C3" na znak "#"
//     przez replace(/\d/g, "#").

// 51. Zrób prosty slug z tekstu "Cześć Świecie!" — zamień wszystko poza
//     literami i cyframi na "-" przez replace, potem zmień na małe litery.

// --- Na koniec: mały task łączony ---

// 52. Połącz zadania 37 i 39: po dodaniu nowego zadania w #todo-list
//     (zadanie 39) sprawdź, że kliknięcie w jego przycisk "delete"
//     nadal usuwa element — mimo że został dodany już PO podpięciu
//     listenera z zadania 37 (to właśnie jest event delegation w praktyce).
