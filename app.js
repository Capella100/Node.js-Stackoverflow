const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json())


async function connect() {
    await mongoose.connect('mongodb://localhost:27017/Stackoverflow')
}

connect().then(() => console.log('Database connection successful')).catch((error) => {
    console.log('Error:', error)
});


app.listen(PORT, () => {
    console.log(`connected to PORT ${PORT}`);
})