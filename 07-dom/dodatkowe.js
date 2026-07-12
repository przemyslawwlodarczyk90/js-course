// Dodatkowe ćwiczenia — DOM
// Otwórz index.html w przeglądarce, odkomentuj zadanie które ćwiczysz.
// Poziom: łatwy / językowy

// --- Pobieranie elementów ---

// 1. Pobierz element #title przez getElementById.
//    Wypisz jego textContent w konsoli.

// 2. Pobierz pierwszy element .task przez querySelector.
//    Wypisz jego textContent i dataset.id.

// 3. Pobierz wszystkie .task przez querySelectorAll.
//    Wypisz ile ich jest i teksty wszystkich.

// 4. Pobierz element z atrybutem data-priority="high".
//    Użyj selektora atrybutowego: '[data-priority="high"]'.

// 5. Pobierz #task-list i wypisz:
//    - ile ma dzieci (children.length)
//    - tekst pierwszego dziecka (firstElementChild.textContent)
//    - tekst ostatniego dziecka (lastElementChild.textContent)

// 6. Pobierz pierwszy .task i wypisz jego:
//    - parentElement.id
//    - nextElementSibling.textContent
//    - previousElementSibling (jeśli istnieje)

// --- Zmiana treści ---

// 7. Zmień tekst #title na "Moje ćwiczenia DOM".

// 8. Zmień tekst #subtitle przez innerHTML na "<em>Ćwiczenia z kursem</em>".
//    Wyjaśnij w komentarzu różnicę między textContent a innerHTML.

// 9. Zmień textContent wszystkich .task na "Zadanie " + (indeks + 1).
//    Użyj forEach z NodeList.

// 10. Ustaw wartość inputa #search-input na "JavaScript".
//     Odczytaj ją i wypisz w konsoli.

// --- Tworzenie i usuwanie ---

// 11. Utwórz nowe <li> z tekstem "Nowe zadanie", klasą "task", data-id="99".
//     Dodaj je na koniec #task-list.

// 12. Utwórz nowe <li> z tekstem "Pilne!" i dodaj je NA POCZĄTKU #task-list
//     przez prepend.

// 13. Utwórz <p> z tekstem "Dodano przez JS" i wstaw go
//     po elemencie #title przez insertAdjacentHTML lub insertAdjacentElement.

// 14. Usuń element .task z data-id="2".

// 15. Usuń wszystkie .task z #task-list w pętli.

// 16. Sklonuj pierwszy .card z #product-container (z dziećmi).
//     Zmień tekst .product-name w klonie na "Klon".
//     Dodaj klon na koniec #product-container.

// --- Atrybuty i data-* ---

// 17. Pobierz wszystkie .card.
//     Dla każdej wypisz data-category i data-price jako liczbę.

// 18. Dodaj atrybut title="Elektronika" do każdej .card z data-category="electronics".

// 19. Dla każdej .card ustaw data-tax jako data-price * 0.23, zaokrąglone.
//     Sprawdź przez dataset.tax na dowolnej karcie.

// --- classList ---

// 20. Dodaj klasę "active" do pierwszej .card.
//     Sprawdź przez classList.contains("active").

// 21. Przełącz klasę "highlight" na wszystkich .card używając toggle.

// 22. Napisz funkcję selectCard(id) która:
//     - dodaje klasę "active" do .card z podanym id
//     - usuwa "active" ze wszystkich pozostałych .card
//     selectCard("product-1");

// 23. Sprawdź czy #product-2 ma klasę "card" i "active" (oba osobno).

// --- Zmiana stylów ---

// 24. Zmień kolor tła body na "#f0f0f0" przez style.backgroundColor.

// 25. Pokaż element #notification, ustaw jego tekstContent na "Sukces!",
//     zmień tło na zielony, ukryj po 2 sekundach.

// 26. Dla każdej .card ustaw style.border na "2px solid #1565c0".

// 27. Odczytaj obliczony styl (getComputedStyle) pierwszej .card:
//     wypisz borderRadius i padding.

// 28. Napisz funkcję fadeOut(element, duration) która przez setTimeout
//     stopniowo zmniejsza opacity od 1 do 0 i na końcu ustawia display: "none".
//     (Możesz zrobić prosto: po duration ms → opacity 0, po kolejnych 300ms → display none.)
