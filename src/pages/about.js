import profile from "../images/profile.jpg";

export default class About {
  static loadAbout = () => {
    const container = document.createElement("div");
    container.className = "about";

    const imgContainer = document.createElement("div");
    imgContainer.className = "about-img-container";

    imgContainer.appendChild(this.loadProfile());

    container.appendChild(imgContainer);
    container.appendChild(this.description());

    return container;
  };

  static description = () => {
    const descriptionContainer = document.createElement("div");
    descriptionContainer.className = "hero";

    const aboutContainer = document.createElement("div");
    aboutContainer.className = "about-content";

    const title = document.createElement("h1");
    title.className = "about-title";
    title.innerHTML = "About Me";

    const paragraph = document.createElement("p");
    paragraph.className = "about-paragraph";
    paragraph.innerHTML =
      "I am a software engineer with a passion for learning new technologies and developing new projects. I have a strong background in web development and I have a strong interest in learning new technologies and developing new projects.";

    aboutContainer.appendChild(title);
    aboutContainer.appendChild(paragraph);
    descriptionContainer.appendChild(aboutContainer);
    descriptionContainer.appendChild(this.icons());

    return descriptionContainer;
  };

  static icons = () => {
    const iconContainer = document.createElement("div");
    iconContainer.className = "icon-container";

    const icons = document.createElement("div");
    icons.className = "icons";
    icons.innerHTML = `<i class="fa-brands fa-github"></i>
    <i class="fa-brands fa-linkedin"></i>`;

    iconContainer.appendChild(icons);

    return iconContainer;
  };

  static loadProfile = () => {
    const profileImg = new Image();
    profileImg.src = profile;
    profileImg.alt = "self portrait";
    profileImg.className = "profile";
    return profileImg;
  };
}
