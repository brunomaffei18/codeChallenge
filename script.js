const URL = 'https://jsonplaceholder.typicode.com/users'
const form = document.getElementById('form')

form.addEventListener("submit", (e)=> {
    e.preventDefault();

        fetch(URL, {
            method: "POST",
            body: JSON.stringify({
            Nombre: document.getElementById("nombre").value,
            Apellido: document.getElementById("apellido").value,
            Fecha: document.getElementById("cumpleaños").value
            }),
            headers: {
            "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((datos) => {
            console.log(datos)
        })
        .catch((error) => {
            console.log('Error en la solicitud:', error);
        });
    })