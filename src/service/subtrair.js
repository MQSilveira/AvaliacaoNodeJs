
// Services: Toda a regra de negócio fica no Services
//           Não precisa saber sobre a autenticação de usuários e afins
//           Recebe os dados do controller, executa a regra de negócio e retorna o resultado para o controller

class ServiceSubtrair{

    Subtrair (n1, n2) {

        if ( isNaN(n1) || isNaN(n2) ) {

            // Mensagem de erro que será retornada para o controller
            throw new Error('Valores inválidos')
        }

        const resultado = n1 - n2

        return resultado
    }
}

module.exports = ServiceSubtrair;
