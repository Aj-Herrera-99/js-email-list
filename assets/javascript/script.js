/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/
//* DOM elements selection
const $result = document.getElementById("result");
const $button = document.querySelector("button");
// =============================================================================
// **************** AXIOS API **************************
// =============================================================================
//* EVENT LISTENERS
$button.addEventListener("click", (e) => handleClick(e, $result));
//* EVENT HANDLERS
function handleClick(e, $element) {
    $element.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        generateRandomMailFrom(
            "https://flynn.boolean.careers/exercises/api/random/mail",
            $element
        );
    }
}
//! FUNCTIONS
function generateRandomMailFrom(url, $element) {
    axios
        .get(url)
        .then((response) => response.data)
        .then((data) => {
            $element.insertAdjacentHTML(
                "beforeend",
                `<span class="d-inline-block px-2 py-1 text-bg-info rounded-2 my-1">${data.response}</span><br>`
            );
        })
        .catch((error) => console.error(error));
}
