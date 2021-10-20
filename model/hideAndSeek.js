let { findRoomByName, listRooms } = require('./room')

let seekerLocation
let hiderRoomName
let hiderHidingSpot

function pickOneAtRandom(arrayOfThings) {
    return arrayOfThings[Math.floor(Math.random() * arrayOfThings.length)]
}

async function startGame() {
    let allRooms = await listRooms()
    let hiderRoom = pickOneAtRandom(allRooms)
    hiderRoomName = hiderRoom.name
    hiderHidingSpot = pickOneAtRandom(hiderRoom.hidingSpots)
    seekerLocation = await findRoomByName('front entry')
    console.log('Don\'t tell the seeker, but the hider is ' + hiderHidingSpot + ' in the ' + hiderRoomName + '\n')
    setTimeout(() => { console.log('a game was started 5 seconds ago!!!')}, 5000)
}

async function move(roomName) {
    console.log('Seeker moved to ', roomName)
    seekerLocation = await findRoomByName(roomName)
}

function look() {
    return seekerLocation
}

function search(hidingSpot) {
    return (seekerLocation.name === hiderRoomName) && (hidingSpot === hiderHidingSpot)
}

// start a game by default to initialize the hider and seeker locations
startGame()

module.exports = {
    listRooms,
    startGame,
    move,
    look,
    search
}