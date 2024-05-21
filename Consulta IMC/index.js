var nomePaciente = prompt("Qual seu nome?")
var peso = prompt(`Qual seu peso, ${nomePaciente}?`)
var altura = prompt(`Qual sua altura, ${nomePaciente}?`)

if (altura > 10){
  altura = altura / 100
}

var imc = peso / altura ** 2

console.log(imc)
if (imc < 16){
  console.log(`${nomePaciente}, você se enquadra em peso baixo muito grave, pois seu imc é ${imc}`)
}
else if(imc >= 16 && imc < 17){
  console.log(`${nomePaciente}, você se enquadra em peso baixo grave, pois seu imc é ${imc}`)
}
else if(imc >= 17 && imc < 18.5){
  console.log(`${nomePaciente}, você se enquadra em peso baixo, pois seu imc é ${imc}`)
}
else if(imc >= 18.5 && imc < 25){
  console.log(`${nomePaciente}, você se enquadra em peso normal, pois seu imc é ${imc}`)
}
else if(imc >= 25 && imc < 30){
  console.log(`${nomePaciente}, você se enquadra em sobrepeso, pois seu imc é ${imc}`)
}
else if(imc >= 30 && imc < 35){
  console.log(`${nomePaciente}, você se enquadra em obesidade grau I, pois seu imc é ${imc}`)
}
else if(imc >= 35 && imc < 40){
  console.log(`${nomePaciente}, você se enquadra em obesidade grau II, pois seu imc é ${imc}`)
}
else if(imc >= 40){
  console.log(`${nomePaciente}, você se enquadra em obesidade grau III, pois seu imc é ${imc}`)
}