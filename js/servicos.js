
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
let index = uri.match(/\d+/)[0]; // obtem o id da uri
index = parseInt(index); // converte o index para inteiro
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
            <a href="javascript:void(0)" onclick="abrirAgendamento()" class="btn btn-primary d-none d-md-block">Agendar Serviço</a>
        </div>
    </div>
    <div class="row d-none agendamento">
        <div class="col-12">
            <div class="form-group">
                <label for="data">Data ára a realização do serviço</label>
                <input type="date" class="form-control" id="data" placeholder="Data">
            </div>
            <div class="form-group">
                <label for="hora">Horário para a realização do serviço</label>
                <input type="time" class="form-control" id="hora" placeholder="Horário">
            </div>
            <div class="form-group">
                <label for="pet">Selecione o Pet</label>
                <select class="form-control" id="pet">
                    <option disabled selected>Selecione o Pet</option>
                    <option>Simão</option>
                    <option>Batista</option>
                </select>
                <a href="../pets.html">Seu pet não está na lista? Cadastrar</a>
            </div>
            <div class="form-group">
                <label for="observacoes">Observações</label>
                <textarea class="form-control" id="observacoes" rows="3"></textarea>
            </div>
            <div class="form-group">

                <input type="checkbox" id="confirmar" name="confirmar" value="confirmar">  Adicionar tele-busca ao serviço por R$ 29,90

                <div class="form-group">
                <label for="end-busca">Endereço para a tele-busca</label>
                <input type="text" class="form-control" id="end-busca" placeholder="Endereço para a tele-busca">
                </div>
            </div>
            <br>
            <a href="../carrinho.html" class="btn btn-primary d-block">Confirmar Agendamento</a>
        </div>

`;
// Injeta o servico na sua div
let parent = document.getElementById("servico-" + (index + 1));
parent.appendChild(productElement);

function abrirAgendamento() {
    let agendamento = document.querySelector(".agendamento");
    agendamento.classList.toggle("d-none");
}
