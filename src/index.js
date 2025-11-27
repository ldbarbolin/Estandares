const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const qrROutes = require('./controllers/qrController');
app.use('/qr', qrROutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});