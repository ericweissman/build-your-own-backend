
exports.up = function(knex, Promise) {
  return Promise.all([
    //create a table for Teams
    knex.schema.createTable('teams', table => {
      //have KNEX handle creating the ID and declare it as the primary key
      table.increments('id').primary();
      //declare the headers of each column and the data type associated with each column
      table.string('team_name');
      table.string('conference');
      table.string('mascot');
      //set timestamps for when an entry is created and when it is edited
      table.timestamps(true, true);
    }),
    knex.schema.createTable('players', table => {
      //set up a table for players
      table.increments('id').primary();
      //sets up the columns and associated datatypes for my table
      table.string('player_name');
      table.string('position');
      //assign new_team as the foreign key that references the ID/primary key within my teams table
      table.integer('new_team').unsigned()
      table.foreign('new_team')
        .references('teams.id');
      table.integer('contract_value');
      //set timestamps for when an entry is created and edited
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    //tear down for if/when Rollback to delete each table - start with the table that includes foreign keys before deleting table that has primary keys
    knex.schema.dropTable('players'),
    knex.schema.dropTable('teams')
  ])
};
