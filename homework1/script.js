const numberOfFilms = prompt ("Сколька фильмов ви уже посмотрели" , '');

const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors :{},
    genres: [],
    privat: false
};

const a = prompt ('Один из последних просмотриних фильмов', ''),
      b = prompt ('На сколько оцените ево', ''),
      c = prompt ('Один из последних просмотриних фильмов', ''),
      d = prompt ('На сколько оцените ево', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log (personalMovieDB);