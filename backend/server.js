const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());


app.post('/api/v2', (req, res) => {
  // Handle your API logic here
  res.json({ message: 'API response' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
