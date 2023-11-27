function confirmaCompra() {
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
};



function plusSlides(n) {
    exibeSlide(slide += n);
}

function currentSlide(n) {
    exibeSlide(slide = n);
}

function exibeSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slide = 1 }
    if (n < 1) { slide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slide - 1].style.display = "block";
    dots[slide - 1].className += " active";
}


let btnNext = document.getElementById("nextItem");
let slideAtual = 1;
exibeSlides(slideAtual);

function passaSlide(n) {
    exibeSlides(slideAtual += n);
}

function currentSlide(n) {
    exibeSlides(slideAtual = n);
}

function exibeSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideAtual = 1 }
    if (n < 1) { slideAtual = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.add("show");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideAtual - 1].style.display = "block";
    dots[slideAtual - 1].className += " active";
}

setInterval(function () {
    nextItem.click();
}, 5000);