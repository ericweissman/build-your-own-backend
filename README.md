# Build Your Own Backend - NFL Free Agency API
Keeping up with the flurry of player transactions during the NFL Free Agency period can be a real headache. Use this API allows to find which teams have added new players and the contract value of each acquisition. You can also search for specific players and see their new teams. Feel free to contribute by adding players and their new teams/contracts!


## API Calls
## GET
> You can get data on all teams, all players, specific teams and specific players

### ```GET /api/v1/teams```   
**Example Response**
```
[
  {
      "id": 65,
      "team_name": "DEN",
      "conference": "AFC West",
      "mascot": "Broncos",
      "created_at": "2019-03-12T21:18:41.236Z",
      "updated_at": "2019-03-12T21:18:41.236Z"
  },
  {
      "id": 66,
      "team_name": "KC",
      "conference": "AFC West",
      "mascot": "Chiefs",
      "created_at": "2019-03-12T21:18:41.240Z",
      "updated_at": "2019-03-12T21:18:41.240Z"
  },
  {
      "id": 67,
      "team_name": "OAK",
      "conference": "AFC West",
      "mascot": "Raiders",
      "created_at": "2019-03-12T21:18:41.243Z",
      "updated_at": "2019-03-12T21:18:41.243Z"
  }
]
```  
### ```GET /api/v1/players```   
**Example Response**
```
[
  {
      "id": 1,
      "player_name": "Ja'Wuan James",
      "position": "RT",
      "new_team": 65,
      "contract_value": 51000000,
      "created_at": "2019-03-12T21:18:41.260Z",
      "updated_at": "2019-03-12T21:18:41.260Z"
  },
  {
      "id": 11,
      "player_name": "Nick Foles",
      "position": "QB",
      "new_team": 73,
      "contract_value": 88000000,
      "created_at": "2019-03-12T21:18:41.266Z",
      "updated_at": "2019-03-12T21:18:41.266Z"
  },
  {
      "id": 21,
      "player_name": "Landon Collins",
      "position": "FS",
      "new_team": 85,
      "contract_value": 84000000,
      "created_at": "2019-03-12T21:18:41.271Z",
      "updated_at": "2019-03-12T21:18:41.271Z"
  }
]
```    
### ```GET /api/v1/teams/:id```  
Returns information on the specific team based on the dynamic id   
Request: ```/api/v1/teams/85```  
**Example Response** 
```
[
  {
      "id": 85,
      "team_name": "WAS",
      "conference": "NFC East",
      "mascot": "R-Words",
      "created_at": "2019-03-12T21:18:41.253Z",
      "updated_at": "2019-03-12T21:18:41.253Z"
  }
]
```  
### ```GET /api/v1/players/:id```  
Returns information on the specified attraction   
Request: ```/api/v1/attractions/21```  
**Example Response**  
```
[
  {
      "id": 21,
      "player_name": "Landon Collins",
      "position": "FS",
      "new_team": 85,
      "contract_value": 84000000,
      "created_at": "2019-03-12T21:18:41.271Z",
      "updated_at": "2019-03-12T21:18:41.271Z"
  }
]
```
## POST
> User can post a new team and a new player. If the post is successful, the user will be prompted with the id of the newly created team/player

### ```POST /api/v1/teams```  
**Required Input for Request Body**  

| Name       | Type          | Description  |
| ------------- | ------------- | ----- |
| `team_name`      | `string` | Name of the new team |
| `conference`      | `string`      |   Name of conference associated with new team |
| `mascot`  | `string`     |    Mascot of the newly created team | 
  
**Example Response**
```
{
  id: 55
}
```  

### ```POST /api/v1/players```   
**Required Input for Request Body**  

| Name       | Type          | Description  |
| ------------- | ------------- | ----- |
| `player_name`      | `string` | Name of of the new player |
| `position`      | `string`      |   Position of the new player |
| `new_team`  | `integer`     |    ID of the team the new player belongs to |
|`contract_value` | `integer` |  Value of new deal for the player |
   

**Example Response**
```
{
  id: 78
}
```  
## DELETE  
> Users can delete specific teams or specific players when passing the correct id through the URL provided

**Required:**
The id of the team or player to be deleted
### ```DELETE /api/v1/teams/:id```  
### ```DELETE '/api/v1/players/:id```  
**Example Response**
```
Deleted team with the id of 55
```
```
Delete player with the id of 97
```
