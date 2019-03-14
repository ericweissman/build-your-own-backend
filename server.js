const express = require('express');
const app = express();
app.use(express.json())
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);
app.locals.title = 'NFL Free Agency 2019';

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
})

app.get('/api/v1/teams', (request, response) => {
  database('teams').select()
    .then(teams => {
      response.status(200).json(teams)
    })
    .catch(error => {
      response.status(500).json({ error });
    })
})


app.get('/api/v1/players', (request, response) => {
  database('players').select()
    .then(players => {
      response.status(200).json(players)
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

app.get('/api/v1/teams/:id', (request, response) => {
  database('teams').where('id', request.params.id).select()
    .then(team => {
      if (team.length) {
        response.status(200).json(team)
      } else {
        response.status(404).json({
          error: `Could not find a team with id ${request.params.id}`
        })
      }
    })
    .catch(error => {
      response.status(422).json({ error: error })
    })
})

app.get('/api/v1/players/:id', (request, response) => {
  database('players').where('id', request.params.id).select()
    .then(player => {
      if (player.length) {
        response.status(200).json(player)
      } else {
        response.status(404).json({
          error: `Could not find a player with id ${request.params.id}`
        })
      }
    })
    .catch(error => {
      response.status(422).json({ error: error })
    })
})

app.post('/api/v1/teams', (request, response) => {
  const team = request.body
  for (let requiredParameter of ['team_name', 'conference', 'mascot']) {
    if (!team[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { team_name: <String>, conference: <String>, mascot: <String> }. You're missing a ${requiredParameter} property.` })
    }
  }
  database('teams').insert(team, 'id')
    .then(team => {
      response.status(201).json({ id: team[0] })
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

app.post('/api/v1/players', (request, response) => {
  const player = request.body
  for (let requiredParameter of ['player_name', 'position', 'new_team', 'contract_value']) {
    if (!player[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { player_name: <String>, position: <String>, new_team: <String>, contract_value: <String>}. You're missing a ${requiredParameter} property.` })
    }
  }
  database('players').insert(player, 'id')
    .then(player => {
      response.status(201).json({ id: player[0] })
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

