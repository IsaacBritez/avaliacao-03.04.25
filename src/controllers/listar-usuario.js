const Aluno = require('../models/aluno-models');

class ListarAlunoController {
    async handle(req, res) {
        try {
            const usuarios = await Aluno.findAll();
            return {
                statusCode: 200,
                body: usuarios,
            };
        } catch (error) {
            return{
                statusCode: 500,
                body: {error: error.menssage},
            };
        }
    }
}

module.exports = ListarAlunoController;  