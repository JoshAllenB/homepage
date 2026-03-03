import weatherImg from "../images/weather-app.png";
import todoImg from "../images/todo-app.png";
import valentineImg from "../images/valentine-app.png";
import wmmEdit from "../images/wmm/wmmEdit.png";
import wmmHome from "../images/wmm/wmmHomeSidebar.png";
import wmmOther from "../images/wmm/wmmOther.png";
import wmmFilter from "../images/wmm/wmmFilter.png";
import wmmView from "../images/wmm/wmmView.png";

export default class Work {
  // Define work items as data
  static workItems = [
    {
      title: "WMM Subscription Manager",
      description:
        "Internal software I made for Misionary Group to manage their magazine subscription status. It allows users to view, edit, and filter subscription information in a user-friendly interface.",
      images: [wmmHome, wmmEdit, wmmOther, wmmFilter, wmmView], // can add images later],
    },
    {
      title: "Weather App",
      description:
        "This app allows you to check current weather conditions for your location",
      images: [weatherImg], // can add more later
      githubLink: "https://github.com/JoshAllenB/weather-app",
    },
    {
      title: "Todo App",
      description:
        "This app helps you keep track of your tasks and stay organized!",
      images: [todoImg],
      githubLink: "https://github.com/JoshAllenB/todo-app",
    },
    {
      title: "Valentine App",
      description:
        "This app helps you celebrate Valentine's Day with your loved ones!",
      images: [valentineImg],
      githubLink: "https://github.com/JoshAllenB/valentine-app",
    },
  ];

  static loadWork = () => {
    const container = document.createElement("div");
    container.className = "work-container";
    container.id = "work";

    const title = document.createElement("h1");
    title.className = "work-title";
    title.innerHTML = "My Work";
    container.appendChild(title);

    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    // Generate cards dynamically from data
    this.workItems.forEach((item) => {
      const card = this.generateCard(
        item.title,
        item.description,
        item.images,
        item.githubLink,
      );
      cardContainer.appendChild(card);
    });

    container.appendChild(cardContainer);
    return container;
  };

  // Add helper methods for managing work items
  static addWorkItem(item) {
    this.workItems.push(item);
  }

  static removeWorkItem(title) {
    this.workItems = this.workItems.filter((item) => item.title !== title);
  }

  static updateWorkItem(index, newItem) {
    if (index >= 0 && index < this.workItems.length) {
      this.workItems[index] = newItem;
    }
  }

  static generateCard = (title, description, images, githubLink) => {
    const card = document.createElement("div");
    card.className = "card";

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;

    const cardContent = document.createElement("p");
    cardContent.textContent = description;

    const cardImage = document.createElement("img");
    cardImage.src = images[0];
    cardImage.alt = title;
    cardImage.style.cursor = "pointer";

    // Create lightbox opener once
    if (!this.lightboxOpen) {
      this.lightboxOpen = this.createLightbox();
    }

    cardImage.addEventListener("click", () => {
      this.lightboxOpen(images, 0);
    });

    if (githubLink) {
      const githubLinkElement = document.createElement("a");
      githubLinkElement.href = githubLink;
      githubLinkElement.target = "_blank";
      githubLinkElement.rel = "noopener noreferrer";

      const githubLogo = document.createElement("div");
      githubLogo.className = "github-logo";
      githubLogo.innerHTML = `<i class="fa-brands fa-github"></i>`;

      githubLinkElement.appendChild(githubLogo);
      card.appendChild(githubLinkElement);
    }

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
  };

  static createLightbox() {
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <button class="lightbox-prev">&#10094;</button>
    <img class="lightbox-image" />
    <button class="lightbox-next">&#10095;</button>
  `;

    document.body.appendChild(overlay);

    const imgElement = overlay.querySelector(".lightbox-image");
    const closeBtn = overlay.querySelector(".lightbox-close");
    const prevBtn = overlay.querySelector(".lightbox-prev");
    const nextBtn = overlay.querySelector(".lightbox-next");

    let currentImages = [];
    let currentIndex = 0;

    const showImage = () => {
      imgElement.src = currentImages[currentIndex];
    };

    const open = (images, index) => {
      currentImages = images;
      currentIndex = index;
      showImage();
      overlay.classList.add("active");
    };

    const close = () => overlay.classList.remove("active");

    const next = () => {
      currentIndex = (currentIndex + 1) % currentImages.length;
      showImage();
    };

    const prev = () => {
      currentIndex =
        (currentIndex - 1 + currentImages.length) % currentImages.length;
      showImage();
    };

    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);

    return open;
  }
}
