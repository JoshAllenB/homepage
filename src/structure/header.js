export default class Header {
  static loadHeader = () => {
    const header = document.createElement("header");

    const headerContainer = document.createElement("div");
    headerContainer.className = "header-container";

    const contentContainer = document.createElement("div");
    contentContainer.className = "content-container";

    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add("header-container--sticky");
      } else {
        header.classList.remove("header-container--sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);

    const title = (logoName) => {
      const h1 = document.createElement("h1");
      h1.className = "title-logo";
      h1.textContent = logoName;
      return h1;
    };

    // menuToggle now takes nav as argument and toggles 'active' class
    const menuToggle = (nav) => {
      const toggleContainer = document.createElement("div");
      toggleContainer.className = "menu-toggle";
      toggleContainer.innerHTML = `<i class="fa-solid fa-bars"></i>`;
      toggleContainer.addEventListener("click", () => {
        nav.classList.toggle("active");
      });
      return toggleContainer;
    };

    const createNavigation = () => {
      const nav = document.createElement("nav");
      nav.className = "primary-navigation";
      nav.setAttribute("aria-label", "Main navigation");

      // Use matchMedia for better responsive handling
      const mobileMediaQuery = window.matchMedia("(max-width: 880px)");
      nav.setAttribute("aria-hidden", mobileMediaQuery.matches);

      // Optional: Listen for resize events to update aria-hidden
      mobileMediaQuery.addEventListener("change", (e) => {
        nav.setAttribute("aria-hidden", e.matches);
      });

      const navList = document.createElement("ul");
      navList.className = "nav-list";

      const navItems = [
        { label: "About", href: "#about" },
        { label: "Work", href: "#work" },
        { label: "Contact", href: "#contact" },
      ];

      navItems.forEach(({ label, href }) => {
        const listItem = document.createElement("li");
        listItem.className = "nav-item";

        const link = document.createElement("a");
        link.href = href;
        link.textContent = label;
        link.className = "nav-link";

        listItem.appendChild(link);
        navList.appendChild(listItem);
      });

      nav.appendChild(navList);
      return nav;
    };

    const nav = createNavigation();
    contentContainer.appendChild(title("</JB>"));
    contentContainer.appendChild(menuToggle(nav));
    contentContainer.appendChild(nav);
    headerContainer.appendChild(contentContainer);
    header.appendChild(headerContainer);

    return header;
  };
}
