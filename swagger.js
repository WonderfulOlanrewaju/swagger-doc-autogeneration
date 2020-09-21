const swaggerAutogen = require('swagger-autogen')();
const { userStructure } = require('./models/User.model');

const doc = {
    info: {
        title: "Swagger Test",
        description: "Swagger autogen"
    },
    host: "localhost:9090/api/v1",
    schemes: ['http', 'https'],
    definitions : { User : userStructure }
}

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js', './route/user.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)