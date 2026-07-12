// Drugi moduł pomocniczy — funkcje na stringach.

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function slugify(str) {
  return str.toLowerCase().trim().replace(/\s+/g, "-");
}

export function powtorz(str, n) {
  return str.repeat(n);
}

export const WERSJA = "1.0.0";

// Default export tego pliku
export default function odwroc(str) {
  return [...str].reverse().join("");
}
