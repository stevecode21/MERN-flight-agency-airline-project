const app = require('./app');
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;
const port = process.env.PORT || 4000;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log(`Mongo db connected\nPort : ${port}`))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`Server running`));




