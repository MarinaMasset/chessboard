/* 
1) créer un plateau (createElmt table dans body > appendChild)  
2) 1e boucle: créer 8 lignes -> créer tr (createElmt et stocker dans var) 
et ajouter tr(appendChild) dans le table, 
3) 2e boucle imbriquée : pour chaque ligne créer 8 cases -> créer 8 td (createElmt stocker dans var) 
et ajouter au td (appendChild) */

const board = document.createElement("table");
const body = document.body;
const row = 8;
const col = 8;

for (let i = 0; i < row; i++) {
    const tr = document.createElement("tr");
    board.appendChild(tr);

    for (let j = 0; j < col; j++) {
        const td = document.createElement("td");
        tr.appendChild(td);

        if ((i+j)%2===0) {
            td.classList.add("white"); 
        }
    }

}

body.appendChild(board);



