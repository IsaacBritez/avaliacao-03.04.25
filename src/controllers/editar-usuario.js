const Aluno = require('../models/aluno-models');

class EditarAlunoController {
    async handle(req, res) {
        const { id } = req.params;
        const { nome, idade } = req.body;
        try {
            const usuario = await Aluno.findByPk(id);
            if (!usuario) {
                return {
                    statusCode: 404,
                    body: { error: 'Usuário não encontrado' }
                }
            }
            await usuario.update({
                nome,
                idade,
            });
            return {
                statusCode: 200,
                body: usuario,
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: { error: error.message }
            }
        }
    }
}

module.exports = EditarAlunoController;