# WARB – Tiefe (T)

## ID-System
WARB arbeitet mit der ID **T** (Tiefe).  
Diese ID ist ein 1‑Zeichen‑Schlüssel und wird als TMP‑Speicherpfad genutzt:

`TMP/T/<slot>.json`

## Albertus Orbit Engine C
WARB nutzt die Orbit‑Engine C, die automatisch:

- 3×3 Slots (1–9)
- VAR-Slots (V1–V9)
- Meta-Slot (X)
- Orbit-Slot (∞)

durchläuft und ausweicht, wenn ein Slot besetzt ist.

## Slot-Finder
WARB verwendet:

`ALBERTUS_FIND_SLOT(T, busy)`

Die Engine wählt automatisch den nächsten freien Slot.

## RESPO_T – Tiefen-Interpretation
RESPO interpretiert TMP-Daten als Tiefenmatrix.

## BEN_T – Tiefen-Bewertung
BEN bewertet die Tiefenstruktur des aktiven TMP-Slots.

## AI-T – Tiefen-Steueralgorithmus
Der AI-Algorithmus steuert den Tiefenorbit und entscheidet,
wie RESPO/BEN-Daten weiterverwendet werden.

## Zweck
WARB bildet die Tiefenachse des Systems.
