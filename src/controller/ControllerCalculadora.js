
// Controller: Não precisa saber sobre a autenticação de usuários e afins
//             Responsável por receber os dados do router, 
//             Validar os campos de requisição e chamar a regra de negócio (Services)
//             Envia o retorno para o Usuário

const ServiceSomar = require('../service/somar')
const ServiceSubtrair = require('../service/subtrair')
const ServiceDivisao = require('../service/divisao')
const ServiceMultiplicacao = require('../service/multiplicacao')
const ServicePotencia = require('../service/potencia')
const ServiceRaiz = require('../service/raiz')
const ServiceOpDisponiveis = require('../service/opDisponiveis')

const serviceSomar = new ServiceSomar()
const serviceSubtrair = new ServiceSubtrair()
const serviceDivisao = new ServiceDivisao()
const serviceMultiplicacao = new ServiceMultiplicacao()
const servicePotencia = new ServicePotencia()
const serviceRaiz = new ServiceRaiz()
const serviceOpDisponiveis = new ServiceOpDisponiveis()


class ControllerCalculadora {

    // Função Somar
    Somar (req, res) {

        try {

            const n1 = req.body.valor1
            const n2 = req.body.valor2
            const resultado = serviceSomar.Somar(n1, n2)

            res.status(200).json({ resultado })

        } catch (error) {
            
            // Retorna a mensagem de erro que foi definida no services
            res.status(500).json({ message : error.message })
        }
    }

    // Função Subtrair
    Subtrair (req, res) {

        try {

            const n1 = req.body.valor1
            const n2 = req.body.valor2
            const resultado = serviceSubtrair.Subtrair(n1, n2)

            res.status(200).json({ resultado })

        } catch (error) {
            
            // Retorna a mensagem de erro que foi definida no services
            res.status(500).json({ message : error.message })
        }
    }

    // Função Divisão	
    Divisao (req, res) {

        try {

            const n1 = req.body.valor1
            const n2 = req.body.valor2
            const resultado = serviceDivisao.Divisao(n1, n2)

            res.status(200).json({ resultado })

        } catch (error) {
            
            // Retorna a mensagem de erro que foi definida no services
            res.status(500).json({ message : error.message })
        }
    }

    // Função Multiplicação
    Multiplicacao (req, res) {

        try {

            const n1 = req.body.valor1
            const n2 = req.body.valor2
            const resultado = serviceMultiplicacao.Multiplicacao(n1, n2)

            res.status(200).json({ resultado })

        } catch (error) {
            
            // Retorna a mensagem de erro que foi definida no services
            res.status(500).json({ message : error.message })
        }
    }

    // Função Potencia
    Potencia (req, res) {

        try {

            const n1 = req.body.valor1
            const n2 = req.body.valor2
            const resultado = servicePotencia.Potencia(n1, n2)

            res.status(200).json({ resultado })

        } catch (error) {
            
            // Retorna a mensagem de erro que foi definida no services
            res.status(500).json({ message : error.message })
        }
    }

    // Função Raiz
    Raiz (req, res) {

        try {

            const n1 = req.body.valor1
            const resultado = serviceRaiz.Raiz(n1)

            res.status(200).json({ resultado })

        } catch (error) {
            
            // Retorna a mensagem de erro que foi definida no services
            res.status(500).json({ message : error.message })
        }
    }

    // Operações Disponíveis
    OpDisponiveis (req, res) {

        try {

            const operacoes = serviceOpDisponiveis.Operacoes()

            res.status(200).json({ operacoes })

        } catch (error) {
            
            // Retorna a mensagem de erro que foi definida no services
            res.status(500).json({ message : error.message })
        }
    }
}

module.exports = ControllerCalculadora
