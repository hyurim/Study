const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

let sing = [];
let array1 =[];

const genre1 = new Set(genres);
console.log(genre1);

for(let a = 0; a < genres.length; a++){
    sing.push({genre : genres[a], play : plays[a]});
}

sing.sort((b,c) => {
    if (c.genre === b.genre){
        return c.play - b.play;
    }
    else{
        return b.genre.localeCompare(c.genre)
    }}
    );
console.log(sing[0]);

for(let aa = 0; aa < genre1; aa++) {
    if(sing.includes(genre1[aa]) == true) {
        a

    }
}

