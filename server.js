const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const taskRoutes = require('./taskRoutes.js');

app.use(express.json());

app.use('/api', taskRoutes)
app.get('/', (req, res) => {
    res.send("Hello world")
});
app.listen(PORT, () => {
    console.log("Hello, the server is up and running now!")
})