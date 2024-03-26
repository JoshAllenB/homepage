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

    const navLinks = document.querySelectorAll(".nav-links");

    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        navLinks.forEach((navLink) => {
          navLink.classList.remove("highlight");
        });

        link.classList.add("highlight");

        const targetId = link.getAttribute("href");

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 200, // Adjust the offset as needed
            behavior: "smooth",
          });
        }
      });
    });
  };
}
