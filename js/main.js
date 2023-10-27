$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

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
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        errorPlacement: function(error, element) {
            error.appendTo(element.closest('.botao'));
        },
        messages: {
            nome: 'Por favor insira o seu nome.',
            email: 'Insira o seu email, ou email válido.',
            telefone: 'Insira seu telefone, ou telefone válido.',
            cpf: 'Insira seu CPF, ou CPF válido.',
            endereco: 'Insira seu endereço, ou endereço válido.',
            cep: 'Insira se CEP, ou CEP valido.'
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