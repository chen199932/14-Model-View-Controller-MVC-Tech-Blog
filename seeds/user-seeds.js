const { User } = require('../models');

const userData = [{
        username: 'Kayle',
        password: 'Kayle'

    },
    {
        username: 'Steve',
        password: 'Steve'
    },
    {
        username: 'Helen',
        password: 'Helen'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;