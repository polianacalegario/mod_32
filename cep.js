const cepInput = document.getElementById('cepInput');
const searchButton = document.getElementById('searchButton');
const addressDisplay = document.getElementById('addressDisplay');

searchButton.addEventListener('click', () => {
  const cep = cepInput.value.replace(/\D/g, '');
  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          const address = `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}, CEP: ${data.cep}`;
          addressDisplay.textContent = address;
        } else {
          addressDisplay.textContent = 'CEP não encontrado.';
        }
      })
      .catch(error => {
        console.error('Erro na consulta:', error);
      });
  } else {
    addressDisplay.textContent = 'CEP inválido.';
  }
});
