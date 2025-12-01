let peliculas = ['The Matrix','Interstellar','Superman','Iron Man'];

let peliculasJson=JSON.stringify(peliculas);

console.log(peliculasJson);


localStorage.setItem('favoritos',peliculasJson);

let recuperoStorage = localStorage.getItem('favoritos');

console.log(recuperoStorage);

let resultadoFinal=JSON.parse(recuperoStorage);
