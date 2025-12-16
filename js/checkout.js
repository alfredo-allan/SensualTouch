document.addEventListener("DOMContentLoaded", () => {
  const confirmBtn = document.getElementById("confirmPurchase");

  confirmBtn.addEventListener("click", () => {
    // Simulação de processamento
    confirmBtn.innerHTML = `
            <span class="animate-spin material-icons-round">sync</span>
            <span class="font-bold tracking-widest uppercase">Processando...</span>
        `;
    confirmBtn.disabled = true;

    setTimeout(() => {
      // RESPOSTA SENSACIONAL COM O NOSSO MODAL
      STModal.show({
        title: "Compra Concluída",
        message:
          "Seu pagamento foi aprovado! O conteúdo exclusivo já está disponível na sua galeria. Divirta-se com a SensualTouch.",
        icon: "verified",
        confirmText: "Ver Minha Galeria",
        onConfirm: () => {
          window.location.href = "galeria.html";
        },
      });

      // Reset do botão (caso ele feche o modal)
      confirmBtn.disabled = false;
    }, 2000);
  });
});
