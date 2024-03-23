export default class Handler {
  static loadHandler = () => {
    this.navigationHandler();
  };

  static navigationHandler = () => {
    const navToggle = document.querySelector(".menu-toggle");
    navToggle.addEventListener("click", () => {
      const navItems = document.querySelector(".nav-container");

      navItems.classList.toggle("active");
    });
  };
}
