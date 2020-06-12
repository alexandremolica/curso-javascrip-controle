function teste1(num){
    if (num>7)
        console.log(num)

    console.log('Final') // sempre sera executada fora do if
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); {  // cuidado com ";", nao usar com estrutura de controle
        console.log(num)
    }
}

teste2(6) //imprime devido o ponto virgula que fecha o if
teste2(8) //imprime
