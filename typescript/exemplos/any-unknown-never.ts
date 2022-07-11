let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'oi';
anyEstaDeVolta = true;
anyEstaDeVolta = 5;

let stringTeste: string = 'verificar';
stringTeste = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'oi';
unknownValor = true;
unknownValor = 'vai';

let stringTeste2: string = 'agora vai';
//vai dar erro: stringTeste2 = unknownValor;

if (typeof unknownValor === 'string'){
    stringTeste2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never{
    throw(error: erro, code: codigo)
}

