const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Profesora,
    Atriz,
    Desenvolvedora
}

interface IPessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface IEstudante extends IPessoa {
    materias: string[]
}

const vanessa: IPessoa = {
    nome: 'Vanessa',
    idade: 30,
    profissao: Profissao.Desenvolvedora
}

const maria: IPessoa = {
    nome: 'Maria',
    idade: 30,
    profissao: Profissao.Desenvolvedora
}

const jessica: IEstudante = {
    nome: 'Jessica',
    idade: 24,
    profissao: Profissao.Atriz,
    materias: ['matematica', 'orientação a objetos']
}

const monica: IEstudante = {
    nome: 'Monica',
    idade: 24,
    materias: ['matematica', 'orientação a objetos']
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item)
    }
}

listar(monica.materias)