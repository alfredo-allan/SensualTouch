document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("registrationForm");

  if (registrationForm) {
    registrationForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // 1. Coleta de dados
      const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        dateJoined: new Date().toISOString(),
      };

      // 2. Feedback visual no botão
      const btn = registrationForm.querySelector('button[type="submit"]');
      const originalText = btn.innerText;
      btn.innerText = "Validando Acesso...";
      btn.disabled = true;

      // 3. Simulação de delay de rede/processamento
      setTimeout(() => {
        // Salva no banco local (Mock)
        localStorage.setItem("currentUser", JSON.stringify(userData));

        // Reset do botão
        btn.innerText = originalText;
        btn.disabled = false;

        // 4. CHAMADA DO MODAL (Substituindo o alert comum)
        STModal.show({
          title: "Acesso Autorizado",
          message: `Seja bem-vindo, ${userData.name}! Sua jornada exclusiva na SensualTouch começa agora. Explore conteúdos únicos com total discrição.`,
          icon: "auto_awesome",
          confirmText: "Começar Exploração",
          onConfirm: () => {
            // Pega o caminho atual para saber se estamos no GitHub ou Local
            const isGithub = window.location.hostname.includes("github.io");

            if (isGithub) {
              // No GitHub Pages, precisamos garantir que o nome do repositório esteja no caminho
              window.location.href = "/SensualTouch/pages/home.html";
            } else {
              // No seu computador (Local), geralmente a pasta pages está na raiz do projeto
              window.location.href = "./pages/home.html";
            }
          },
        });
      }, 1500);
    });
  }
});
