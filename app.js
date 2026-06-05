const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let visitorCount = 0;

// Health check endpoint — useful for Kubernetes probes later
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Home page
app.get('/', (req, res) => {
  const now = new Date().toISOString();
  res.json({
    message: 'Hello, World!',
    time: now
  });
});

// Visitor counter
app.get('/counter', (req, res) => {
  visitorCount++;
  res.json({
    visits: visitorCount
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

app.get('/greet', (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(400).json({
      error: 'Missing "name" query parameter. Example: /greet?name=Parham'
    });
  }

  res.json({
    message: `Hello, ${name}! Welcome to our DevOps demo.`,
    time: new Date().toISOString()
  });
});

module.exports = app; // exported so we can test it