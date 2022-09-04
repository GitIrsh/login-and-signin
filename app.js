const { Model } = require('objection');
const knex = require('knex')(require('./src/db/config'));
const hapi = require('@hapi/hapi');
const { route } = require('./router/router');

const init = async () => {
    knex .raw('select 1')

    .then(_ =>{
        console.log("Connected to Database");
    })

    .catch(e =>{
        console.log('Error' ,e)
        Process.exit(1)
    })

    Model.knex(knex);

    const server = hapi . server ({
        port : 4400,
        host : 'localhost'
    });

    server.route(route)
    await server.start();

    console.log('Server is on port ' + port);

    process.on('unhandledRejection', (err)=>{
        console.log(err);
        process.exit(1);
    });
};

init();
console.log(() =>{});