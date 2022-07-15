// // Funções assíncronas
// function firstFunction() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Esperou isso aqui");
//       resolve();
//     }, 1000);
//   });
// }

// async function secondFunction() {
//   console.log("Iniciou");

//   await firstFunction();

//   console.log("Terminou");
// }

// secondFunction();

// prático

function getUser(id) {
  return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err))
}


async function showUserName(id) {

    try{

    } catch(error) {
        console.log(`Ocorreu um erro: ${error}`)
    }

    const user = await getUser(id)

    console.log(`O nome do usuário é ${user.data.first_name}`)
}

showUserName(3)