const axios = require('axios');

const bnbClient = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000
});

const sipClient = axios.create({
  baseURL: 'http://localhost:3002',
  timeout: 5000
});

module.exports = { bnbClient, sipClient };
