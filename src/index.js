const express = require('express');
const routes  = require('./routes');



const application = express();

application.use(express.json());

application.use('/api', routes);

application.listen(3000);