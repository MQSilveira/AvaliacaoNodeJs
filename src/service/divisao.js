
// Services: Toda a regra de negócio fica no Services
//           Não precisa saber sobre a autenticação de usuários e afins
//           Recebe os dados do controller, executa a regra de negócio e retorna o resultado para o controller

class ServiceDivisao{

    Divisao (n1, n2) {

        if ( isNaN(n1) || isNaN(n2) ) {

            // Mensagem de erro que será retornada para o controller
            throw new Error('Valores inválidos')

        } else if (n2 == 0) {

            // Mensagem de erro que será retornada para o controller
            throw new Error('Não é possível dividir por 0')
        
        }else {
            const resultado = n1 / n2
            return resultado
        }
    }
}

module.exports = ServiceDivisao;
