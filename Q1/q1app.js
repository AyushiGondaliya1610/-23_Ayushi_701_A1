const express = require('express');
const app = express();


app.use(express.static("q1static"));

app.get('/gethello', (req, res) => {
    res.send('Hello NodeJS!!');
});

app.listen(8000, () => {
    console.log(`Server is running on http://localhost:8000`);
});
