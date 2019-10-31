// SERVICEWORKER
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(registration => {
            console.log('ServiceWorker registrado com sucesso: ', registration.scope);
        }, function (err) {
            console.error('Sem suporte para ServiceWorker: ', err);
        });
    })
}



var btn_buscaCep = document.getElementById('buscaCep');



btn_buscaCep.addEventListener('click', () => {
    var cx_txt = document.getElementById('cep').value;

    fetch(`https://viacep.com.br/ws/${cx_txt}/json/`)
        .then(result => {
            return result.json();
        })
        .then(data => {
            localStorage.setItem('cep', JSON.stringify(data));
            window.location = 'content.html';
        })
        .catch(err => console.log(err));

});