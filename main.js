$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('#botao-adicionar').click(function(e) {
        e.preventDefault();

        const enderecoNovaImagem = $('#endereco-nova-imagem').val();
        const novoItem = $('<li style="display: none"></li>');

        $(`<img src="${enderecoNovaImagem}" alt="Pintura de um gato">`).appendTo(novoItem);
        $(`
            <div class="overlay-img"> 
                <a href="${enderecoNovaImagem}" target="_blank" title="ver imagem em temanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-nova-imagem').val(' ')

    })
})
