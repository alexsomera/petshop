function confirmaCompra () {
    let main = document.querySelector("main");
    main.innerHTML = `
    <div class="row">
        <div class="col-12 text-center pt-5">
            <img src="img/concluido.png" alt="Imagem de confirmação" class="img-fluid mb-5">
            <h2 class="titulo-pagina">Obrigado!</h2>
            <p>Seu pedido foi confirmado.</p>
            <p> Em breve informaremos o código de rastreamento para você acompanhar a entrega.</p>
            <a href="pedidos.html" class="btn btn-primary">Acompanhar meus pedidos</a>
        </div>
    </div>
    `;
}