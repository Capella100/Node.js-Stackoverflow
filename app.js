const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const posts = require('./routes/Post');
const users = require('./routes/users');
const jwt = require('jsonwebtoken');
const app = express();

const PORT = process.env.PORT || 8000;

const validateUser = (req, res, next) => {
    const decodedPayload = jwt.verify(req.headers['x-access-token'], 'secretkey')
    if (decodedPayload) {
        req.body.userId = decodedPayload.id
        next();
    } else {
        res.json({
            status: "error",
            message: "user not validated"
        })
    }
}

app.use(bodyParser.json());
app.use('/posts', posts);
app.use('/users', validateUser, users);




async function connect() {
    await mongoose.connect('mongodb://localhost:27017/Stackoverflow')
}

connect().then(() => console.log('Database connection successful')).catch((error) => {
    console.log('Error:', error)
});


app.listen(PORT, () => {
    console.log(`connected to PORT ${PORT}`);
})