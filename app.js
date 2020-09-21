const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJSDocOptions = require('./swagger-output.json');
const userRoutes = require('./route/user');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDocOptions));

app.get('/', (req, res) => {
    //#swagger.tags = ['Home']
    return res.status(200).send({
        message: 'Boye says hello'
    });
});

app.use(userRoutes);

app.listen(9090, ()=> console.log('app running on 9090'));