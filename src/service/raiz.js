
// Services: Toda a regra de negócio fica no Services
//           Não precisa saber sobre a autenticação de usuários e afins
//           Recebe os dados do controller, executa a regra de negócio e retorna o resultado para o controller

class ServiceRaiz{

    Raiz (n1) {
        
        if (n1 <= 0) {
            return "Não existe raiz de número negativo"
        } else {
            return Math.sqrt(n1)
        }
    }
}

module.exports = ServiceRaiz;
