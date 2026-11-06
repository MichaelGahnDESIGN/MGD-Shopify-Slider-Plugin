# MGD Slider für Shopify

> Stand: 0.2.0 Pre-Alpha. Ein Gerüst. Das Ganze ist noch in KEINEM echten Shop gelaufen. Bitte noch nicht in einem Live-Shop benutzen.

Ein Slider (Bilder-Karussell) von Michael Gahn DESIGN, gebaut als **Shopify-App mit Theme App Extension**. Das heißt: Händler schalten die App ein und ziehen den Block "MGD Slider" im Theme-Editor auf eine Seite. Zwei Arten:

- **Klassisch:** Du legst die Slides selbst an (Bild, optional Text und Button). Pro Block gibt es 6 Slides. Mehr Slides = einen zweiten Block auf die Seite ziehen.
- **Prime:** Die Slides entstehen automatisch aus den Produkten im Shop. Quelle: zufällig, meistverkauft, Kategorie oder manuell ausgewählt.

## Was ist geprüft, was nicht

✅ Geprüft (statisch, ohne Shop):
- Liquid mit Shopify Theme Check (Shopify CLI 5.0.1 per `npx`): keine Fehler, 1 Warnung (siehe unten)
- JavaScript-Syntax (`node --check`) und 5 kleine Tests für die Logik (`node --test test/`)
- Alle JSON-Dateien gültig
- Keine Passwörter, Schlüssel oder Client-IDs im Repo

☑️ NICHT geprüft:
- Lauf in einem echten Shop oder Entwicklungs-Store (noch nie passiert)
- `shopify app config validate` und `shopify app deploy` (brauchen eine echte App und deinen Login)
- Aussehen im Theme-Editor, Übersetzungen im Editor, Wechsel Hell/Dunkel
- Screenreader- und Tastaturtest von Hand

⚠️ Warnung von Theme Check: Der Block hat 56 Einstellungen, Theme Check empfiehlt höchstens 40. Die Shopify-Doku nennt dafür kein hartes Limit. Ob `shopify app deploy` das akzeptiert, zeigt erst der erste Deploy. Falls nicht: weniger Slide-Gruppen im Block.

## Free: 5 Slider? Das ehrliche Ergebnis

Ziel war: Gratis bis 5 Slider, mehr nur mit Pro. **Das ist mit dieser Version NICHT durchgesetzt.**

Warum? Eine Theme App Extension läuft nur im Theme des Händlers. Der Händler kann beliebig viele Blöcke auf Seiten ziehen. Liquid (die Shopify-Vorlagensprache) kann nicht seitenübergreifend zählen und kann nichts speichern. Ein hartes Limit braucht darum ein Stück Software auf einem Server (App-Backend), das:
1. zählt, wie viele Slider ein Shop angelegt hat,
2. den Tarif des Shops kennt (Free/Pro, Abrechnung über die Shopify Billing API),
3. das Ergebnis in ein App-Metafeld schreibt, das der Block lesen kann.

Das gibt es noch nicht. Offene Idee für später: Slides als App-eigene Metaobjekte (Inhalte, die die App verwaltet) und der Tarif als Metafeld. Auch das ist nur eine Idee, nichts davon ist gebaut oder getestet.

Bis dahin gilt: Die 5 sind ein Versprechen im Text, kein Schloss im Code.

## Barrierefreiheit (eingebaut, aber noch nicht von Hand getestet)

- Tastatur: Pfeil links/rechts, Pos1 und Ende. Alle Knöpfe sind echte Buttons.
- Pausenknopf, sobald der Slider von selbst wechselt. Er stoppt auch beim Darüberfahren und bei Tastaturfokus.
- "Bewegung reduzieren" im System: kein automatischer Wechsel, keine Animation.
- Beschriftungen kommen aus den Sprachdateien (Deutsch und Englisch).
- Keine externen Schriften, kein CDN: alles liegt in der App (Datenschutz).

## Aufbau

- `extensions/mgd-slider/`: die Theme App Extension (Block `blocks/mgd-slider.liquid`, Snippets, `assets/` mit JS und CSS, `locales/` de und en)
- `app/shopify.app.toml.template`: Vorlage für die App-Einstellungen, nur Platzhalter
- `theme-section/`: dasselbe als normale Theme-Section zum Reinkopieren in ein Theme (ohne App)
- `test/`: kleine Tests für die Logik

Die Dateien in `assets/`, `snippets/` und `locales/` (ohne `.schema`) sind in `extensions/` und `theme-section/` bewusst gleich. Wer eine ändert, ändert die andere mit.

## Das musst du als Michael selbst machen

Das kann nur Michael (Login und Konten). Reihenfolge:

1. ☑️ Im Shopify Partner Dashboard einloggen (partners.shopify.com).
2. ☑️ Shopify CLI installieren: `npm install -g @shopify/cli@latest`. Prüfen mit `shopify version`.
3. ☑️ Einloggen: `shopify auth login` (Browser öffnet sich).
4. ☑️ Im Partner Dashboard eine neue App anlegen (Name z. B. "MGD Slider", Weg "Create app manually"). Die Client-ID dort sehen, aber nirgends öffentlich teilen.
5. ☑️ Im Repo-Ordner: `cp app/shopify.app.toml.template shopify.app.toml`
6. ☑️ Dann `shopify app config link` ausführen und die App aus Schritt 4 wählen. Das trägt die Client-ID ein. Die Datei `shopify.app.toml` steht in `.gitignore` und wird nie hochgeladen.
7. ☑️ Prüfen: `shopify app config validate`
8. ☑️ Einen Entwicklungs-Store anlegen (Partner Dashboard > Stores > Add store > Development store), z. B. mit ein paar Beispielprodukten.
9. ☑️ Ausprobieren: `shopify app dev` und den Store wählen. Im Theme-Editor des Stores bei einer Seite "Block hinzufügen" > Apps > "MGD Slider".
10. ☑️ Testen: Klassisch mit Bildern, Prime mit Produkten, nur Tastatur, mit Pausenknopf, mit "Bewegung reduzieren", Handy-Breite.
11. ☑️ Erst wenn alles gut lief: `shopify app deploy` und die Ergebnisse hier ins CHANGELOG eintragen.
12. ❓ Entscheiden: Brauchen wir ein Backend für das 5-Slider-Limit und Pro? (Siehe Abschnitt oben.)

## Hilfe und Fehler melden

Bitte als Issue in diesem Repository melden. Das ist keine Rechtsberatung: Die Lizenzfrage wird noch geprüft (siehe LICENSE).
