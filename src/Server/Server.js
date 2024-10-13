const cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;
app.use(cors()); // Use cors
const init = require('./Router');

// Middleware to parse JSON bodies
app.use(express.json());
init(app)
// // Define a route for your API
// app.get('/api/hello', (req, res) => {
//     res.json({ message: 'Hello from the server!' });
// });
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});