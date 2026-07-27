export function warbChess(T){
    switch(T){
        case "T6": return "♔"; // König
        case "T5": return "♕"; // Dame
        case "T4": return "♖"; // Turm
        case "T3": return "♗"; // Läufer
        case "T2": return "♘"; // Springer
        default:   return "♙"; // Bauer
    }
}
