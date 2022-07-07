const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

const nums = [1,2];

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

console.log('this => maçã',mapComThis(nums,maca));
console.log('this => laranja',mapComThis(nums,laranja));

function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2;
    });
}

const nums2 = [2,4,6,8,10];
console.log('sem this',mapSemThis(nums2));

function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 == 0;
}

const meuArray = [1,23,55,67,30,2,4];

console.log('filtra pares',filtraPares(meuArray));

function somaNumeros(arr){
    return arr.reduce(function(prev,current){
        return prev + current;
    })
}

const arr = [1,2];

console.log('reduce',somaNumeros(arr));

const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev,current){
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log('calcula saldo com reduce',calculaSaldo(saldoDisponivel,lista));