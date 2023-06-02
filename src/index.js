const express = require('express');
const routes  = require('./routes');
const cors = require('cors');
const application = express();

application.use(cors())

application.use(express.json());

application.use('/api', routes);

application.listen(3000);