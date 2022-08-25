//mongodb

require('./config/db');

const app = require('express')();

const port = 3000;

var cors = require('cors');

app.use(cors());

//From api router
const UserRouter = require('./api/User');


//for accepting post form data

const bodyParser = require('express').json;

app.use(bodyParser());

app.use('/user',UserRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})