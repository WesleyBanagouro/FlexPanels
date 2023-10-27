let aberto = null;

function clicar() {
    if (aberto === this) {
        console.log('São iguais');
    } else {
        console.log('São diferentes');
        if(aberto !== null) {
            aberto.classList.toggle('open');
            aberto.classList.toggle('open-active');
        }
        aberto = this;
    }
    this.classList.toggle('open');
    this.classList.toggle('open-active');
};

const paineis = document.querySelectorAll('.panel');
for(var i = 0; i < paineis.length; i++) {
    const painel = paineis[i];
    painel.addEventListener("click", clicar);
}
