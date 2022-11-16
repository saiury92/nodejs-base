require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DEV_DB2_USERNAME || 'root',
    password: process.env.DEV_DB2_PASSWORD || '123456',
    database: process.env.DEV_DB2_NAME || 'qlear_login_users',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
  },
  test: {
    username: process.env.CI_DB2_USERNAME,
    password: process.env.CI_DB2_PASSWORD,
    database: process.env.CI_DB2_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
  },
  production: {
    username: process.env.PROD_DB2_USERNAME,
    password: process.env.PROD_DB2_PASSWORD,
    database: process.env.PROD_DB2_NAME,
    host: process.env.PROD_DB2_HOSTNAME,
    port: process.env.PROD_DB2_PORT || 3306,
    dialect: 'mysql'
  }
};
