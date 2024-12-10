// variables
let variavel = "Sou alteravel"   //Pode ser alterada
const constante = "Não é redeclaravel"   //Não pode ser alterado, sempre será o mesmo valor

variavel = 1
// proibido reassinar uma constante
// constante = 2

// console
console.log(variavel)   //É log
console.error(constante)    //Vai trazer um erro, vai vir vemelho
console.info("Sou uma informação")   //Dá uma informação, fica amarelo
console.warn("Var é depreciado")   //
// console.table(fruits)

// Tipos de dados
const lastName = "França"   // string
let age = 16   // number
const person = {
    name: "Murilo",
    age: 16,
    gender: "male"
}   // objeto
const fruits = ["banana", "uva"]   // array

fetch("https://viacep.com.br/ws/01001000/json/")
.then(res => res)
.then(data)