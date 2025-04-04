const Aluno = require('../models/aluno-models');

class CriarAlunoController {

    /**
    * @param {HttpRequest} request 
    * @returns {PromiseHttpResponse}
    */
    
    async handle(HttpRequest) {
        try {
            const { nome, idade} = HttpRequest.body;
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

module.exports = CriarAlunoController;