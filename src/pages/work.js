import weatherImg from "../images/weather-app.png";
import todoImg from "../images/todo-app.png";
import valentineImg from "../images/valentine-app.png";

export default class Work {
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

    const weatherAppCard = Work.generateCard(
      "Weather App",
      "This app allows you to check current weather conditions for your location",
      weatherImg,
      "https://github.com/JoshAllenB/weather-app"
    );

    const todoAppCard = Work.generateCard(
      "Todo App",
      "This app helps you keep track of your tasks and stay organized!",
      todoImg,
      "https://github.com/JoshAllenB/todo-app"
    );

    const valentineAppCard = Work.generateCard(
      "Valentine App",
      "This app helps you celebrate Valentine's Day with your loved ones!",
      valentineImg,
      "https://github.com/JoshAllenB/valentine-app"
    );

    cardContainer.appendChild(weatherAppCard);
    cardContainer.appendChild(todoAppCard);
    cardContainer.appendChild(valentineAppCard);

    container.appendChild(cardContainer);

    return container;
  };

  static generateCard = (title, description, imageUrl, githubLink) => {
    const card = document.createElement("div");
    card.className = "card";

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;

    const cardContent = document.createElement("p");
    cardContent.textContent = description;

    const cardImage = document.createElement("img");
    cardImage.src = imageUrl;
    cardImage.alt = title;

    const githubLinkElement = document.createElement("a");
    githubLinkElement.href = githubLink;

    const githubLogo = document.createElement("div");
    githubLogo.className = "github-logo";
    githubLogo.innerHTML = `<i class="fa-brands fa-github"></i>`;

    githubLinkElement.appendChild(githubLogo);

    // Append elements to the card
    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    card.appendChild(githubLinkElement);

    return card;
  };
}
