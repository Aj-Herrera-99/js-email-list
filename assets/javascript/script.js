/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/
//* DOM elements selection
const $result = document.getElementById("result");
// =============================================================================
// **************** AXIOS API **************************
// =============================================================================
for (let i = 0; i < 10; i++) {
    axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => response.data)
        .then((data) => {
            $result.insertAdjacentHTML("beforeend", `<span>${data.response}</span><br>`);
        })
        .catch((error) => console.error(error));
}

