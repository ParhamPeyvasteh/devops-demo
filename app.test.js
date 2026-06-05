const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('returns Hello World with time', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello, World!');
    expect(res.body).toHaveProperty('time');
  });
});

describe('GET /health', () => {
  it('returns OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('OK');
  });
});

describe('GET /counter', () => {
  it('increments visitor count', async () => {
    const res1 = await request(app).get('/counter');
    const res2 = await request(app).get('/counter');
    expect(res1.body.visits).toBe(1);
    expect(res2.body.visits).toBe(2);
  });
});