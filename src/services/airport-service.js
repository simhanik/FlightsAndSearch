// const CrudService = require('./crud-service.js')
// const {AirportRepository} = require('../repository/airport-repository.js')

// class AirportService extends CrudService {
//     constructor(){
//         const airportRepository = new AirportRepository()
//         super(airportRepository)
//     }
// }

// module.exports = AirportService

const CrudService = require('./crud-service');
const { AirportRepository } = require('../repository/index.js');

class AirportService extends CrudService {
    constructor() {
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
}

module.exports = AirportService;