const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);
app.locals.title = 'NFL Free Agency 2019';

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
})

app.get('/api/v1/teams', (req, resp) => {
  database('teams').select()
    .then(teams => {
      resp.status(200).json(teams)
    })
    .catch(error => {
      resp.status(500).json({ error });
    })
})


app.get('/api/v1/players', (req, resp) => {
  database('players').select()
    .then(players => {
      resp.status(200).json(players)
    })
    .catch(error => {
      resp.status(500).json({ error })
    })
})