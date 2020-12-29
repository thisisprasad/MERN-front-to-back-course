const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.get('/', (request, response) => {
    console.log("API hit...");
    response.send("API running...");
});
connectDB();

//  Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.NODE_ENV || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));