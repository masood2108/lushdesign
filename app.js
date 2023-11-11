const express = require('express');
const app = express();
const path = require('path'); // Import the path module
const port = 3000;

// Define a route to serve the index.html file from the 'dist' folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.get('/work', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'work.html'));
});
app.get('/chronicles', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'chronicles.html'));
});


// Serve static files from the 'dist' folder (e.g., CSS, JavaScript, images)
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});