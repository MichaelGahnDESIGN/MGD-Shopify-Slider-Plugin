# Änderungen

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
