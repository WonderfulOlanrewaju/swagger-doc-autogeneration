const express = require('express');
const router = express.Router();
// const {User} = require('../models/User.model');
// #swagger.patterns = ['app', 'router']

router.get('/user', (req, res) => {
    // #swagger.tags = ['User']
    res.send({
        message: 'Users successfully fetched',
        users: [
            { name: "Olanrewaju" },
            { name: "Olaboye" }
        ]
    })
})

router.post('/user/', async (req, res)=> {
    // #swagger.tags = ['User']
    // #swagger.description = 'Fetch all users'
    /*
    #swagger.parameters['obj'] = {
                in: 'body',
                description: 'User information.',
                required: true,
                type: 'object',
                schema: { $ref: "#/definitions/User" }
        }
    */
    if (!req.body) res.status(400).send({
        data: 'user object not supplied'
    });
    res.status(200).send({
        user: {
            name: "Akinola",
            age: 21
        }
    })
})

router.get('/users/:id', (req, res)=> {
    // #swagger.tags = ['User']
    res.send({
        name : "Olanrewaju"
    })
})

module.exports = router;