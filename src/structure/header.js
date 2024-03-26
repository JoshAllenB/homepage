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
      const box = document.createElement("div");
      box.className = "title-logo";
      box.innerHTML = `
          <a href="/"><span>${logoName}</span></a>`;
      return box;
    };

    const menuToggle = () => {
      const toggleContainer = document.createElement("div");
      toggleContainer.className = "menu-toggle";

      if (window.innerWidth <= 960) {
        toggleContainer.innerHTML = `<i class="fa-solid fa-bars"></i>`;
      }

      return toggleContainer;
    };

    const navigation = () => {
      const container = document.createElement("nav");
      container.className = "primary-navigation";
      if (window.innerWidth > 880) {
        container.setAttribute("aria-hidden", false);
      } else {
        container.setAttribute("aria-hidden", true);
      }

      const lists = () => {
        const unOrderedList = document.createElement("ul");
        unOrderedList.classList.add("nav-container");
        const tabs = [
          { page: "About", link: "#about" },
          { page: "Work", link: "#work" },
          { page: "Contact", link: "#contact" },
        ];
        tabs.forEach((item) => {
          const list = document.createElement("li");
          list.innerHTML = `<a class="nav-links" href="${item.link}">${item.page}</a>`; // Updated link with href attribute
          unOrderedList.appendChild(list);
        });

        return unOrderedList;
      };
      container.appendChild(lists());
      return container;
    };

    contentContainer.appendChild(title("Fear Not"));
    contentContainer.appendChild(menuToggle());
    contentContainer.appendChild(navigation());
    headerContainer.appendChild(contentContainer);
    header.appendChild(headerContainer);

    return header;
  };
}
