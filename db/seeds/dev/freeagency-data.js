const { data } = require('../../../data/data.js')

const createTeam = (knex, team) => {
  return knex('teams').insert({
    team_name: team.team,
    conference: team.conference,
    mascot: team.mascot,
  }, 'id')
    .then(teamID => {
      let playerPromises = [];

      team.new_players.forEach(player => {
        playerPromises.push(
          createPlayer(knex, {
            player_name: player.player,
            position: player.position,
            contract_value: player.contract_value,
            new_team: teamID[0]
          })
        )
      });
      return Promise.all(playerPromises)
    })
}

const createPlayer = (knex, player) => {
  return knex('players').insert(player)
}
exports.seed = function (knex, Promise) {
  return knex('players').del()
    .then(() => knex('teams').del())
    .then(() => {
      let teamPromises = [];

      data.forEach(team => {
        teamPromises.push(createTeam(knex, team));
      })
      return Promise.all(teamPromises)
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
