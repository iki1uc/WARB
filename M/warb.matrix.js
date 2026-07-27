import { warbColor } from "./warb.depth.js";

export function buildWARBMatrix9(list){
    const m = [];

    for(let r=0; r<9; r++){
        const row = [];

        for(let c=0; c<9; c++){
            const index = r*9 + c;

            if(index < list.length){
                const T = list[index].T;
                const col = warbColor(T);
                row.push(T + ":" + col);
            } else {
                row.push("-");
            }
        }

        m.push(row);
    }

    return m;
}
