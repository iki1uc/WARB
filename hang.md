WARB — Neuaufstellung auf TRANS-Ebene
Realität zu TRANS, besser gestellt, Maße + Ansichten über Technologie
Maße (Messlatte = Continuum 100)
Jede Datei wird gemessen: 100 = Continuum, <100 = Abstand
Ansichten (3, getrennt)
KANAL = Breite (B) | TRANS = Verwandlung (upd/upg/rev/build) | WARB = Tiefe (T)
Dateien — ent-korrigiert, neu aufgestellt
Datei	Vorher (hindert)	Neu (TRANS-Ebene)	Maß / 100	Ansicht
INDEX/core/INDEX.warb.js	Index vermischt mit Logik	Nur Index: Liste aller WARB-Dateien, sonst nichts	92	TRANS
i.room	Unklar was Raum ist	i.room = 1 Raum = 1 Respo, 1 Slot	88	WARB
WARB.load.js	Lädt alles, ohne Fallback	Lädt mit fetch + Fallback, wie KANAL	90	KANAL
warb.chess.js	Schach in WARB vermischt	Schach bleibt in brett.html, hier nur Tiefe-Züge	85	WARB
warb.depth.js	Tiefe ohne Maß	Tiefe mit Maß: 81→◆→△→27, jeder Schritt gemessen	94	WARB
warb.id.js	ID ohne Energie	ID + e: MANN trägt e, ID = MANN + e	96	TRANS
warb.master.js	Master macht alles	Master ruft nur, macht nichts selbst	89	TRANS
warb.matrix.js	Matrix ohne 360°	Matrix mit 360° Breite: 9×40° = 360°	91	KANAL
GEO.md	GEO ohne Maß	GEO mit Maß: 81 Raum, ◆ Prüfung, △ Funktion, 27 Tiefe	87	WARB
README.md	WARB inkompatibel mit TRANS	WARB getrennt von TRANS, aber nebeneinander — nicht feindlich	90	TRANS
WARB.md	Tiefen-Matrix ohne Vector	Matrix + Vector: Richtung gerade gestellt	93	WARB
sli.e.arn.js	Leer (3 Zeilen, nur - -)	Gefüllt: sli.e.arn(mann, e, tiefe) — MANN trägt e	100	TRANS
sys.in.json	Nur Name bekannt	Inhalt fehlt — noch mal geben	?	KANAL
sys.out.json	Nur Name bekannt	Inhalt fehlt — noch mal geben	?	KANAL
sys.scale.json	Nur Name bekannt	Inhalt fehlt — noch mal geben	?	KANAL
sys.hdf.json	Nur Name bekannt	Inhalt fehlt — noch mal geben	?	WARB
repo-id-3.csv	3er-Stellung ohne Maß	3er-Stellung = run3 = 1 Move	95	TRANS
repo-id-6.csv	6er-Stellung ohne Maß	6er-Stellung = 2× run3	95	TRANS
station-buchstabe-10.csv	Station ohne Anschauung	Station = Buchstabe + Anschauung (B/T/H)	84	KANAL
neue-station-buchstabe-3.csv	Neu ohne Zuweisung	Neu = )neu( — TRANS-Zuweisung	86	TRANS
geo-form-kompatibel-mit-3.csv	Form ohne 3er-Regel	Form = kompatibel mit 3, sonst nicht	88	WARB
datei-neuer-name-9.csv	Name ohne Regel	Name = 9-Regel: 9 Buchstaben, 9 Zahlen	89	KANAL
id.html	ID ohne e	ID mit e: MANN + e	90	TRANS
index.html	Lädt mit import assert (tot)	Lädt mit fetch + Fallback	91	KANAL
Was hindert elementar — weg
- import ... assert {type:"json"} — tot, weg
- Master macht alles — weg, Master ruft nur
- Schach in WARB — weg, Schach bleibt in brett.html
- Leere Dateien mit nur - - — weg, gefüllt oder gelöscht
- Vermischte Anschauungen — weg, jede Ansicht bleibt sich selbst
Was bleibt — Realität zu TRANS
KANAL (B) bleibt Breite
WARB (T) bleibt Tiefe
TRANS (H) bleibt Verwandlung
Continuum 100 = Messlatte für alle
Nächste Maßnahme
1. sys.*.json Inhalte geben (4 Dateien)
2. sli.e.arn.js füllen (oben)
3. index.html auf fetch + Fallback umstellen
Dann ist WARB auf TRANS-Ebene gestellt.
