/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/
//* DOM elements selection
const $result = document.getElementById("result");
const $buttonAxios = document.getElementById("btn-axios");
const $buttonFetch = document.getElementById("btn-fetch");

//* EVENT LISTENERS
$buttonAxios.addEventListener("click", (e) => handleClickAxios(e, $result));
$buttonFetch.addEventListener("click", (e) => handleClickFetch(e, $result));

//* EVENT HANDLERS
//******************* AXIOS API *********************************** */
function handleClickAxios(e, $element) {
    $element.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        axiosGenerateRandomMailFrom(
            "https://flynn.boolean.careers/exercises/api/random/mail",
            $element
        );
    }
}

//******************* FETCH API *********************************** */
function handleClickFetch(e, $element) {
    $element.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        fetchGenerateRandomMailFrom(
            "https://flynn.boolean.careers/exercises/api/random/mail",
            $element
        );
    }
}


//! FUNCTIONS
function axiosGenerateRandomMailFrom(url, $element) {
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

function fetchGenerateRandomMailFrom(url, $element) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            $element.insertAdjacentHTML(
                "beforeend",
                `<span class="d-inline-block px-2 py-1 text-bg-info rounded-2 my-1">${data.response}</span><br>`
            );
        })
        .catch((error) => console.error(error));
}
