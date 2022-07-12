// Funções assíncronas
function firstFunction()  {
    return new Promise((resolve) => { // Arrow Function

        setTimeout(() => { // as well
            console.log("This is working")
            resolve()
        })
    })

}