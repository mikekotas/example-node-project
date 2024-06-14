const request = require('supertest');
const app = require('../src/index');
const http = require('http');

let server;

beforeAll((done) => {
  server = http.createServer(app).listen(4000, done); // Start the server on port 4000
  // This will start the server on port 4000
});

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
