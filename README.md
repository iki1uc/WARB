# WARB – Tiefe (T)

## 1. ID-System
WARB verwendet die ID **T** (Tiefe).  
Diese ID ist ein 1‑Zeichen‑Schlüssel und wird als TMP‑Speicherpfad genutzt:

`TMP/T/<slot>.json`

Die ID bestimmt:
- Tiefen-Interpretation (RESPO_T)
- Tiefen-Bewertung (BEN_T)
- Tiefen-Steuerung (AI-T)

## 2. Albertus Orbit Engine C
WARB nutzt die Orbit‑Engine C, die automatisch folgende Ebenen durchläuft:

- 3×3 Slots: 1–9  
- VAR-Slots: V1–V9  
- Meta-Slot: X  
- Orbit-Slot: ∞  

Die Engine weicht automatisch aus, wenn ein Slot besetzt ist.

## 3. Slot-Finder
WARB nutzt:

`ALBERTUS_FIND_SLOT(T, busy)`

Die Engine wählt den nächsten freien Slot.

## 4. RESPO_T – Tiefen-Interpretation
RESPO_T interpretiert TMP-Daten als Tiefenmatrix.

## 5. BEN_T – Tiefen-Bewertung
BEN_T bewertet die Tiefenstruktur des aktiven TMP-Slots.

## 6. AI-T – Tiefen-Steueralgorithmus
Der AI-T Algorithmus steuert den Tiefenorbit und entscheidet,
wie RESPO/BEN-Daten weiterverwendet werden.

## 7. Zweck
WARB bildet die Tiefenachse des Systems.

## 8. Module
- [Albertus Engine](ca://s?q=Albertus_Engine)
- [Slot-Finder](ca://s?q=Slot_Finder)
- [RESPO_T](ca://s?q=RESPO_T)
- [BEN_T](ca://s?q=BEN_T)
- [AI-T](ca://s?q=AI_T)
