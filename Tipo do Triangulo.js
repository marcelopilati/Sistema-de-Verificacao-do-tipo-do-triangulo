import input from 'readline-sync';

console.log("Seja bem vindo ao Verificador de Tipo de Triangulo!!\n");

let lado_a = input.question("Insira o valor referente ao lado a: ");

let lado_b = input.question("Insira o valor referente ao lado b: ");

let lado_c = input.question("Insira o valor referente ao lado c: ");

if(lado_a == lado_b && lado_b == lado_c){
    console.log(" TRIANGULO EQUILATERO! ");
}
else if(lado_a != lado_b && lado_b != lado_c && lado_c != lado_a){
    console.log(" TRIANGULO ESCALENO! ");
}
else{
    console.log(" TRIANGULO ISOSCELES! ");
}