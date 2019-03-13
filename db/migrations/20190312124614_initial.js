
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('teams', table => {
      table.increments('id').primary();
      table.string('team_name');
      table.string('conference');
      table.string('mascot');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('players', table => {
      table.increments('id').primary();
      table.string('player_name');
      table.string('position');
      table.integer('new_team').unsigned()
      table.foreign('new_team')
        .references('teams.id');
      table.integer('contract_value');
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('players'),
    knex.schema.dropTable('teams')
  ])
};
