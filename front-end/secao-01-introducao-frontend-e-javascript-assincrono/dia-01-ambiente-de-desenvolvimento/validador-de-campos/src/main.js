import validator from 'validator';

// Selecionando os campos do arquivo HTML.
const campoDeTexto = document.getElementById('value');
const button = document.getElementById('button');
const seletor = document.getElementById('option');
const textoDeSaida = document.getElementById('answer');

button.addEventListener('click', (event) => {
    // Usando o preventDefault() para evitar que, ao clicar, recarregue a página.
    event.preventDefault();

    // Aqui, criamos um objeto cujas chaves são os tipos a
    // serem validados. Por exemplo, a chave CPF valida se
    // o campoDeTexto.value é um CPF.
    const campos = {
        cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
        hexColor: validator.isHexColor(campoDeTexto.value),
        email: validator.isEmail(campoDeTexto.value),
        uuid: validator.isUUID(campoDeTexto.value, 4),
        url: validator.isURL(campoDeTexto.value),
    };
    // O objeto 'campos' possui as chaves com o mesmo nome
    // das opções do seletor em nossa página. Assim, podemos
    // selecionar a chave de acordo com o selecionado no HTML
    textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;
});
