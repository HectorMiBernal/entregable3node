const Actors = require("./Actor");
const Directors = require("./Director");
const Genres = require("./Genre");
const Movies = require("./Movie");

Movies.belongsToMany(Actors,  {through: "MoviesActors" });
Actors.belongsToMany(Movies, {through: "MoviesActors"} );

Movies.belongsToMany(Directors, { through: "MoviesDirectors" });
Directors.belongsToMany(Movies, { through: "MoviesDirectors" });

Movies.belongsToMany(Genres, { through: "MoviesGenres" });
Genres.belongsToMany(Movies, { through: "MoviesGenres" });