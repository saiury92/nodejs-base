# Add migrations
npx sequelize-cli --options-path ./.sequelizerc-db1 model:generate --name Tutorial --attributes title:string,description:string,published:boolean

npx sequelize-cli --options-path ./.sequelizerc-db2 model:generate --name User --attributes firstName:string,lastName:string,email:string

# Run migrations
npm run db1:migrate:up
npm run db2:migrate:up