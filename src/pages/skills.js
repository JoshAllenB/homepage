export default class Skill {
  static loadSkill = () => {
    const container = document.createElement("div");
    container.className = "skill-container";

    // Create three identical logos containers
    const logos1 = document.createElement("div");
    logos1.className = "logos";
    logos1.innerHTML = `
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
    `;
    const logos2 = logos1.cloneNode(true);
    const logos3 = logos1.cloneNode(true);

    // Append the logos containers to the main container
    container.appendChild(logos1);
    container.appendChild(logos2);
    container.appendChild(logos3);

    return container;
  };
}
