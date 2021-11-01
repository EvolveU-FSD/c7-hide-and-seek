const Rooms = require('../model/roomMongoose')
const Match = require('../model/match')

const express = require('express')
const router = express.Router()

router.get('/startGame', async (req, res) => {
    let newMatch = await Match.createMatch()
    console.log('Starting match ', newMatch.id)
    res.send('The hider has found a new spot to hide!\n'
      +'Good Luck!\n'
      +'Your matchId is:' + newMatch.id +'\n'
      +'use /v2/' + newMatch.id +'/look to look\n'
      +'use /v2/' + newMatch.id +'/move to move\n'
      +'use /v2/' + newMatch.id +'/search to search\n'
      )
})

router.get('/listRooms', async (req, res) => {
    res.json(await Rooms.listRooms())
})

router.get('/:matchId/move', async (req, res) => {
    let room = req.query.room 
    let matchId = req.params.matchId
    let match = await Match.findById(matchId)
    await match.move(room)
    res.send('You have moved to the ' + room + '\n')
})

router.get('/:matchId/look', async (req, res) => {
    let matchId = req.params.matchId
    let match = await Match.findById(matchId)
    console.log('Found match: ', match)

    let seekerLocation = await match.look()
    let message = 'You are in the ' + seekerLocation.name + '\n'
    message += 'Obvious hiding places are:\n'
    seekerLocation.hidingSpots.forEach((hidingSpot) => {
        message += '  ' + hidingSpot + '\n'
    })
    res.send(message)
})

router.get('/:matchId/search', async (req, res) => {
    let spot = req.query.spot  
    let matchId = req.params.matchId
    let match = await Match.findById(matchId)

    let message
    let found = match.search(spot)
    if (found) {
        message = 'You just found the hider!'
    }
    else {
       message = 'You search ' + spot + ' and find no-one!'
    }
    res.send(message + '\n')
})

router.get('/', (req, res) => {
    let instructions = 
`Welcome to Hide and Seek!
    You are the seeker, to start a new game visit the /startGame endpoint.
    Once there you can list the rooms you can search by visiting /listRooms.
Good Luck!
`
    res.send(instructions)
})


module.exports = router
