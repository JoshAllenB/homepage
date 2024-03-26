export default class Hero {
  static loadHero = () => {
    const container = document.createElement("div");
    container.className = "hero-container";

    const title = document.createElement("h1");
    title.className = "hero-title";
    title.innerHTML = "My name is Josh!";

    const description = document.createElement("p");
    description.className = "hero-description";
    description.innerHTML = "I am a software engineer in the Philippines";

    container.appendChild(title);
    container.appendChild(description);

    return container;
  };
}
