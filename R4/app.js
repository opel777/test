const API_URL = "https://weatherstack.com/product";

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState == 4 && this.Status == 200){

        console.log(this.response);

    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET",`${API_URL}/users`)
xhr.send();