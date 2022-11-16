require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DEV_DB1_USERNAME || 'root',
    password: process.env.DEV_DB1_PASSWORD || '123456',
    database: process.env.DEV_DB1_NAME || 'qlear_nft_code',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
  },
  test: {
    username: process.env.CI_DB1_USERNAME,
    password: process.env.CI_DB1_PASSWORD,
    database: process.env.CI_DB1_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
  },
  production: {
    username: process.env.PROD_DB1_USERNAME,
    password: process.env.PROD_DB1_PASSWORD,
    database: process.env.PROD_DB1_NAME,
    host: process.env.PROD_DB1_HOSTNAME,
    port: process.env.PROD_DB1_PORT || 3306,
    dialect: 'mysql'
  }
};
