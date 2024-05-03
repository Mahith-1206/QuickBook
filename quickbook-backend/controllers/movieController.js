import axios from "axios";
import { getVenuesByEventId } from "../models/eventVenueModel.js";
import db from "../config/dbConfig.js";

const getMovieController = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movieInfoUrl =
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "?api_key=cd3b90152fe991306b189d1e8dd01428";
    const movieInfoResponse = await axios.get(movieInfoUrl);

    // Extract relevant data from the external API response
    const { id, original_title, overview, poster_path, release_date, runtime } =
      movieInfoResponse.data;
    const movieDetails = {
      id,
      original_title,
      overview,
      poster_path,
      release_date,
      runtime,
    };

    const movieTrailerUrl =
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "/videos?language=en-US&api_key=cd3b90152fe991306b189d1e8dd01428";

    const movieTrailerResponse = await axios.get(movieTrailerUrl);

    const trailer = movieTrailerResponse.data.results.find(
      (item) => item.type === "Trailer"
    );

    movieDetails.trailerKey = trailer.key;

    const movieCastUrl =
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "/credits?api_key=cd3b90152fe991306b189d1e8dd01428";

    const movieCastResponse = await axios.get(movieCastUrl);
    // Extract the first 4 cast members
    const first4Cast = movieCastResponse.data.cast.slice(0, 4);

    // Extract the first 4 crew members
    const first4Crew = movieCastResponse.data.crew.slice(0, 4);

    movieDetails.cast = first4Cast;
    movieDetails.crew = first4Crew;

    res.status(200).json({ success: true, movie: movieDetails });
  } catch (error) {
    console.error("Error getting movie details:", error);
    res
      .status(500)
      .json({ success: false, error: "Could not fetch movie details" });
  }
};

const getMovieTimingsController = async (req, res) => {
  try {
    const movieId = req.params.id;
    const theatres = await getVenuesByEventId(movieId);
    if (theatres) {
      res.status(200).json({ success: true, theatres });
    } else {
      res.status(404).json({ success: false, error: "User not found" });
    }
  } catch (error) {
    console.error("Error getting movie timings:", error);
    res
      .status(500)
      .json({ success: false, error: "Could not fetch movie timings" });
  }
};

const searchMovieController = async (req, res) => {
  const query = req.query.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  const moviesCollection = db.collection("movie_names");
  // Perform pattern matching using MongoDB's $regex operator
  // const regexQuery = { name: { $regex: `^${query}`} };
  const regexQuery = { name: { $regex: `^${query}` } };
  console.log("query: ", query);
  console.log("regex: ", regexQuery);

  // db.collection("movie_names")
  //   .find({
  //     regexQuery,
  //   })
  //   .toArray()
  //   .then((restaurants) => {
  //     if (restaurants.length === 0) {
  //       return res
  //         .status(404)
  //         .send("No restaurants found for the given borough and cuisine");
  //     }
  //     res.send(restaurants);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching restaurants:", error);
  //     res.status(500).send("An unexpected error occurred.");
  //   });

  // moviesCollection.find(regexQuery).toArray((err, result) => {
  //   if (err) {
  //     console.error("Error fetching search results:", err);
  //     return res.status(500).json({ error: "Internal server error" });
  //   }
  //   res.json(result.map((movie) => movie.name));
  // });

  const docs = moviesCollection.find({
    name: {
      $regex: query,
      $options: "i",
    },
  });
  const data = await docs.toArray();
  console.log("Doc Len", data.length);
  res.status(200).json(data);
};

export { getMovieController, getMovieTimingsController, searchMovieController };
