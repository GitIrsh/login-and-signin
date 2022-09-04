require('dotenv').config();

const knex = {
    client: 'mysql',
    connection: {
        host: process.env.HOST,
        port: process.env.PORT,
        database: process.env.DB,
        user: process.env.USER,
        password: process.env.PASSWORD
    }
};

module.exports = knex;

// const { Model } = require('objection');
// const knex = require('knex');

// let knex = knex({
//     client : 'mysql',
//     connection : {
//         host: process.env.HOST,
//         port: process.env.PORT,
//         database: process.env.DB,
//         user: process.env.USER,
//         password: process.env.PASSWORD
//     }
// });

// Model.knex(knex);

// module.exports = knex;