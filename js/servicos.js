
// Obtendo a uri atual
const uri = window.location.pathname;

// Criando o array de servicos
let products = [
    {
        id: 1,
        name: "Tosa para pequeno porte",
        price: "11,90",
        image: "servico-1.png",
        description: "Oferecemos um serviço de tosa dedicado e especializado para o seu amigo peludo no nosso PetShop. Nossa equipe apaixonada e treinada proporciona uma experiência de tosa tranquila e agradável, para deixar o pelo do seu pet em sua melhor forma."
    },
    {
        id: 2, name: "Banho para pequeno porte",
        price: "4,90",
        image: "servico-2.png",
        description: "Oferecemos um serviço de banho dedicado e especializado para o seu amigo peludo no nosso PetShop. Nossa equipe apaixonada e treinada proporciona uma experiência de banho tranquila e agradável, utilizando produtos de alta qualidade e adaptados ao tipo de pelagem do seu pet."
    },
    {
        id: 3,
        name: "Banho para grande porte",
        price: "39,90",
        image: "servico-3.png",
        description: "Oferecemos um serviço de banho dedicado e especializado para o seu amigo peludo no nosso PetShop. Nossa equipe apaixonada e treinada proporciona uma experiência de banho tranquila e agradável, utilizando produtos de alta qualidade e adaptados ao tipo de pelagem do seu pet."
    },
    {
        id: 4, name: "Tosa para grande porte",
        price: "11,90",
        image: "servico-4.png",
        description: "Oferecemos um serviço de tosa dedicado e especializado para o seu amigo peludo no nosso PetShop. Nossa equipe apaixonada e treinada proporciona uma experiência de tosa tranquila e agradável, para deixar o pelo do seu pet em sua melhor forma."
    }
];

// determina o servico a ser exibido com base na uri
let index = uri.split('/'); // quebra a uri em um array na /
index = index[3].split('.'); // quebra o array na extensão do arquivo
index = parseInt(index[0]); // converte o index para inteiro
index = index - 1; // subtrai 1 do index para obter o servico correto

// constroi o elemento do servico com base nas informações do array
const product = products[index];
let productElement = document.createElement('div');
productElement.innerHTML = `
    <div class="row product mt-5">
        <div class="col-12 col-md-6">
            <img src="../img/${product.image}" alt="Imagem de ${product.name}" class="img-fluid w-100">
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
            <a href="carrinho.html" class="btn btn-primary d-none d-md-block">Agendar Serviço</a>
        </div>
    </div>

`;
// Injeta o servico na sua div
let parent = document.getElementById("servico-" + (index + 1));
parent.appendChild(productElement);
