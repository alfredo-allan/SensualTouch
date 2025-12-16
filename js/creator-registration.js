document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitCreator");

  submitBtn.addEventListener("click", () => {
    // Feedback visual
    submitBtn.innerText = "Processando Dados...";
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerText = "Continuar para Verificação";
      submitBtn.disabled = false;

      // CHAMADA DO NOSSO MODAL REUTILIZÁVEL
      STModal.show({
        title: "Etapa Concluída",
        message:
          "Seu perfil inicial foi salvo. Agora, para sua segurança e dos nossos usuários, precisamos verificar sua identidade.",
        icon: "verified_user",
        confirmText: "Iniciar Verificação",
        onConfirm: () => {
          console.log("Iniciando fluxo de KYC/Documentos");
          // window.location.href = 'verify-identity.html';
        },
      });
    }, 1500);
  });
});
