/**
 * SensualTouch Modal Engine
 * Finalidade: Respostas de sistema, confirmações e alertas visuais.
 */
const STModal = {
  init() {
    // Cria o container do modal se não existir
    if (!document.getElementById("st-modal-container")) {
      const container = document.createElement("div");
      container.id = "st-modal-container";
      container.className =
        "fixed inset-0 z-[9999] hidden items-center justify-center p-4 st-modal-overlay";
      document.body.appendChild(container);
    }
  },

  /**
   * @param {Object} config - title, message, icon, confirmText, type, onConfirm
   */
  show({
    title,
    message,
    icon = "priority_high",
    confirmText = "Entendido",
    type = "default",
    onConfirm = null,
  }) {
    this.init();
    const container = document.getElementById("st-modal-container");

    // Define cor do ícone baseado no tipo
    const iconColor = type === "error" ? "text-red-600" : "text-[#C6A87C]";

    container.innerHTML = `
            <div class="st-modal-card w-full max-w-sm md:max-w-md rounded-3xl p-8 text-center relative overflow-hidden">
                <div class="absolute -top-24 -left-24 w-48 h-48 bg-[#4A0404] opacity-20 rounded-full blur-[60px]"></div>

                <div class="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 st-modal-icon-bg relative z-10">
                    <span class="material-icons-outlined text-4xl ${iconColor}">${icon}</span>
                </div>

                <h3 class="font-display text-2xl font-bold text-white mb-3 relative z-10">${title}</h3>
                <p class="text-gray-400 text-sm md:text-base mb-8 font-light tracking-wide leading-relaxed">
                    ${message}
                </p>

                <div class="space-y-3 relative z-10">
                    <button id="st-modal-confirm" class="st-modal-btn w-full py-4 text-white rounded-xl font-bold uppercase tracking-widest text-xs">
                        ${confirmText}
                    </button>
                    <button id="st-modal-close" class="w-full py-2 text-gray-500 hover:text-gray-300 text-[11px] uppercase tracking-tighter transition-colors">
                        Cancelar
                    </button>
                </div>
            </div>
        `;

    container.classList.remove("hidden");
    container.classList.add("flex");
    setTimeout(() => container.classList.add("st-modal-active"), 10);

    // Eventos
    document.getElementById("st-modal-confirm").onclick = () => {
      this.close();
      if (onConfirm) onConfirm();
    };

    document.getElementById("st-modal-close").onclick = () => this.close();
    container.onclick = (e) => {
      if (e.target === container) this.close();
    };
  },

  close() {
    const container = document.getElementById("st-modal-container");
    container.classList.remove("st-modal-active");
    setTimeout(() => {
      container.classList.add("hidden");
      container.classList.remove("flex");
    }, 300);
  },
};
