
// Services: Toda a regra de negócio fica no Services
//           Não precisa saber sobre a autenticação de usuários e afins
//           Recebe os dados do controller, executa a regra de negócio e retorna o resultado para o controller

class ServiceOpDisponiveis{

    Operacoes () {
        
        const operacoes = ['Raiz', 'Potencia', 'Multiplicacao', 'Divisao'];

        if (operacoes.length > 0) {
            return operacoes;
        
        } else {
            // Mensagem de erro que será retornada para o controller
            throw new Error('Erro ao listar operações disponíveis')
        }
    }
}

module.exports = ServiceOpDisponiveis;
