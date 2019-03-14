const data = [
  {
    team: 'DEN',
    conference: 'AFC West',
    mascot: 'Broncos',
    new_players:
      [{
        player: 'Ja\'Wuan James',
        position: 'RT',
        new_team: 'DEN',
        contract_value: 51000000
      },
      {
        player: 'Kareem Jackson',
        position: 'S',
        new_team: 'DEN',
        contract_value: 33000000
      }]
  },
  {
    team: 'KC',
    conference: 'AFC West',
    mascot: 'Chiefs',
    new_players:
      [{
        player: 'Tyrann Mathieu',
        position: 'FS',
        new_team: 'KC',
        contract_value: 42000000
      }]
  },
  {
    team: 'LAC',
    conference: 'AFC West',
    mascot: 'Chargers',
    new_players: []
  },
  {
    team: 'OAK',
    conference: 'AFC West',
    mascot: 'Raiders',
    new_players:
      [{
        player: 'Trenton Brown',
        position: 'LT',
        new_team: 'OAK',
        contract_value: 66000000
      }]
  },
  {
    team: 'NE',
    conference: 'AFC East',
    mascot: 'Patriots',
    new_players: []
  },
  {
    team: 'MIA',
    conference: 'AFC East',
    mascot: 'Dolphins',
    new_players: []
  },
  {
    team: 'BUF',
    conference: 'AFC East',
    mascot: 'Bills',
    new_players:
      [{
        player: 'Mitch Morse',
        position: 'C',
        new_team: 'BUF',
        contract_value: 44500000
      },
      {
        player: 'John Brown',
        position: 'WR',
        new_team: 'BUF',
        contract_value: 27000000
      },
      {
        player: 'Tyler Kroft',
        position: 'TE',
        new_team: 'BUF',
        contract_value: 18750000
      },
      {
        player: 'Spencer Long',
        position: 'C',
        new_team: 'BUF',
        contract_value: 12600000
      }]
  },
  {
    team: 'NYJ',
    conference: 'AFC East',
    mascot: 'Jets',
    new_players:
      [{
        player: 'C.J. Mosley',
        position: 'ILB',
        new_team: 'NYJ',
        contract_value: 85000000
      },
      {
        player: 'Jamison Crowder',
        position: 'WR',
        new_team: 'NYJ',
        contract_value: 28500000
      }]
  },
  {
    team: 'JAX',
    conference: 'AFC South',
    mascot: 'Jaguars',
    new_players:
      [{
        player: 'Nick Foles',
        position: 'QB',
        new_team: 'JAX',
        contract_value: 88000000
      }]
  },
  {
    team: 'HOU',
    conference: 'AFC South',
    mascot: 'Texans',
    new_players:
      [{
        player: 'Tashaun Gipson',
        position: 'FS',
        new_team: 'HOU',
        contract_value: 22000000
      }]
  },
  {
    team: 'IND',
    conference: 'AFC South',
    mascot: 'Colts',
    new_players: []
  },
  {
    team: 'TEN',
    conference: 'AFC South',
    mascot: 'Titans',
    new_players:
      [{
        player: 'Adam Humphries',
        position: 'WR',
        new_team: 'TEN',
        contract_value: 36000000
      },
      {
        player: 'Kenny Vaccaro',
        position: 'SS',
        new_team: 'TEN',
        contract_value: 26000000
      }]
  },
  {
    team: 'PIT',
    conference: 'AFC North',
    mascot: 'Steelers',
    new_players: []
  },
  {
    team: 'BAL',
    conference: 'AFC North',
    mascot: 'Ravens',
    new_players: []
  },
  {
    team: 'CLE',
    conference: 'AFC North',
    mascot: 'Browns',
    new_players:
      [{
        player: 'Sheldon Richardson',
        position: 'DT',
        new_team: 'CLE',
        contract_value: 39000000
      }]
  },
  {
    team: 'CIN',
    conference: 'AFC North',
    mascot: 'Bengals',
    new_players:
      [{
        player: 'C.J. Uzomah',
        position: 'TE',
        new_team: 'CIN',
        contract_value: 18000000
      },
      {
        player: 'Bobby Hart',
        position: 'RT',
        new_team: 'CIN',
        contract_value: 16150000
      }]
  },
  {
    team: 'SF',
    conference: 'NFC West',
    mascot: '49ers',
    new_players:
      [{
        player: 'Kwon Alexander',
        position: 'ILB',
        new_team: 'SF',
        contract_value: 54000000
      }]
  },
  {
    team: 'SEA',
    conference: 'NFC West',
    mascot: 'Seahawks',
    new_players: []
  },
  {
    team: 'LAR',
    conference: 'NFC West',
    mascot: 'Rams',
    new_players: []
  },
  {
    team: 'AZ',
    conference: 'NFC West',
    mascot: 'Cardinals',
    new_players:
      [{
        player: 'Jordan Hicks',
        position: 'ILB',
        new_team: 'AZ',
        contract_value: 36000000
      },
      {
        player: 'Robert Alford',
        position: 'CB',
        new_team: 'AZ',
        contract_value: 22500000
      }]
  },
  {
    team: 'WAS',
    conference: 'NFC East',
    mascot: 'R-Words',
    new_players:
      [{
        player: 'Landon Collins',
        position: 'FS',
        new_team: 'WAS',
        contract_value: 84000000
      }]
  },
  {
    team: 'DAL',
    conference: 'NFC East',
    mascot: 'Cowboys',
    new_players: []
  },
  {
    team: 'NYG',
    conference: 'NFC East',
    mascot: 'Giants',
    new_players: []
  },
  {
    team: 'PHI',
    conference: 'NFC East',
    mascot: 'Eagles',
    new_players:
      [{
        player: 'Malik Jackson',
        position: 'DT',
        new_team: 'PHI',
        contract_value: 30000000
      }]
  },
  {
    team: 'NO',
    conference: 'NFC South',
    mascot: 'Saints',
    new_players:
      [{
        player: 'Latavius Murray',
        position: 'RB',
        new_team: 'NO',
        contract_value: 14400000
      }]
  },
  {
    team: 'TB',
    conference: 'NFC South',
    mascot: 'Buccaneers',
    new_players: []
  },
  {
    team: 'ATL',
    conference: 'NFC South',
    mascot: 'Falcons',
    new_players: []
  },
  {
    team: 'CAR',
    conference: 'NFC South',
    mascot: 'Panthers',
    new_players: []
  },
  {
    team: 'GB',
    conference: 'NFC North',
    mascot: 'Packers',
    new_players:
      [{
        player: 'Za\'DAZus Smith',
        position: 'OLB',
        new_team: 'GB',
        contract_value: 66000000
      },
      {
        player: 'Preston Smith',
        position: 'OLB',
        new_team: 'GB',
        contract_value: 52000000
      },
      {
        player: 'Adrian Amos',
        position: 'FS',
        new_team: 'GB',
        contract_value: 37000000
      },
      {
        player: 'Billy Turner',
        position: 'G',
        new_team: 'GB',
        contract_value: 28000000
      }]
  },
  {
    team: 'MIN',
    conference: 'NFC North',
    mascot: 'Vikings',
    new_players: []
  },
  {
    team: 'CHI',
    conference: 'NFC North',
    mascot: 'Bears',
    new_players:
      [{
        player: 'Buster Skrine',
        position: 'CB',
        new_team: 'CHI',
        contract_value: 16600000
      }]
  },
  {
    team: 'DET',
    conference: 'NFC North',
    mascot: 'Lions',
    new_players:
      [{
        player: 'Justin Coleman',
        position: 'CB',
        new_team: 'DET',
        contract_value: 36000000
      },
      {
        player: 'Jesse James',
        position: 'TE',
        new_team: 'DET',
        contract_value: 25000000
      }]
  }
]

module.exports = { data };