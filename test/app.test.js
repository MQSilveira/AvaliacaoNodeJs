const { describe, expect, it } = require('@jest/globals')

const Soma = require('../src/service/somar')
const Subtrair = require('../src/service/subtrair')
const Multiplicacao = require('../src/service/multiplicacao')
const Divisao = require('../src/service/divisao')
const Potencia = require('../src/service/potencia')
const Raiz = require('../src/service/raiz')
const OpDisponiveis = require('../src/service/opDisponiveis')


describe('Teste de Soma', () => {

    // Teste de Soma
    it('Deve retornar -2 quando passar 0 e -2', () => {
        const soma = new Soma()
        const resultado = soma.Somar(0, -2)

        expect(resultado).toBe(-2)
    })

    it('Deve retornar 10 quando passar 5 e 5', () => {
        const soma = new Soma()
        const resultado = soma.Somar(5, 5)

        expect(resultado).toBe(10)
    })

    it('Deve retornar 0 quando passar 0 e 0', () => {
        const soma = new Soma()
        const resultado = soma.Somar(0, 0)

        expect(resultado).toBe(0)
    })

    it('Deve retornar 0 quando passar -5 e 5', () => {
        const soma = new Soma()
        const resultado = soma.Somar(-5, 5)

        expect(resultado).toBe(0)
    })

    it('Deve retornar 0 quando passar 5 e -5', () => {
        const soma = new Soma()
        const resultado = soma.Somar(5, -5)

        expect(resultado).toBe(0)
    })

    it('Deve retornar -10 quando passar -5 e -5', () => {
        const soma = new Soma()
        const resultado = soma.Somar(-5, -5)

        expect(resultado).toBe(-10)
    })

    // Teste de Subtração
    it('Deve retornar 0 quando passar 0 e 0', () => {
        const subtrair = new Subtrair()
        const resultado = subtrair.Subtrair(0, 0)

        expect(resultado).toBe(0)
    })

    it('Deve retornar 0 quando passar 5 e 5', () => {
        const subtrair = new Subtrair()
        const resultado = subtrair.Subtrair(5, 5)

        expect(resultado).toBe(0)
    })

    it('Deve retornar 10 quando passar 5 e -5', () => {
        const subtrair = new Subtrair()
        const resultado = subtrair.Subtrair(5, -5)

        expect(resultado).toBe(10)
    })

    it('Deve retornar -10 quando passar -5 e 5', () => {
        const subtrair = new Subtrair()
        const resultado = subtrair.Subtrair(-5, 5)

        expect(resultado).toBe(-10)
    })

    it('Deve retornar 0 quando passar -5 e -5', () => {
        const subtrair = new Subtrair()
        const resultado = subtrair.Subtrair(-5, -5)

        expect(resultado).toBe(0)
    })

    it('Deve retornar 0 quando passar 0 e -2', () => {
        const subtrair = new Subtrair()
        const resultado = subtrair.Subtrair(0, -2)

        expect(resultado).toBe(0)
    })

    // Teste de Multiplicação
    it('Deve retornar 0 quando passar 0 e 0', () => {
        const multiplicacao = new Multiplicacao()
        const resultado = multiplicacao.Multiplicar(0, 0)

        expect(resultado).toBe(0)
    })

    it('Deve retornar 25 quando passar 5 e 5', () => {
        const multiplicacao = new Multiplicacao()
        const resultado = multiplicacao.Multiplicar(5, 5)

        expect(resultado).toBe(25)
    })

    it('Deve retornar -25 quando passar 5 e -5', () => {
        const multiplicacao = new Multiplicacao()
        const resultado = multiplicacao.Multiplicar(5, -5)

        expect(resultado).toBe(-25)
    })

    it('Deve retornar -25 quando passar -5 e 5', () => {
        const multiplicacao = new Multiplicacao()
        const resultado = multiplicacao.Multiplicar(-5, 5)

        expect(resultado).toBe(-25)
    })

    it('Deve retornar 25 quando passar -5 e -5', () => {
        const multiplicacao = new Multiplicacao()
        const resultado = multiplicacao.Multiplicar(-5, -5)

        expect(resultado).toBe(25)
    })

    it('Deve retornar 0 quando passar 0 e -2', () => {
        const multiplicacao = new Multiplicacao()
        const resultado = multiplicacao.Multiplicar(0, -2)

        expect(resultado).toBe(0)
    })

    // Teste de Divisão
    it('Deve retornar 0 quando passar 0 e 0', () => {
        const divisao = new Divisao()
        const resultado = divisao.Dividir(0, 0)

        expect(resultado).toBe(0)
    })

    it('Deve retornar 1 quando passar 5 e 5', () => {
        const divisao = new Divisao()
        const resultado = divisao.Dividir(5, 5)

        expect(resultado).toBe(1)
    })

    it('Deve retornar -1 quando passar 5 e -5', () => {
        const divisao = new Divisao()
        const resultado = divisao.Dividir(5, -5)

        expect(resultado).toBe(-1)
    })

    it('Deve retornar -1 quando passar -5 e 5', () => {
        const divisao = new Divisao()
        const resultado = divisao.Dividir(-5, 5)

        expect(resultado).toBe(-1)
    })

    it('Deve retornar 1 quando passar -5 e -5', () => {
        const divisao = new Divisao()
        const resultado = divisao.Dividir(-5, -5)

        expect(resultado).toBe(1)
    })

    it('Deve lançar um erro', () => {
        const divisao = new Divisao()
        expect(() => divisao.Dividir(5, 0)).toThrow(Error)
    })

    // Potencia
    it('Deve retornar 0 quando passar 0 e 0', () => {
        const potencia = new Potencia()
        const resultado = potencia.Potencia(0, 0)

        expect(resultado).toBe(0)
    })

    it('Deve retornar 1 quando passar 5 e 0', () => {
        const potencia = new Potencia()
        const resultado = potencia.Potencia(5, 0)

        expect(resultado).toBe(1)
    })

    it('Deve retornar 5 quando passar 5 e 1', () => {
        const potencia = new Potencia()
        const resultado = potencia.Potencia(5, 1)

        expect(resultado).toBe(5)
    })

    it('Deve retornar 25 quando passar 5 e 2', () => {
        const potencia = new Potencia()
        const resultado = potencia.Potencia(5, 2)

        expect(resultado).toBe(25)
    })

    it('Deve retornar 125 quando passar 5 e 3', () => {
        const potencia = new Potencia()
        const resultado = potencia.Potencia(5, 3)

        expect(resultado).toBe(125)
    })

    // Raiz
    it('Deve lançar um erro', () => {
        const raiz = new Raiz()
        expect(() => raiz.Raiz(0)).toThrow(Error)
    })

    it('Deve retornar 1 quando passar 1', () => {
        const raiz = new Raiz()
        const resultado = raiz.Raiz(1)

        expect(resultado).toBe(1)
    })

    it('Deve retornar 2 quando passar 4', () => {
        const raiz = new Raiz()
        const resultado = raiz.Raiz(4)

        expect(resultado).toBe(2)
    })

    // OpDisponiveis
    // it('Deve retornar as operações disponíveis', () => {
    //     const opDisponiveis = new OpDisponiveis()
    //     const resultado = opDisponiveis.Operacoes()

    //     expect(resultado).toBe('"operacoes": ["Raiz","Potencia","Multiplicacao","Divisao"]')
    // })











})





