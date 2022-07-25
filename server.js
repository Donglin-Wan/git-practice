require('dotenv').config();
const express = require('express');
const router = require('./routes/index');
const cors = require('cors');
const app = express();

app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Service is listening !');
});

app.use('/v1', router);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
