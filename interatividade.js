const paineis = document.querySelectorAll('.panel');

function clicar() {
    console.log('Deu cert');
};

for(var i = 0; i < paineis.length; i++) {
    const painel = paineis[i]
    painel.addEventListener("click", clicar);
}


