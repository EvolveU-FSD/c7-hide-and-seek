let hideAndSeek = require('./model/hideAndSeek')

// play a game
console.log('Starting a game')
hideAndSeek.startGame()

let rooms = hideAndSeek.listRooms()
console.log('We can search ', rooms)
hideAndSeek.move(rooms[0])

let found = hideAndSeek.search()
if (found) {
    console.log('We found the hider!')
}
else {
    console.log('We did not find the hider!')
    console.log('We should have searched the', rooms[1])
}