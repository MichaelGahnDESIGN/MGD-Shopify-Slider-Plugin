# MGD Shopify Slider Plugin

> Pre-Alpha 0.1.0. Das Plugin ist ein frühes Gerüst. Es ist noch nicht für echte Shops gedacht.

Ein "Super-Slider" für Shopify von Michael Gahn DESIGN. Zwei Arten:

- **Klassisch:** Du legst Slides selbst an (nur Bild oder Bild mit Text und Button).
- **Prime:** Die Slides entstehen automatisch aus deinen Shop-Artikeln. Du stellst nur ein, wie viele Slides es sein sollen. Quelle: zufällig, meistverkauft, Kategorie oder manuell (du wählst Artikel, daraus wird zufällig gezeigt).

In der kostenlosen Version kannst du bis zu 5 Slider anlegen. Mit einer Pro-Lizenz sind es unbegrenzt viele.

## Was schon geht und was nicht

- ☑️ Nur statisch geprüft (JSON, Liquid-Struktur). Noch nie in einem echten Store gelaufen.
- ☑️ Enthalten: Theme-Section `mgd-slider` und App-Block (Theme App Extension) als Gerüst.
- ⚠️ Shopify kennt keine Plugins. Lizenz und Pro-Funktionen brauchen später eine Shopify-App (Plan im Hauptprojekt).
- ⚠️ "Meistverkauft": Liquid kann die Sortierung nicht erzwingen. Du wählst eine Kollektion, die im Admin nach Bestseller sortiert ist.

## Installation, Schritt für Schritt

1. Ordner `theme-section/` ins Theme übernehmen: Dateien aus `sections/`, `snippets/`, `assets/`, `locales/` in die gleichnamigen Theme-Ordner kopieren (Shopify CLI oder Code-Editor).
2. Im Theme-Editor auf einer Seite "Abschnitt hinzufügen" und "MGD Slider" wählen.
3. Der App-Block in `extensions/` braucht eine Shopify-App (noch nicht eingerichtet).

## Slider-Regeln für Barrierefreiheit

- Es gibt einen Pausenknopf, sobald sich der Slider von selbst bewegt.
- Bedienung mit Tastatur: Pfeiltasten links und rechts, Pos1 und Ende.
- Wer "Bewegung reduzieren" im System eingestellt hat, bekommt keinen automatischen Wechsel.
- Keine externen Schriften und kein CDN: Alles liegt im Plugin (Datenschutz).

## Aufbau (Kurzfassung)

Der Kern (Slider-Skript, Stil, Auswahl-Logik) ist auf allen Plattformen gleich und wird aus einem gemeinsamen Quellordner erzeugt. Nur die Anbindung an Shopify ist je Plattform anders. Den ganzen Plan gibt es im privaten Hauptprojekt (docs/SLIDER-PLUGINS.md).

## Hilfe und Fehler melden

Bitte als Issue in diesem Repository melden. Das ist keine Rechtsberatung: Die Lizenzfrage wird noch geprüft (siehe LICENSE).
