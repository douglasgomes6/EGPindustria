const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const nome = formData.get('nome');
  const email = formData.get('email');
  const mensagem = formData.get('mensagem');

  console.log(`nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);

  fetch('/seu-ponto-de-fim-do-servidor', {
    method: 'POST',
    body: formData,
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => {
    form.reset();
    const mensagemEnvaidaDiv = document.getElementById('mensagem_enviada');
    mensagemEnvaidaDiv.style.display = 'block';
    mensagemEnvaidaDiv.innerHTML = 'Mensagem enviada com sucesso!';
    setTimeout(() => {
      mensagemEnvaidaDiv.style.display = 'none';
    }, 5000);
  });
});

