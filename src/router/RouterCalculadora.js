
// Router: Responsável por receber as requisições e chamar o controller
//         Somente controla a verificações de requisição e autenticação de acesso
//         Não deve conter regras de negócio

const express = require('express')
const ControllerCalculadora = require('../controller/ControllerCalculadora')

const controller = new ControllerCalculadora()
const router = express.Router()

// Rotas
router.post('/api/somar', controller.Somar)
router.post('/api/subtrair', controller.Subtrair)
router.post('/api/divisao', controller.Divisao)
router.post('/api/multiplicacao', controller.Multiplicacao)
router.post('/api/potencia', controller.Potencia)
router.post('/api/raiz', controller.Raiz)
router.get('/api/opDisponiveis', controller.OpDisponiveis)


module.exports = router
