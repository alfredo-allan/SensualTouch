/** * SensualTouch - Tailwind Configuration
 * Este arquivo define a identidade visual global do projeto.
 */

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // A cor da sensualidade: Vinho Profundo
        primary: "#4A0404",
        // O toque de luxo: Dourado
        secondary: "#C6A87C",
        "gold-hover": "#D4B991",
        "background-light": "#F5F5F5",
        "background-dark": "#0D0D0D", // Carbon Black
        "surface-dark": "#1E1E1E",
        "surface-light": "#FFFFFF",
        "text-primary-dark": "#E0E0E0",
        "text-secondary-dark": "#A0A0A0",
      },
      fontFamily: {
        // Montserrat para leitura e formulários
        sans: ["Montserrat", "sans-serif"],
        // Playfair Display para o ar de "Mundo Sensual"
        display: ["Playfair Display", "serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      boxShadow: {
        // Sombra suave dourada para botões de destaque
        gold: "0 4px 14px 0 rgba(198, 168, 124, 0.25)",
      },
    },
  },
};
