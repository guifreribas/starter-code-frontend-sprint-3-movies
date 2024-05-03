// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((movie) => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let count = 0;
  const scores = array.reduce((acc, movie) => {
    if (movie.director === director && typeof movie.score === 'number') {
      count++;
      acc = acc + movie.score;
      return acc;
    }
    return acc;
  }, 0);
  return Number((scores / count).toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const newArray = [...array];
  const orderedArray = newArray
    .map((movie) => movie.title)
    .sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  orderedArray.length = orderedArray.length >= 20 ? 20 : orderedArray.length;
  return orderedArray;
}

// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
