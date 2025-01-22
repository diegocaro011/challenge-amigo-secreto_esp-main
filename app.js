
let listaAmigos = [];
let numeroDeSorteo = 1;

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert('El nombre ya se encuentra registrado en la lista.');
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let amigo of listaAmigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('La lista está vacía. Por favor, añada amigos antes de sortear.');
        return;
    }

    const amigoElegido = Math.floor(Math.random() * listaAmigos.length);
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `<li>El amigo secreto es: ${listaAmigos[amigoElegido]}</li>`;
}