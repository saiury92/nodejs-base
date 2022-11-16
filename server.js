require('dotenv').config();

// packages
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require("cors");
const db = require("./app/models");
const Company = db.Company;
const CompanyUser = db.CompanyUser;

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
  const company = {
    company_name: 'Test Company',
    tel: 030303030,
    email: 'test@test.com',
  };
  const companyUser = {
    first_name: 'Test first_name',
    last_name: 'Test last_name',
    email: 'test@test.com',
  };
  Company.create(company)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Company."
      });
    });
  // res.json({ message: "Welcome to application." });
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// set port, listen for requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
