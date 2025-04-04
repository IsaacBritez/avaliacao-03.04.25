const express = require('express');
const router = express.Router();
const Aluno = require('../models/aluno-models');
const routeAdapter = require('../adapters/route-adapters');
const CriarAlunoController = require('../controllers/criar-usuario');
const ListarAlunoController = require('../controllers/listar-usuario');
const EditarAlunoController = require('../controllers/editar-usuario');
const DeletarAlunoController = require('../controllers/deletar-usuario');
const adaptRoute = require('../adapters/route-adapters');


/**
 * @swagger
 * components:
 *   schemas:
 *     Aluno:
 *       type: object
 *       required:
 *         - nome
 *         - idade
 *       properties:
 *         nome:
 *           type: string
 *           description: O nome de usuário
 *         idade:
 *           type: string
 *           description: A idade do usuário
 *       example:
 *         id: 1
 *         nome: João da Silva
 *         idade: 14
 */

/**
 * @swagger
 * tags:
 *   name: Alunos
 *   description: Gerenciamento de usuários API
 */

/**
 * @swagger
 * /api/alunos:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aluno'
 *     responses:
 *       201:
 *         description: O usuário foi criado com sucesso!
 *       500:
 *         description: Algum erro aconteceu
 */
router.post('/alunos', routeAdapter(new CriarAlunoController()));

/**
 * @swagger
 * /api/alunos:
 *   get:
 *     summary: Retorna a lista de usuários
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: A lista de usuários foi retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Aluno'
 */
router.get('/alunos', routeAdapter(new ListarAlunoController()));

/**
 * @swagger
 * /api/alunos/{id}:
 *   put:
 *     summary: Atualiza o usuário por id
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do aluno 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aluno'
 *     responses:
 *       200:
 *         description: O usuário foi atualizado com sucesso
 *       404:
 *         description: O usuário não foi encontrado
 *       500:
 *         description: Algum erro aconteceu
 */
router.put('/alunos/:id', adaptRoute(new EditarAlunoController()));

/**
 * @swagger
 * /api/alunos/{id}:
 *   delete:
 *     summary: Remove o usuário por id
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O id do usuário
 *     responses:
 *       200:
 *         description: O usuário foi removido com sucesso
 *       404:
 *         description: O usuário não foi encontrado
 *       500:
 *         description: Algum erro aconteceu
 */
router.delete('/alunos/:id', adaptRoute(new DeletarAlunoController()));

module.exports = router;