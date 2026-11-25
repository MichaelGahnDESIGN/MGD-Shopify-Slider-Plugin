# Änderungen

## [2.1.1] - 2026-11-25

- Einheitliche Version 2.1.1, kein Baukasten bei Shopify.

## 1.4.0

- Neue Versionsnummer 1.4.0: Alle MGD-Produkte haben jetzt die gleiche Version. Das Gerüst ist trotzdem noch in keinem echten Store gelaufen.
- Slider-Kern abgeglichen: Text auf dem Bild besser lesbar, auf dem Handy eine feste Höhe, Button-Höhe korrigiert.
- Tests: `node --test test/` grün.

## 0.2.1 (Pre-Alpha)

- Erster GitHub-Release mit ZIP und Prüfsumme. Am Slider selbst hat sich nichts geändert.
- Tests: `node --test test/` grün (5 von 5).
- Weiter nicht geprüft: echter Store, `shopify app deploy`, `app config validate`. Dafür braucht es einen Shopify-Partner-Zugang und einen Test-Store.

## 0.2.0 (Pre-Alpha, kein Release)

- Aus dem Gerüst wird eine App-Struktur: Theme App Extension `mgd-slider` mit Block (Ziel "content"), Snippets, Assets, Locales de/en.
- Sprachdateien richtig getrennt: Kundentexte in `de.default.json`/`en.json`, Editor-Texte in `*.schema.json` (vorher Theme-Check-Fehler).
- Beschriftungen von Pfeilen, Punkten und Pausenknopf kommen jetzt aus den Locales statt fest auf Deutsch.
- `app/shopify.app.toml.template` ohne Secrets und Client-ID, mit Platzhalter-URL und api_version 2026-10.
- Limit von 5 Slidern: ehrlich dokumentiert als NICHT erzwungen (braucht App-Backend).
- Tests für Model und Controller (`node --test test/`), README für Einsteiger mit Michael-Liste.
- Geprüft: Theme Check (0 Fehler, 1 Warnung: 56 Einstellungen), JS-Syntax, JSON. Nicht geprüft: echter Store, `app deploy`, `app config validate`.
- `.gitignore`: `shopify.app.toml` und `.shopify/`.

## 0.1.0 (Pre-Alpha)

- Erstes Gerüst: Slider-Skript mit Tastatur, Wischen, Pausenknopf, reduzierte Bewegung.
- Datenmodell mit Klassisch und Prime.
