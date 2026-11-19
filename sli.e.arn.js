// sli.e.arn.js — WARB
// sli = gleiten, e = Energie, arn = ernten
// MANN trägt e. e fließt. arn erntet.

function sli_e_arn(mann, energie, tiefe){
  // mann = Träger, energie = e, tiefe = Ziel (z.B. 27)
  const gleit = [];
  for(let t=0; t<=tiefe; t+=9){
    gleit.push({
      breite: 360 - t*4,
      tiefe: t,
      e: energie,           // e bleibt gleich — Energie geht nicht verloren
      mann: mann            // Mann bleibt gleich — Träger bleibt
    });
  }
  return {
    mann: mann,             // MANN
    e: energie,             // e = Energie
    gleit: gleit,           // sli
    geerntet: "arn",        // arn
    fazit: "MANN trägt e durch sli, arn erntet. e bleibt. MANN bleibt."
  };
}

// Beispiel:
sli_e_arn("MANN", 100, 27)
// → MANN trägt 100 Energie, gleitet von 360° nach 27, arn erntet
