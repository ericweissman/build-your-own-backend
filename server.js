//require express
const express = require('express');
const cors = require('cors');
//create a new app using express
const app = express();
//ensure that express is setup to parse JSON
app.use(express.json())
app.use(cors())
//set the environment based on the correct environment as outlined by our config file, default to development
const environment = process.env.NODE_ENV || 'development';
//references the config set up w/in our Knex file
const configuration = require('./knexfile')[environment];
//refernces the database we created using our knex file
const database = require('knex')(configuration);

//set the porst based on whatever port is referenced in our config file base on the environment, default to 3000
app.set('port', process.env.PORT || 3001);
//sets the title of the local database storage
app.locals.title = 'NFL Free Agency 2019';

//make sure that the express app is listening for changes on the correct port
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
})

//make a get request to the following endpoint
app.get('/api/v1/teams', (request, response) => {
  //from the database, select all of the teams
  database('teams').select()
  //if everything is OK, send a 200 response code with the JSON version of hte teams data
    .then(teams => {
      response.status(200).json(teams)
    })
    //if there is an error, send the 500 status code and a JSON message of the error encountered
    .catch(error => {
      response.status(500).json({ error });
    })
})

//make a get request to the players endpoint
app.get('/api/v1/players', (request, response) => {
  //from the players database, grap all the players
  database('players').select()
  //then send a response with 200 indicating success and send all the players
    .then(players => {
      response.status(200).json(players)
    })
    //if there is an error, send a 500 status code with the associated error
    .catch(error => {
      response.status(500).json({ error })
    })
})

//make a get request for a certain team
app.get('/api/v1/teams/:id', (request, response) => {
  //find a team in the database where the id matches the id form the request params(the part after the '/')
  database('teams').where('id', request.params.id).select()
    .then(team => {
      //if there is team that is returned (aka a team was found)
      if (team.length) {
        //send a resposne of 200 and the associated team
        response.status(200).json(team)
      } else {
        //if there isnt a team, send a 404 with a message that the team wasnt found
        response.status(404).json({
          error: `Could not find a team with id ${request.params.id}`
        })
      }
    })
    //if there is an error with teh request, send a 422 and a message outlining the error
    .catch(error => {
      response.status(422).json({ error: error })
    })
})

//make a get request for a certain player
app.get('/api/v1/players/:id', (request, response) => {
  //find a player where the id matches the request params
  database('players').where('id', request.params.id).select()
  //if there is a player found
    .then(player => {
      if (player.length) {
        //return a response of 200 with the json of that playaer
        response.status(200).json(player)
      } else {
        //if the player is not found, send a 404 with a message
        response.status(404).json({
          error: `Could not find a player with id ${request.params.id}`
        })
      }
    })
    //if there is an error with the request, send the associated error with a 422 status code
    .catch(error => {
      response.status(422).json({ error: error })
    })
})

//create a new team
app.post('/api/v1/teams', (request, response) => {
  //the team info from the request body is used to make a new team
  const team = request.body
  //outline the required params for a new team object, which is passed in the request.body
  for (let requiredParameter of ['team_name', 'conference', 'mascot']) {
    //if the passed in team is missing one of the required params
    if (!team[requiredParameter]) {
      //send a 422 and tell the suer which requiredParam they are missing. 
      return response
        .status(422)
        .send({ error: `Expected format: { team_name: <String>, conference: <String>, mascot: <String> }. You're missing a ${requiredParameter} property.` })
    }
  }
  //otherwise, if all params are correctly pased in, add the new team to the team table and have knex handle creating a new id
  database('teams').insert(team, 'id')
  //then, send a 202 response with a json of the new id of the team
    .then(team => {
      response.status(201).json({ id: team[0] })
    })
    //if there is an error with the request, send a 500 code and the associated error
    .catch(error => {
      response.status(500).json({ error })
    })
})

//add a new player
app.post('/api/v1/players', (request, response) => {
  //use the data from the request body for hte player data
  const player = request.body
  //sets up the required params for hte request body
  for (let requiredParameter of ['player_name', 'position', 'new_team', 'contract_value']) {
    //if any of these params are missing...
    if (!player[requiredParameter]) {
      //send a 422 and let the user know hwihc param they are missing
      return response
        .status(422)
        .send({ error: `Expected format: { player_name: <String>, position: <String>, new_team: <Integer>, contract_value: <Integer>}. You're missing a ${requiredParameter} property.` })
    }
  }
  //if they are not missing any params, add a new player to the palyers table and have knex handle craeting an id
  database('players').insert(player, 'id')
  //then send back a 201 with the new players id to indicate success
    .then(player => {
      response.status(201).json({ id: player[0] })
    })
    //otherwise, send a 500 error if there is an issue with the request
    .catch(error => {
      response.status(500).json({ error })
    })
})

//delete a certain player based on the specific id of from the request params
app.delete('/api/v1/players/:id', (request, response) => {
  //sets up a helper variable to assist with other language
  let found = false
  //go into the players database and select ALL of the players
  database('players').select()
  //using all of the players...
    .then(players => {
      //iterate over each player
      players.forEach(player => {
        //if the certain players id is equal to the id from the request params
        if (player.id === parseInt(request.params.id)) {
          //reassign found to be TRUE
          found = true
        }
      })
      //if there was not a player found aka found is still assinged to FALSE
      if (!found) {
        //send back a 404 response with a json message that there was no player found
        return response.status(404).json(`Player not found - delete unsuccessful`)
      } else {
        //otherwise if the player IS found, go into the players database and find the player with the ID from the request.params and then delete them
        database('players').where('id', parseInt(request.params.id)).del()
          .then(() => {
            //then send a 202 with a json of the deleted player
            response.status(202).json(`Deleted player with id of ${request.params.id}`)
          })
      }
    })
    //if there is an error with the request, 
    .catch(error => {
      response.status(500).json({ error })
    })
})

app.delete('/api/v1/teams/:id', (request, response) => {
  let found = false
  database('teams').select()
    .then(teams => {
      teams.forEach(team => {
        if (team.id === parseInt((request.params.id))) {
          found = true
        }
      })
      if (!found) {
        return response.status(404).json(`Team not found - delete unsuccessful`)
      } else {
        database('teams').where('id', parseInt(request.params.id)).del()
          .then(() => {
            response.status(202).json(`Deleted team with id of ${request.params.id}`)
          })
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})
