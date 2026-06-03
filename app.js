const inputBusqueda = document.querySelector('.main-input input');
const btnBuscar = document.getElementById('btn-buscar');
const btnSuerte = document.getElementById('btn-suerte');

function buscar() {
    const consulta = inputBusqueda.value.trim();
 
    if (!consulta) {
        inputBusqueda.closest('.main-input-container').classList.add('sacudir');
        setTimeout(() => {
            inputBusqueda.closest('.main-input-container').classList.remove('sacudir');
        }, 500);
        return;
    }
 
    const url = `https://www.google.com/search?q=${encodeURIComponent(consulta)}`;
    window.open(url, '_blank');
}
 
function sentirSuerte() {
    const consulta = inputBusqueda.value.trim();
 
    if (!consulta) {
        inputBusqueda.focus();
        return;
    }
 
    const url = `https://www.google.com/search?q=${encodeURIComponent(consulta)}&btnI=1`;
    window.open(url, '_blank');
}
 
inputBusqueda.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        buscar();
    }
});
 
btnBuscar.addEventListener('click', buscar);
 
btnSuerte.addEventListener('click', sentirSuerte);
 
window.addEventListener('load', () => {
    inputBusqueda.focus();
});