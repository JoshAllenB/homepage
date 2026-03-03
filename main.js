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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Aboreto&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #3c3d37;
  --secondary-color: #697565;
  --accent-color: #ecdfcc;
  --background-color: #181c14;
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
  background-size: cover;
  background-attachment: fixed;
  line-height: 1.5;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px !important;
  width: 100%;
}

header {
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.header-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--accent-color);
  box-shadow: 0px 9px 27px 0px #0000006c;
  padding: 0.5rem 2rem;
}

.content-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-logo {
  color: var(--secondary-color);
  font-family: "Quantico", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  line-height: 1.2;
}

.title-logo a {
  text-decoration: none;
  color: inherit;
}

.menu-toggle {
  display: none;
}

.menu-btn {
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}

.primary-navigation {
  width: auto;
  min-width: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.nav-list {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-item {
  font-size: 1.3rem;
  white-space: nowrap;
}

.nav-link {
  display: block;
  padding: 0.8rem 1.2rem;
  text-align: center;
  text-decoration: none;
  color: var(--secondary-color);
  border-radius: 5px;
  transition: all 0.2s ease;
  font-weight: 500;
}

.nav-link:hover {
  background-color: var(--primary-color);
  color: #ffffff;
  text-decoration: underline;
}

.nav-link[aria-current="page"] {
  background-color: var(--primary-color);
  color: #ffffff;
  font-weight: 500;
}

/* HERO SECTION */
.hero-container {
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.hero-container h1 {
  font-family: "Aboreto", cursive;
  font-size: 6rem;
  color: var(--primary-color);
  text-align: center;
  animation: title 3s ease 0s normal none;
  letter-spacing: 2px;
}

.hero-container p {
  font-size: 2rem;
  color: var(--secondary-color);
  margin-top: 1.5rem;
  text-align: center;
  animation: descr 3s linear 0s 1 normal none;
}

/* ABOUT SECTION */
.about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 1400px;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(7.4px);
  -webkit-backdrop-filter: blur(7.4px);
  border: 1px solid var(--accent-color);
  gap: 3rem;
}

.about-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-content {
  color: #ffffff;
}

.about-content h1 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--accent-color);
}

.about-content p {
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.6;
  opacity: 0.9;
}

.about-img-container {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--accent-color);
}

/* ICONS */
.icon-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
}

.icons {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.icons i {
  color: var(--accent-color);
  font-size: 2.2rem;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

.icons i:hover {
  transform: scale(1.1);
  color: var(--secondary-color);
}

/* SKILL SECTION */
.skill-container {
  width: 100%;
  padding: 2rem 0;
  overflow: hidden;
  white-space: nowrap;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  position: relative;
}

.skill-container:before,
.skill-container::after {
  position: absolute;
  top: 0;
  width: 150px;
  height: 100%;
  content: "";
  z-index: 2;
  pointer-events: none;
}

.skill-container:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), #ffffff);
}

.skill-container::after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff);
}

.skill-container:hover .logos {
  animation-play-state: paused;
}

.logos {
  display: inline-block;
  animation: 20s slide infinite linear;
}

.logos img {
  height: 100px;
  width: auto;
  margin: 0 3rem;
  filter: grayscale(30%);
  transition: filter 0.3s ease;
}

.logos img:hover {
  filter: grayscale(0%);
}

/* WORK SECTION */
.work-container {
  width: 100%;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: #ffffff;
}

.work-container h1 {
  font-size: 3rem;
  font-weight: 700;
  color: var(--background-color);
  margin-bottom: 1rem;
  position: relative;
}

.work-container h1:after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--primary-color);
  border-radius: 2px;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

@keyframes fadeInShadow {
  0% {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
}

@keyframes fadeInShadowHover {
  0% {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.664);
  }
}

.card {
  flex: 1;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  border-radius: 12px;
  background-color: var(--secondary-color);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: fadeInShadow 1s ease-out;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-15px);
  animation: fadeInShadowHover 0.3s ease forwards;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.card h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
}

.card p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ffffff;
  flex-grow: 1;
}

.card-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.card i {
  font-size: 2rem;
  color: var(--background-color);
  transition: color 0.3s ease;
  cursor: pointer;
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
  padding: 4rem 1rem;
  gap: 4rem;
}

.contact-container h1 {
  font-size: 2.5rem;
  color: var(--background-color);
  margin-bottom: 1rem;
}

.image-container {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 350px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.lightbox-overlay.active {
  display: flex;
}

.lightbox-image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 40px;
  color: white;
  cursor: pointer;
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}

.lightbox-prev {
  left: 30px;
}

.lightbox-next {
  right: 30px;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  color: #333;
}

.contact-content i {
  font-size: 1.5rem;
  color: #000000;
  margin: 5px;
}

.contact-item span {
  flex: 1;
}

/* FOOTER - New addition to fix spacing */
.footer {
  width: 100%;
  background-color: var(--background-color);
  color: var(--accent-color);
  padding: 2rem;
  text-align: center;
  border-top: 1px solid var(--secondary-color);
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer p {
  font-size: 1rem;
  opacity: 0.9;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: var(--accent-color);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--secondary-color);
}

/* ANIMATIONS */
@keyframes title {
  0% {
    letter-spacing: 2rem;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    letter-spacing: 2px;
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes descr {
  0% {
    letter-spacing: 1rem;
    transform: translateY(100px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

/* DESKTOP OPTIMIZATIONS (1920x1080 and above) */
@media screen and (min-width: 1920px) {
  .container {
    max-width: 1800px;
    margin: 0 auto;
  }

  .hero-container h1 {
    font-size: 7rem;
  }

  .hero-container p {
    font-size: 2.2rem;
  }

  .about {
    width: 70%;
    padding: 4rem;
  }

  .about-content h1 {
    font-size: 3.2rem;
  }

  .about-content p {
    font-size: 1.5rem;
  }

  .profile {
    width: 320px;
    height: 320px;
  }

  .card-container {
    gap: 3rem;
  }

  .card {
    max-width: 400px;
    padding: 2.5rem;
  }

  .contact-container {
    padding: 5rem 2rem;
    gap: 6rem;
  }

  .image-container img {
    width: 400px;
  }

  .contact-content {
    gap: 1.5rem;
  }

  .contact-item {
    font-size: 1.4rem;
  }

  .contact-item i {
    font-size: 2.2rem;
  }
}

/* Tablet Landscape */
@media screen and (max-width: 1200px) {
  .about {
    width: 90%;
    padding: 2rem;
    gap: 2rem;
  }

  .about-content h1 {
    font-size: 2.4rem;
  }

  .about-content p {
    font-size: 1.2rem;
  }

  .profile {
    width: 240px;
    height: 240px;
  }

  .card-container {
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    min-width: 300px;
  }
}

/* Tablet Portrait */
@media screen and (max-width: 960px) {
  header {
    position: fixed;
    top: 0;
  }

  .container {
    gap: 100px !important;
    padding-top: 80px;
  }

  .header-container {
    padding: 0.5rem 1.5rem;
  }

  .title-logo {
    font-size: 2rem;
  }

  .primary-navigation {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;

    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem;

    /* Initial hidden state */
    opacity: 0;
    transform: translateY(-20px) scale(0.98);
    pointer-events: none;
    visibility: hidden;

    /* Improved transition with custom timing functions */
    transition:
      opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
      visibility 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      backdrop-filter 0.3s ease;

    /* Performance optimization */
    will-change: transform, opacity;

    /* Ensure content is properly contained */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* Smooth edge handling */
    border-radius: 0 0 8px 8px;

    /* Subtle shadow for depth */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .primary-navigation.active {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
    visibility: visible;

    /* Add a subtle animation for child elements */
    & > * {
      animation: navItemFadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
  }

  /* Optional: Add staggered animation for navigation items */
  .primary-navigation.active > *:nth-child(1) {
    animation-delay: 0.05s;
  }
  .primary-navigation.active > *:nth-child(2) {
    animation-delay: 0.1s;
  }
  .primary-navigation.active > *:nth-child(3) {
    animation-delay: 0.15s;
  }
  .primary-navigation.active > *:nth-child(4) {
    animation-delay: 0.2s;
  }
  .primary-navigation.active > *:nth-child(5) {
    animation-delay: 0.25s;
  }
  .primary-navigation.active > *:nth-child(6) {
    animation-delay: 0.3s;
  }
  .primary-navigation.active > *:nth-child(7) {
    animation-delay: 0.35s;
  }
  .primary-navigation.active > *:nth-child(8) {
    animation-delay: 0.4s;
  }

  /* Keyframes for child elements animation */
  @keyframes navItemFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Optional: Add a backdrop overlay when menu is active */
  body.has-active-nav::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 98;
    animation: fadeIn 0.4s ease forwards;
    pointer-events: none;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .primary-navigation {
      top: 60px;
      padding: 0.75rem;
    }
  }

  /* Ensure smooth transitions on all devices */
  @media (prefers-reduced-motion: reduce) {
    .primary-navigation,
    .primary-navigation *,
    .primary-navigation.active * {
      transition: none !important;
      animation: none !important;
    }
  }

  .primary-navigation.active .nav-list {
    flex-direction: column;
  }

  .primary-navigation.active .nav-item {
    width: 100%;
    text-align: center;
  }

  .primary-navigation.active .nav-link {
    color: var(--accent-color);
    padding: 1rem;
  }

  .menu-toggle {
    display: block;
  }

  .about {
    flex-direction: column;
    text-align: center;
  }

  .about-content h1 {
    text-align: center;
  }

  .icon-container {
    justify-content: center;
  }

  .contact-container {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .contact-item {
    justify-content: center;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-links {
    justify-content: center;
  }
}

/* Mobile Landscape */
@media screen and (max-width: 768px) {
  .hero-container h1 {
    font-size: 3.5rem;
  }

  .hero-container p {
    font-size: 1.4rem;
  }

  .card-container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 100%;
    max-width: 450px;
  }

  .image-container img {
    width: 280px;
  }
}

/* Mobile Portrait */
@media screen and (max-width: 480px) {
  .title-logo {
    font-size: 1.5rem;
  }

  .hero-container h1 {
    font-size: 2.5rem;
  }

  .hero-container p {
    font-size: 1.2rem;
    padding: 0 1rem;
  }

  .about {
    padding: 1.5rem;
  }

  .about-content h1 {
    font-size: 2rem;
  }

  .about-content p {
    font-size: 1rem;
  }

  .profile {
    width: 200px;
    height: 200px;
  }

  .icons i {
    font-size: 1.8rem;
  }

  .logos img {
    height: 60px;
    margin: 0 1.5rem;
  }

  .skill-container:before,
  .skill-container::after {
    width: 50px;
  }

  .contact-container {
    padding: 2rem 1rem;
  }

  .contact-item {
    font-size: 1rem;
    flex-wrap: wrap;
  }

  .contact-item i {
    font-size: 1.5rem;
  }

  .footer {
    padding: 1.5rem;
  }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Aboreto&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap\");\r\n\r\n:root {\r\n  --primary-color: #3c3d37;\r\n  --secondary-color: #697565;\r\n  --accent-color: #ecdfcc;\r\n  --background-color: #181c14;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  max-width: 100vw;\r\n  font-family: Roboto, \"sans serif\";\r\n  background-color: var(--background-color);\r\n  overflow-x: hidden;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  line-height: 1.5;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 150px !important;\r\n  width: 100%;\r\n}\r\n\r\nheader {\r\n  position: sticky;\r\n  width: 100%;\r\n  top: 0;\r\n  z-index: 1000;\r\n}\r\n\r\n.header-container {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background: var(--accent-color);\r\n  box-shadow: 0px 9px 27px 0px #0000006c;\r\n  padding: 0.5rem 2rem;\r\n}\r\n\r\n.content-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.title-logo {\r\n  color: var(--secondary-color);\r\n  font-family: \"Quantico\", sans-serif;\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n  line-height: 1.2;\r\n}\r\n\r\n.title-logo a {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.menu-toggle {\r\n  display: none;\r\n}\r\n\r\n.menu-btn {\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.primary-navigation {\r\n  width: auto;\r\n  min-width: 400px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  align-items: center;\r\n}\r\n\r\n.nav-item {\r\n  font-size: 1.3rem;\r\n  white-space: nowrap;\r\n}\r\n\r\n.nav-link {\r\n  display: block;\r\n  padding: 0.8rem 1.2rem;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  color: var(--secondary-color);\r\n  border-radius: 5px;\r\n  transition: all 0.2s ease;\r\n  font-weight: 500;\r\n}\r\n\r\n.nav-link:hover {\r\n  background-color: var(--primary-color);\r\n  color: #ffffff;\r\n  text-decoration: underline;\r\n}\r\n\r\n.nav-link[aria-current=\"page\"] {\r\n  background-color: var(--primary-color);\r\n  color: #ffffff;\r\n  font-weight: 500;\r\n}\r\n\r\n/* HERO SECTION */\r\n.hero-container {\r\n  width: 100%;\r\n  min-height: 70vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem;\r\n}\r\n\r\n.hero-container h1 {\r\n  font-family: \"Aboreto\", cursive;\r\n  font-size: 6rem;\r\n  color: var(--primary-color);\r\n  text-align: center;\r\n  animation: title 3s ease 0s normal none;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.hero-container p {\r\n  font-size: 2rem;\r\n  color: var(--secondary-color);\r\n  margin-top: 1.5rem;\r\n  text-align: center;\r\n  animation: descr 3s linear 0s 1 normal none;\r\n}\r\n\r\n/* ABOUT SECTION */\r\n.about {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 80%;\r\n  max-width: 1400px;\r\n  padding: 3rem;\r\n  background: rgba(255, 255, 255, 0.05);\r\n  border-radius: 16px;\r\n  backdrop-filter: blur(7.4px);\r\n  -webkit-backdrop-filter: blur(7.4px);\r\n  border: 1px solid var(--accent-color);\r\n  gap: 3rem;\r\n}\r\n\r\n.about-container {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.about-content {\r\n  color: #ffffff;\r\n}\r\n\r\n.about-content h1 {\r\n  font-size: 2.8rem;\r\n  font-weight: 700;\r\n  margin-bottom: 1.5rem;\r\n  color: var(--accent-color);\r\n}\r\n\r\n.about-content p {\r\n  font-size: 1.3rem;\r\n  font-weight: 400;\r\n  line-height: 1.6;\r\n  opacity: 0.9;\r\n}\r\n\r\n.about-img-container {\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.profile {\r\n  width: 280px;\r\n  height: 280px;\r\n  border-radius: 50%;\r\n  object-fit: cover;\r\n  border: 4px solid var(--accent-color);\r\n}\r\n\r\n/* ICONS */\r\n.icon-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.icons {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.icons i {\r\n  color: var(--accent-color);\r\n  font-size: 2.2rem;\r\n  cursor: pointer;\r\n  transition:\r\n    transform 0.3s ease,\r\n    color 0.3s ease;\r\n}\r\n\r\n.icons i:hover {\r\n  transform: scale(1.1);\r\n  color: var(--secondary-color);\r\n}\r\n\r\n/* SKILL SECTION */\r\n.skill-container {\r\n  width: 100%;\r\n  padding: 2rem 0;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  background: rgba(255, 255, 255, 0.95);\r\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\r\n  backdrop-filter: blur(10.1px);\r\n  -webkit-backdrop-filter: blur(10.1px);\r\n  position: relative;\r\n}\r\n\r\n.skill-container:before,\r\n.skill-container::after {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 150px;\r\n  height: 100%;\r\n  content: \"\";\r\n  z-index: 2;\r\n  pointer-events: none;\r\n}\r\n\r\n.skill-container:before {\r\n  left: 0;\r\n  background: linear-gradient(to left, rgba(255, 255, 255, 0), #ffffff);\r\n}\r\n\r\n.skill-container::after {\r\n  right: 0;\r\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff);\r\n}\r\n\r\n.skill-container:hover .logos {\r\n  animation-play-state: paused;\r\n}\r\n\r\n.logos {\r\n  display: inline-block;\r\n  animation: 20s slide infinite linear;\r\n}\r\n\r\n.logos img {\r\n  height: 100px;\r\n  width: auto;\r\n  margin: 0 3rem;\r\n  filter: grayscale(30%);\r\n  transition: filter 0.3s ease;\r\n}\r\n\r\n.logos img:hover {\r\n  filter: grayscale(0%);\r\n}\r\n\r\n/* WORK SECTION */\r\n.work-container {\r\n  width: 100%;\r\n  padding: 3rem 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.work-container h1 {\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n  color: var(--background-color);\r\n  margin-bottom: 1rem;\r\n  position: relative;\r\n}\r\n\r\n.work-container h1:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: -10px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  width: 80px;\r\n  height: 4px;\r\n  background-color: var(--primary-color);\r\n  border-radius: 2px;\r\n}\r\n\r\n.card-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: stretch;\r\n  gap: 2rem;\r\n  width: 100%;\r\n  max-width: 1400px;\r\n  margin: 0 auto;\r\n}\r\n\r\n@keyframes fadeInShadow {\r\n  0% {\r\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0);\r\n  }\r\n  100% {\r\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\r\n  }\r\n}\r\n\r\n@keyframes fadeInShadowHover {\r\n  0% {\r\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\r\n  }\r\n  100% {\r\n    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.664);\r\n  }\r\n}\r\n\r\n.card {\r\n  flex: 1;\r\n  max-width: 350px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2rem;\r\n  gap: 1rem;\r\n  border-radius: 12px;\r\n  background-color: var(--secondary-color);\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\r\n  animation: fadeInShadow 1s ease-out;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.card:hover {\r\n  transform: translateY(-15px);\r\n  animation: fadeInShadowHover 0.3s ease forwards;\r\n}\r\n\r\n.card img {\r\n  width: 100%;\r\n  height: 200px;\r\n  object-fit: cover;\r\n  border-radius: 8px;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.card h2 {\r\n  font-size: 1.8rem;\r\n  font-weight: 700;\r\n  color: #ffffff;\r\n}\r\n\r\n.card p {\r\n  font-size: 1.1rem;\r\n  line-height: 1.6;\r\n  color: #ffffff;\r\n  flex-grow: 1;\r\n}\r\n\r\n.card-links {\r\n  display: flex;\r\n  gap: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.card i {\r\n  font-size: 2rem;\r\n  color: var(--background-color);\r\n  transition: color 0.3s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.card i:hover {\r\n  color: var(--accent-color);\r\n}\r\n\r\n.contact-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #ffffff;\r\n  padding: 4rem 1rem;\r\n  gap: 4rem;\r\n}\r\n\r\n.contact-container h1 {\r\n  font-size: 2.5rem;\r\n  color: var(--background-color);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.image-container {\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.image-container img {\r\n  width: 350px;\r\n  height: auto;\r\n  border-radius: 12px;\r\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.lightbox-overlay {\r\n  position: fixed;\r\n  inset: 0;\r\n  background: rgba(0, 0, 0, 0.95);\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9999;\r\n}\r\n\r\n.lightbox-overlay.active {\r\n  display: flex;\r\n}\r\n\r\n.lightbox-image {\r\n  max-width: 90%;\r\n  max-height: 90%;\r\n  object-fit: contain;\r\n}\r\n\r\n.lightbox-close {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 30px;\r\n  font-size: 40px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.lightbox-prev,\r\n.lightbox-next {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  font-size: 40px;\r\n  color: white;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.lightbox-prev {\r\n  left: 30px;\r\n}\r\n\r\n.lightbox-next {\r\n  right: 30px;\r\n}\r\n\r\n.contact-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  max-width: 500px;\r\n}\r\n\r\n.contact-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  font-size: 1.2rem;\r\n  color: #333;\r\n}\r\n\r\n.contact-content i {\r\n  font-size: 1.5rem;\r\n  color: #000000;\r\n  margin: 5px;\r\n}\r\n\r\n.contact-item span {\r\n  flex: 1;\r\n}\r\n\r\n/* FOOTER - New addition to fix spacing */\r\n.footer {\r\n  width: 100%;\r\n  background-color: var(--background-color);\r\n  color: var(--accent-color);\r\n  padding: 2rem;\r\n  text-align: center;\r\n  border-top: 1px solid var(--secondary-color);\r\n  margin-top: auto;\r\n}\r\n\r\n.footer-content {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n}\r\n\r\n.footer p {\r\n  font-size: 1rem;\r\n  opacity: 0.9;\r\n}\r\n\r\n.footer-links {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.footer-links a {\r\n  color: var(--accent-color);\r\n  text-decoration: none;\r\n  font-size: 1rem;\r\n  transition: color 0.3s ease;\r\n}\r\n\r\n.footer-links a:hover {\r\n  color: var(--secondary-color);\r\n}\r\n\r\n/* ANIMATIONS */\r\n@keyframes title {\r\n  0% {\r\n    letter-spacing: 2rem;\r\n    filter: blur(12px);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    letter-spacing: 2px;\r\n    filter: blur(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes descr {\r\n  0% {\r\n    letter-spacing: 1rem;\r\n    transform: translateY(100px);\r\n    filter: blur(12px);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translateY(0);\r\n    filter: blur(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes slide {\r\n  from {\r\n    transform: translateX(0);\r\n  }\r\n  to {\r\n    transform: translateX(-100%);\r\n  }\r\n}\r\n\r\n/* DESKTOP OPTIMIZATIONS (1920x1080 and above) */\r\n@media screen and (min-width: 1920px) {\r\n  .container {\r\n    max-width: 1800px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .hero-container h1 {\r\n    font-size: 7rem;\r\n  }\r\n\r\n  .hero-container p {\r\n    font-size: 2.2rem;\r\n  }\r\n\r\n  .about {\r\n    width: 70%;\r\n    padding: 4rem;\r\n  }\r\n\r\n  .about-content h1 {\r\n    font-size: 3.2rem;\r\n  }\r\n\r\n  .about-content p {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .profile {\r\n    width: 320px;\r\n    height: 320px;\r\n  }\r\n\r\n  .card-container {\r\n    gap: 3rem;\r\n  }\r\n\r\n  .card {\r\n    max-width: 400px;\r\n    padding: 2.5rem;\r\n  }\r\n\r\n  .contact-container {\r\n    padding: 5rem 2rem;\r\n    gap: 6rem;\r\n  }\r\n\r\n  .image-container img {\r\n    width: 400px;\r\n  }\r\n\r\n  .contact-content {\r\n    gap: 1.5rem;\r\n  }\r\n\r\n  .contact-item {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .contact-item i {\r\n    font-size: 2.2rem;\r\n  }\r\n}\r\n\r\n/* Tablet Landscape */\r\n@media screen and (max-width: 1200px) {\r\n  .about {\r\n    width: 90%;\r\n    padding: 2rem;\r\n    gap: 2rem;\r\n  }\r\n\r\n  .about-content h1 {\r\n    font-size: 2.4rem;\r\n  }\r\n\r\n  .about-content p {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .profile {\r\n    width: 240px;\r\n    height: 240px;\r\n  }\r\n\r\n  .card-container {\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    min-width: 300px;\r\n  }\r\n}\r\n\r\n/* Tablet Portrait */\r\n@media screen and (max-width: 960px) {\r\n  header {\r\n    position: fixed;\r\n    top: 0;\r\n  }\r\n\r\n  .container {\r\n    gap: 100px !important;\r\n    padding-top: 80px;\r\n  }\r\n\r\n  .header-container {\r\n    padding: 0.5rem 1.5rem;\r\n  }\r\n\r\n  .title-logo {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .primary-navigation {\r\n    position: fixed;\r\n    top: 80px;\r\n    left: 0;\r\n    right: 0;\r\n\r\n    background: rgba(0, 0, 0, 0.95);\r\n    backdrop-filter: blur(10px);\r\n    padding: 1rem;\r\n\r\n    /* Initial hidden state */\r\n    opacity: 0;\r\n    transform: translateY(-20px) scale(0.98);\r\n    pointer-events: none;\r\n    visibility: hidden;\r\n\r\n    /* Improved transition with custom timing functions */\r\n    transition:\r\n      opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),\r\n      transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),\r\n      visibility 0.4s cubic-bezier(0.4, 0, 0.2, 1),\r\n      backdrop-filter 0.3s ease;\r\n\r\n    /* Performance optimization */\r\n    will-change: transform, opacity;\r\n\r\n    /* Ensure content is properly contained */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    /* Smooth edge handling */\r\n    border-radius: 0 0 8px 8px;\r\n\r\n    /* Subtle shadow for depth */\r\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  .primary-navigation.active {\r\n    opacity: 1;\r\n    transform: translateY(0) scale(1);\r\n    pointer-events: auto;\r\n    visibility: visible;\r\n\r\n    /* Add a subtle animation for child elements */\r\n    & > * {\r\n      animation: navItemFadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;\r\n    }\r\n  }\r\n\r\n  /* Optional: Add staggered animation for navigation items */\r\n  .primary-navigation.active > *:nth-child(1) {\r\n    animation-delay: 0.05s;\r\n  }\r\n  .primary-navigation.active > *:nth-child(2) {\r\n    animation-delay: 0.1s;\r\n  }\r\n  .primary-navigation.active > *:nth-child(3) {\r\n    animation-delay: 0.15s;\r\n  }\r\n  .primary-navigation.active > *:nth-child(4) {\r\n    animation-delay: 0.2s;\r\n  }\r\n  .primary-navigation.active > *:nth-child(5) {\r\n    animation-delay: 0.25s;\r\n  }\r\n  .primary-navigation.active > *:nth-child(6) {\r\n    animation-delay: 0.3s;\r\n  }\r\n  .primary-navigation.active > *:nth-child(7) {\r\n    animation-delay: 0.35s;\r\n  }\r\n  .primary-navigation.active > *:nth-child(8) {\r\n    animation-delay: 0.4s;\r\n  }\r\n\r\n  /* Keyframes for child elements animation */\r\n  @keyframes navItemFadeIn {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translateY(-10px);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: translateY(0);\r\n    }\r\n  }\r\n\r\n  /* Optional: Add a backdrop overlay when menu is active */\r\n  body.has-active-nav::before {\r\n    content: \"\";\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    backdrop-filter: blur(4px);\r\n    z-index: 98;\r\n    animation: fadeIn 0.4s ease forwards;\r\n    pointer-events: none;\r\n  }\r\n\r\n  @keyframes fadeIn {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  /* Responsive adjustments */\r\n  @media (max-width: 768px) {\r\n    .primary-navigation {\r\n      top: 60px;\r\n      padding: 0.75rem;\r\n    }\r\n  }\r\n\r\n  /* Ensure smooth transitions on all devices */\r\n  @media (prefers-reduced-motion: reduce) {\r\n    .primary-navigation,\r\n    .primary-navigation *,\r\n    .primary-navigation.active * {\r\n      transition: none !important;\r\n      animation: none !important;\r\n    }\r\n  }\r\n\r\n  .primary-navigation.active .nav-list {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .primary-navigation.active .nav-item {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n\r\n  .primary-navigation.active .nav-link {\r\n    color: var(--accent-color);\r\n    padding: 1rem;\r\n  }\r\n\r\n  .menu-toggle {\r\n    display: block;\r\n  }\r\n\r\n  .about {\r\n    flex-direction: column;\r\n    text-align: center;\r\n  }\r\n\r\n  .about-content h1 {\r\n    text-align: center;\r\n  }\r\n\r\n  .icon-container {\r\n    justify-content: center;\r\n  }\r\n\r\n  .contact-container {\r\n    flex-direction: column;\r\n    text-align: center;\r\n    gap: 2rem;\r\n  }\r\n\r\n  .contact-item {\r\n    justify-content: center;\r\n  }\r\n\r\n  .footer-content {\r\n    flex-direction: column;\r\n    text-align: center;\r\n  }\r\n\r\n  .footer-links {\r\n    justify-content: center;\r\n  }\r\n}\r\n\r\n/* Mobile Landscape */\r\n@media screen and (max-width: 768px) {\r\n  .hero-container h1 {\r\n    font-size: 3.5rem;\r\n  }\r\n\r\n  .hero-container p {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .card-container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .card {\r\n    width: 100%;\r\n    max-width: 450px;\r\n  }\r\n\r\n  .image-container img {\r\n    width: 280px;\r\n  }\r\n}\r\n\r\n/* Mobile Portrait */\r\n@media screen and (max-width: 480px) {\r\n  .title-logo {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .hero-container h1 {\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n  .hero-container p {\r\n    font-size: 1.2rem;\r\n    padding: 0 1rem;\r\n  }\r\n\r\n  .about {\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .about-content h1 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .about-content p {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .profile {\r\n    width: 200px;\r\n    height: 200px;\r\n  }\r\n\r\n  .icons i {\r\n    font-size: 1.8rem;\r\n  }\r\n\r\n  .logos img {\r\n    height: 60px;\r\n    margin: 0 1.5rem;\r\n  }\r\n\r\n  .skill-container:before,\r\n  .skill-container::after {\r\n    width: 50px;\r\n  }\r\n\r\n  .contact-container {\r\n    padding: 2rem 1rem;\r\n  }\r\n\r\n  .contact-item {\r\n    font-size: 1rem;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .contact-item i {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .footer {\r\n    padding: 1.5rem;\r\n  }\r\n}\r\n\r\n/* Reduced Motion */\r\n@media (prefers-reduced-motion: reduce) {\r\n  * {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
    icons.innerHTML = `<a href="https://github.com/JoshAllenB" target="_blank"><i class="fa-brands fa-github"></i></a>
    <a href="https://www.linkedin.com/in/joshua-allen-batayola-6b3b4627b/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`;

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
    image.src = _images_work_stockphoto_jpg__WEBPACK_IMPORTED_MODULE_0__;

    container.appendChild(image);
    return container;
  };

  static email = () => {
    const container = document.createElement("div");
    container.className = "email-container";

    const emailText = "email@email.com";
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

    const phoneText = "123-456-7890";
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

    container.innerHTML = `<a href="https://github.com"><i class="fa-brands fa-github"></i></a>
    <a href="https://www.linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`;
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
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original-wordmark.svg" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
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
/* harmony import */ var _images_wmm_wmmEdit_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/wmm/wmmEdit.png */ "./src/images/wmm/wmmEdit.png");
/* harmony import */ var _images_wmm_wmmHomeSidebar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/wmm/wmmHomeSidebar.png */ "./src/images/wmm/wmmHomeSidebar.png");
/* harmony import */ var _images_wmm_wmmOther_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/wmm/wmmOther.png */ "./src/images/wmm/wmmOther.png");
/* harmony import */ var _images_wmm_wmmFilter_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/wmm/wmmFilter.png */ "./src/images/wmm/wmmFilter.png");
/* harmony import */ var _images_wmm_wmmView_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/wmm/wmmView.png */ "./src/images/wmm/wmmView.png");









class Work {
  // Define work items as data
  static workItems = [
    {
      title: "WMM Subscription Manager",
      description:
        "Internal software I made for Misionary Group to manage their magazine subscription status. It allows users to view, edit, and filter subscription information in a user-friendly interface.",
      images: [_images_wmm_wmmHomeSidebar_png__WEBPACK_IMPORTED_MODULE_4__, _images_wmm_wmmEdit_png__WEBPACK_IMPORTED_MODULE_3__, _images_wmm_wmmOther_png__WEBPACK_IMPORTED_MODULE_5__, _images_wmm_wmmFilter_png__WEBPACK_IMPORTED_MODULE_6__, _images_wmm_wmmView_png__WEBPACK_IMPORTED_MODULE_7__], // can add images later],
    },
    {
      title: "Weather App",
      description:
        "This app allows you to check current weather conditions for your location",
      images: [_images_weather_app_png__WEBPACK_IMPORTED_MODULE_0__], // can add more later
      githubLink: "https://github.com/JoshAllenB/weather-app",
    },
    {
      title: "Todo App",
      description:
        "This app helps you keep track of your tasks and stay organized!",
      images: [_images_todo_app_png__WEBPACK_IMPORTED_MODULE_1__],
      githubLink: "https://github.com/JoshAllenB/todo-app",
    },
    {
      title: "Valentine App",
      description:
        "This app helps you celebrate Valentine's Day with your loved ones!",
      images: [_images_valentine_app_png__WEBPACK_IMPORTED_MODULE_2__],
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
        if (navItems) {
          navItems.classList.toggle("active");
        }
      });

    const navLinks = document.querySelectorAll(".nav-link");

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
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight : 0;
          const elementTop =
            targetElement.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementTop - headerHeight,
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
      const h1 = document.createElement("h1");
      h1.className = "title-logo";
      h1.textContent = logoName;
      return h1;
    };

    // menuToggle now takes nav as argument and toggles 'active' class
    const menuToggle = (nav) => {
      const toggleContainer = document.createElement("div");
      toggleContainer.className = "menu-toggle";
      toggleContainer.innerHTML = `<i class="fa-solid fa-bars"></i>`;
      toggleContainer.addEventListener("click", () => {
        nav.classList.toggle("active");
      });
      return toggleContainer;
    };

    const createNavigation = () => {
      const nav = document.createElement("nav");
      nav.className = "primary-navigation";
      nav.setAttribute("aria-label", "Main navigation");

      // Use matchMedia for better responsive handling
      const mobileMediaQuery = window.matchMedia("(max-width: 880px)");
      nav.setAttribute("aria-hidden", mobileMediaQuery.matches);

      // Optional: Listen for resize events to update aria-hidden
      mobileMediaQuery.addEventListener("change", (e) => {
        nav.setAttribute("aria-hidden", e.matches);
      });

      const navList = document.createElement("ul");
      navList.className = "nav-list";

      const navItems = [
        { label: "About", href: "#about" },
        { label: "Work", href: "#work" },
        { label: "Contact", href: "#contact" },
      ];

      navItems.forEach(({ label, href }) => {
        const listItem = document.createElement("li");
        listItem.className = "nav-item";

        const link = document.createElement("a");
        link.href = href;
        link.textContent = label;
        link.className = "nav-link";

        listItem.appendChild(link);
        navList.appendChild(listItem);
      });

      nav.appendChild(navList);
      return nav;
    };

    const nav = createNavigation();
    contentContainer.appendChild(title("</JB>"));
    contentContainer.appendChild(menuToggle(nav));
    contentContainer.appendChild(nav);
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

/***/ "./src/images/wmm/wmmEdit.png":
/*!************************************!*\
  !*** ./src/images/wmm/wmmEdit.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "416f6531e852a33b28ea.png";

/***/ }),

/***/ "./src/images/wmm/wmmFilter.png":
/*!**************************************!*\
  !*** ./src/images/wmm/wmmFilter.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "555c3942866bf91f5fef.png";

/***/ }),

/***/ "./src/images/wmm/wmmHomeSidebar.png":
/*!*******************************************!*\
  !*** ./src/images/wmm/wmmHomeSidebar.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba3ea79d2d06c5348e04.png";

/***/ }),

/***/ "./src/images/wmm/wmmOther.png":
/*!*************************************!*\
  !*** ./src/images/wmm/wmmOther.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee4d2f90cb22f80b4c38.png";

/***/ }),

/***/ "./src/images/wmm/wmmView.png":
/*!************************************!*\
  !*** ./src/images/wmm/wmmView.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7116f4786efd735a6c8e.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN0TSxxSEFBcUg7QUFDckgsd0hBQXdILE1BQU0sTUFBTSxvQkFBb0I7QUFDeEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLFlBQVksWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsU0FBUyxRQUFRLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxPQUFPLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8s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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFdUQ7QUFDdkQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQjRDO0FBQ0c7QUFDWDtBQUNFO0FBQ0M7QUFDSDtBQUNNO0FBQzFDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNERBQU07QUFDaEMsMEJBQTBCLHNEQUFJO0FBQzlCLDBCQUEwQix1REFBSztBQUMvQiwwQkFBMEIsd0RBQUs7QUFDL0IsMEJBQTBCLHNEQUFJO0FBQzlCLDBCQUEwQix5REFBTztBQUNqQztBQUNBLElBQUksOERBQU87QUFDWDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCbUQ7QUFDTjtBQUNVO0FBQ1A7QUFDTztBQUNMO0FBQ0U7QUFDSjtBQUNoRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyREFBTyxFQUFFLG9EQUFPLEVBQUUscURBQVEsRUFBRSxzREFBUyxFQUFFLG9EQUFPO0FBQzdELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0RBQVU7QUFDekI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFPO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzREFBWTtBQUMzQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsMENBQTBDO0FBQzFDO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RMZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0NBQWdDO0FBQzFDLFVBQVUsOEJBQThCO0FBQ3hDLFVBQVUsb0NBQW9DO0FBQzlDO0FBQ0E7QUFDQSwwQkFBMEIsYUFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQjtBQUN6QztBQUNBLHFDQUFxQyx5REFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvcGFnZXMvaGVyby5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy9za2lsbHMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvcGFnZXMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy93b3JrLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0cnVjdHVyZS9oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHJ1Y3R1cmUvaGVhZGVyLmpzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFib3JldG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVhbnRpY286aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tcHJpbWFyeS1jb2xvcjogIzNjM2QzNztcclxuICAtLXNlY29uZGFyeS1jb2xvcjogIzY5NzU2NTtcclxuICAtLWFjY2VudC1jb2xvcjogI2VjZGZjYztcclxuICAtLWJhY2tncm91bmQtY29sb3I6ICMxODFjMTQ7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJzYW5zIHNlcmlmXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLmhlYWRlci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcclxuICBib3gtc2hhZG93OiAwcHggOXB4IDI3cHggMHB4ICMwMDAwMDA2YztcclxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUtbG9nbyB7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgZm9udC1mYW1pbHk6IFwiUXVhbnRpY29cIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuXHJcbi50aXRsZS1sb2dvIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLm1lbnUtdG9nZ2xlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubWVudS1idG4ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByaW1hcnktbmF2aWdhdGlvbiB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWluLXdpZHRoOiA0MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLm5hdi1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuOHJlbSAxLjJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubmF2LWxpbmtbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogSEVSTyBTRUNUSU9OICovXHJcbi5oZXJvLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNzB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uaGVyby1jb250YWluZXIgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFib3JldG9cIiwgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDZyZW07XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbmltYXRpb246IHRpdGxlIDNzIGVhc2UgMHMgbm9ybWFsIG5vbmU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuLmhlcm8tY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFuaW1hdGlvbjogZGVzY3IgM3MgbGluZWFyIDBzIDEgbm9ybWFsIG5vbmU7XHJcbn1cclxuXHJcbi8qIEFCT1VUIFNFQ1RJT04gKi9cclxuLmFib3V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDcuNHB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig3LjRweCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcclxuICBnYXA6IDNyZW07XHJcbn1cclxuXHJcbi5hYm91dC1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMS41cmVtO1xyXG59XHJcblxyXG4uYWJvdXQtY29udGVudCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5hYm91dC1jb250ZW50IGgxIHtcclxuICBmb250LXNpemU6IDIuOHJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcclxufVxyXG5cclxuLmFib3V0LWNvbnRlbnQgcCB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmFib3V0LWltZy1jb250YWluZXIge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG4gIHdpZHRoOiAyODBweDtcclxuICBoZWlnaHQ6IDI4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG59XHJcblxyXG4vKiBJQ09OUyAqL1xyXG4uaWNvbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5pY29ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMS41cmVtO1xyXG59XHJcblxyXG4uaWNvbnMgaSB7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246XHJcbiAgICB0cmFuc2Zvcm0gMC4zcyBlYXNlLFxyXG4gICAgY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uaWNvbnMgaTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG4vKiBTS0lMTCBTRUNUSU9OICovXHJcbi5za2lsbC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAuMXB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMC4xcHgpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNraWxsLWNvbnRhaW5lcjpiZWZvcmUsXHJcbi5za2lsbC1jb250YWluZXI6OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uc2tpbGwtY29udGFpbmVyOmJlZm9yZSB7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgI2ZmZmZmZik7XHJcbn1cclxuXHJcbi5za2lsbC1jb250YWluZXI6OmFmdGVyIHtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksICNmZmZmZmYpO1xyXG59XHJcblxyXG4uc2tpbGwtY29udGFpbmVyOmhvdmVyIC5sb2dvcyB7XHJcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxufVxyXG5cclxuLmxvZ29zIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYW5pbWF0aW9uOiAyMHMgc2xpZGUgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4ubG9nb3MgaW1nIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogMCAzcmVtO1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDMwJSk7XHJcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmxvZ29zIGltZzpob3ZlciB7XHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xyXG59XHJcblxyXG4vKiBXT1JLIFNFQ1RJT04gKi9cclxuLndvcmstY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAzcmVtIDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi53b3JrLWNvbnRhaW5lciBoMSB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ud29yay1jb250YWluZXIgaDE6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTEwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBnYXA6IDJyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluU2hhZG93IHtcclxuICAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluU2hhZG93SG92ZXIge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDE1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNjY0KTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBmbGV4OiAxO1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5TaGFkb3cgMXMgZWFzZS1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5TaGFkb3dIb3ZlciAwLjNzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5jYXJkIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uY2FyZCBoMiB7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNhcmQgcCB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5jYXJkLWxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uY2FyZCBpIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIGk6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG59XHJcblxyXG4uY29udGFjdC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDRyZW0gMXJlbTtcclxuICBnYXA6IDRyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LWNvbnRhaW5lciBoMSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4ubGlnaHRib3gtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGluc2V0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45NSk7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5saWdodGJveC1vdmVybGF5LmFjdGl2ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmxpZ2h0Ym94LWltYWdlIHtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLmxpZ2h0Ym94LWNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlnaHRib3gtcHJldixcclxuLmxpZ2h0Ym94LW5leHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saWdodGJveC1wcmV2IHtcclxuICBsZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4ubGlnaHRib3gtbmV4dCB7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmNvbnRhY3QtY29udGVudCBpIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmNvbnRhY3QtaXRlbSBzcGFuIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4vKiBGT09URVIgLSBOZXcgYWRkaXRpb24gdG8gZml4IHNwYWNpbmcgKi9cclxuLmZvb3RlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5cclxuLmZvb3Rlci1jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5mb290ZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3MgYSB7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3MgYTpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi8qIEFOSU1BVElPTlMgKi9cclxuQGtleWZyYW1lcyB0aXRsZSB7XHJcbiAgMCUge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJyZW07XHJcbiAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkZXNjciB7XHJcbiAgMCUge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFyZW07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xyXG4gICAgZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBERVNLVE9QIE9QVElNSVpBVElPTlMgKDE5MjB4MTA4MCBhbmQgYWJvdmUpICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxODAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5oZXJvLWNvbnRhaW5lciBoMSB7XHJcbiAgICBmb250LXNpemU6IDdyZW07XHJcbiAgfVxyXG5cclxuICAuaGVyby1jb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICB9XHJcblxyXG4gIC5hYm91dCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcGFkZGluZzogNHJlbTtcclxuICB9XHJcblxyXG4gIC5hYm91dC1jb250ZW50IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LWNvbnRlbnQgcCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5wcm9maWxlIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogMzIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgZ2FwOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDIuNXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA1cmVtIDJyZW07XHJcbiAgICBnYXA6IDZyZW07XHJcbiAgfVxyXG5cclxuICAuaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1jb250ZW50IHtcclxuICAgIGdhcDogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtaXRlbSB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWl0ZW0gaSB7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFRhYmxldCBMYW5kc2NhcGUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmFib3V0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LWNvbnRlbnQgaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUge1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBUYWJsZXQgUG9ydHJhaXQgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICBoZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBnYXA6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAudGl0bGUtbG9nbyB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeS1uYXZpZ2F0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogODBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICAvKiBJbml0aWFsIGhpZGRlbiBzdGF0ZSAqL1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCkgc2NhbGUoMC45OCk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICAvKiBJbXByb3ZlZCB0cmFuc2l0aW9uIHdpdGggY3VzdG9tIHRpbWluZyBmdW5jdGlvbnMgKi9cclxuICAgIHRyYW5zaXRpb246XHJcbiAgICAgIG9wYWNpdHkgMC40cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxyXG4gICAgICB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSksXHJcbiAgICAgIHZpc2liaWxpdHkgMC40cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxyXG4gICAgICBiYWNrZHJvcC1maWx0ZXIgMC4zcyBlYXNlO1xyXG5cclxuICAgIC8qIFBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiAqL1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuXHJcbiAgICAvKiBFbnN1cmUgY29udGVudCBpcyBwcm9wZXJseSBjb250YWluZWQgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC8qIFNtb290aCBlZGdlIGhhbmRsaW5nICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcclxuXHJcbiAgICAvKiBTdWJ0bGUgc2hhZG93IGZvciBkZXB0aCAqL1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cclxuICAgIC8qIEFkZCBhIHN1YnRsZSBhbmltYXRpb24gZm9yIGNoaWxkIGVsZW1lbnRzICovXHJcbiAgICAmID4gKiB7XHJcbiAgICAgIGFuaW1hdGlvbjogbmF2SXRlbUZhZGVJbiAwLjVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgZm9yd2FyZHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBPcHRpb25hbDogQWRkIHN0YWdnZXJlZCBhbmltYXRpb24gZm9yIG5hdmlnYXRpb24gaXRlbXMgKi9cclxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSA+ICo6bnRoLWNoaWxkKDEpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4wNXM7XHJcbiAgfVxyXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24uYWN0aXZlID4gKjpudGgtY2hpbGQoMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xyXG4gIH1cclxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSA+ICo6bnRoLWNoaWxkKDMpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xNXM7XHJcbiAgfVxyXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24uYWN0aXZlID4gKjpudGgtY2hpbGQoNCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gIH1cclxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSA+ICo6bnRoLWNoaWxkKDUpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4yNXM7XHJcbiAgfVxyXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24uYWN0aXZlID4gKjpudGgtY2hpbGQoNikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gIH1cclxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSA+ICo6bnRoLWNoaWxkKDcpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zNXM7XHJcbiAgfVxyXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24uYWN0aXZlID4gKjpudGgtY2hpbGQoOCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIH1cclxuXHJcbiAgLyogS2V5ZnJhbWVzIGZvciBjaGlsZCBlbGVtZW50cyBhbmltYXRpb24gKi9cclxuICBAa2V5ZnJhbWVzIG5hdkl0ZW1GYWRlSW4ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIE9wdGlvbmFsOiBBZGQgYSBiYWNrZHJvcCBvdmVybGF5IHdoZW4gbWVudSBpcyBhY3RpdmUgKi9cclxuICBib2R5Lmhhcy1hY3RpdmUtbmF2OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gICAgei1pbmRleDogOTg7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogUmVzcG9uc2l2ZSBhZGp1c3RtZW50cyAqL1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnByaW1hcnktbmF2aWdhdGlvbiB7XHJcbiAgICAgIHRvcDogNjBweDtcclxuICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIEVuc3VyZSBzbW9vdGggdHJhbnNpdGlvbnMgb24gYWxsIGRldmljZXMgKi9cclxuICBAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gICAgLnByaW1hcnktbmF2aWdhdGlvbixcclxuICAgIC5wcmltYXJ5LW5hdmlnYXRpb24gKixcclxuICAgIC5wcmltYXJ5LW5hdmlnYXRpb24uYWN0aXZlICoge1xyXG4gICAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgLm5hdi1saXN0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSAubmF2LWl0ZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtdG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtY29udGVudCBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaWNvbi1jb250YWluZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGdhcDogMnJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWl0ZW0ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWNvbnRlbnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5mb290ZXItbGlua3Mge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNb2JpbGUgTGFuZHNjYXBlICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmhlcm8tY29udGFpbmVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNb2JpbGUgUG9ydHJhaXQgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAudGl0bGUtbG9nbyB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5oZXJvLWNvbnRhaW5lciBoMSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICB9XHJcblxyXG4gIC5oZXJvLWNvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0IHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5hYm91dC1jb250ZW50IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5hYm91dC1jb250ZW50IHAge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcblxyXG4gIC5pY29ucyBpIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIH1cclxuXHJcbiAgLmxvZ29zIGltZyB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW46IDAgMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLnNraWxsLWNvbnRhaW5lcjpiZWZvcmUsXHJcbiAgLnNraWxsLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtaXRlbSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1pdGVtIGkge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFJlZHVjZWQgTW90aW9uICovXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcbiAgKiB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyx5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsTUFBTTtFQUNOLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0Isc0NBQXNDO0VBQ3RDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtB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IkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWJvcmV0byZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWFudGljbzppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wcmltYXJ5LWNvbG9yOiAjM2MzZDM3O1xcclxcbiAgLS1zZWNvbmRhcnktY29sb3I6ICM2OTc1NjU7XFxyXFxuICAtLWFjY2VudC1jb2xvcjogI2VjZGZjYztcXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzE4MWMxNDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICBmb250LWZhbWlseTogUm9ib3RvLCBcXFwic2FucyBzZXJpZlxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE1MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDlweCAyN3B4IDBweCAjMDAwMDAwNmM7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1sb2dvIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWFudGljb1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWxvZ28gYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtdG9nZ2xlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWJ0biB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcmltYXJ5LW5hdmlnYXRpb24ge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBtaW4td2lkdGg6IDQwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0ge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAwLjhyZW0gMS4ycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rW2FyaWEtY3VycmVudD1cXFwicGFnZVxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIRVJPIFNFQ1RJT04gKi9cXHJcXG4uaGVyby1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiA3MHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250YWluZXIgaDEge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBYm9yZXRvXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogdGl0bGUgM3MgZWFzZSAwcyBub3JtYWwgbm9uZTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWNvbnRhaW5lciBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYW5pbWF0aW9uOiBkZXNjciAzcyBsaW5lYXIgMHMgMSBub3JtYWwgbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQUJPVVQgU0VDVElPTiAqL1xcclxcbi5hYm91dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXgtd2lkdGg6IDE0MDBweDtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3LjRweCk7XFxyXFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig3LjRweCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtY29udGVudCB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWNvbnRlbnQgaDEge1xcclxcbiAgZm9udC1zaXplOiAyLjhyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1jb250ZW50IHAge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZy1jb250YWluZXIge1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZSB7XFxyXFxuICB3aWR0aDogMjgwcHg7XFxyXFxuICBoZWlnaHQ6IDI4MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJQ09OUyAqL1xcclxcbi5pY29uLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb25zIGkge1xcclxcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246XFxyXFxuICAgIHRyYW5zZm9ybSAwLjNzIGVhc2UsXFxyXFxuICAgIGNvbG9yIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb25zIGk6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qIFNLSUxMIFNFQ1RJT04gKi9cXHJcXG4uc2tpbGwtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMnJlbSAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAuMXB4KTtcXHJcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwLjFweCk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5za2lsbC1jb250YWluZXI6YmVmb3JlLFxcclxcbi5za2lsbC1jb250YWluZXI6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGwtY29udGFpbmVyOmJlZm9yZSB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksICNmZmZmZmYpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGwtY29udGFpbmVyOjphZnRlciB7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgI2ZmZmZmZik7XFxyXFxufVxcclxcblxcclxcbi5za2lsbC1jb250YWluZXI6aG92ZXIgLmxvZ29zIHtcXHJcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxyXFxufVxcclxcblxcclxcbi5sb2dvcyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBhbmltYXRpb246IDIwcyBzbGlkZSBpbmZpbml0ZSBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvcyBpbWcge1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgbWFyZ2luOiAwIDNyZW07XFxyXFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgzMCUpO1xcclxcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29zIGltZzpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSk7XFxyXFxufVxcclxcblxcclxcbi8qIFdPUksgU0VDVElPTiAqL1xcclxcbi53b3JrLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDNyZW0gMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstY29udGFpbmVyIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1jb250YWluZXIgaDE6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IC0xMHB4O1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBoZWlnaHQ6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMTQwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluU2hhZG93IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluU2hhZG93SG92ZXIge1xcclxcbiAgMCUge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjY2NCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBhbmltYXRpb246IGZhZGVJblNoYWRvdyAxcyBlYXNlLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5jYXJkOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XFxyXFxuICBhbmltYXRpb246IGZhZGVJblNoYWRvd0hvdmVyIDAuM3MgZWFzZSBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBoMiB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgcCB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbGlua3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGkge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBpOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHBhZGRpbmc6IDRyZW0gMXJlbTtcXHJcXG4gIGdhcDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jb250YWluZXIgaW1nIHtcXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlnaHRib3gtb3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45NSk7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpZ2h0Ym94LW92ZXJsYXkuYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5saWdodGJveC1pbWFnZSB7XFxyXFxuICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDkwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5saWdodGJveC1jbG9zZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICByaWdodDogMzBweDtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpZ2h0Ym94LXByZXYsXFxyXFxuLmxpZ2h0Ym94LW5leHQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlnaHRib3gtcHJldiB7XFxyXFxuICBsZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlnaHRib3gtbmV4dCB7XFxyXFxuICByaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1jb250ZW50IGkge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pdGVtIHNwYW4ge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSIC0gTmV3IGFkZGl0aW9uIHRvIGZpeCBzcGFjaW5nICovXFxyXFxuLmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRlbnQge1xcclxcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHAge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxpbmtzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGlua3MgYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1saW5rcyBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBTklNQVRJT05TICovXFxyXFxuQGtleWZyYW1lcyB0aXRsZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycmVtO1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDApO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGRlc2NyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFyZW07XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XFxyXFxuICAgIGZpbHRlcjogYmx1cigxMnB4KTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIGZpbHRlcjogYmx1cigwKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZSB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBERVNLVE9QIE9QVElNSVpBVElPTlMgKDE5MjB4MTA4MCBhbmQgYWJvdmUpICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxODAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlcm8tY29udGFpbmVyIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA3cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlcm8tY29udGFpbmVyIHAge1xcclxcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dCB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIHBhZGRpbmc6IDRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtY29udGVudCBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LWNvbnRlbnQgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByb2ZpbGUge1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgIGhlaWdodDogMzIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZC1jb250YWluZXIge1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZCB7XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDVyZW0gMnJlbTtcXHJcXG4gICAgZ2FwOiA2cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmltYWdlLWNvbnRhaW5lciBpbWcge1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1jb250ZW50IHtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1pdGVtIGkge1xcclxcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogVGFibGV0IExhbmRzY2FwZSAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgLmFib3V0IHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LWNvbnRlbnQgaDEge1xcclxcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC1jb250ZW50IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9maWxlIHtcXHJcXG4gICAgd2lkdGg6IDI0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkIHtcXHJcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogVGFibGV0IFBvcnRyYWl0ICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIGdhcDogMTAwcHggIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGUtbG9nbyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogODBweDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45NSk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgLyogSW5pdGlhbCBoaWRkZW4gc3RhdGUgKi9cXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KSBzY2FsZSgwLjk4KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgLyogSW1wcm92ZWQgdHJhbnNpdGlvbiB3aXRoIGN1c3RvbSB0aW1pbmcgZnVuY3Rpb25zICovXFxyXFxuICAgIHRyYW5zaXRpb246XFxyXFxuICAgICAgb3BhY2l0eSAwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXFxyXFxuICAgICAgdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpLFxcclxcbiAgICAgIHZpc2liaWxpdHkgMC40cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxcclxcbiAgICAgIGJhY2tkcm9wLWZpbHRlciAwLjNzIGVhc2U7XFxyXFxuXFxyXFxuICAgIC8qIFBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiAqL1xcclxcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xcclxcblxcclxcbiAgICAvKiBFbnN1cmUgY29udGVudCBpcyBwcm9wZXJseSBjb250YWluZWQgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIC8qIFNtb290aCBlZGdlIGhhbmRsaW5nICovXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xcclxcblxcclxcbiAgICAvKiBTdWJ0bGUgc2hhZG93IGZvciBkZXB0aCAqL1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24uYWN0aXZlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHJcXG4gICAgLyogQWRkIGEgc3VidGxlIGFuaW1hdGlvbiBmb3IgY2hpbGQgZWxlbWVudHMgKi9cXHJcXG4gICAgJiA+ICoge1xcclxcbiAgICAgIGFuaW1hdGlvbjogbmF2SXRlbUZhZGVJbiAwLjVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgZm9yd2FyZHM7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIE9wdGlvbmFsOiBBZGQgc3RhZ2dlcmVkIGFuaW1hdGlvbiBmb3IgbmF2aWdhdGlvbiBpdGVtcyAqL1xcclxcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgPiAqOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4wNXM7XFxyXFxuICB9XFxyXFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSA+ICo6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xcclxcbiAgfVxcclxcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgPiAqOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xNXM7XFxyXFxuICB9XFxyXFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSA+ICo6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xcclxcbiAgfVxcclxcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgPiAqOm50aC1jaGlsZCg1KSB7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4yNXM7XFxyXFxuICB9XFxyXFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSA+ICo6bnRoLWNoaWxkKDYpIHtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xcclxcbiAgfVxcclxcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgPiAqOm50aC1jaGlsZCg3KSB7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zNXM7XFxyXFxuICB9XFxyXFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSA+ICo6bnRoLWNoaWxkKDgpIHtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogS2V5ZnJhbWVzIGZvciBjaGlsZCBlbGVtZW50cyBhbmltYXRpb24gKi9cXHJcXG4gIEBrZXlmcmFtZXMgbmF2SXRlbUZhZGVJbiB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIE9wdGlvbmFsOiBBZGQgYSBiYWNrZHJvcCBvdmVybGF5IHdoZW4gbWVudSBpcyBhY3RpdmUgKi9cXHJcXG4gIGJvZHkuaGFzLWFjdGl2ZS1uYXY6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXHJcXG4gICAgei1pbmRleDogOTg7XFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNHMgZWFzZSBmb3J3YXJkcztcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIFJlc3BvbnNpdmUgYWRqdXN0bWVudHMgKi9cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAucHJpbWFyeS1uYXZpZ2F0aW9uIHtcXHJcXG4gICAgICB0b3A6IDYwcHg7XFxyXFxuICAgICAgcGFkZGluZzogMC43NXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLyogRW5zdXJlIHNtb290aCB0cmFuc2l0aW9ucyBvbiBhbGwgZGV2aWNlcyAqL1xcclxcbiAgQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXHJcXG4gICAgLnByaW1hcnktbmF2aWdhdGlvbixcXHJcXG4gICAgLnByaW1hcnktbmF2aWdhdGlvbiAqLFxcclxcbiAgICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSAqIHtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgYW5pbWF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24uYWN0aXZlIC5uYXYtbGlzdCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSAubmF2LWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgLm5hdi1saW5rIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS10b2dnbGUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC1jb250ZW50IGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljb24tY29udGFpbmVyIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWl0ZW0ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXItY29udGVudCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXItbGlua3Mge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTW9iaWxlIExhbmRzY2FwZSAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuaGVyby1jb250YWluZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZXJvLWNvbnRhaW5lciBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZC1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWFnZS1jb250YWluZXIgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDI4MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2JpbGUgUG9ydHJhaXQgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgLnRpdGxlLWxvZ28ge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZXJvLWNvbnRhaW5lciBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlcm8tY29udGFpbmVyIHAge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0IHtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LWNvbnRlbnQgaDEge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtY29udGVudCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByb2ZpbGUge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaWNvbnMgaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ29zIGltZyB7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgbWFyZ2luOiAwIDEuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5za2lsbC1jb250YWluZXI6YmVmb3JlLFxcclxcbiAgLnNraWxsLWNvbnRhaW5lcjo6YWZ0ZXIge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWl0ZW0ge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWl0ZW0gaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3RlciB7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogUmVkdWNlZCBNb3Rpb24gKi9cXHJcXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcclxcbiAgKiB7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxyXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHByb2ZpbGUgZnJvbSBcIi4uL2ltYWdlcy9wcm9maWxlLmpwZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQge1xyXG4gIHN0YXRpYyBsb2FkQWJvdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYWJvdXRcIjtcclxuICAgIGNvbnRhaW5lci5pZCA9IFwiYWJvdXRcIjtcclxuXHJcbiAgICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaW1nQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYWJvdXQtaW1nLWNvbnRhaW5lclwiO1xyXG5cclxuICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmxvYWRQcm9maWxlKCkpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdDb250YWluZXIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb24oKSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVzY3JpcHRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcImFib3V0LWNvbnRhaW5lclwiO1xyXG5cclxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFib3V0Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYWJvdXQtY29udGVudFwiO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gXCJhYm91dC10aXRsZVwiO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJBYm91dCBNZVwiO1xyXG5cclxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYWdyYXBoLmNsYXNzTmFtZSA9IFwiYWJvdXQtcGFyYWdyYXBoXCI7XHJcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID1cclxuICAgICAgXCJJIGFtIGEgc29mdHdhcmUgZW5naW5lZXIgd2l0aCBhIHBhc3Npb24gZm9yIGxlYXJuaW5nIG5ldyB0ZWNobm9sb2dpZXMgYW5kIGRldmVsb3BpbmcgbmV3IHByb2plY3RzLiBJIGhhdmUgYSBzdHJvbmcgYmFja2dyb3VuZCBpbiB3ZWIgZGV2ZWxvcG1lbnQgYW5kIEkgaGF2ZSBhIHN0cm9uZyBpbnRlcmVzdCBpbiBsZWFybmluZyBuZXcgdGVjaG5vbG9naWVzIGFuZCBkZXZlbG9waW5nIG5ldyBwcm9qZWN0cy5cIjtcclxuXHJcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pY29ucygpKTtcclxuXHJcbiAgICByZXR1cm4gZGVzY3JpcHRpb25Db250YWluZXI7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGljb25zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpY29uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaWNvbi1jb250YWluZXJcIjtcclxuXHJcbiAgICBjb25zdCBpY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpY29ucy5jbGFzc05hbWUgPSBcImljb25zXCI7XHJcbiAgICBpY29ucy5pbm5lckhUTUwgPSBgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NoQWxsZW5CXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZ2l0aHViXCI+PC9pPjwvYT5cclxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9zaHVhLWFsbGVuLWJhdGF5b2xhLTZiM2I0NjI3Yi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1saW5rZWRpblwiPjwvaT48L2E+YDtcclxuXHJcbiAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb25zKTtcclxuXHJcbiAgICByZXR1cm4gaWNvbkNvbnRhaW5lcjtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgbG9hZFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9maWxlSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBwcm9maWxlSW1nLnNyYyA9IHByb2ZpbGU7XHJcbiAgICBwcm9maWxlSW1nLmFsdCA9IFwic2VsZiBwb3J0cmFpdFwiO1xyXG4gICAgcHJvZmlsZUltZy5jbGFzc05hbWUgPSBcInByb2ZpbGVcIjtcclxuICAgIHJldHVybiBwcm9maWxlSW1nO1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHN0b2NrUGhvdG8gZnJvbSBcIi4uL2ltYWdlcy93b3JrLXN0b2NrcGhvdG8uanBnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IHtcclxuICBzdGF0aWMgY29weVRvQ2xpcGJvYXJkID0gKHRleHQpID0+IHtcclxuICAgIGlmICghbmF2aWdhdG9yLmNsaXBib2FyZCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQ2xpcGJvYXJkIEFQSSBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZFxyXG4gICAgICAud3JpdGVUZXh0KHRleHQpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvcGllZDpcIiwgdGV4dCk7XHJcbiAgICAgICAgLy8gT3B0aW9uYWw6IHNob3cgdGVtcG9yYXJ5IFVJIGZlZWRiYWNrIGhlcmVcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNvcHk6XCIsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBsb2FkQ29udGFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJjb250YWN0LWNvbnRhaW5lclwiO1xyXG4gICAgY29udGFpbmVyLmlkID0gXCJjb250YWN0XCI7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGFjdC1jb250ZW50XCI7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW1hZ2UoKSk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmVtYWlsKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLnBob25lKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLnNvY01lZCgpKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyB0aXRsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gXCJjb250YWN0LXRpdGxlXCI7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIkNvbnRhY3QgTWVcIjtcclxuXHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGltYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImltYWdlLWNvbnRhaW5lclwiO1xyXG5cclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltYWdlLmNsYXNzTmFtZSA9IFwiaW1hZ2VcIjtcclxuICAgIGltYWdlLnNyYyA9IHN0b2NrUGhvdG87XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGVtYWlsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImVtYWlsLWNvbnRhaW5lclwiO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsVGV4dCA9IFwiZW1haWxAZW1haWwuY29tXCI7XHJcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBlbWFpbFRleHQ7XHJcbiAgICBjb250YWluZXIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcblxyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkKGVtYWlsVGV4dCk7XHJcbiAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiQ29waWVkIVwiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBlbWFpbFRleHQ7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgcGhvbmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwicGhvbmUtY29udGFpbmVyXCI7XHJcblxyXG4gICAgY29uc3QgcGhvbmVUZXh0ID0gXCIxMjMtNDU2LTc4OTBcIjtcclxuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHBob25lVGV4dDtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuXHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5jb3B5VG9DbGlwYm9hcmQocGhvbmVUZXh0KTtcclxuICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJDb3BpZWQhXCI7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHBob25lVGV4dDtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBzb2NNZWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwic29jbWVkLWNvbnRhaW5lclwiO1xyXG5cclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbVwiPjxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWdpdGh1YlwiPjwvaT48L2E+XHJcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtbGlua2VkaW5cIj48L2k+PC9hPmA7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVybyB7XHJcbiAgc3RhdGljIGxvYWRIZXJvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImhlcm8tY29udGFpbmVyXCI7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS5jbGFzc05hbWUgPSBcImhlcm8tdGl0bGVcIjtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiTXkgbmFtZSBpcyBKb3NoIVwiO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImhlcm8tZGVzY3JpcHRpb25cIjtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiSSBhbSBhIHNvZnR3YXJlIGVuZ2luZWVyIGluIHRoZSBQaGlsaXBwaW5lc1wiO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTa2lsbCB7XHJcbiAgc3RhdGljIGxvYWRTa2lsbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJza2lsbC1jb250YWluZXJcIjtcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhyZWUgaWRlbnRpY2FsIGxvZ29zIGNvbnRhaW5lcnNcclxuICAgIGNvbnN0IGxvZ29zMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2dvczEuY2xhc3NOYW1lID0gXCJsb2dvc1wiO1xyXG4gICAgbG9nb3MxLmlubmVySFRNTCA9IGBcclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvaHRtbDUvaHRtbDUtb3JpZ2luYWwtd29yZG1hcmsuc3ZnXCIgLz5cclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvY3NzMy9jc3MzLW9yaWdpbmFsLXdvcmRtYXJrLnN2Z1wiIC8+XHJcbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2phdmFzY3JpcHQvamF2YXNjcmlwdC1vcmlnaW5hbC5zdmdcIiAvPlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9mbGFzay9mbGFzay1vcmlnaW5hbC13b3JkbWFyay5zdmdcIiAvPlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLXdvcmRtYXJrLnN2Z1wiIC8+XHJcbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3B5dGhvbi9weXRob24tb3JpZ2luYWwuc3ZnXCIgLz5cclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvdWJ1bnR1L3VidW50dS1vcmlnaW5hbC13b3JkbWFyay5zdmdcIiAvPlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9yZWFjdC9yZWFjdC1vcmlnaW5hbC13b3JkbWFyay5zdmdcIiAvPlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9ub2RlanMvbm9kZWpzLW9yaWdpbmFsLXdvcmRtYXJrLnN2Z1wiIC8+XHJcbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2V4cHJlc3MvZXhwcmVzcy1vcmlnaW5hbC13b3JkbWFyay5zdmdcIiAvPlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9tb25nb2RiL21vbmdvZGItb3JpZ2luYWwtd29yZG1hcmsuc3ZnXCIgLz5cclxuICAgIGA7XHJcbiAgICBjb25zdCBsb2dvczIgPSBsb2dvczEuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgY29uc3QgbG9nb3MzID0gbG9nb3MxLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICAvLyBBcHBlbmQgdGhlIGxvZ29zIGNvbnRhaW5lcnMgdG8gdGhlIG1haW4gY29udGFpbmVyXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9nb3MxKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvczIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29zMyk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4uL3N0cnVjdHVyZS9oZWFkZXIuanNcIjtcclxuaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL3N0cnVjdHVyZS9oYW5kbGVycy5qc1wiO1xyXG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vcGFnZXMvaGVyby5qc1wiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL3BhZ2VzL2Fib3V0LmpzXCI7XHJcbmltcG9ydCBTa2lsbCBmcm9tIFwiLi4vcGFnZXMvc2tpbGxzLmpzXCI7XHJcbmltcG9ydCBXb3JrIGZyb20gXCIuLi9wYWdlcy93b3JrLmpzXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9wYWdlcy9jb250YWN0LmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJwYWdlIHtcclxuICBzdGF0aWMgbG9hZFdlYiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIubG9hZEhlYWRlcigpKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChIZXJvLmxvYWRIZXJvKCkpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKEFib3V0LmxvYWRBYm91dCgpKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChTa2lsbC5sb2FkU2tpbGwoKSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoV29yay5sb2FkV29yaygpKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChDb250YWN0LmxvYWRDb250YWN0KCkpO1xyXG5cclxuICAgIEhhbmRsZXIubG9hZEhhbmRsZXIoKTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB3ZWF0aGVySW1nIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci1hcHAucG5nXCI7XHJcbmltcG9ydCB0b2RvSW1nIGZyb20gXCIuLi9pbWFnZXMvdG9kby1hcHAucG5nXCI7XHJcbmltcG9ydCB2YWxlbnRpbmVJbWcgZnJvbSBcIi4uL2ltYWdlcy92YWxlbnRpbmUtYXBwLnBuZ1wiO1xyXG5pbXBvcnQgd21tRWRpdCBmcm9tIFwiLi4vaW1hZ2VzL3dtbS93bW1FZGl0LnBuZ1wiO1xyXG5pbXBvcnQgd21tSG9tZSBmcm9tIFwiLi4vaW1hZ2VzL3dtbS93bW1Ib21lU2lkZWJhci5wbmdcIjtcclxuaW1wb3J0IHdtbU90aGVyIGZyb20gXCIuLi9pbWFnZXMvd21tL3dtbU90aGVyLnBuZ1wiO1xyXG5pbXBvcnQgd21tRmlsdGVyIGZyb20gXCIuLi9pbWFnZXMvd21tL3dtbUZpbHRlci5wbmdcIjtcclxuaW1wb3J0IHdtbVZpZXcgZnJvbSBcIi4uL2ltYWdlcy93bW0vd21tVmlldy5wbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmsge1xyXG4gIC8vIERlZmluZSB3b3JrIGl0ZW1zIGFzIGRhdGFcclxuICBzdGF0aWMgd29ya0l0ZW1zID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJXTU0gU3Vic2NyaXB0aW9uIE1hbmFnZXJcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJJbnRlcm5hbCBzb2Z0d2FyZSBJIG1hZGUgZm9yIE1pc2lvbmFyeSBHcm91cCB0byBtYW5hZ2UgdGhlaXIgbWFnYXppbmUgc3Vic2NyaXB0aW9uIHN0YXR1cy4gSXQgYWxsb3dzIHVzZXJzIHRvIHZpZXcsIGVkaXQsIGFuZCBmaWx0ZXIgc3Vic2NyaXB0aW9uIGluZm9ybWF0aW9uIGluIGEgdXNlci1mcmllbmRseSBpbnRlcmZhY2UuXCIsXHJcbiAgICAgIGltYWdlczogW3dtbUhvbWUsIHdtbUVkaXQsIHdtbU90aGVyLCB3bW1GaWx0ZXIsIHdtbVZpZXddLCAvLyBjYW4gYWRkIGltYWdlcyBsYXRlcl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJXZWF0aGVyIEFwcFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIlRoaXMgYXBwIGFsbG93cyB5b3UgdG8gY2hlY2sgY3VycmVudCB3ZWF0aGVyIGNvbmRpdGlvbnMgZm9yIHlvdXIgbG9jYXRpb25cIixcclxuICAgICAgaW1hZ2VzOiBbd2VhdGhlckltZ10sIC8vIGNhbiBhZGQgbW9yZSBsYXRlclxyXG4gICAgICBnaXRodWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NoQWxsZW5CL3dlYXRoZXItYXBwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJUb2RvIEFwcFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIlRoaXMgYXBwIGhlbHBzIHlvdSBrZWVwIHRyYWNrIG9mIHlvdXIgdGFza3MgYW5kIHN0YXkgb3JnYW5pemVkIVwiLFxyXG4gICAgICBpbWFnZXM6IFt0b2RvSW1nXSxcclxuICAgICAgZ2l0aHViTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vSm9zaEFsbGVuQi90b2RvLWFwcFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVmFsZW50aW5lIEFwcFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIlRoaXMgYXBwIGhlbHBzIHlvdSBjZWxlYnJhdGUgVmFsZW50aW5lJ3MgRGF5IHdpdGggeW91ciBsb3ZlZCBvbmVzIVwiLFxyXG4gICAgICBpbWFnZXM6IFt2YWxlbnRpbmVJbWddLFxyXG4gICAgICBnaXRodWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NoQWxsZW5CL3ZhbGVudGluZS1hcHBcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgc3RhdGljIGxvYWRXb3JrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcIndvcmstY29udGFpbmVyXCI7XHJcbiAgICBjb250YWluZXIuaWQgPSBcIndvcmtcIjtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwid29yay10aXRsZVwiO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJNeSBXb3JrXCI7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZENvbnRhaW5lci5jbGFzc05hbWUgPSBcImNhcmQtY29udGFpbmVyXCI7XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgY2FyZHMgZHluYW1pY2FsbHkgZnJvbSBkYXRhXHJcbiAgICB0aGlzLndvcmtJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmdlbmVyYXRlQ2FyZChcclxuICAgICAgICBpdGVtLnRpdGxlLFxyXG4gICAgICAgIGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaXRlbS5pbWFnZXMsXHJcbiAgICAgICAgaXRlbS5naXRodWJMaW5rLFxyXG4gICAgICApO1xyXG4gICAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9O1xyXG5cclxuICAvLyBBZGQgaGVscGVyIG1ldGhvZHMgZm9yIG1hbmFnaW5nIHdvcmsgaXRlbXNcclxuICBzdGF0aWMgYWRkV29ya0l0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy53b3JrSXRlbXMucHVzaChpdGVtKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmVXb3JrSXRlbSh0aXRsZSkge1xyXG4gICAgdGhpcy53b3JrSXRlbXMgPSB0aGlzLndvcmtJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udGl0bGUgIT09IHRpdGxlKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB1cGRhdGVXb3JrSXRlbShpbmRleCwgbmV3SXRlbSkge1xyXG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLndvcmtJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy53b3JrSXRlbXNbaW5kZXhdID0gbmV3SXRlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZW5lcmF0ZUNhcmQgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZXMsIGdpdGh1YkxpbmspID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZC5jbGFzc05hbWUgPSBcImNhcmRcIjtcclxuXHJcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY2FyZENvbnRlbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgY2FyZEltYWdlLnNyYyA9IGltYWdlc1swXTtcclxuICAgIGNhcmRJbWFnZS5hbHQgPSB0aXRsZTtcclxuICAgIGNhcmRJbWFnZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuXHJcbiAgICAvLyBDcmVhdGUgbGlnaHRib3ggb3BlbmVyIG9uY2VcclxuICAgIGlmICghdGhpcy5saWdodGJveE9wZW4pIHtcclxuICAgICAgdGhpcy5saWdodGJveE9wZW4gPSB0aGlzLmNyZWF0ZUxpZ2h0Ym94KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMubGlnaHRib3hPcGVuKGltYWdlcywgMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZ2l0aHViTGluaykge1xyXG4gICAgICBjb25zdCBnaXRodWJMaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBnaXRodWJMaW5rRWxlbWVudC5ocmVmID0gZ2l0aHViTGluaztcclxuICAgICAgZ2l0aHViTGlua0VsZW1lbnQudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgICAgZ2l0aHViTGlua0VsZW1lbnQucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XHJcblxyXG4gICAgICBjb25zdCBnaXRodWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZ2l0aHViTG9nby5jbGFzc05hbWUgPSBcImdpdGh1Yi1sb2dvXCI7XHJcbiAgICAgIGdpdGh1YkxvZ28uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWdpdGh1YlwiPjwvaT5gO1xyXG5cclxuICAgICAgZ2l0aHViTGlua0VsZW1lbnQuYXBwZW5kQ2hpbGQoZ2l0aHViTG9nbyk7XHJcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZ2l0aHViTGlua0VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEltYWdlKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVMaWdodGJveCgpIHtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSBcImxpZ2h0Ym94LW92ZXJsYXlcIjtcclxuICAgIG92ZXJsYXkuaW5uZXJIVE1MID0gYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJsaWdodGJveC1jbG9zZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwibGlnaHRib3gtcHJldlwiPiYjMTAwOTQ7PC9idXR0b24+XHJcbiAgICA8aW1nIGNsYXNzPVwibGlnaHRib3gtaW1hZ2VcIiAvPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImxpZ2h0Ym94LW5leHRcIj4mIzEwMDk1OzwvYnV0dG9uPlxyXG4gIGA7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcclxuXHJcbiAgICBjb25zdCBpbWdFbGVtZW50ID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKFwiLmxpZ2h0Ym94LWltYWdlXCIpO1xyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoXCIubGlnaHRib3gtY2xvc2VcIik7XHJcbiAgICBjb25zdCBwcmV2QnRuID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKFwiLmxpZ2h0Ym94LXByZXZcIik7XHJcbiAgICBjb25zdCBuZXh0QnRuID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKFwiLmxpZ2h0Ym94LW5leHRcIik7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRJbWFnZXMgPSBbXTtcclxuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xyXG5cclxuICAgIGNvbnN0IHNob3dJbWFnZSA9ICgpID0+IHtcclxuICAgICAgaW1nRWxlbWVudC5zcmMgPSBjdXJyZW50SW1hZ2VzW2N1cnJlbnRJbmRleF07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9wZW4gPSAoaW1hZ2VzLCBpbmRleCkgPT4ge1xyXG4gICAgICBjdXJyZW50SW1hZ2VzID0gaW1hZ2VzO1xyXG4gICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgICAgc2hvd0ltYWdlKCk7XHJcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgY29uc3QgbmV4dCA9ICgpID0+IHtcclxuICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgY3VycmVudEltYWdlcy5sZW5ndGg7XHJcbiAgICAgIHNob3dJbWFnZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwcmV2ID0gKCkgPT4ge1xyXG4gICAgICBjdXJyZW50SW5kZXggPVxyXG4gICAgICAgIChjdXJyZW50SW5kZXggLSAxICsgY3VycmVudEltYWdlcy5sZW5ndGgpICUgY3VycmVudEltYWdlcy5sZW5ndGg7XHJcbiAgICAgIHNob3dJbWFnZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xyXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSBjbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXh0KTtcclxuICAgIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXYpO1xyXG5cclxuICAgIHJldHVybiBvcGVuO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kbGVyIHtcclxuICBzdGF0aWMgbG9hZEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25IYW5kbGVyKCk7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIG5hdmlnYXRpb25IYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRvZ2dsZVwiKTtcclxuICAgICAgbmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1jb250YWluZXJcIik7XHJcbiAgICAgICAgaWYgKG5hdkl0ZW1zKSB7XHJcbiAgICAgICAgICBuYXZJdGVtcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rXCIpO1xyXG5cclxuICAgIG5hdkxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbmF2TGlua3MuZm9yRWFjaCgobmF2TGluaykgPT4ge1xyXG4gICAgICAgICAgbmF2TGluay5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gbGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRJZCk7XHJcbiAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBoZWFkZXIgPyBoZWFkZXIub2Zmc2V0SGVpZ2h0IDogMDtcclxuICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb3AgPVxyXG4gICAgICAgICAgICB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgIHRvcDogZWxlbWVudFRvcCAtIGhlYWRlckhlaWdodCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xyXG4gIHN0YXRpYyBsb2FkSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaGVhZGVyLWNvbnRhaW5lclwiO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcImNvbnRlbnQtY29udGFpbmVyXCI7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci1jb250YWluZXItLXN0aWNreVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlci1jb250YWluZXItLXN0aWNreVwiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSAobG9nb05hbWUpID0+IHtcclxuICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgIGgxLmNsYXNzTmFtZSA9IFwidGl0bGUtbG9nb1wiO1xyXG4gICAgICBoMS50ZXh0Q29udGVudCA9IGxvZ29OYW1lO1xyXG4gICAgICByZXR1cm4gaDE7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG1lbnVUb2dnbGUgbm93IHRha2VzIG5hdiBhcyBhcmd1bWVudCBhbmQgdG9nZ2xlcyAnYWN0aXZlJyBjbGFzc1xyXG4gICAgY29uc3QgbWVudVRvZ2dsZSA9IChuYXYpID0+IHtcclxuICAgICAgY29uc3QgdG9nZ2xlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdG9nZ2xlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVudS10b2dnbGVcIjtcclxuICAgICAgdG9nZ2xlQ29udGFpbmVyLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWJhcnNcIj48L2k+YDtcclxuICAgICAgdG9nZ2xlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdG9nZ2xlQ29udGFpbmVyO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgICBuYXYuY2xhc3NOYW1lID0gXCJwcmltYXJ5LW5hdmlnYXRpb25cIjtcclxuICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJNYWluIG5hdmlnYXRpb25cIik7XHJcblxyXG4gICAgICAvLyBVc2UgbWF0Y2hNZWRpYSBmb3IgYmV0dGVyIHJlc3BvbnNpdmUgaGFuZGxpbmdcclxuICAgICAgY29uc3QgbW9iaWxlTWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogODgwcHgpXCIpO1xyXG4gICAgICBuYXYuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgbW9iaWxlTWVkaWFRdWVyeS5tYXRjaGVzKTtcclxuXHJcbiAgICAgIC8vIE9wdGlvbmFsOiBMaXN0ZW4gZm9yIHJlc2l6ZSBldmVudHMgdG8gdXBkYXRlIGFyaWEtaGlkZGVuXHJcbiAgICAgIG1vYmlsZU1lZGlhUXVlcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBlLm1hdGNoZXMpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgIG5hdkxpc3QuY2xhc3NOYW1lID0gXCJuYXYtbGlzdFwiO1xyXG5cclxuICAgICAgY29uc3QgbmF2SXRlbXMgPSBbXHJcbiAgICAgICAgeyBsYWJlbDogXCJBYm91dFwiLCBocmVmOiBcIiNhYm91dFwiIH0sXHJcbiAgICAgICAgeyBsYWJlbDogXCJXb3JrXCIsIGhyZWY6IFwiI3dvcmtcIiB9LFxyXG4gICAgICAgIHsgbGFiZWw6IFwiQ29udGFjdFwiLCBocmVmOiBcIiNjb250YWN0XCIgfSxcclxuICAgICAgXTtcclxuXHJcbiAgICAgIG5hdkl0ZW1zLmZvckVhY2goKHsgbGFiZWwsIGhyZWYgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTmFtZSA9IFwibmF2LWl0ZW1cIjtcclxuXHJcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XHJcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG4gICAgICAgIGxpbmsuY2xhc3NOYW1lID0gXCJuYXYtbGlua1wiO1xyXG5cclxuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBuYXYuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XHJcbiAgICAgIHJldHVybiBuYXY7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5hdiA9IGNyZWF0ZU5hdmlnYXRpb24oKTtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUoXCI8L0pCPlwiKSk7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUb2dnbGUobmF2KSk7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdik7XHJcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG4gIH07XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBXZWJwYWdlIGZyb20gXCIuL3BhZ2VzL3dlYnNpdGUuanNcIjtcclxuXHJcbmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFdlYnBhZ2UubG9hZFdlYigpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9