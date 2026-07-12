// Moduł pomocniczy — funkcje matematyczne.
// Ten plik NIC nie wypisuje sam z siebie — tylko eksportuje funkcje/wartości
// do wykorzystania w innych plikach (lekcja.js, cwiczenia.js).

// Named export — eksport nazwany, może być ich wiele w jednym pliku
export const PI = 3.14159;

export function dodaj(a, b) {
  return a + b;
}

export function odejmij(a, b) {
  return a - b;
}

export function poleKola(promien) {
  return PI * promien ** 2;
}

export function procent(wartosc, proc) {
  return (wartosc * proc) / 100;
}

// Default export — TYLKO JEDEN na plik, importowany bez klamerek
export default function pomnoz(a, b) {
  return a * b;
}
