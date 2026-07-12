// Ćwiczenia — obiekty
// Poziom: łatwy / językowy — proste wywołania metod i mechanik, bez algorytmów.

const ksiazka = { tytul: "Diuna", autor: "Frank Herbert", rok: 1965, strony: 412 };
const firma = {
  nazwa: "Techno",
  adres: { miasto: "Poznań", kod: "60-001" },
  aktywna: true,
};
const ustawienia = { motyw: "jasny", jezyk: "pl", powiadomienia: false };

// --- JS-027: tworzenie obiektów i dostęp ---

// 1. Napisz obiekt film z polami: tytul, rezyser, rok, gatunek. Wypisz każde
//    pole osobno notacją kropkową.

// 2. Napisz obiekt telefon z polami: marka, model, cena. Wypisz pole cena
//    notacją nawiasową telefon["cena"].

// 3. Zmień pole cena w obiekcie telefon na nową wartość. Dodaj nowe pole
//    kolor. Wypisz cały obiekt.

// 4. Usuń pole gatunek z obiektu film przez delete. Wypisz obiekt film
//    po usunięciu.

// 5. Sprawdź czy obiekt telefon ma pole "gwarancja" przez operator in.
//    Wypisz wynik.

// 6. Wypisz firma.adres.miasto (dostęp do zagnieżdżonego obiektu).

// 7. Napisz obiekt osoba z metodą przedstawSie() zwracającą string
//    z jej imieniem. Wywołaj metodę i wypisz wynik.

// --- JS-027: dynamiczny klucz i computed property ---

// 8. Masz const pole = "autor". Odczytaj wartość ksiazka[pole] i wypisz.

// 9. Stwórz obiekt z computed property: klucz pochodzi ze zmiennej
//    const nazwaKlucza = "kolor" — { [nazwaKlucza]: "czerwony" }. Wypisz.

// 10. Stwórz obiekt z dwoma computed properties naraz, gdzie klucze budowane
//     są przez szablon: const prefix = "produkt"; klucze `${prefix}Id`
//     i `${prefix}Nazwa`. Wypisz obiekt.

// --- JS-027: shorthand properties ---

// 11. Masz zmienne const marka = "Toyota"; const model = "Corolla".
//     Stwórz obiekt auto używając shorthand properties. Wypisz.

// 12. Napisz funkcję stworzUzytkownika(imie, wiek) zwracającą obiekt
//     { imie, wiek } przez shorthand properties. Wywołaj i wypisz wynik.

// --- JS-028: Object.keys / Object.values / Object.entries ---

// 13. Wypisz klucze obiektu ustawienia przez Object.keys.

// 14. Wypisz wartości obiektu ustawienia przez Object.values.

// 15. Wypisz pary klucz-wartość obiektu ustawienia przez Object.entries.

// 16. Zamień Object.entries(ustawienia) na Mapę przez new Map(...).
//     Odczytaj z niej wartość pola "motyw" przez .get().

// --- JS-028: Object.fromEntries ---

// 17. Masz tablicę par [["a", 1], ["b", 2], ["c", 3]]. Zamień ją na obiekt
//     przez Object.fromEntries. Wypisz.

// 18. Masz obiekt cennik = { chleb: 4.5, mleko: 3.2, maslo: 8.0 }.
//     Użyj Object.entries + map + Object.fromEntries żeby podnieść każdą
//     cenę o 10% (zaokrąglone do 2 miejsc). Wypisz nowy obiekt.

// --- JS-028: Object.assign / Object.freeze ---

// 19. Masz dwa obiekty: domyslne = { rozmiar: "M", kolor: "czarny" }
//     i wybor = { kolor: "biały" }. Scal je przez Object.assign w NOWY
//     obiekt (bez mutowania domyslne). Wypisz wynik.

// 20. Zamroź obiekt stale = { PI: 3.14, E: 2.71 } przez Object.freeze.
//     Spróbuj zmienić stale.PI na 100. Wypisz wartość po próbie
//     (powinna zostać bez zmian).

// --- JS-029: dekonstrukcja obiektu ---

// 21. Zdestrukturyzuj obiekt ksiazka: wyciągnij tytul i autor do osobnych
//     zmiennych. Wypisz obie.

// 22. Zdestrukturyzuj obiekt ksiazka zmieniając nazwę zmiennej: rok jako
//     rokWydania. Wypisz rokWydania.

// 23. Zdestrukturyzuj obiekt { imie: "Ala" }, wyciągając też pole wiek
//     z wartością domyślną 18 (którego obiekt nie ma). Wypisz wiek.

// 24. Zdestrukturyzuj zagnieżdżony obiekt firma: wyciągnij bezpośrednio
//     zmienną miasto z firma.adres.

// 25. Zdestrukturyzuj obiekt ksiazka wyciągając tytul, a resztę pól zbierz
//     do obiektu rest przez ...rest. Wypisz rest.

// 26. Napisz funkcję opiszKsiazke({ tytul, autor }) przyjmującą
//     zdestrukturyzowany parametr i zwracającą string "tytul - autor".
//     Wywołaj ją na obiekcie ksiazka.

// --- JS-030: optional chaining ?. ---

// 27. Masz obiekt zamowienie = { klient: { dane: null } }. Bezpiecznie
//     odczytaj zamowienie.klient.dane?.email przez ?. — wypisz wynik
//     (powinien być undefined, bez błędu).

// 28. Masz obiekt strona = { tresc: {} }. Odczytaj bezpiecznie
//     strona.tresc?.sekcje?.[0]?.naglowek. Wypisz wynik.

// 29. Masz const funkcjaLogujaca = null. Wywołaj ją bezpiecznie przez
//     funkcjaLogujaca?.("test") — sprawdź że nie ma błędu.

// 30. Masz tablicę obiektów z częściowo brakującymi zagnieżdżonymi polami:
//     [{ nazwa: "A", dane: { ilosc: 5 } }, { nazwa: "B" }]
//     Dla każdego elementu wypisz nazwa oraz dane?.ilosc ?? "brak".

// --- JS-030: nullish coalescing ?? ---

// 31. Masz const liczbaPunktow = 0. Wypisz liczbaPunktow || 100 oraz
//     liczbaPunktow ?? 100 — porównaj wyniki i skomentuj różnicę.

// 32. Masz const pseudonim = null. Wypisz pseudonim ?? "Gość".

// 33. Masz const opcje = null. Bezpiecznie wypisz opcje?.rozmiarStrony ?? 25.

// --- JS-031: spread operator na obiektach ---

// 34. Masz obiekt baza = { x: 1, y: 2, z: 3 }. Stwórz nowy obiekt
//     rozszerzony = { ...baza, w: 4, y: 100 } (nadpisanie y). Wypisz
//     i skomentuj które y wygrało.

// 35. Masz obiekt uzytkownik = { imie: "Piotr", punkty: [10, 20] }. Zrób
//     płytką kopię przez spread. Zmień imie w kopii — sprawdź że oryginał
//     się nie zmienił.

// 36. Ten sam obiekt uzytkownik — dodaj element do punkty w kopii przez
//     push. Sprawdź czy oryginał się zmienił (powinien, bo to ta sama
//     referencja tablicy) i skomentuj dlaczego.

// 37. Napisz funkcję zaktualizujProfil(profil, zmiany) zwracającą nowy
//     obiekt profilu z naniesionymi zmianami, bez mutowania oryginału
//     (spread). Przetestuj na profil = { id: 1, imie: "Jan", aktywny: true }.

// 38. Masz stan = { zalogowany: false, uzytkownik: null }. Stwórz nowy stan
//     po zalogowaniu przez spread:
//     { ...stan, zalogowany: true, uzytkownik: { imie: "Ala" } }.
//     Sprawdź że oryginalny stan się nie zmienił.

// 39. Masz trzy obiekty: warstwa1 = { a: 1 }, warstwa2 = { b: 2 },
//     warstwa3 = { a: 99, c: 3 }. Scal wszystkie trzy przez spread w jeden
//     obiekt — zwróć uwagę która wartość "a" wygrywa.

// --- JS-032: JSON.stringify() i JSON.parse() ---

// 40. Zamień obiekt ksiazka na JSON string przez JSON.stringify. Wypisz
//     string i jego typ (typeof).

// 41. Zamień obiekt ksiazka na JSON string z wcięciem 2 spacji
//     (JSON.stringify(ksiazka, null, 2)). Wypisz.

// 42. Masz string JSON '{"imie":"Zosia","wiek":9}'. Sparsuj go przez
//     JSON.parse i wypisz pole imie.

// 43. Zrób głęboką kopię obiektu firma przez
//     JSON.parse(JSON.stringify(firma)). Zmień miasto w kopii. Sprawdź
//     że oryginał się nie zmienił.

// 44. Masz obiekt z trudnymi wartościami:
//     { funkcja: () => 1, brak: undefined, data: new Date(), tekst: "ok" }
//     Wypisz wynik JSON.stringify na nim i skomentuj co się stało
//     z każdym polem.

// 45. Masz obiekt zamowienie = { id: 5, produkty: ["chleb", "mleko"], suma: 12.5 }.
//     Zamień go na JSON string i wypisz jego długość (.length stringa).
//     Sparsuj z powrotem i wypisz liczbę produktów.

// --- JS-033: obiekt Date ---

// 46. Stwórz obiekt daty dla dzisiaj przez new Date(). Wypisz rok przez
//     getFullYear().

// 47. Wypisz miesiąc dzisiejszej daty przez getMonth() — pamiętaj, że jest
//     0-indexed. Skomentuj co oznacza wynik.

// 48. Wypisz dzień miesiąca przez getDate() i dzień tygodnia przez getDay().

// 49. Wypisz liczbę milisekund od 1970 roku przez getTime().

// 50. Stwórz konkretną datę: 1 maja 2025 przez new Date(2025, 4, 1)
//     (miesiąc jest 0-indexed!). Wypisz ją.

// 51. Stwórz datę z ISO stringa "2025-12-24T18:00:00". Wypisz getFullYear()
//     i getDate().

// 52. Oblicz różnicę w dniach między new Date(2025, 0, 1)
//     i new Date(2025, 0, 20) — użyj getTime() i podziel przez liczbę
//     milisekund w jednym dniu.

// 53. Wypisz dzisiejszą datę sformatowaną lokalnie przez
//     toLocaleDateString("pl-PL").

// 54. Wypisz dzisiejszy czas sformatowany przez toLocaleTimeString("pl-PL").

// 55. Wypisz dzisiejszą datę w formacie ISO przez toISOString().
