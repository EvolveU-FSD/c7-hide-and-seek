const hideAndSeek = require('../model/hideAndSeek')

const express = require('express')
const router = express.Router()

router.get('/startGame', (req, res) => {
    hideAndSeek.startGame()
    res.send('The hider has found a new spot to hide!\nGood Luck!\n')
})

router.get('/listRooms', (req, res) => {
    res.json(hideAndSeek.listRooms())
})

router.get('/move', (req, res) => {
    console.log('move is called with ', req.query)
    let room = req.query.room 
    hideAndSeek.move(room)
    res.send('You have moved to the ' + room + '\n')
})

router.get('/search', (req, res) => {
    let message
    let found = hideAndSeek.search()
    if (found) {
        message = 'You just found the hider!'
    }
    else {
       message = 'You search and find no-one!'
    }
    res.send(message + '\n')
})

router.get('/', (req, res) => {
    let instructions = 
`Welcome to Hide and Seek!
    You are the seeker, to start a new game visit the /startGame endpoint.
    Once there you can list the rooms you can search by visiting /listRooms.
    Use "/move" to move to a particular room
    Use "/search" to search in the room you are in...
Good Luck!
`
    res.send(instructions)
})


module.exports = router
