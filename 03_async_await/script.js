// Funções assíncronas
function firstFunction()  {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Esperou isso aqui')
            resolve()
        }, 1000)
    }) 

}

async function secondFunction() {
    console.log('Iniciou')

    await firstFunction()

    console.log("Terminou")
}

secondFunction()