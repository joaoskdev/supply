document
  .getElementById("registerForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const messageDiv = document.getElementById("registerMessage");
    messageDiv.textContent = "";

    try {
      const response = await fetch(
        "https://api-supply.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        messageDiv.className = "message success";
        messageDiv.textContent = "Registro realizado com sucesso!";
        // Redirecionar para login, se desejar
      } else {
        messageDiv.className = "message error";
        messageDiv.textContent = data.message || "Erro ao registrar.";
      }
    } catch (err) {
      messageDiv.className = "message error";
      messageDiv.textContent = "Erro de conexão.";
    }
  });
