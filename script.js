let refrigeranteValor = parseFloat(prompt("Digite o valor do Refrigerante"))
let refrigeranteQuantidade = parseInt(prompt("Quantas Unidades?"))
let refrigerante = refrigeranteValor * refrigeranteQuantidade

let macarraoValor = parseFloat(prompt("Digite o valor do Macarrão"))
let macarraoQuantidade = parseInt(prompt("Quantas Unidades?"))
let macarrao = macarraoValor * macarraoQuantidade

let ervilhaValor = parseFloat(prompt("Digite o valor do Ervilha"))
let ervilhaQuantidade = parseInt(prompt("Quantas Unidades?"))
let ervilha = ervilhaValor * ervilhaQuantidade

let arrozValor = parseFloat(prompt("Digite o valor do Arroz"))
let arrozQuantidade = parseInt(prompt("Quantas Unidades?"))
let arroz = arrozValor * arrozQuantidade

let feijaoValor = parseFloat(prompt("Digite o valor do Feijão"))
let feijaoQuantidade = parseInt(prompt("Quantas Unidades?"))
let feijao = feijaoValor * feijaoQuantidade

let vinhoValor = parseFloat(prompt("Digite o valor do Vinho"))
let vinhoQuantidade = parseInt(prompt("Quantas Unidades?"))
let vinho = vinhoValor * vinhoQuantidade

let total = refrigerante + macarrao + ervilha + arroz + feijao + vinho

alert(`Valor total a ser pago: ${total}`)
console.log(`Valor total a ser pago: ${total}`)

let metade = total / 2 

if(total % 2 == 0){

    let eu = metade - vinho;
    let amigo = metade + vinho;
    alert(`O valor total foi Par, sendo assim você paga ${eu} e seu amigo paga ${amigo}`)
    console.log(`O valor total foi Par, sendo assim você paga ${eu} e seu amigo paga ${amigo}`)

}else{

    let eu = metade;
    let amigo = metade;
    alert(`O valor total da compra foi Impar, cada um paga a metade da conta que é: ${metade}`)
    console.log(`O valor total da compra foi Impar, cada um paga a metade da conta que é: ${metade}`)

}
     
