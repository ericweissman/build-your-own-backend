// Update with your config settings.

module.exports = {

  //set the development environment
  development: {
    //using postGres
    client: 'pg',
    //setting destination for database
    connection: 'postgres://localhost/freeagency',
    useNullAsDefault: true,
    migrations: {
      //this is where to find the migrations for setting up my tables/database
      directory: './db/migrations'
    },
    seeds: {
      //this is where to find the seed data
      directory: './db/seeds/dev'
    }
  },

  production: {
    //use postGres for production environment
    client: 'pg',
    //set the correct URL for production and require SSL authentication for server and browser
    connection: process.env.DATABASE_URL + `?ssl=true`,
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    }
  }
};
