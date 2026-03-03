export default class Handler {
  static loadHandler = () => {
    this.navigationHandler();
  };

  static navigationHandler = () => {
    const navToggle = document.querySelector(".menu-toggle");
      navToggle.addEventListener("click", () => {
        const navItems = document.querySelector(".nav-container");
        if (navItems) {
          navItems.classList.toggle("active");
        }
      });

    const navLinks = document.querySelectorAll(".nav-link");

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
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight : 0;
          const elementTop =
            targetElement.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementTop - headerHeight,
            behavior: "smooth",
          });
        }
      });
    });
  };
}
