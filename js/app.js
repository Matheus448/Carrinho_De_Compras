let valorCarrinho = 0;
// inciar carrinho vazio
limpar();

//botao adicionar
function adicionar() {
    //buscar produto, nome do produto, valor unitario, quantidade e valor total
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let produtoValorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let produtoValorTotal = quantidade * produtoValorUnitario;

    //Mensagem de confirmação
    if (confirm(`Você tem certeza que deseja adicionar ${nomeProduto} ao seu carrinho ?`)) {}

    //adicionando ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${produtoValorTotal}</span>
        </section>`;

    //valor carrinho
    valorCarrinho = valorCarrinho + produtoValorTotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorCarrinho}`;
    document.getElementById('quantidade').value = 0;
}


function limpar() {
valorCarrinho = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

}