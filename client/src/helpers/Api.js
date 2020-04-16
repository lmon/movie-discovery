 const baseUrl = 'http://localhost:5000';
 const movieUrl = baseUrl + '/movie/';
 const moviesUrl = baseUrl + '/movies/';
 const searchUrl = baseUrl + '/search/';

 exports.getCast = async (movieId) => {
    const response = await fetch(movieUrl + movieId + '/credits');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
};

exports.getDetail = async (movieId) => {
    const response = await fetch(moviesUrl + movieId);
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body;
};

exports.search = async (searchTerm) => {
    const response = await fetch(searchUrl + searchTerm);
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body;
};

exports.getList = async () => {
    const response = await fetch(baseUrl + '/list');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
};

exports.getRelated = async (movieId) => {
    const response = await fetch(movieUrl + movieId + '/similar');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
};