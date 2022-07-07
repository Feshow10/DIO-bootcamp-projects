// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let line = gets().split(" ");
const dividendo = parseInt(line[0]);
const divisor = parseInt(line[1]);

quociente = parseInt(dividendo / divisor);

resto = dividendo - divisor * quociente;

if (dividendo < 0){
  
}

if (resto < 0) {
  resto += Math.abs(divisor);
  quociente = (dividendo - resto) / divisor;    //escreva sua lógica aqui
}

print(quociente + " " + resto);