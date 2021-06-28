const { User } = require('../models');

const userData = [
    {
        username: 'jmolina',
        email: 'jose@molina.com',
        password: 'jose123'
    },
    {
        username: 'eemu',
        email: 'ermias@emu.com',
        password: 'erms123'
    },
    {
        username: 'lhunter',
        email: 'lauren@humter.com',
        password: 'laurem123'
    },
    {
        username: 'kho',
        email: 'kevin@ho.com',
        password: 'kevin123'
    },
];

const seedUsers = () => User.bulkcreate(userData);

module.exports = seedUsers;