const Aluno = require('../models/aluno-models');

class DeletaAlunoController {

    /**
    * @param {HttpRequest} request 
    * @returns {PromiseHttpResponse}
    */
    
    async handle(HttpRequest) {
        try {

            const usuario = await Aluno.create({
                nome,
                idade,
            });

            return {
                statusCode: 201,
                body: usuario,
            
            };
        } catch {error} {
            return {
                statusCode: 500,
                body: { error: error.message},
            };
        }
    }
}

module.exports = DeletaAlunoController;