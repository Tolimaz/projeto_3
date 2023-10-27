$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate ({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        errorPlacement: function(error, element) {
            error.appendTo(element.closest('.botao'));
        },
        messages: {
            nome : 'Insira o seu Nome',
            email: 'insira seu email ou email valido',
            telefone: 'Insira seu telefone ou telefone valido',
            mensagem: 'insira a sua mensagem'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validor) {
            let camposIncorretos = validor.numberOfInvalids();
            console.log(camposIncorretos)
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })
})