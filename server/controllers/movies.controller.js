const fetch = require('node-fetch');
const apiUrl = "https://api.themoviedb.org/3/";
const apiKey = "b6cce7938190e3e5be7a9f857a1d5b0f";
let apiConfigiration = null;

const fetchConfiguration = async () => {
    let endpoint = apiUrl + 'configuration'+ "?api_key=" + apiKey;
    const aqResponse = await fetch(endpoint)
    const aqData = await aqResponse.json();
    apiConfigiration = aqData;
};

exports.list = async (req, res) => {
    if (apiConfigiration == null) {
        await fetchConfiguration();
    }
    let endpoint = apiUrl + 'movie/popular'+ "?api_key=" + apiKey + '&language=en-US&page=1';
    const aqResponse = await fetch(endpoint)
    const aqData = await aqResponse.json();
    const data = {
      movie_data: aqData,
      config: apiConfigiration
    };
    res.json(data);
 };

 exports.search = async (req, res) => {
    let searchTerm = req.params.searchTerm;
    let endpoint = apiUrl + 'search/movie' + "?api_key=" + apiKey + '&query=' + searchTerm;
    console.log(endpoint)
    const aqResponse = await fetch(endpoint)
    const aqData = await aqResponse.json();

    const data = {
      movies: aqData,
    };
    res.json(data);
 };

 exports.getByIdFromApi = async (req, res) => {
    if (apiConfigiration == null) {
        await fetchConfiguration();
    }
    let movieId = req.params.movieId;
    let endpoint = apiUrl + 'movie/ ' + movieId + "?api_key=" + apiKey;
    const aqResponse = await fetch(endpoint)
    const aqData = await aqResponse.json();

    const data = {
      movie_data: aqData,
      config: apiConfigiration
    };
    res.json(data);
 };

exports.getCredits = async (req, res) => {
  let movieId = req.params.movieId;
  let endpoint = apiUrl + 'movie/ ' + movieId + "/credits?api_key=" + apiKey;
  const aqResponse = await fetch(endpoint)
  const aqData = await aqResponse.json();

  const data = {
    credits: aqData
  };
  res.json(data);
};

exports.getRelated = async (req, res) => {
  let movieId = req.params.movieId;
  let endpoint = apiUrl + 'movie/' + movieId + "/similar?api_key=" + apiKey;
  const aqResponse = await fetch(endpoint)
  const aqData = await aqResponse.json();

  const data = {
    movie_data: aqData
  };
  res.json(data);
};

