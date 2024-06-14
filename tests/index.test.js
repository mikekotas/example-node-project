const request = require('supertest');
const { app, server } = require('../src/index');

afterAll((done) => {
  server.close(done); // Properly close the server after tests
});

describe('GET /', () => {
  it('should respond with Hello, world!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});

describe('GET /new', () => {
  it('should respond with New endpoint', async () => {
    const response = await request(app).get('/new');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('New endpoint');
  });
});
