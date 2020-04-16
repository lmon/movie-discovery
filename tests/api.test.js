
const request = require('supertest')
const req = request('http://localhost:5000');

describe('App Endpoints', () => {
  it('should fetch a movie', async () => {
    const res = await req
      .get('/movies/505')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('movie_data.title')
  })

  it('should fetch a movie cast', async () => {
    const res = await req
      .get('/movie/505/credits')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('credits')
  })

  it('should fetch similar movies', async () => {
    const res = await req
      .get('/movie/505/similar')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('movie_data.results')
  })

  it('should fetch movie search results', async () => {
    const res = await req
      .get('/search/lattice')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('movies.results')
  })

  it('should fetch a movie list', async () => {
    const res = await req
      .get('/list')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('movie_data')
  })
})