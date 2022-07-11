
enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Felipe',
    idade: 28,
    profissao: Trabalho.Padeiro
};

let pessoa2: Humano = {
    nome: 'Luiz',
    idade: 57,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'Laura',
    idade: 58,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "José",
    idade: 15,
    profissao: Trabalho.Padeiro
}