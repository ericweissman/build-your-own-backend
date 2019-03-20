//import the dataset for seeding
const { data } = require('../../../data/data.js')

//function for creating a new team
const createTeam = (knex, team) => {
  //within the teams table, inserte a new team with a team_name, conference and mascot, based on properties from teh team that is passed in
  return knex('teams').insert({
    team_name: team.team,
    conference: team.conference,
    mascot: team.mascot,
    //let knex handle creating an ID for each team
  }, 'id')
  //then, omce tehe team is created and added to table and has an associated ID...
    .then(teamID => {
      //creating a helper array of promises for code below, will us Promise.all to resolve these...
      let playerPromises = [];
      //using the new players associated with each team that is based on the teamID, iterate over these players
      team.new_players.forEach(player => {
        //push a new player, which is created using the function below, that has properties of player_name, position, contract_value, and the new_team which is associated with the teamID of the current team from the iteration on line 13
        playerPromises.push(
          createPlayer(knex, {
            player_name: player.player,
            position: player.position,
            contract_value: player.contract_value,
            new_team: teamID[0]
          })
        )
      });
      //after all the players have been added to a particular team, resolve the players (which are unresolved Promises) to add them to the team
      return Promise.all(playerPromises)
    })
}

//function for creating/adding a new player
const createPlayer = (knex, player) => {
  //add the player to the players table
  return knex('players').insert(player)
}

//seeds the data
exports.seed = function (knex, Promise) {
  //delete all the info from the players table
  return knex('players').del()
  //then delete all the data from the teams table
    .then(() => knex('teams').del())
    //then create a helper array of promises that we will resolve with promise.all
    .then(() => {
      let teamPromises = [];
      //iterate over the data that we imported
      data.forEach(team => {
        //create a new team with the data (and the associated players from the createTeam function) and add to the teamPromises
        teamPromises.push(createTeam(knex, team));
      })
      //resolve all of team team Promise objects from the helper array
      return Promise.all(teamPromises)
    })
    //if there is some error, send a message alerting the issue
    .catch(error => console.log(`Error seeding data: ${error}`))
};
