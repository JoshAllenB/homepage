import stockPhoto from "../images/work-stockphoto.jpg";

export default class Contact {
  static loadContact = () => {
    const container = document.createElement("div");
    container.className = "contact-container";
    container.id = "contact";

    const content = document.createElement("div");
    content.className = "contact-content";

    container.appendChild(content);
    container.appendChild(this.image());

    content.appendChild(this.title());
    content.appendChild(this.address());
    content.appendChild(this.email());
    content.appendChild(this.phone());
    content.appendChild(this.socMed());

    return container;
  };

  static title = () => {
    const title = document.createElement("h1");
    title.className = "contact-title";
    title.innerHTML = "Contact Me";

    return title;
  };

  static image = () => {
    const container = document.createElement("div");
    container.className = "image-container";

    const image = document.createElement("img");
    image.className = "image";
    image.src = stockPhoto;

    container.appendChild(image);
    return container;
  };

  static address = () => {
    const container = document.createElement("div");
    container.className = "address-container";

    container.innerHTML = "123 Main Street, Manila, Philippines";

    return container;
  };

  static email = () => {
    const container = document.createElement("div");
    container.className = "email-container";

    container.innerHTML = "Email@email.com";

    return container;
  };

  static phone = () => {
    const container = document.createElement("div");
    container.className = "phone-container";

    container.innerHTML = "(000) 000-0000";

    return container;
  };

  static socMed = () => {
    const container = document.createElement("div");
    container.className = "socmed-container";

    container.innerHTML = `<a href="https://github.com/JoshAllenB"><i class="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/josh-allen-b92b72170/"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/joshallenb/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/joshallenb/"><i class="fa-brands fa-facebook"></i></a>`;
    return container;
  };
}
