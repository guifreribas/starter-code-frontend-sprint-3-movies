// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
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
function orderByYear(array) {
  const newArray = [...array];
  return newArray.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title < b.title) {
        return 1;
      }
      return 0;
    }
    return a.year - b.year;
  });
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  if (typeof category !== 'string') return 'Category must be a string';
  if (typeof category !== 'string' || category === ' ') return Number('0.00');
  const scores = array
    .filter((movie) => movie.genre.includes(category))
    .map((movie) => movie.score);
  const count = scores.length;
  const total = scores.reduce((acc, score) => {
    if (typeof score === 'number') return acc + score;
    return acc;
  }, 0);
  return count === 0 ? Number('0.00') : Number((total / count).toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const regexToMatchHour = new RegExp(/(\d+)h/);
  const regexToMatchMinutes = new RegExp(/(\d+)min/);
  const parsedMovies = array.map((movie) => {
    const hours = movie.duration.match(regexToMatchHour);
    const minutes = movie.duration.match(regexToMatchMinutes);
    const hoursParsed = hours ? Number(hours[1]) : 0;
    const minutesParsed = minutes ? Number(minutes[1]) : 0;
    const duration = hoursParsed * 60 + minutesParsed;
    return { ...movie, duration };
  });
  return parsedMovies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const newArray = [...array];
  let maxScore = 0;
  return newArray
    .filter((movie) => {
      if (movie.year === year) {
        if (movie.score > maxScore) maxScore = movie.score;
        return movie;
      }
    })
    .filter((movie) => movie.score === maxScore);
}

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
