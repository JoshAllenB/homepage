import header from "../structure/header.js";
import Handler from "../structure/handlers.js";
import About from "../pages/about.js";
import Skill from "../pages/skills.js";

export default class Webpage {
  static loadWeb = () => {
    const container = document.querySelector(".container");

    container.appendChild(header.loadHeader());
    container.appendChild(About.loadAbout());
    container.appendChild(Skill.loadSkill());

    Handler.loadHandler();
  };
}
