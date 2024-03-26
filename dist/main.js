/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/starry-night-bg.png */ "./src/images/starry-night-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Aboreto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #6f95ff;
  --secondary-color: #5c65c0;
  --accent-color: #301c41;
  --background-color: #1c0b2b;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  max-width: 100vw;
  font-family: Roboto, "sans serif";
  background-color: var(--background-color);
  overflow-x: hidden;

  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-attachment: fixed;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px !important;
}

header {
  position: sticky;
  width: 100%;
  top: 5%;
  z-index: 1;
}

.header-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(248, 248, 248, 0);
  box-shadow: 0 4px 30px rgba(163, 163, 163, 0.1);
  backdrop-filter: blur(7.4px);
  -webkit-backdrop-filter: blur(7.4px);
  border-bottom: 1px solid var(--accent-color);
  padding: 20px;
}

.content-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-logo {
  margin-left: 10%;
}

.title-logo a {
  color: var(--primary-color);
  font-family: "Aboreto", cursive;
  font-size: 2rem;
  text-decoration: none;
  animation: text-shadow-drop 1s linear 0s 1 normal forwards;
}

@keyframes text-shadow-drop {
  0% {
    text-shadow: 0 0 0 transparent;
  }
  100% {
    text-shadow: -6px 6px 18px rgb(162, 0, 255);
  }
}

.menu-btn {
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}

.menu-btn:hover {
  outline: 1px solid --secondary-color;
  background-color: var(--accent-color);
}

.primary-navigation {
  width: 25%;
  display: flex;
  align-items: center;
  margin-right: 6%;
}

.nav-container {
  display: flex;
  flex-grow: 1;
  color: var(--secondary-color);
  list-style-type: none;
}

.nav-container > li {
  flex-grow: 1;
  font-size: 1.6rem;
  padding: 15px;
  text-align: center;
  cursor: pointer;
}

.nav-container > li:hover {
  border-radius: 5px;
  background-color: var(--accent-color);
}

.nav-container > li > a {
  text-decoration: none;
  color: var(--secondary-color);
}

.nav-container .highlight {
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: underline;
  color: var(--primary-color);
}

.hero-container {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-container h1 {
  font-family: "Aboreto", cursive;
  font-size: 7rem;
  color: var(--primary-color);
  animation: title 3s ease 0s normal none;
}

@keyframes title {
  0% {
    letter-spacing: 3rem;
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    filter: blur(0);
    opacity: 1;
  }
}

.hero-container p {
  font-size: 2rem;
  color: var(--secondary-color);
  margin-top: 20px;
  animation: descr 3s linear 0s 1 normal none;
}

@keyframes descr {
  0% {
    letter-spacing: 2rem;
    transform: translateY(300px);
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    filter: blur(0);
    opacity: 1;
  }
}

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 30px;
  background: rgba(255, 255, 255, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.4px);
  -webkit-backdrop-filter: blur(7.4px);
  border: 1px solid var(--accent-color);
}

.about-content {
  max-width: 100%;
  margin: 0;
  padding: 0 20px;
  color: #ffffff;
}

.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 auto;
  gap: 20px;
  margin-right: 20px;
}

.about-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.about-content p {
  font-size: 1.5rem;
  font-weight: 400;
}

.about-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile {
  vertical-align: middle;
  width: 250px;
  height: 250px;
  border-radius: 50%;
}

.icon-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icons {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 15px;
}
.icons i {
  color: var(--secondary-color);
  font-size: 2rem;
  cursor: pointer;
}

.skill-container {
  width: 100%;
  padding: 30px 0;
  overflow: hidden;
  white-space: nowrap;
  background: rgb(255, 255, 255);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
}

.skill-container:before,
.skill-container::after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: "";
  z-index: 2;
}

.skill-container:before {
  left: 0;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0),
    var(--background-color)
  );
}

.skill-container::after {
  right: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    var(--background-color)
  );
}

.skill-container:hover .logos {
  animation-play-state: paused;
}

.logos {
  display: inline-block;
  animation: 15s slide infinite linear;
}

.logos img {
  height: 100px;
  margin: 0 50px;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.work-container {
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #ffffff;
}

.work-container h1 {
  font-size: 3rem;
  padding: 20px;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 30%;
  padding: 30px;
  gap: 20px;
  border-radius: 10px;
  background-color: var(--secondary-color);
}

.card img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
}

.card h2 {
  font-size: 1.5rem;
  font-weight: 700;
}

.card p {
  font-size: 1.3rem;
}

.card i {
  font-size: 2.5rem;
  color: #000000;
}

.card i:hover {
  color: var(--accent-color);
}

.contact-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  gap: 30px;
}

.contact-container h1 {
  font-size: 2.3rem;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.image-container img {
  width: 300px;
  padding: 20px;
}

.contact-content {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 10px;
}

.contact-content i {
  font-size: 2.5rem;
  color: #000000;
  margin: 5px;
}

@media screen and (max-width: 960px) {
  header {
    top: 0;
    position: fixed;
  }

  .container {
    gap: 100px !important;
  }

  .header-container {
    display: flex;
    justify-content: center;
    z-index: 1;
    padding: 25px;
  }

  .title-logo a {
    font-size: 1.8rem;
    color: #ffffff;
    text-decoration: none;
  }

  .menu-toggle {
    position: absolute;
    top: 20px;
    right: 5%;
    color: #ffffff;
  }

  .menu-toggle i {
    font-size: 2rem;
    color: #ffffff;
    margin: 5px auto;
    cursor: pointer;
    animation: menu 0.5s ease 0s 1 normal none;
  }

  @keyframes menu {
    0% {
      transform: scale(0.5);
      transform-origin: 50% 0%;
    }

    100% {
      transform: scale(1);
      transform-origin: 50% 0%;
    }
  }

  .nav-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: -1000px;
    opacity: 1;
    z-index: -1;
    transition: all 0.5s ease;
  }

  .nav-container.active {
    top: 85px;
    right: 1px;
    left: 1px;
    opacity: 1;
    z-index: 99;
    margin: 0;
    height: 20vh;
    margin: 1px;
    background: #00000094;
    transition: all 0.5s ease;
  }

  .nav-container > li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 10px;
    cursor: pointer;
  }

  .nav-container li:hover {
    width: 100%;
    background-color: #ffffff49;
  }

  .hero-container h1 {
    font-size: 2rem;
    animation: title 3s ease 0s normal none;
  }

  @keyframes title {
    0% {
      letter-spacing: 0.5rem;
      filter: blur(12px);
      opacity: 0;
    }

    100% {
      filter: blur(0);
      opacity: 1;
    }
  }
  .hero-container p {
    font-size: 1rem;
    animation: descr 3s linear 0s 1 normal none;
  }

  @keyframes descr {
    0% {
      letter-spacing: 0.3rem;
      transform: translateY(300px);
      filter: blur(12px);
      opacity: 0;
    }

    100% {
      transform: translateY(0px);
      filter: blur(0);
      opacity: 1;
    }
  }

  .about {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .about-content h1 {
    font-size: 2rem;
  }

  .about-content p {
    font-size: 1rem;
  }

  .profile {
    width: 150px;
    height: 150px;
  }

  .skill-container {
    padding: 10px;
  }

  .logos img {
    height: 70px;
    margin: 0 30px;
  }

  .card-container {
    display: flex;
    flex-direction: column;
  }

  .card {
    display: flex;
    max-width: 100%;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .contact-container h1 {
    font-size: 2rem;
    padding: 5px;
  }

  .contact-content {
    font-size: 1rem;
  }

  .contact-content i {
    font-size: 2rem;
  }

  .image-container img {
    width: 250px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Aboreto&display=swap\");\n\n:root {\n  --primary-color: #6f95ff;\n  --secondary-color: #5c65c0;\n  --accent-color: #301c41;\n  --background-color: #1c0b2b;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\nbody {\n  max-width: 100vw;\n  font-family: Roboto, \"sans serif\";\n  background-color: var(--background-color);\n  overflow-x: hidden;\n\n  background-image: url(\"./images/starry-night-bg.png\");\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 200px !important;\n}\n\nheader {\n  position: sticky;\n  width: 100%;\n  top: 5%;\n  z-index: 1;\n}\n\n.header-container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(248, 248, 248, 0);\n  box-shadow: 0 4px 30px rgba(163, 163, 163, 0.1);\n  backdrop-filter: blur(7.4px);\n  -webkit-backdrop-filter: blur(7.4px);\n  border-bottom: 1px solid var(--accent-color);\n  padding: 20px;\n}\n\n.content-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.title-logo {\n  margin-left: 10%;\n}\n\n.title-logo a {\n  color: var(--primary-color);\n  font-family: \"Aboreto\", cursive;\n  font-size: 2rem;\n  text-decoration: none;\n  animation: text-shadow-drop 1s linear 0s 1 normal forwards;\n}\n\n@keyframes text-shadow-drop {\n  0% {\n    text-shadow: 0 0 0 transparent;\n  }\n  100% {\n    text-shadow: -6px 6px 18px rgb(162, 0, 255);\n  }\n}\n\n.menu-btn {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.menu-btn:hover {\n  outline: 1px solid --secondary-color;\n  background-color: var(--accent-color);\n}\n\n.primary-navigation {\n  width: 25%;\n  display: flex;\n  align-items: center;\n  margin-right: 6%;\n}\n\n.nav-container {\n  display: flex;\n  flex-grow: 1;\n  color: var(--secondary-color);\n  list-style-type: none;\n}\n\n.nav-container > li {\n  flex-grow: 1;\n  font-size: 1.6rem;\n  padding: 15px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.nav-container > li:hover {\n  border-radius: 5px;\n  background-color: var(--accent-color);\n}\n\n.nav-container > li > a {\n  text-decoration: none;\n  color: var(--secondary-color);\n}\n\n.nav-container .highlight {\n  text-align: center;\n  border-radius: 5px;\n  cursor: pointer;\n  text-decoration: underline;\n  color: var(--primary-color);\n}\n\n.hero-container {\n  width: 100%;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.hero-container h1 {\n  font-family: \"Aboreto\", cursive;\n  font-size: 7rem;\n  color: var(--primary-color);\n  animation: title 3s ease 0s normal none;\n}\n\n@keyframes title {\n  0% {\n    letter-spacing: 3rem;\n    filter: blur(12px);\n    opacity: 0;\n  }\n\n  100% {\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n\n.hero-container p {\n  font-size: 2rem;\n  color: var(--secondary-color);\n  margin-top: 20px;\n  animation: descr 3s linear 0s 1 normal none;\n}\n\n@keyframes descr {\n  0% {\n    letter-spacing: 2rem;\n    transform: translateY(300px);\n    filter: blur(12px);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateY(0px);\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n\n.about {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 60%;\n  padding: 30px;\n  background: rgba(255, 255, 255, 0);\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(7.4px);\n  -webkit-backdrop-filter: blur(7.4px);\n  border: 1px solid var(--accent-color);\n}\n\n.about-content {\n  max-width: 100%;\n  margin: 0;\n  padding: 0 20px;\n  color: #ffffff;\n}\n\n.about-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 0 auto;\n  gap: 20px;\n  margin-right: 20px;\n}\n\n.about-content h1 {\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n\n.about-content p {\n  font-size: 1.5rem;\n  font-weight: 400;\n}\n\n.about-img-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.profile {\n  vertical-align: middle;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n}\n\n.icon-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.icons {\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 15px;\n}\n.icons i {\n  color: var(--secondary-color);\n  font-size: 2rem;\n  cursor: pointer;\n}\n\n.skill-container {\n  width: 100%;\n  padding: 30px 0;\n  overflow: hidden;\n  white-space: nowrap;\n  background: rgb(255, 255, 255);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(10.1px);\n  -webkit-backdrop-filter: blur(10.1px);\n}\n\n.skill-container:before,\n.skill-container::after {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  height: 100%;\n  content: \"\";\n  z-index: 2;\n}\n\n.skill-container:before {\n  left: 0;\n  background: linear-gradient(\n    to left,\n    rgba(255, 255, 255, 0),\n    var(--background-color)\n  );\n}\n\n.skill-container::after {\n  right: 0;\n  background: linear-gradient(\n    to right,\n    rgba(255, 255, 255, 0),\n    var(--background-color)\n  );\n}\n\n.skill-container:hover .logos {\n  animation-play-state: paused;\n}\n\n.logos {\n  display: inline-block;\n  animation: 15s slide infinite linear;\n}\n\n.logos img {\n  height: 100px;\n  margin: 0 50px;\n}\n\n@keyframes slide {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n\n.work-container {\n  width: 100%;\n  padding: 20px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  background-color: #ffffff;\n}\n\n.work-container h1 {\n  font-size: 3rem;\n  padding: 20px;\n}\n\n.card-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 30%;\n  padding: 30px;\n  gap: 20px;\n  border-radius: 10px;\n  background-color: var(--secondary-color);\n}\n\n.card img {\n  width: 100%;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n\n.card h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n\n.card p {\n  font-size: 1.3rem;\n}\n\n.card i {\n  font-size: 2.5rem;\n  color: #000000;\n}\n\n.card i:hover {\n  color: var(--accent-color);\n}\n\n.contact-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  gap: 30px;\n}\n\n.contact-container h1 {\n  font-size: 2.3rem;\n}\n\n.image-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.image-container img {\n  width: 300px;\n  padding: 20px;\n}\n\n.contact-content {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.5rem;\n  gap: 10px;\n}\n\n.contact-content i {\n  font-size: 2.5rem;\n  color: #000000;\n  margin: 5px;\n}\n\n@media screen and (max-width: 960px) {\n  header {\n    top: 0;\n    position: fixed;\n  }\n\n  .container {\n    gap: 100px !important;\n  }\n\n  .header-container {\n    display: flex;\n    justify-content: center;\n    z-index: 1;\n    padding: 25px;\n  }\n\n  .title-logo a {\n    font-size: 1.8rem;\n    color: #ffffff;\n    text-decoration: none;\n  }\n\n  .menu-toggle {\n    position: absolute;\n    top: 20px;\n    right: 5%;\n    color: #ffffff;\n  }\n\n  .menu-toggle i {\n    font-size: 2rem;\n    color: #ffffff;\n    margin: 5px auto;\n    cursor: pointer;\n    animation: menu 0.5s ease 0s 1 normal none;\n  }\n\n  @keyframes menu {\n    0% {\n      transform: scale(0.5);\n      transform-origin: 50% 0%;\n    }\n\n    100% {\n      transform: scale(1);\n      transform-origin: 50% 0%;\n    }\n  }\n\n  .nav-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    position: absolute;\n    top: -1000px;\n    opacity: 1;\n    z-index: -1;\n    transition: all 0.5s ease;\n  }\n\n  .nav-container.active {\n    top: 85px;\n    right: 1px;\n    left: 1px;\n    opacity: 1;\n    z-index: 99;\n    margin: 0;\n    height: 20vh;\n    margin: 1px;\n    background: #00000094;\n    transition: all 0.5s ease;\n  }\n\n  .nav-container > li {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    padding: 10px;\n    cursor: pointer;\n  }\n\n  .nav-container li:hover {\n    width: 100%;\n    background-color: #ffffff49;\n  }\n\n  .hero-container h1 {\n    font-size: 2rem;\n    animation: title 3s ease 0s normal none;\n  }\n\n  @keyframes title {\n    0% {\n      letter-spacing: 0.5rem;\n      filter: blur(12px);\n      opacity: 0;\n    }\n\n    100% {\n      filter: blur(0);\n      opacity: 1;\n    }\n  }\n  .hero-container p {\n    font-size: 1rem;\n    animation: descr 3s linear 0s 1 normal none;\n  }\n\n  @keyframes descr {\n    0% {\n      letter-spacing: 0.3rem;\n      transform: translateY(300px);\n      filter: blur(12px);\n      opacity: 0;\n    }\n\n    100% {\n      transform: translateY(0px);\n      filter: blur(0);\n      opacity: 1;\n    }\n  }\n\n  .about {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n  }\n\n  .about-content h1 {\n    font-size: 2rem;\n  }\n\n  .about-content p {\n    font-size: 1rem;\n  }\n\n  .profile {\n    width: 150px;\n    height: 150px;\n  }\n\n  .skill-container {\n    padding: 10px;\n  }\n\n  .logos img {\n    height: 70px;\n    margin: 0 30px;\n  }\n\n  .card-container {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .card {\n    display: flex;\n    max-width: 100%;\n  }\n\n  .contact-container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n  }\n\n  .contact-container h1 {\n    font-size: 2rem;\n    padding: 5px;\n  }\n\n  .contact-content {\n    font-size: 1rem;\n  }\n\n  .contact-content i {\n    font-size: 2rem;\n  }\n\n  .image-container img {\n    width: 250px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var _images_profile_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/profile.jpg */ "./src/images/profile.jpg");


class About {
  static loadAbout = () => {
    const container = document.createElement("div");
    container.className = "about";
    container.id = "about";

    const imgContainer = document.createElement("div");
    imgContainer.className = "about-img-container";

    imgContainer.appendChild(this.loadProfile());

    container.appendChild(imgContainer);
    container.appendChild(this.description());

    return container;
  };

  static description = () => {
    const descriptionContainer = document.createElement("div");
    descriptionContainer.className = "about-container";

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
    profileImg.src = _images_profile_jpg__WEBPACK_IMPORTED_MODULE_0__;
    profileImg.alt = "self portrait";
    profileImg.className = "profile";
    return profileImg;
  };
}


/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _images_work_stockphoto_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/work-stockphoto.jpg */ "./src/images/work-stockphoto.jpg");


class Contact {
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
    image.src = _images_work_stockphoto_jpg__WEBPACK_IMPORTED_MODULE_0__;

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


/***/ }),

/***/ "./src/pages/hero.js":
/*!***************************!*\
  !*** ./src/pages/hero.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero)
/* harmony export */ });
class Hero {
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


/***/ }),

/***/ "./src/pages/skills.js":
/*!*****************************!*\
  !*** ./src/pages/skills.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Skill)
/* harmony export */ });
class Skill {
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


/***/ }),

/***/ "./src/pages/website.js":
/*!******************************!*\
  !*** ./src/pages/website.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Webpage)
/* harmony export */ });
/* harmony import */ var _structure_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structure/header.js */ "./src/structure/header.js");
/* harmony import */ var _structure_handlers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structure/handlers.js */ "./src/structure/handlers.js");
/* harmony import */ var _pages_hero_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/hero.js */ "./src/pages/hero.js");
/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/about.js */ "./src/pages/about.js");
/* harmony import */ var _pages_skills_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/skills.js */ "./src/pages/skills.js");
/* harmony import */ var _pages_work_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/work.js */ "./src/pages/work.js");
/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/contact.js */ "./src/pages/contact.js");








class Webpage {
  static loadWeb = () => {
    const container = document.querySelector(".container");

    container.appendChild(_structure_header_js__WEBPACK_IMPORTED_MODULE_0__["default"].loadHeader());
    container.appendChild(_pages_hero_js__WEBPACK_IMPORTED_MODULE_2__["default"].loadHero());
    container.appendChild(_pages_about_js__WEBPACK_IMPORTED_MODULE_3__["default"].loadAbout());
    container.appendChild(_pages_skills_js__WEBPACK_IMPORTED_MODULE_4__["default"].loadSkill());
    container.appendChild(_pages_work_js__WEBPACK_IMPORTED_MODULE_5__["default"].loadWork());
    container.appendChild(_pages_contact_js__WEBPACK_IMPORTED_MODULE_6__["default"].loadContact());

    _structure_handlers_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadHandler();
  };
}


/***/ }),

/***/ "./src/pages/work.js":
/*!***************************!*\
  !*** ./src/pages/work.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Work)
/* harmony export */ });
/* harmony import */ var _images_weather_app_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/weather-app.png */ "./src/images/weather-app.png");
/* harmony import */ var _images_todo_app_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/todo-app.png */ "./src/images/todo-app.png");
/* harmony import */ var _images_valentine_app_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/valentine-app.png */ "./src/images/valentine-app.png");




class Work {
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
      _images_weather_app_png__WEBPACK_IMPORTED_MODULE_0__,
      "https://github.com/JoshAllenB/weather-app"
    );

    const todoAppCard = Work.generateCard(
      "Todo App",
      "This app helps you keep track of your tasks and stay organized!",
      _images_todo_app_png__WEBPACK_IMPORTED_MODULE_1__,
      "https://github.com/JoshAllenB/todo-app"
    );

    const valentineAppCard = Work.generateCard(
      "Valentine App",
      "This app helps you celebrate Valentine's Day with your loved ones!",
      _images_valentine_app_png__WEBPACK_IMPORTED_MODULE_2__,
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


/***/ }),

/***/ "./src/structure/handlers.js":
/*!***********************************!*\
  !*** ./src/structure/handlers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Handler)
/* harmony export */ });
class Handler {
  static loadHandler = () => {
    this.navigationHandler();
  };

  static navigationHandler = () => {
    const navToggle = document.querySelector(".menu-toggle");
    navToggle.addEventListener("click", () => {
      const navItems = document.querySelector(".nav-container");
      navItems.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".nav-links");

    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        navLinks.forEach((navLink) => {
          navLink.classList.remove("highlight");
        });

        link.classList.add("highlight");

        const targetId = link.getAttribute("href");

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 200, // Adjust the offset as needed
            behavior: "smooth",
          });
        }
      });
    });
  };
}


/***/ }),

/***/ "./src/structure/header.js":
/*!*********************************!*\
  !*** ./src/structure/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
class Header {
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


/***/ }),

/***/ "./src/images/profile.jpg":
/*!********************************!*\
  !*** ./src/images/profile.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f7ca551478fa40e781d.jpg";

/***/ }),

/***/ "./src/images/starry-night-bg.png":
/*!****************************************!*\
  !*** ./src/images/starry-night-bg.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c49c49fe492accbb3dde.png";

/***/ }),

/***/ "./src/images/todo-app.png":
/*!*********************************!*\
  !*** ./src/images/todo-app.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8abf90479e847d6b5fc.png";

/***/ }),

/***/ "./src/images/valentine-app.png":
/*!**************************************!*\
  !*** ./src/images/valentine-app.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "673426c3ec076952afd3.png";

/***/ }),

/***/ "./src/images/weather-app.png":
/*!************************************!*\
  !*** ./src/images/weather-app.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f2a77c3de5efeea764f.png";

/***/ }),

/***/ "./src/images/work-stockphoto.jpg":
/*!****************************************!*\
  !*** ./src/images/work-stockphoto.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e070d7a4d7cf96ab9ef.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pages_website_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/website.js */ "./src/pages/website.js");



addEventListener("DOMContentLoaded", _pages_website_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadWeb());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN0TSxxSEFBcUg7QUFDckgseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFFBQVEsS0FBSyxNQUFNLEtBQUssVUFBVSxRQUFRLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxV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Ozs7O1VDM0VBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDb0I7O0FBRXpDLHFDQUFxQyx5REFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3BhZ2VzL2hlcm8uanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvcGFnZXMvc2tpbGxzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3BhZ2VzL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvcGFnZXMvd29yay5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHJ1Y3R1cmUvaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3RydWN0dXJlL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zdGFycnktbmlnaHQtYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFib3JldG8mZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXByaW1hcnktY29sb3I6ICM2Zjk1ZmY7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjNWM2NWMwO1xuICAtLWFjY2VudC1jb2xvcjogIzMwMWM0MTtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWMwYjJiO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwic2FucyBzZXJpZlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNSU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI0OCwgMjQ4LCAwKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDE2MywgMTYzLCAxNjMsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3LjRweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDcuNHB4KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZS1sb2dvIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLnRpdGxlLWxvZ28gYSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwiQWJvcmV0b1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYW5pbWF0aW9uOiB0ZXh0LXNoYWRvdy1kcm9wIDFzIGxpbmVhciAwcyAxIG5vcm1hbCBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyB0ZXh0LXNoYWRvdy1kcm9wIHtcbiAgMCUge1xuICAgIHRleHQtc2hhZG93OiAwIDAgMCB0cmFuc3BhcmVudDtcbiAgfVxuICAxMDAlIHtcbiAgICB0ZXh0LXNoYWRvdzogLTZweCA2cHggMThweCByZ2IoMTYyLCAwLCAyNTUpO1xuICB9XG59XG5cbi5tZW51LWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtYnRuOmhvdmVyIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIC0tc2Vjb25kYXJ5LWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ucHJpbWFyeS1uYXZpZ2F0aW9uIHtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA2JTtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5uYXYtY29udGFpbmVyID4gbGkge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1jb250YWluZXIgPiBsaTpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLm5hdi1jb250YWluZXIgPiBsaSA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4ubmF2LWNvbnRhaW5lciAuaGlnaGxpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLmhlcm8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVyby1jb250YWluZXIgaDEge1xuICBmb250LWZhbWlseTogXCJBYm9yZXRvXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogN3JlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBhbmltYXRpb246IHRpdGxlIDNzIGVhc2UgMHMgbm9ybWFsIG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgdGl0bGUge1xuICAwJSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNyZW07XG4gICAgZmlsdGVyOiBibHVyKDEycHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uaGVyby1jb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGFuaW1hdGlvbjogZGVzY3IgM3MgbGluZWFyIDBzIDEgbm9ybWFsIG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgZGVzY3Ige1xuICAwJSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJyZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcbiAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5hYm91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDcuNHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNy40cHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4uYWJvdXQtY29udGVudCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYWJvdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAgYXV0bztcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5hYm91dC1jb250ZW50IGgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYWJvdXQtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5hYm91dC1pbWctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pY29uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pY29ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBnYXA6IDE1cHg7XG59XG4uaWNvbnMgaSB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LXNpemU6IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNraWxsLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMC4xcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMC4xcHgpO1xufVxuXG4uc2tpbGwtY29udGFpbmVyOmJlZm9yZSxcbi5za2lsbC1jb250YWluZXI6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiAyO1xufVxuXG4uc2tpbGwtY29udGFpbmVyOmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byBsZWZ0LFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXG4gICAgdmFyKC0tYmFja2dyb3VuZC1jb2xvcilcbiAgKTtcbn1cblxuLnNraWxsLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXG4gICAgdmFyKC0tYmFja2dyb3VuZC1jb2xvcilcbiAgKTtcbn1cblxuLnNraWxsLWNvbnRhaW5lcjpob3ZlciAubG9nb3Mge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuXG4ubG9nb3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFuaW1hdGlvbjogMTVzIHNsaWRlIGluZmluaXRlIGxpbmVhcjtcbn1cblxuLmxvZ29zIGltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCA1MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG59XG5cbi53b3JrLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi53b3JrLWNvbnRhaW5lciBoMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGdhcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLmNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNhcmQgaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhcmQgcCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uY2FyZCBpIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2FyZCBpOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi5jb250YWN0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgZ2FwOiAzMHB4O1xufVxuXG4uY29udGFjdC1jb250YWluZXIgaDEge1xuICBmb250LXNpemU6IDIuM3JlbTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY29udGFjdC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGdhcDogMTBweDtcbn1cblxuLmNvbnRhY3QtY29udGVudCBpIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW46IDVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICB0b3A6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgZ2FwOiAxMDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICB9XG5cbiAgLnRpdGxlLWxvZ28gYSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLm1lbnUtdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiA1JTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5tZW51LXRvZ2dsZSBpIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYW5pbWF0aW9uOiBtZW51IDAuNXMgZWFzZSAwcyAxIG5vcm1hbCBub25lO1xuICB9XG5cbiAgQGtleWZyYW1lcyBtZW51IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgIH1cbiAgfVxuXG4gIC5uYXYtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTAwMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgfVxuXG4gIC5uYXYtY29udGFpbmVyLmFjdGl2ZSB7XG4gICAgdG9wOiA4NXB4O1xuICAgIHJpZ2h0OiAxcHg7XG4gICAgbGVmdDogMXB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogOTk7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMjB2aDtcbiAgICBtYXJnaW46IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOTQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgfVxuXG4gIC5uYXYtY29udGFpbmVyID4gbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5uYXYtY29udGFpbmVyIGxpOmhvdmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNDk7XG4gIH1cblxuICAuaGVyby1jb250YWluZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBhbmltYXRpb246IHRpdGxlIDNzIGVhc2UgMHMgbm9ybWFsIG5vbmU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHRpdGxlIHtcbiAgICAwJSB7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xuICAgICAgZmlsdGVyOiBibHVyKDEycHgpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgIGZpbHRlcjogYmx1cigwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIC5oZXJvLWNvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYW5pbWF0aW9uOiBkZXNjciAzcyBsaW5lYXIgMHMgMSBub3JtYWwgbm9uZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgZGVzY3Ige1xuICAgIDAlIHtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAwcHgpO1xuICAgICAgZmlsdGVyOiBibHVyKDEycHgpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgZmlsdGVyOiBibHVyKDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICAuYWJvdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC5hYm91dC1jb250ZW50IGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICAuYWJvdXQtY29udGVudCBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAucHJvZmlsZSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cblxuICAuc2tpbGwtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLmxvZ29zIGltZyB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbjogMCAzMHB4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY29udGFjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gIH1cblxuICAuY29udGFjdC1jb250YWluZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuICAuY29udGFjdC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAuY29udGFjdC1jb250ZW50IGkge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMseUNBQXlDO0VBQ3pDLGtCQUFrQjs7RUFFbEIseURBQXFEO0VBQ3JELHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLE9BQU87RUFDUCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLCtDQUErQztFQUMvQyw0QkFBNEI7RUFDNUIsb0NBQW9DO0VBQ3BDLDRDQUE0QztFQUM1QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDJDQUEyQztFQUM3QztBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNq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QVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWJvcmV0byZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICM2Zjk1ZmY7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzVjNjVjMDtcXG4gIC0tYWNjZW50LWNvbG9yOiAjMzAxYzQxO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWMwYjJiO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFxcXCJzYW5zIHNlcmlmXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9zdGFycnktbmlnaHQtYmcucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDUlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNDgsIDI0OCwgMCk7XFxuICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMTYzLCAxNjMsIDE2MywgMC4xKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3LjRweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig3LjRweCk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUtbG9nbyB7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG4udGl0bGUtbG9nbyBhIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWJvcmV0b1xcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBhbmltYXRpb246IHRleHQtc2hhZG93LWRyb3AgMXMgbGluZWFyIDBzIDEgbm9ybWFsIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRleHQtc2hhZG93LWRyb3Age1xcbiAgMCUge1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDAgdHJhbnNwYXJlbnQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdGV4dC1zaGFkb3c6IC02cHggNnB4IDE4cHggcmdiKDE2MiwgMCwgMjU1KTtcXG4gIH1cXG59XFxuXFxuLm1lbnUtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtYnRuOmhvdmVyIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAtLXNlY29uZGFyeS1jb2xvcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5wcmltYXJ5LW5hdmlnYXRpb24ge1xcbiAgd2lkdGg6IDI1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiA2JTtcXG59XFxuXFxuLm5hdi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ubmF2LWNvbnRhaW5lciA+IGxpIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1jb250YWluZXIgPiBsaTpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ubmF2LWNvbnRhaW5lciA+IGxpID4gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLm5hdi1jb250YWluZXIgLmhpZ2hsaWdodCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmhlcm8tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVyby1jb250YWluZXIgaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBYm9yZXRvXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogN3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGFuaW1hdGlvbjogdGl0bGUgM3MgZWFzZSAwcyBub3JtYWwgbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyB0aXRsZSB7XFxuICAwJSB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcmVtO1xcbiAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgZmlsdGVyOiBibHVyKDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uaGVyby1jb250YWluZXIgcCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBhbmltYXRpb246IGRlc2NyIDNzIGxpbmVhciAwcyAxIG5vcm1hbCBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRlc2NyIHtcXG4gIDAlIHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJyZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMDBweCk7XFxuICAgIGZpbHRlcjogYmx1cigxMnB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgZmlsdGVyOiBibHVyKDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uYWJvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3LjRweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig3LjRweCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAgYXV0bztcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQgaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5hYm91dC1jb250ZW50IHAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYWJvdXQtaW1nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvZmlsZSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmljb24tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmljb25zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGdhcDogMTVweDtcXG59XFxuLmljb25zIGkge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5za2lsbC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAzMHB4IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwLjFweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMC4xcHgpO1xcbn1cXG5cXG4uc2tpbGwtY29udGFpbmVyOmJlZm9yZSxcXG4uc2tpbGwtY29udGFpbmVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5za2lsbC1jb250YWluZXI6YmVmb3JlIHtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIGxlZnQsXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgIHZhcigtLWJhY2tncm91bmQtY29sb3IpXFxuICApO1xcbn1cXG5cXG4uc2tpbGwtY29udGFpbmVyOjphZnRlciB7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXFxuICAgIHZhcigtLWJhY2tncm91bmQtY29sb3IpXFxuICApO1xcbn1cXG5cXG4uc2tpbGwtY29udGFpbmVyOmhvdmVyIC5sb2dvcyB7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG5cXG4ubG9nb3Mge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYW5pbWF0aW9uOiAxNXMgc2xpZGUgaW5maW5pdGUgbGluZWFyO1xcbn1cXG5cXG4ubG9nb3MgaW1nIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDAgNTBweDtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgfVxcbn1cXG5cXG4ud29yay1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ud29yay1jb250YWluZXIgaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmNhcmQgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmNhcmQgaDIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uY2FyZCBwIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uY2FyZCBpIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5jYXJkIGk6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uY29udGFjdC1jb250YWluZXIgaDEge1xcbiAgZm9udC1zaXplOiAyLjNyZW07XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmNvbnRhY3QtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdC1jb250ZW50IGkge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgdG9wOiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICB9XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgZ2FwOiAxMDBweCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gIH1cXG5cXG4gIC50aXRsZS1sb2dvIGEge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG5cXG4gIC5tZW51LXRvZ2dsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICByaWdodDogNSU7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgfVxcblxcbiAgLm1lbnUtdG9nZ2xlIGkge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBtYXJnaW46IDVweCBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGFuaW1hdGlvbjogbWVudSAwLjVzIGVhc2UgMHMgMSBub3JtYWwgbm9uZTtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgbWVudSB7XFxuICAgIDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xcbiAgICB9XFxuICB9XFxuXFxuICAubmF2LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xMDAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgfVxcblxcbiAgLm5hdi1jb250YWluZXIuYWN0aXZlIHtcXG4gICAgdG9wOiA4NXB4O1xcbiAgICByaWdodDogMXB4O1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgbWFyZ2luOiAxcHg7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA5NDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIH1cXG5cXG4gIC5uYXYtY29udGFpbmVyID4gbGkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAubmF2LWNvbnRhaW5lciBsaTpob3ZlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNDk7XFxuICB9XFxuXFxuICAuaGVyby1jb250YWluZXIgaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGFuaW1hdGlvbjogdGl0bGUgM3MgZWFzZSAwcyBub3JtYWwgbm9uZTtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgdGl0bGUge1xcbiAgICAwJSB7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gICAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICBmaWx0ZXI6IGJsdXIoMCk7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVxcbiAgLmhlcm8tY29udGFpbmVyIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFuaW1hdGlvbjogZGVzY3IgM3MgbGluZWFyIDBzIDEgbm9ybWFsIG5vbmU7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGRlc2NyIHtcXG4gICAgMCUge1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcXG4gICAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgICBmaWx0ZXI6IGJsdXIoMCk7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmFib3V0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAuYWJvdXQtY29udGVudCBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5hYm91dC1jb250ZW50IHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAucHJvZmlsZSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5za2lsbC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcblxcbiAgLmxvZ29zIGltZyB7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgbWFyZ2luOiAwIDMwcHg7XFxuICB9XFxuXFxuICAuY2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29udGFjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAuY29udGFjdC1jb250YWluZXIgaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWNvbnRlbnQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAuY29udGFjdC1jb250ZW50IGkge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAuaW1hZ2UtY29udGFpbmVyIGltZyB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHJvZmlsZSBmcm9tIFwiLi4vaW1hZ2VzL3Byb2ZpbGUuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IHtcbiAgc3RhdGljIGxvYWRBYm91dCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImFib3V0XCI7XG4gICAgY29udGFpbmVyLmlkID0gXCJhYm91dFwiO1xuXG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbWdDb250YWluZXIuY2xhc3NOYW1lID0gXCJhYm91dC1pbWctY29udGFpbmVyXCI7XG5cbiAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5sb2FkUHJvZmlsZSgpKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdDb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKCkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfTtcblxuICBzdGF0aWMgZGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYWJvdXQtY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWJvdXRDb250YWluZXIuY2xhc3NOYW1lID0gXCJhYm91dC1jb250ZW50XCI7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5jbGFzc05hbWUgPSBcImFib3V0LXRpdGxlXCI7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJBYm91dCBNZVwiO1xuXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLmNsYXNzTmFtZSA9IFwiYWJvdXQtcGFyYWdyYXBoXCI7XG4gICAgcGFyYWdyYXBoLmlubmVySFRNTCA9XG4gICAgICBcIkkgYW0gYSBzb2Z0d2FyZSBlbmdpbmVlciB3aXRoIGEgcGFzc2lvbiBmb3IgbGVhcm5pbmcgbmV3IHRlY2hub2xvZ2llcyBhbmQgZGV2ZWxvcGluZyBuZXcgcHJvamVjdHMuIEkgaGF2ZSBhIHN0cm9uZyBiYWNrZ3JvdW5kIGluIHdlYiBkZXZlbG9wbWVudCBhbmQgSSBoYXZlIGEgc3Ryb25nIGludGVyZXN0IGluIGxlYXJuaW5nIG5ldyB0ZWNobm9sb2dpZXMgYW5kIGRldmVsb3BpbmcgbmV3IHByb2plY3RzLlwiO1xuXG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaWNvbnMoKSk7XG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb25Db250YWluZXI7XG4gIH07XG5cbiAgc3RhdGljIGljb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGljb25Db250YWluZXIuY2xhc3NOYW1lID0gXCJpY29uLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGljb25zLmNsYXNzTmFtZSA9IFwiaWNvbnNcIjtcbiAgICBpY29ucy5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZ2l0aHViXCI+PC9pPlxuICAgIDxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWxpbmtlZGluXCI+PC9pPmA7XG5cbiAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb25zKTtcblxuICAgIHJldHVybiBpY29uQ29udGFpbmVyO1xuICB9O1xuXG4gIHN0YXRpYyBsb2FkUHJvZmlsZSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9maWxlSW1nID0gbmV3IEltYWdlKCk7XG4gICAgcHJvZmlsZUltZy5zcmMgPSBwcm9maWxlO1xuICAgIHByb2ZpbGVJbWcuYWx0ID0gXCJzZWxmIHBvcnRyYWl0XCI7XG4gICAgcHJvZmlsZUltZy5jbGFzc05hbWUgPSBcInByb2ZpbGVcIjtcbiAgICByZXR1cm4gcHJvZmlsZUltZztcbiAgfTtcbn1cbiIsImltcG9ydCBzdG9ja1Bob3RvIGZyb20gXCIuLi9pbWFnZXMvd29yay1zdG9ja3Bob3RvLmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IHtcbiAgc3RhdGljIGxvYWRDb250YWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29udGFjdC1jb250YWluZXJcIjtcbiAgICBjb250YWluZXIuaWQgPSBcImNvbnRhY3RcIjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250YWN0LWNvbnRlbnRcIjtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbWFnZSgpKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy50aXRsZSgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuYWRkcmVzcygpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuZW1haWwoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLnBob25lKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5zb2NNZWQoKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9O1xuXG4gIHN0YXRpYyB0aXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5jbGFzc05hbWUgPSBcImNvbnRhY3QtdGl0bGVcIjtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIkNvbnRhY3QgTWVcIjtcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfTtcblxuICBzdGF0aWMgaW1hZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJpbWFnZS1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5jbGFzc05hbWUgPSBcImltYWdlXCI7XG4gICAgaW1hZ2Uuc3JjID0gc3RvY2tQaG90bztcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfTtcblxuICBzdGF0aWMgYWRkcmVzcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImFkZHJlc3MtY29udGFpbmVyXCI7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCIxMjMgTWFpbiBTdHJlZXQsIE1hbmlsYSwgUGhpbGlwcGluZXNcIjtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH07XG5cbiAgc3RhdGljIGVtYWlsID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZW1haWwtY29udGFpbmVyXCI7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJFbWFpbEBlbWFpbC5jb21cIjtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH07XG5cbiAgc3RhdGljIHBob25lID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwicGhvbmUtY29udGFpbmVyXCI7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCIoMDAwKSAwMDAtMDAwMFwiO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfTtcblxuICBzdGF0aWMgc29jTWVkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwic29jbWVkLWNvbnRhaW5lclwiO1xuXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2hBbGxlbkJcIj48aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1naXRodWJcIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9zaC1hbGxlbi1iOTJiNzIxNzAvXCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtbGlua2VkaW5cIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2pvc2hhbGxlbmIvXCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtaW5zdGFncmFtXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2pvc2hhbGxlbmIvXCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZmFjZWJvb2tcIj48L2k+PC9hPmA7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8ge1xuICBzdGF0aWMgbG9hZEhlcm8gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJoZXJvLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gXCJoZXJvLXRpdGxlXCI7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJNeSBuYW1lIGlzIEpvc2ghXCI7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiaGVyby1kZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiSSBhbSBhIHNvZnR3YXJlIGVuZ2luZWVyIGluIHRoZSBQaGlsaXBwaW5lc1wiO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNraWxsIHtcbiAgc3RhdGljIGxvYWRTa2lsbCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNraWxsLWNvbnRhaW5lclwiO1xuXG4gICAgLy8gQ3JlYXRlIHRocmVlIGlkZW50aWNhbCBsb2dvcyBjb250YWluZXJzXG4gICAgY29uc3QgbG9nb3MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dvczEuY2xhc3NOYW1lID0gXCJsb2dvc1wiO1xuICAgIGxvZ29zMS5pbm5lckhUTUwgPSBgXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9odG1sNS9odG1sNS1vcmlnaW5hbC13b3JkbWFyay5zdmdcIiAvPlxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvY3NzMy9jc3MzLW9yaWdpbmFsLXdvcmRtYXJrLnN2Z1wiIC8+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9qYXZhc2NyaXB0L2phdmFzY3JpcHQtb3JpZ2luYWwuc3ZnXCIgLz5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2ZsYXNrL2ZsYXNrLW9yaWdpbmFsLXdvcmRtYXJrLnN2Z1wiIC8+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLXdvcmRtYXJrLnN2Z1wiIC8+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9weXRob24vcHl0aG9uLW9yaWdpbmFsLnN2Z1wiIC8+XG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9saW51eC9saW51eC1vcmlnaW5hbC5zdmdcIiAvPlxuICAgIGA7XG4gICAgY29uc3QgbG9nb3MyID0gbG9nb3MxLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCBsb2dvczMgPSBsb2dvczEuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBsb2dvcyBjb250YWluZXJzIHRvIHRoZSBtYWluIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvczEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvczIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvczMpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfTtcbn1cbiIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4uL3N0cnVjdHVyZS9oZWFkZXIuanNcIjtcbmltcG9ydCBIYW5kbGVyIGZyb20gXCIuLi9zdHJ1Y3R1cmUvaGFuZGxlcnMuanNcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9wYWdlcy9oZXJvLmpzXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL3BhZ2VzL2Fib3V0LmpzXCI7XG5pbXBvcnQgU2tpbGwgZnJvbSBcIi4uL3BhZ2VzL3NraWxscy5qc1wiO1xuaW1wb3J0IFdvcmsgZnJvbSBcIi4uL3BhZ2VzL3dvcmsuanNcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9wYWdlcy9jb250YWN0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYnBhZ2Uge1xuICBzdGF0aWMgbG9hZFdlYiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIubG9hZEhlYWRlcigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoSGVyby5sb2FkSGVybygpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoQWJvdXQubG9hZEFib3V0KCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChTa2lsbC5sb2FkU2tpbGwoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKFdvcmsubG9hZFdvcmsoKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKENvbnRhY3QubG9hZENvbnRhY3QoKSk7XG5cbiAgICBIYW5kbGVyLmxvYWRIYW5kbGVyKCk7XG4gIH07XG59XG4iLCJpbXBvcnQgd2VhdGhlckltZyBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXItYXBwLnBuZ1wiO1xuaW1wb3J0IHRvZG9JbWcgZnJvbSBcIi4uL2ltYWdlcy90b2RvLWFwcC5wbmdcIjtcbmltcG9ydCB2YWxlbnRpbmVJbWcgZnJvbSBcIi4uL2ltYWdlcy92YWxlbnRpbmUtYXBwLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrIHtcbiAgc3RhdGljIGxvYWRXb3JrID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwid29yay1jb250YWluZXJcIjtcbiAgICBjb250YWluZXIuaWQgPSBcIndvcmtcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwid29yay10aXRsZVwiO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiTXkgV29ya1wiO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmRDb250YWluZXIuY2xhc3NOYW1lID0gXCJjYXJkLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3Qgd2VhdGhlckFwcENhcmQgPSBXb3JrLmdlbmVyYXRlQ2FyZChcbiAgICAgIFwiV2VhdGhlciBBcHBcIixcbiAgICAgIFwiVGhpcyBhcHAgYWxsb3dzIHlvdSB0byBjaGVjayBjdXJyZW50IHdlYXRoZXIgY29uZGl0aW9ucyBmb3IgeW91ciBsb2NhdGlvblwiLFxuICAgICAgd2VhdGhlckltZyxcbiAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2hBbGxlbkIvd2VhdGhlci1hcHBcIlxuICAgICk7XG5cbiAgICBjb25zdCB0b2RvQXBwQ2FyZCA9IFdvcmsuZ2VuZXJhdGVDYXJkKFxuICAgICAgXCJUb2RvIEFwcFwiLFxuICAgICAgXCJUaGlzIGFwcCBoZWxwcyB5b3Uga2VlcCB0cmFjayBvZiB5b3VyIHRhc2tzIGFuZCBzdGF5IG9yZ2FuaXplZCFcIixcbiAgICAgIHRvZG9JbWcsXG4gICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NoQWxsZW5CL3RvZG8tYXBwXCJcbiAgICApO1xuXG4gICAgY29uc3QgdmFsZW50aW5lQXBwQ2FyZCA9IFdvcmsuZ2VuZXJhdGVDYXJkKFxuICAgICAgXCJWYWxlbnRpbmUgQXBwXCIsXG4gICAgICBcIlRoaXMgYXBwIGhlbHBzIHlvdSBjZWxlYnJhdGUgVmFsZW50aW5lJ3MgRGF5IHdpdGggeW91ciBsb3ZlZCBvbmVzIVwiLFxuICAgICAgdmFsZW50aW5lSW1nLFxuICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vSm9zaEFsbGVuQi92YWxlbnRpbmUtYXBwXCJcbiAgICApO1xuXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyQXBwQ2FyZCk7XG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQXBwQ2FyZCk7XG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWxlbnRpbmVBcHBDYXJkKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH07XG5cbiAgc3RhdGljIGdlbmVyYXRlQ2FyZCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlVXJsLCBnaXRodWJMaW5rKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc05hbWUgPSBcImNhcmRcIjtcblxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnN0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2FyZENvbnRlbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY2FyZEltYWdlLnNyYyA9IGltYWdlVXJsO1xuICAgIGNhcmRJbWFnZS5hbHQgPSB0aXRsZTtcblxuICAgIGNvbnN0IGdpdGh1YkxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZ2l0aHViTGlua0VsZW1lbnQuaHJlZiA9IGdpdGh1Ykxpbms7XG5cbiAgICBjb25zdCBnaXRodWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnaXRodWJMb2dvLmNsYXNzTmFtZSA9IFwiZ2l0aHViLWxvZ29cIjtcbiAgICBnaXRodWJMb2dvLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1naXRodWJcIj48L2k+YDtcblxuICAgIGdpdGh1YkxpbmtFbGVtZW50LmFwcGVuZENoaWxkKGdpdGh1YkxvZ28pO1xuXG4gICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIHRoZSBjYXJkXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSW1hZ2UpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGdpdGh1YkxpbmtFbGVtZW50KTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlciB7XG4gIHN0YXRpYyBsb2FkSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLm5hdmlnYXRpb25IYW5kbGVyKCk7XG4gIH07XG5cbiAgc3RhdGljIG5hdmlnYXRpb25IYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdlRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10b2dnbGVcIik7XG4gICAgbmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWNvbnRhaW5lclwiKTtcbiAgICAgIG5hdkl0ZW1zLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtzXCIpO1xuXG4gICAgbmF2TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbmF2TGlua3MuZm9yRWFjaCgobmF2TGluaykgPT4ge1xuICAgICAgICAgIG5hdkxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gbGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldElkKTtcbiAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiB0YXJnZXRFbGVtZW50Lm9mZnNldFRvcCAtIDIwMCwgLy8gQWRqdXN0IHRoZSBvZmZzZXQgYXMgbmVlZGVkXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xuICBzdGF0aWMgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJDb250YWluZXIuY2xhc3NOYW1lID0gXCJoZWFkZXItY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29udGVudC1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDEwMCkge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci1jb250YWluZXItLXN0aWNreVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLWNvbnRhaW5lci0tc3RpY2t5XCIpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIGNvbnN0IHRpdGxlID0gKGxvZ29OYW1lKSA9PiB7XG4gICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYm94LmNsYXNzTmFtZSA9IFwidGl0bGUtbG9nb1wiO1xuICAgICAgYm94LmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8YSBocmVmPVwiL1wiPjxzcGFuPiR7bG9nb05hbWV9PC9zcGFuPjwvYT5gO1xuICAgICAgcmV0dXJuIGJveDtcbiAgICB9O1xuXG4gICAgY29uc3QgbWVudVRvZ2dsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRvZ2dsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0b2dnbGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJtZW51LXRvZ2dsZVwiO1xuXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gOTYwKSB7XG4gICAgICAgIHRvZ2dsZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1iYXJzXCI+PC9pPmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2dnbGVDb250YWluZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IG5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwicHJpbWFyeS1uYXZpZ2F0aW9uXCI7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA4ODApIHtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGlzdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuT3JkZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIHVuT3JkZXJlZExpc3QuY2xhc3NMaXN0LmFkZChcIm5hdi1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBbXG4gICAgICAgICAgeyBwYWdlOiBcIkFib3V0XCIsIGxpbms6IFwiI2Fib3V0XCIgfSxcbiAgICAgICAgICB7IHBhZ2U6IFwiV29ya1wiLCBsaW5rOiBcIiN3b3JrXCIgfSxcbiAgICAgICAgICB7IHBhZ2U6IFwiQ29udGFjdFwiLCBsaW5rOiBcIiNjb250YWN0XCIgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGFicy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICBsaXN0LmlubmVySFRNTCA9IGA8YSBjbGFzcz1cIm5hdi1saW5rc1wiIGhyZWY9XCIke2l0ZW0ubGlua31cIj4ke2l0ZW0ucGFnZX08L2E+YDsgLy8gVXBkYXRlZCBsaW5rIHdpdGggaHJlZiBhdHRyaWJ1dGVcbiAgICAgICAgICB1bk9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdW5PcmRlcmVkTGlzdDtcbiAgICAgIH07XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdHMoKSk7XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH07XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKFwiRmVhciBOb3RcIikpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRvZ2dsZSgpKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmlnYXRpb24oKSk7XG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbiAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBXZWJwYWdlIGZyb20gXCIuL3BhZ2VzL3dlYnNpdGUuanNcIjtcblxuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgV2VicGFnZS5sb2FkV2ViKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9