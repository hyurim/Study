let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];

// let genresSet = new Set(genres);
// console.log(genresSet.values());

const song = new Map([]);

for(let a = 0; a < genres.length; a++){
    song.set[genres[a], plays[a]];
    console.log(song.values());    
}
