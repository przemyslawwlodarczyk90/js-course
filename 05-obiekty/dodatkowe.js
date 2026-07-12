// Dodatkowe ćwiczenia — obiekty
// Poziom: łatwy / językowy

// --- Tworzenie i dostęp ---

// 1. Napisz obiekt book z polami: title, author, year, pages.
//    Wypisz każde pole osobno (notacja kropkowa).

// 2. Napisz obiekt car z polami: brand, model, year, color.
//    Zmień kolor. Dodaj nowe pole mileage. Usuń pole year (delete).
//    Wypisz cały obiekt.

// 3. Napisz obiekt person z metodą greet() zwracającą
//    "Cześć, jestem [imię i wiek]!". Wywołaj metodę i wypisz.

// 4. Napisz obiekt z dynamicznym kluczem — klucz pochodzi ze zmiennej:
//    const key = "language";
//    const obj = { [key]: "JavaScript" };
//    Wypisz obj.language.

// 5. Napisz obiekt profile = { name: "Jan", age: 28 }.
//    Sprawdź czy posiada pole "email" (operator in). Wypisz wynik.

// --- Skrócona składnia ---

// 6. Napisz funkcję createUser(name, age, role) zwracającą obiekt
//    używając shorthand properties. Przetestuj.

// --- Object.* ---

// 7. Masz obiekt { a: 1, b: 2, c: 3 }.
//    Wypisz jego klucze, wartości, i pary [klucz, wartość].

// 8. Masz obiekt cen { apple: 2.5, banana: 1.2, cherry: 5.0 }.
//    Użyj Object.entries i map żeby dostać tablicę stringów "apple: 2.50 zł".

// 9. Masz dwa obiekty defaults i overrides. Scal je w nowy obiekt
//    przez Object.assign (bez mutacji oryginałów).
//    defaults = { color: "red", size: "M", qty: 1 }
//    overrides = { color: "blue", qty: 5 }

// 10. Zamień tablicę par [["a", 1], ["b", 2], ["c", 3]]
//     na obiekt { a: 1, b: 2, c: 3 } przez Object.fromEntries.

// --- Dekonstrukcja ---

// 11. Masz obiekt user = { name: "Anna", age: 25, city: "Kraków", role: "admin" }.
//     Destrukturyzuj: wyciągnij name i role, resztę zbierz w osobny obiekt rest.

// 12. Masz funkcję showProduct(product) — przepisz ją używając
//     dekonstrukcji w parametrze:
//     function showProduct(product) {
//       console.log(product.name, product.price, product.category);
//     }

// 13. Masz obiekt config = { db: { host: "localhost", port: 5432 } }.
//     Wyciągnij host i port przez zagnieżdżoną dekonstrukcję.

// 14. Destrukturyzuj z wartościami domyślnymi:
//     const { name = "Anonim", age = 0, role = "user" } = {};
//     Wypisz wszystkie trzy zmienne.

// --- Optional chaining i nullish coalescing ---

// 15. Masz obiekt response = { data: null }.
//     Bez optional chaining wypisze błąd: response.data.users[0].name.
//     Napisz bezpieczny dostęp przez ?. i ?? "Brak danych".

// 16. Masz tablicę obiektów gdzie część ma brakujące pola:
//     const items = [
//       { name: "Laptop", specs: { ram: 16 } },
//       { name: "Phone" },
//       { name: "Tablet", specs: null },
//     ];
//     Wypisz dla każdego item: name i specs?.ram ?? "brak danych".

// 17. Napisz funkcję getNestedValue(obj, path) gdzie path to string "a.b.c".
//     Zwróć wartość zagnieżdżoną lub undefined jeśli nie istnieje.
//     getNestedValue({ a: { b: { c: 42 } } }, "a.b.c") → 42.
//     Nie używaj eval — użyj split(".") i reduce.

// --- Spread ---

// 18. Masz obiekt base = { x: 1, y: 2 }.
//     Utwórz extended = { ...base, z: 3, y: 99 }. Wypisz.
//     Które y wygrywa i dlaczego?

// 19. Napisz funkcję updateUser(user, changes) zwracającą nowego użytkownika
//     z naniesionymi zmianami (bez mutacji oryginału).
//     const user = { id: 1, name: "Jan", active: true };
//     updateUser(user, { name: "Anna" }) → { id: 1, name: "Anna", active: true }

// --- JSON ---

// 20. Napisz obiekt product = { id: 1, name: "Laptop", price: 3499 }.
//     Zamień go na JSON string i wypisz (z wcięciem 2).
//     Zamień z powrotem na obiekt i wypisz pole name.

// 21. Co zrobi JSON.stringify z tymi wartościami w obiekcie?
//     { fn: () => 1, undef: undefined, date: new Date(), sym: Symbol("x") }
//     Sprawdź i wyjaśnij w komentarzu.

// 22. Napisz funkcję deepClone(obj) używającą JSON.parse + JSON.stringify.
//     Sprawdź że modyfikacja klonu nie wpływa na oryginał (zagnieżdżony obiekt).

// --- Date ---

// 23. Utwórz datę z dzisiejszym dniem.
//     Wypisz rok, miesiąc (pamiętaj: 0-indexed!), dzień.

// 24. Napisz funkcję age(birthYear) zwracającą ile lat ma osoba urodzona w birthYear.

// 25. Napisz funkcję formatDate(date) formatującą datę jako "DD.MM.YYYY".
//     Użyj getDate(), getMonth()+1, getFullYear() i padStart(2, "0").
