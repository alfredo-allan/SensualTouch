document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuToggle");
  const closeBtn = document.getElementById("closeMenu");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  // Abrir Menu
  const openSidebar = () => {
    sidebar.classList.remove("sidebar-closed");
    sidebar.classList.add("sidebar-open");
    overlay.classList.remove("hidden", "opacity-0");
    overlay.classList.add("flex", "opacity-100");
  };

  // Fechar Menu
  const closeSidebar = () => {
    sidebar.classList.remove("sidebar-open");
    sidebar.classList.add("sidebar-closed");
    overlay.classList.remove("opacity-100");
    overlay.classList.add("opacity-0");
    setTimeout(() => overlay.classList.add("hidden"), 400);
  };

  menuBtn.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeSidebar();
  });

  // Simulação de clique nas categorias
  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((b) =>
        b.classList.replace("category-active", "category-inactive")
      );
      btn.classList.replace("category-inactive", "category-active");
    });
  });
});
