document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const messageDiv = document.getElementById('loginMessage');
  messageDiv.textContent = '';

  try {
    const response = await fetch('https://api-supply.onrender.com/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (response.ok) {
  messageDiv.className = 'message success';
  messageDiv.textContent = 'Login realizado com sucesso!';
      // Redirecionar ou salvar token, se necessário
    } else {
  messageDiv.className = 'message error';
  messageDiv.textContent = data.message || 'Erro ao fazer login.';
    }
  } catch (err) {
  messageDiv.className = 'message error';
  messageDiv.textContent = 'Erro de conexão.';
  }
});
