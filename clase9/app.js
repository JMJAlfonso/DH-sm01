const movies = require('./movies');



// for (let index = 0; index < movies.length; index++) {
//     const movie = movies[index];
//     const message = movie.id + '. Genero: ' + movie.genre + ', rating: ' + movie.rating + ', premios: ' + movie.awards + ', duracion: ' + movie.length + 'min, precio: u$' + movie.price;
//     console.log(message);
// }

for (let index = 0; index < movies.length; index++) {
    const movie = movies[index];
    const message = `${movie.id}. Genero: ${movie.genre}, rating: ${movie.rating}, premios: ${movie.awards}, duracion: ${movie.length}min, precio: u$${movie.price}`;
    console.log(message);
}
