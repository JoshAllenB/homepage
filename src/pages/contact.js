import stockPhoto from "../images/work-stockphoto.jpg";

export default class Contact {
  static copyToClipboard = (text) => {
    if (!navigator.clipboard) {
      console.error("Clipboard API not supported");
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Copied:", text);
        // Optional: show temporary UI feedback here
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  static loadContact = () => {
    const container = document.createElement("div");
    container.className = "contact-container";
    container.id = "contact";

    const content = document.createElement("div");
    content.className = "contact-content";

    container.appendChild(content);
    container.appendChild(this.image());

    content.appendChild(this.title());
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

  static email = () => {
    const container = document.createElement("div");
    container.className = "email-container";

    const emailText = "batayolajoshuaallen@gmail.com";
    container.textContent = emailText;
    container.style.cursor = "pointer";

    container.addEventListener("click", () => {
      this.copyToClipboard(emailText);
      container.textContent = "Copied!";
      setTimeout(() => {
        container.textContent = emailText;
      }, 2000);
    });

    return container;
  };

  static phone = () => {
    const container = document.createElement("div");
    container.className = "phone-container";

    const phoneText = "+63 928 214 3861";
    container.textContent = phoneText;
    container.style.cursor = "pointer";

    container.addEventListener("click", () => {
      this.copyToClipboard(phoneText);
      container.textContent = "Copied!";
      setTimeout(() => {
        container.textContent = phoneText;
      }, 2000);
    });

    return container;
  };

  static socMed = () => {
    const container = document.createElement("div");
    container.className = "socmed-container";

    container.innerHTML = `<a href="https://github.com/JoshAllenB"><i class="fa-brands fa-github"></i></a>
    <a href="https://www.linkedin.com/in/joshua-allen-batayola-6b3b4627b/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`;
    return container;
  };
}
