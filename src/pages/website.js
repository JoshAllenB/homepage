import header from "../structure/header.js";
import Handler from "../structure/handlers.js";
import Hero from "../pages/hero.js";
import About from "../pages/about.js";
import Skill from "../pages/skills.js";
import Work from "../pages/work.js";
import Contact from "../pages/contact.js";

export default class Webpage {
  static loadWeb = () => {
    const container = document.querySelector(".container");

    container.appendChild(header.loadHeader());
    container.appendChild(Hero.loadHero());
    container.appendChild(About.loadAbout());
    container.appendChild(Skill.loadSkill());
    container.appendChild(Work.loadWork());
    container.appendChild(Contact.loadContact());

    Handler.loadHandler();
  };
}
