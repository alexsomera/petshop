
// Obtendo a uri atual
const uri = window.location.pathname;

// Criando o array de produtos
let products = [
    {
        id: 1,
        name: "Ração Seca Whiskas 900g - Salmão",
        price: "11,90",
        image: "../img/produto-1.png",
        description: "A Ração Úmida Whiskas Sachê Carne ao Molho para Gatos Adultos é um alimento completo e balanceado para gatos adultos. Feito com ingredientes selecionados, sem adição de corantes e conservantes artificiais, o sachê Whiskas é muito saboroso e saudável. Além disso, possui uma textura macia e suculenta, que agrada até os paladares mais exigentes."
    },
    {
        id: 2, name: "Ração Seca Friskies 10Kg - Mix de carnes",
        price: "4,90",
        image: "../img/produto-2.png",
        description: "A Ração Úmida Whiskas Sachê Carne ao Molho para Gatos Adultos é um alimento completo e balanceado para gatos adultos. Feito com ingredientes selecionados, sem adição de corantes e conservantes artificiais, o sachê Whiskas é muito saboroso e saudável. Além disso, possui uma textura macia e suculenta, que agrada até os paladares mais exigentes."
    },
    {
        id: 3,
        name: "Ração úmida Whiskas 290g - Frango",
        price: "39,90",
        image: "../img/produto-3.png",
        description: "A Ração Úmida Whiskas Sachê Carne ao Molho para Gatos Adultos é um alimento completo e balanceado para gatos adultos. Feito com ingredientes selecionados, sem adição de corantes e conservantes artificiais, o sachê Whiskas é muito saboroso e saudável. Além disso, possui uma textura macia e suculenta, que agrada até os paladares mais exigentes."
    },
    {
        id: 4, name: "Ração Úmida Friskies 85g - Peixe Branco",
        price: "11,90",
        image: "../img/produto-4.png",
        description: "A Ração Úmida Whiskas Sachê Carne ao Molho para Gatos Adultos é um alimento completo e balanceado para gatos adultos. Feito com ingredientes selecionados, sem adição de corantes e conservantes artificiais, o sachê Whiskas é muito saboroso e saudável. Além disso, possui uma textura macia e suculenta, que agrada até os paladares mais exigentes."
    }
];

// determina o produto a ser exibido com base na uri
let index = uri.split('/'); // quebra a uri em um array na /
index = index[2].split('.'); // quebra o array na extensão do arquivo
index = parseInt(index[0]); // converte o index para inteiro
index = index - 1; // subtrai 1 do index para obter o produto correto

// constroi o elemento do produto com base nas informações do array
const product = products[index];
let productElement = document.createElement('div');
productElement.innerHTML = `
    <div class="row product mt-5">
        <div class="col-12 col-md-6">
            <img src="${product.image}" alt="Imagem de ${product.name}" class="img-fluid w-100">
        </div>
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-8">
                    <h2 class="titulo">${product.name}</h2>
                </div>
                <div class="col-4 text-right">
                    <p class="preco">R$ ${product.price}</p>
                </div>
            </div>
            <p class="titulo">${product.description}</p>
            <a href="carrinho.html" class="btn btn-primary d-none d-md-block">Comprar</a>
        </div>
    </div>

`;
// Injeta o produto na sua div
let parent = document.getElementById("produto-" + (index + 1));
parent.appendChild(productElement);
