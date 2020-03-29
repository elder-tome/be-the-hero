const connection = require('../database/connection');

module.exports = {

    async index( requeste, response ){

        const ong_id = requeste.headers.authorization;

        const incidents = await connection('incidents').select('*').where('ong_id', ong_id);

        return response.json(incidents);
    }

}