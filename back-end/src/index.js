const express = require('express');
const bodyParser = require('body-parser');
const routes  = express.Router()
const cors = require('cors')
const authController = require('./controllers/authController')
const projectController = require('./controllers/projectController');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors({ origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routes.get('/projects', projectController)
routes.get('/projects/:projectId', projectController)
routes.put('/projects/:projectId', projectController)
routes.delete('/projects/:projectId', projectController)
routes.post('/projects', projectController)
routes.post('/auth/register', authController)
routes.post('/auth/authenticate', authController)

require('./controllers/authController')(app);
require('./controllers/projectController')(app);


app.listen(7000);