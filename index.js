const express = require('express');
const app = express();

// Determine environment
const env = process.env.NODE_ENV || 'development';
const config = require(`./config/${env}`);

app.get('/', (req, res) => {
  res.send(config.MESSAGE);
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT} in ${env} mode`);
});

