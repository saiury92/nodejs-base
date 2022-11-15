require('dotenv').config();

// packages
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require("cors");

// express
const express = require('express');
const app = express();
app.use(cors());

// middleware
const notFoundMiddleware = require('./app/middleware/not-found');
const errorHandlerMiddleware = require('./app/middleware/error-handler');

app.use(morgan('tiny'));
app.use(express.json());

// security packages
app.use(helmet());


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

require("./app/routes/turorial.routes")(app);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// set port, listen for requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
