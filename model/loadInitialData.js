let { createRoom } = require('./roomDb')

// load initial rooms
async function loadInitialData() {
    await createRoom({ name: 'front entry', hidingSpots: [ 'in the coat closet' ] })
    await createRoom({ name: 'living room', hidingSpots: [ 'behind the couch', 'in the plant', 'in the drapes' ] })
    await createRoom({ name: 'dining room', hidingSpots: [ 'under the table', 'in the china cabinet' ] })
    await createRoom({ name: 'bathroom', hidingSpots: [ 'in the shower' ] })    
}

loadInitialData()
