function solve(input) {
  let movies = [];

  for (const line of input) {
    let commandToken = line.split(' ')

    if (line.includes('addMovie')) {
      let movieName = commandToken.slice(1).join(' ')
      addMovie(movieName)
      
    } else if (line.includes('directedBy')) {
      let commandIndex = commandToken.indexOf('directedBy')
      let movieName = commandToken.slice(0, commandIndex).join(' ')
      let director = commandToken.slice(commandIndex+1).join(' ')

      addDirector(movieName, director)

    } else if (line.includes('onDate')) {
      let commandIndex = commandToken.indexOf('onDate')
      let movieName = commandToken.slice(0, commandIndex).join(' ')
      let date = commandToken.slice(commandIndex+1).join(' ')

      addDate(movieName, date)

    }
  }

   for(const movie of movies) {
    if(movie.date && movie.director) {
      console.log(JSON.stringify(movie))
    }
  }

  function addMovie(name) {
    movies.push({ name });
  }

  function addDirector(name, director) {
    let movie = movies.find((m) => m.name == name);
    if(movie) {
      movie.director = director;
    }
  }

  function addDate(name, date) {
    let movie = movies.find((m) => m.name == name);

    if(movie) {
      movie.date = date;
    }
  }
}


solve([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
])