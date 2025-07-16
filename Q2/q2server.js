const express = require('express');
const app = express();

app.use(express.static("q2static"));
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});