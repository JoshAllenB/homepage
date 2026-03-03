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
  static workItems = [
    {
      title: "Subscription Manager",
      description:
        "A MERN stack–based internal management system built for a missionary organization to streamline magazine subscription tracking. It enables efficient viewing, updating, and filtering of subscriber data through a clean and intuitive interface.",
      images: [_images_wmm_wmmHomeSidebar_png__WEBPACK_IMPORTED_MODULE_4__, _images_wmm_wmmEdit_png__WEBPACK_IMPORTED_MODULE_3__, _images_wmm_wmmOther_png__WEBPACK_IMPORTED_MODULE_5__, _images_wmm_wmmFilter_png__WEBPACK_IMPORTED_MODULE_6__, _images_wmm_wmmView_png__WEBPACK_IMPORTED_MODULE_7__],
    },
    {
      title: "Weather App",
      description:
        "This app allows you to check current weather conditions for your location",
      images: [_images_weather_app_png__WEBPACK_IMPORTED_MODULE_0__],
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

    if (!this.lightboxOpen) {
      this.lightboxOpen = this.createLightbox();
    }

    cardImage.addEventListener("click", () => {
      this.lightboxOpen(images, 0);
    });

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardContent);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN0TSxxSEFBcUg7QUFDckgsd0hBQXdILE1BQU0sTUFBTSxvQkFBb0I7QUFDeEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLFlBQVksWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsU0FBUyxRQUFRLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxPQUFPLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8s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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFdUQ7QUFDdkQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQjRDO0FBQ0c7QUFDWDtBQUNFO0FBQ0M7QUFDSDtBQUNNO0FBQzFDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNERBQU07QUFDaEMsMEJBQTBCLHNEQUFJO0FBQzlCLDBCQUEwQix1REFBSztBQUMvQiwwQkFBMEIsd0RBQUs7QUFDL0IsMEJBQTBCLHNEQUFJO0FBQzlCLDBCQUEwQix5REFBTztBQUNqQztBQUNBLElBQUksOERBQU87QUFDWDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCbUQ7QUFDTjtBQUNVO0FBQ1A7QUFDTztBQUNMO0FBQ0U7QUFDSjtBQUNoRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMkRBQU8sRUFBRSxvREFBTyxFQUFFLHFEQUFRLEVBQUUsc0RBQVMsRUFBRSxvREFBTztBQUM3RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFVO0FBQ3pCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBTztBQUN0QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0RBQVk7QUFDM0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLDBDQUEwQztBQUMxQztBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsTGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdDQUFnQztBQUMxQyxVQUFVLDhCQUE4QjtBQUN4QyxVQUFVLG9DQUFvQztBQUM5QztBQUNBO0FBQ0EsMEJBQTBCLGFBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDb0I7QUFDekM7QUFDQSxxQ0FBcUMseURBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3BhZ2VzL2hlcm8uanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvcGFnZXMvc2tpbGxzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3BhZ2VzL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvcGFnZXMvd29yay5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHJ1Y3R1cmUvaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3RydWN0dXJlL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BYm9yZXRvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1YW50aWNvOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLXByaW1hcnktY29sb3I6ICMzYzNkMzc7XHJcbiAgLS1zZWNvbmRhcnktY29sb3I6ICM2OTc1NjU7XHJcbiAgLS1hY2NlbnQtY29sb3I6ICNlY2RmY2M7XHJcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYzE0O1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwic2FucyBzZXJpZlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgYm94LXNoYWRvdzogMHB4IDlweCAyN3B4IDBweCAjMDAwMDAwNmM7XHJcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLWxvZ28ge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlF1YW50aWNvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4udGl0bGUtbG9nbyBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tZW51LXRvZ2dsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1lbnUtYnRuIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcmltYXJ5LW5hdmlnYXRpb24ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwLjhyZW0gMS4ycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLm5hdi1saW5rW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIEhFUk8gU0VDVElPTiAqL1xyXG4uaGVyby1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLmhlcm8tY29udGFpbmVyIGgxIHtcclxuICBmb250LWZhbWlseTogXCJBYm9yZXRvXCIsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiA2cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYW5pbWF0aW9uOiB0aXRsZSAzcyBlYXNlIDBzIG5vcm1hbCBub25lO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi5oZXJvLWNvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbmltYXRpb246IGRlc2NyIDNzIGxpbmVhciAwcyAxIG5vcm1hbCBub25lO1xyXG59XHJcblxyXG4vKiBBQk9VVCBTRUNUSU9OICovXHJcbi5hYm91dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3LjRweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNy40cHgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgZ2FwOiAzcmVtO1xyXG59XHJcblxyXG4uYWJvdXQtY29udGFpbmVyIHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEuNXJlbTtcclxufVxyXG5cclxuLmFib3V0LWNvbnRlbnQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYWJvdXQtY29udGVudCBoMSB7XHJcbiAgZm9udC1zaXplOiAyLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbn1cclxuXHJcbi5hYm91dC1jb250ZW50IHAge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5hYm91dC1pbWctY29udGFpbmVyIHtcclxuICBmbGV4LXNocmluazogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcclxufVxyXG5cclxuLyogSUNPTlMgKi9cclxuLmljb24tY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uaWNvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEuNXJlbTtcclxufVxyXG5cclxuLmljb25zIGkge1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOlxyXG4gICAgdHJhbnNmb3JtIDAuM3MgZWFzZSxcclxuICAgIGNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmljb25zIGk6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLyogU0tJTEwgU0VDVElPTiAqL1xyXG4uc2tpbGwtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwLjFweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAuMXB4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5za2lsbC1jb250YWluZXI6YmVmb3JlLFxyXG4uc2tpbGwtY29udGFpbmVyOjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgei1pbmRleDogMjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnNraWxsLWNvbnRhaW5lcjpiZWZvcmUge1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksICNmZmZmZmYpO1xyXG59XHJcblxyXG4uc2tpbGwtY29udGFpbmVyOjphZnRlciB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAjZmZmZmZmKTtcclxufVxyXG5cclxuLnNraWxsLWNvbnRhaW5lcjpob3ZlciAubG9nb3Mge1xyXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbn1cclxuXHJcbi5sb2dvcyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGFuaW1hdGlvbjogMjBzIHNsaWRlIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuLmxvZ29zIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW46IDAgM3JlbTtcclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgzMCUpO1xyXG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5sb2dvcyBpbWc6aG92ZXIge1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDAlKTtcclxufVxyXG5cclxuLyogV09SSyBTRUNUSU9OICovXHJcbi53b3JrLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogM3JlbSAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ud29yay1jb250YWluZXIgaDEge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLndvcmstY29udGFpbmVyIGgxOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0xMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJblNoYWRvdyB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJblNoYWRvd0hvdmVyIHtcclxuICAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjY2NCk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgZmxleDogMTtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGdhcDogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluU2hhZG93IDFzIGVhc2Utb3V0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluU2hhZG93SG92ZXIgMC4zcyBlYXNlIGZvcndhcmRzO1xyXG59XHJcblxyXG4uY2FyZCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmNhcmQgaDIge1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5jYXJkIHAge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uY2FyZC1saW5rcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmNhcmQgaSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZCBpOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcclxufVxyXG5cclxuLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiA0cmVtIDFyZW07XHJcbiAgZ2FwOiA0cmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1jb250YWluZXIgaDEge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBmbGV4LXNocmluazogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIgaW1nIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLmxpZ2h0Ym94LW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBpbnNldDogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTUpO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4ubGlnaHRib3gtb3ZlcmxheS5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5saWdodGJveC1pbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgbWF4LWhlaWdodDogOTAlO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5saWdodGJveC1jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjBweDtcclxuICByaWdodDogMzBweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxpZ2h0Ym94LXByZXYsXHJcbi5saWdodGJveC1uZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlnaHRib3gtcHJldiB7XHJcbiAgbGVmdDogMzBweDtcclxufVxyXG5cclxuLmxpZ2h0Ym94LW5leHQge1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5jb250YWN0LWNvbnRlbnQgaSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWl0ZW0gc3BhbiB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLyogRk9PVEVSIC0gTmV3IGFkZGl0aW9uIHRvIGZpeCBzcGFjaW5nICovXHJcbi5mb290ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi5mb290ZXItY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uZm9vdGVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzIGEge1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG4vKiBBTklNQVRJT05TICovXHJcbkBrZXlmcmFtZXMgdGl0bGUge1xyXG4gIDAlIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycmVtO1xyXG4gICAgZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZmlsdGVyOiBibHVyKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZGVzY3Ige1xyXG4gIDAlIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcmVtO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcclxuICAgIGZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgZmlsdGVyOiBibHVyKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLyogREVTS1RPUCBPUFRJTUlaQVRJT05TICgxOTIweDEwODAgYW5kIGFib3ZlKSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTgwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuaGVyby1jb250YWluZXIgaDEge1xyXG4gICAgZm9udC1zaXplOiA3cmVtO1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgfVxyXG5cclxuICAuYWJvdXQge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtY29udGVudCBoMSB7XHJcbiAgICBmb250LXNpemU6IDMuMnJlbTtcclxuICB9XHJcblxyXG4gIC5hYm91dC1jb250ZW50IHAge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZSB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGdhcDogM3JlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAyLjVyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNXJlbSAycmVtO1xyXG4gICAgZ2FwOiA2cmVtO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlLWNvbnRhaW5lciBpbWcge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtY29udGVudCB7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1pdGVtIGkge1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKiBUYWJsZXQgTGFuZHNjYXBlICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5hYm91dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGdhcDogMnJlbTtcclxuICB9XHJcblxyXG4gIC5hYm91dC1jb250ZW50IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LWNvbnRlbnQgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC5wcm9maWxlIHtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogVGFibGV0IFBvcnRyYWl0ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZ2FwOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlLWxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLnByaW1hcnktbmF2aWdhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDgwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjk1KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgLyogSW5pdGlhbCBoaWRkZW4gc3RhdGUgKi9cclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpIHNjYWxlKDAuOTgpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcblxyXG4gICAgLyogSW1wcm92ZWQgdHJhbnNpdGlvbiB3aXRoIGN1c3RvbSB0aW1pbmcgZnVuY3Rpb25zICovXHJcbiAgICB0cmFuc2l0aW9uOlxyXG4gICAgICBvcGFjaXR5IDAuNHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxcclxuICAgICAgdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpLFxyXG4gICAgICB2aXNpYmlsaXR5IDAuNHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxcclxuICAgICAgYmFja2Ryb3AtZmlsdGVyIDAuM3MgZWFzZTtcclxuXHJcbiAgICAvKiBQZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gKi9cclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcblxyXG4gICAgLyogRW5zdXJlIGNvbnRlbnQgaXMgcHJvcGVybHkgY29udGFpbmVkICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAvKiBTbW9vdGggZWRnZSBoYW5kbGluZyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XHJcblxyXG4gICAgLyogU3VidGxlIHNoYWRvdyBmb3IgZGVwdGggKi9cclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuXHJcbiAgICAvKiBBZGQgYSBzdWJ0bGUgYW5pbWF0aW9uIGZvciBjaGlsZCBlbGVtZW50cyAqL1xyXG4gICAgJiA+ICoge1xyXG4gICAgICBhbmltYXRpb246IG5hdkl0ZW1GYWRlSW4gMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGZvcndhcmRzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogT3B0aW9uYWw6IEFkZCBzdGFnZ2VyZWQgYW5pbWF0aW9uIGZvciBuYXZpZ2F0aW9uIGl0ZW1zICovXHJcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgPiAqOm50aC1jaGlsZCgxKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMDVzO1xyXG4gIH1cclxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSA+ICo6bnRoLWNoaWxkKDIpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICB9XHJcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgPiAqOm50aC1jaGlsZCgzKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMTVzO1xyXG4gIH1cclxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSA+ICo6bnRoLWNoaWxkKDQpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICB9XHJcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgPiAqOm50aC1jaGlsZCg1KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMjVzO1xyXG4gIH1cclxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSA+ICo6bnRoLWNoaWxkKDYpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICB9XHJcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgPiAqOm50aC1jaGlsZCg3KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMzVzO1xyXG4gIH1cclxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSA+ICo6bnRoLWNoaWxkKDgpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICB9XHJcblxyXG4gIC8qIEtleWZyYW1lcyBmb3IgY2hpbGQgZWxlbWVudHMgYW5pbWF0aW9uICovXHJcbiAgQGtleWZyYW1lcyBuYXZJdGVtRmFkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBPcHRpb25hbDogQWRkIGEgYmFja2Ryb3Agb3ZlcmxheSB3aGVuIG1lbnUgaXMgYWN0aXZlICovXHJcbiAgYm9keS5oYXMtYWN0aXZlLW5hdjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIHotaW5kZXg6IDk4O1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC40cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIFJlc3BvbnNpdmUgYWRqdXN0bWVudHMgKi9cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wcmltYXJ5LW5hdmlnYXRpb24ge1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBFbnN1cmUgc21vb3RoIHRyYW5zaXRpb25zIG9uIGFsbCBkZXZpY2VzICovXHJcbiAgQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcclxuICAgIC5wcmltYXJ5LW5hdmlnYXRpb24sXHJcbiAgICAucHJpbWFyeS1uYXZpZ2F0aW9uICosXHJcbiAgICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSAqIHtcclxuICAgICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBhbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24uYWN0aXZlIC5uYXYtbGlzdCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgLm5hdi1pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcblxyXG4gIC5tZW51LXRvZ2dsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5hYm91dCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LWNvbnRlbnQgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmljb24tY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1pdGVtIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1jb250ZW50IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWxpbmtzIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLyogTW9iaWxlIExhbmRzY2FwZSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5oZXJvLWNvbnRhaW5lciBoMSB7XHJcbiAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICB9XHJcblxyXG4gIC5oZXJvLWNvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmltYWdlLWNvbnRhaW5lciBpbWcge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogTW9iaWxlIFBvcnRyYWl0ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnRpdGxlLWxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuaGVyby1jb250YWluZXIgaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgfVxyXG5cclxuICAuaGVyby1jb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICB9XHJcblxyXG4gIC5hYm91dCB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtY29udGVudCBoMSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5wcm9maWxlIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuaWNvbnMgaSB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICB9XHJcblxyXG4gIC5sb2dvcyBpbWcge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luOiAwIDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5za2lsbC1jb250YWluZXI6YmVmb3JlLFxyXG4gIC5za2lsbC1jb250YWluZXI6OmFmdGVyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtaXRlbSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKiBSZWR1Y2VkIE1vdGlvbiAqL1xyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gICoge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLE1BQU07RUFDTixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLHNDQUFzQztFQUN0QyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFB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cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFib3JldG8mZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVhbnRpY286aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzNjM2QzNztcXHJcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjNjk3NTY1O1xcclxcbiAgLS1hY2NlbnQtY29sb3I6ICNlY2RmY2M7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3I6ICMxODFjMTQ7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXFxcInNhbnMgc2VyaWZcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNTBweCAhaW1wb3J0YW50O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA5cHggMjdweCAwcHggIzAwMDAwMDZjO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtbG9nbyB7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVhbnRpY29cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1sb2dvIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXRvZ2dsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idG4ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1uYXZpZ2F0aW9uIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgbWluLXdpZHRoOiA0MDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMC44cmVtIDEuMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlua1thcmlhLWN1cnJlbnQ9XFxcInBhZ2VcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVSTyBTRUNUSU9OICovXFxyXFxuLmhlcm8tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogNzB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tY29udGFpbmVyIGgxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQWJvcmV0b1xcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDZyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbmltYXRpb246IHRpdGxlIDNzIGVhc2UgMHMgbm9ybWFsIG5vbmU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250YWluZXIgcCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogZGVzY3IgM3MgbGluZWFyIDBzIDEgbm9ybWFsIG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEFCT1VUIFNFQ1RJT04gKi9cXHJcXG4uYWJvdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNy40cHgpO1xcclxcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNy40cHgpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWNvbnRlbnQge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1jb250ZW50IGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtY29udGVudCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWctY29udGFpbmVyIHtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUge1xcclxcbiAgd2lkdGg6IDI4MHB4O1xcclxcbiAgaGVpZ2h0OiAyODBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSUNPTlMgKi9cXHJcXG4uaWNvbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pY29ucyBpIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOlxcclxcbiAgICB0cmFuc2Zvcm0gMC4zcyBlYXNlLFxcclxcbiAgICBjb2xvciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5pY29ucyBpOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTS0lMTCBTRUNUSU9OICovXFxyXFxuLnNraWxsLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwLjFweCk7XFxyXFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMC4xcHgpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGwtY29udGFpbmVyOmJlZm9yZSxcXHJcXG4uc2tpbGwtY29udGFpbmVyOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxsLWNvbnRhaW5lcjpiZWZvcmUge1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCAjZmZmZmZmKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxsLWNvbnRhaW5lcjo6YWZ0ZXIge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksICNmZmZmZmYpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGwtY29udGFpbmVyOmhvdmVyIC5sb2dvcyB7XFxyXFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nb3Mge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYW5pbWF0aW9uOiAyMHMgc2xpZGUgaW5maW5pdGUgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nb3MgaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG1hcmdpbjogMCAzcmVtO1xcclxcbiAgZmlsdGVyOiBncmF5c2NhbGUoMzAlKTtcXHJcXG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5sb2dvcyBpbWc6aG92ZXIge1xcclxcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBXT1JLIFNFQ1RJT04gKi9cXHJcXG4ud29yay1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzcmVtIDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWNvbnRhaW5lciBoMSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstY29udGFpbmVyIGgxOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAtMTBweDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDE0MDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJblNoYWRvdyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJblNoYWRvd0hvdmVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC42NjQpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWF4LXdpZHRoOiAzNTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW5TaGFkb3cgMXMgZWFzZS1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW5TaGFkb3dIb3ZlciAwLjNzIGVhc2UgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHAge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWxpbmtzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgaTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBwYWRkaW5nOiA0cmVtIDFyZW07XFxyXFxuICBnYXA6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWNvbnRhaW5lciBoMSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jb250YWluZXIge1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpZ2h0Ym94LW92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTUpO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxufVxcclxcblxcclxcbi5saWdodGJveC1vdmVybGF5LmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlnaHRib3gtaW1hZ2Uge1xcclxcbiAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxyXFxuICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlnaHRib3gtY2xvc2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgcmlnaHQ6IDMwcHg7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWdodGJveC1wcmV2LFxcclxcbi5saWdodGJveC1uZXh0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpZ2h0Ym94LXByZXYge1xcclxcbiAgbGVmdDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpZ2h0Ym94LW5leHQge1xcclxcbiAgcmlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGVudCBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaXRlbSBzcGFuIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIEZPT1RFUiAtIE5ldyBhZGRpdGlvbiB0byBmaXggc3BhY2luZyAqL1xcclxcbi5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250ZW50IHtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxpbmtzIGEge1xcclxcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGlua3MgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQU5JTUFUSU9OUyAqL1xcclxcbkBrZXlmcmFtZXMgdGl0bGUge1xcclxcbiAgMCUge1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnJlbTtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDEycHgpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIGZpbHRlcjogYmx1cigwKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBkZXNjciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcmVtO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogREVTS1RPUCBPUFRJTUlaQVRJT05TICgxOTIweDEwODAgYW5kIGFib3ZlKSAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTgwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZXJvLWNvbnRhaW5lciBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogN3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZXJvLWNvbnRhaW5lciBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBwYWRkaW5nOiA0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LWNvbnRlbnQgaDEge1xcclxcbiAgICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC1jb250ZW50IHAge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9maWxlIHtcXHJcXG4gICAgd2lkdGg6IDMyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtY29udGFpbmVyIHtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQge1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiA1cmVtIDJyZW07XFxyXFxuICAgIGdhcDogNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWFnZS1jb250YWluZXIgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtY29udGVudCB7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtaXRlbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtaXRlbSBpIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIFRhYmxldCBMYW5kc2NhcGUgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gIC5hYm91dCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC1jb250ZW50IGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtY29udGVudCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvZmlsZSB7XFxyXFxuICAgIHdpZHRoOiAyNDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZCB7XFxyXFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIFRhYmxldCBQb3J0cmFpdCAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBnYXA6IDEwMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlLWxvZ28ge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDgwcHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTUpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgIC8qIEluaXRpYWwgaGlkZGVuIHN0YXRlICovXFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCkgc2NhbGUoMC45OCk7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgIC8qIEltcHJvdmVkIHRyYW5zaXRpb24gd2l0aCBjdXN0b20gdGltaW5nIGZ1bmN0aW9ucyAqL1xcclxcbiAgICB0cmFuc2l0aW9uOlxcclxcbiAgICAgIG9wYWNpdHkgMC40cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxcclxcbiAgICAgIHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSxcXHJcXG4gICAgICB2aXNpYmlsaXR5IDAuNHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxcXHJcXG4gICAgICBiYWNrZHJvcC1maWx0ZXIgMC4zcyBlYXNlO1xcclxcblxcclxcbiAgICAvKiBQZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gKi9cXHJcXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcXHJcXG5cXHJcXG4gICAgLyogRW5zdXJlIGNvbnRlbnQgaXMgcHJvcGVybHkgY29udGFpbmVkICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAvKiBTbW9vdGggZWRnZSBoYW5kbGluZyAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcXHJcXG5cXHJcXG4gICAgLyogU3VidGxlIHNoYWRvdyBmb3IgZGVwdGggKi9cXHJcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuXFxyXFxuICAgIC8qIEFkZCBhIHN1YnRsZSBhbmltYXRpb24gZm9yIGNoaWxkIGVsZW1lbnRzICovXFxyXFxuICAgICYgPiAqIHtcXHJcXG4gICAgICBhbmltYXRpb246IG5hdkl0ZW1GYWRlSW4gMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGZvcndhcmRzO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBPcHRpb25hbDogQWRkIHN0YWdnZXJlZCBhbmltYXRpb24gZm9yIG5hdmlnYXRpb24gaXRlbXMgKi9cXHJcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24uYWN0aXZlID4gKjpudGgtY2hpbGQoMSkge1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMDVzO1xcclxcbiAgfVxcclxcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgPiAqOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcXHJcXG4gIH1cXHJcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24uYWN0aXZlID4gKjpudGgtY2hpbGQoMykge1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMTVzO1xcclxcbiAgfVxcclxcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgPiAqOm50aC1jaGlsZCg0KSB7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcXHJcXG4gIH1cXHJcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24uYWN0aXZlID4gKjpudGgtY2hpbGQoNSkge1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMjVzO1xcclxcbiAgfVxcclxcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgPiAqOm50aC1jaGlsZCg2KSB7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcXHJcXG4gIH1cXHJcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24uYWN0aXZlID4gKjpudGgtY2hpbGQoNykge1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMzVzO1xcclxcbiAgfVxcclxcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgPiAqOm50aC1jaGlsZCg4KSB7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIEtleWZyYW1lcyBmb3IgY2hpbGQgZWxlbWVudHMgYW5pbWF0aW9uICovXFxyXFxuICBAa2V5ZnJhbWVzIG5hdkl0ZW1GYWRlSW4ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBPcHRpb25hbDogQWRkIGEgYmFja2Ryb3Agb3ZlcmxheSB3aGVuIG1lbnUgaXMgYWN0aXZlICovXFxyXFxuICBib2R5Lmhhcy1hY3RpdmUtbmF2OjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICAgIHotaW5kZXg6IDk4O1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGVhc2UgZm9yd2FyZHM7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBSZXNwb25zaXZlIGFkanVzdG1lbnRzICovXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLnByaW1hcnktbmF2aWdhdGlvbiB7XFxyXFxuICAgICAgdG9wOiA2MHB4O1xcclxcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIEVuc3VyZSBzbW9vdGggdHJhbnNpdGlvbnMgb24gYWxsIGRldmljZXMgKi9cXHJcXG4gIEBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxyXFxuICAgIC5wcmltYXJ5LW5hdmlnYXRpb24sXFxyXFxuICAgIC5wcmltYXJ5LW5hdmlnYXRpb24gKixcXHJcXG4gICAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgKiB7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICAgIGFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uLmFjdGl2ZSAubmF2LWxpc3Qge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByaW1hcnktbmF2aWdhdGlvbi5hY3RpdmUgLm5hdi1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24uYWN0aXZlIC5uYXYtbGluayB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtdG9nZ2xlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtY29udGVudCBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pY29uLWNvbnRhaW5lciB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1pdGVtIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9vdGVyLWNvbnRlbnQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9vdGVyLWxpbmtzIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIE1vYmlsZSBMYW5kc2NhcGUgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmhlcm8tY29udGFpbmVyIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVyby1jb250YWluZXIgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW1hZ2UtY29udGFpbmVyIGltZyB7XFxyXFxuICAgIHdpZHRoOiAyODBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTW9iaWxlIFBvcnRyYWl0ICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gIC50aXRsZS1sb2dvIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVyby1jb250YWluZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZXJvLWNvbnRhaW5lciBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dCB7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC1jb250ZW50IGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LWNvbnRlbnQgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9maWxlIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljb25zIGkge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvcyBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIG1hcmdpbjogMCAxLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2tpbGwtY29udGFpbmVyOmJlZm9yZSxcXHJcXG4gIC5za2lsbC1jb250YWluZXI6OmFmdGVyIHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1pdGVtIGkge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXIge1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIFJlZHVjZWQgTW90aW9uICovXFxyXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXHJcXG4gICoge1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwcm9maWxlIGZyb20gXCIuLi9pbWFnZXMvcHJvZmlsZS5qcGdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IHtcclxuICBzdGF0aWMgbG9hZEFib3V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImFib3V0XCI7XHJcbiAgICBjb250YWluZXIuaWQgPSBcImFib3V0XCI7XHJcblxyXG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGltZ0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImFib3V0LWltZy1jb250YWluZXJcIjtcclxuXHJcbiAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5sb2FkUHJvZmlsZSgpKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uKCkpO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlc2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NOYW1lID0gXCJhYm91dC1jb250YWluZXJcIjtcclxuXHJcbiAgICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhYm91dENvbnRhaW5lci5jbGFzc05hbWUgPSBcImFib3V0LWNvbnRlbnRcIjtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwiYWJvdXQtdGl0bGVcIjtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiQWJvdXQgTWVcIjtcclxuXHJcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBhcmFncmFwaC5jbGFzc05hbWUgPSBcImFib3V0LXBhcmFncmFwaFwiO1xyXG4gICAgcGFyYWdyYXBoLmlubmVySFRNTCA9XHJcbiAgICAgIFwiSSBhbSBhIHNvZnR3YXJlIGVuZ2luZWVyIHdpdGggYSBwYXNzaW9uIGZvciBsZWFybmluZyBuZXcgdGVjaG5vbG9naWVzIGFuZCBkZXZlbG9waW5nIG5ldyBwcm9qZWN0cy4gSSBoYXZlIGEgc3Ryb25nIGJhY2tncm91bmQgaW4gd2ViIGRldmVsb3BtZW50IGFuZCBJIGhhdmUgYSBzdHJvbmcgaW50ZXJlc3QgaW4gbGVhcm5pbmcgbmV3IHRlY2hub2xvZ2llcyBhbmQgZGV2ZWxvcGluZyBuZXcgcHJvamVjdHMuXCI7XHJcblxyXG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaWNvbnMoKSk7XHJcblxyXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uQ29udGFpbmVyO1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBpY29ucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWNvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcImljb24tY29udGFpbmVyXCI7XHJcblxyXG4gICAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWNvbnMuY2xhc3NOYW1lID0gXCJpY29uc1wiO1xyXG4gICAgaWNvbnMuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaEFsbGVuQlwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWdpdGh1YlwiPjwvaT48L2E+XHJcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pvc2h1YS1hbGxlbi1iYXRheW9sYS02YjNiNDYyN2IvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtbGlua2VkaW5cIj48L2k+PC9hPmA7XHJcblxyXG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29ucyk7XHJcblxyXG4gICAgcmV0dXJuIGljb25Db250YWluZXI7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGxvYWRQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvZmlsZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcHJvZmlsZUltZy5zcmMgPSBwcm9maWxlO1xyXG4gICAgcHJvZmlsZUltZy5hbHQgPSBcInNlbGYgcG9ydHJhaXRcIjtcclxuICAgIHByb2ZpbGVJbWcuY2xhc3NOYW1lID0gXCJwcm9maWxlXCI7XHJcbiAgICByZXR1cm4gcHJvZmlsZUltZztcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBzdG9ja1Bob3RvIGZyb20gXCIuLi9pbWFnZXMvd29yay1zdG9ja3Bob3RvLmpwZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdCB7XHJcbiAgc3RhdGljIGNvcHlUb0NsaXBib2FyZCA9ICh0ZXh0KSA9PiB7XHJcbiAgICBpZiAoIW5hdmlnYXRvci5jbGlwYm9hcmQpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkNsaXBib2FyZCBBUEkgbm90IHN1cHBvcnRlZFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmRcclxuICAgICAgLndyaXRlVGV4dCh0ZXh0KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb3BpZWQ6XCIsIHRleHQpO1xyXG4gICAgICAgIC8vIE9wdGlvbmFsOiBzaG93IHRlbXBvcmFyeSBVSSBmZWVkYmFjayBoZXJlXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjb3B5OlwiLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgbG9hZENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29udGFjdC1jb250YWluZXJcIjtcclxuICAgIGNvbnRhaW5lci5pZCA9IFwiY29udGFjdFwiO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudC5jbGFzc05hbWUgPSBcImNvbnRhY3QtY29udGVudFwiO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmltYWdlKCkpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy50aXRsZSgpKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbWFpbCgpKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5waG9uZSgpKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5zb2NNZWQoKSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgdGl0bGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwiY29udGFjdC10aXRsZVwiO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJDb250YWN0IE1lXCI7XHJcblxyXG4gICAgcmV0dXJuIHRpdGxlO1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBpbWFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJpbWFnZS1jb250YWluZXJcIjtcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWFnZS5jbGFzc05hbWUgPSBcImltYWdlXCI7XHJcbiAgICBpbWFnZS5zcmMgPSBzdG9ja1Bob3RvO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBlbWFpbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJlbWFpbC1jb250YWluZXJcIjtcclxuXHJcbiAgICBjb25zdCBlbWFpbFRleHQgPSBcImJhdGF5b2xham9zaHVhYWxsZW5AZ21haWwuY29tXCI7XHJcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBlbWFpbFRleHQ7XHJcbiAgICBjb250YWluZXIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcblxyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkKGVtYWlsVGV4dCk7XHJcbiAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiQ29waWVkIVwiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBlbWFpbFRleHQ7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgcGhvbmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwicGhvbmUtY29udGFpbmVyXCI7XHJcblxyXG4gICAgY29uc3QgcGhvbmVUZXh0ID0gXCIrNjMgOTI4IDIxNCAzODYxXCI7XHJcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBwaG9uZVRleHQ7XHJcbiAgICBjb250YWluZXIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcblxyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkKHBob25lVGV4dCk7XHJcbiAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiQ29waWVkIVwiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBwaG9uZVRleHQ7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgc29jTWVkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNvY21lZC1jb250YWluZXJcIjtcclxuXHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSm9zaEFsbGVuQlwiPjxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWdpdGh1YlwiPjwvaT48L2E+XHJcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pvc2h1YS1hbGxlbi1iYXRheW9sYS02YjNiNDYyN2IvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtbGlua2VkaW5cIj48L2k+PC9hPmA7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVybyB7XHJcbiAgc3RhdGljIGxvYWRIZXJvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImhlcm8tY29udGFpbmVyXCI7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS5jbGFzc05hbWUgPSBcImhlcm8tdGl0bGVcIjtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiTXkgbmFtZSBpcyBKb3NoIVwiO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImhlcm8tZGVzY3JpcHRpb25cIjtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiSSBhbSBhIHNvZnR3YXJlIGVuZ2luZWVyIGluIHRoZSBQaGlsaXBwaW5lc1wiO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTa2lsbCB7XHJcbiAgc3RhdGljIGxvYWRTa2lsbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJza2lsbC1jb250YWluZXJcIjtcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhyZWUgaWRlbnRpY2FsIGxvZ29zIGNvbnRhaW5lcnNcclxuICAgIGNvbnN0IGxvZ29zMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2dvczEuY2xhc3NOYW1lID0gXCJsb2dvc1wiO1xyXG4gICAgbG9nb3MxLmlubmVySFRNTCA9IGBcclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvaHRtbDUvaHRtbDUtb3JpZ2luYWwtd29yZG1hcmsuc3ZnXCIgLz5cclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvY3NzMy9jc3MzLW9yaWdpbmFsLXdvcmRtYXJrLnN2Z1wiIC8+XHJcbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2phdmFzY3JpcHQvamF2YXNjcmlwdC1vcmlnaW5hbC5zdmdcIiAvPlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9mbGFzay9mbGFzay1vcmlnaW5hbC13b3JkbWFyay5zdmdcIiAvPlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLXdvcmRtYXJrLnN2Z1wiIC8+XHJcbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3B5dGhvbi9weXRob24tb3JpZ2luYWwuc3ZnXCIgLz5cclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvdWJ1bnR1L3VidW50dS1vcmlnaW5hbC13b3JkbWFyay5zdmdcIiAvPlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9yZWFjdC9yZWFjdC1vcmlnaW5hbC13b3JkbWFyay5zdmdcIiAvPlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9ub2RlanMvbm9kZWpzLW9yaWdpbmFsLXdvcmRtYXJrLnN2Z1wiIC8+XHJcbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2V4cHJlc3MvZXhwcmVzcy1vcmlnaW5hbC13b3JkbWFyay5zdmdcIiAvPlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9tb25nb2RiL21vbmdvZGItb3JpZ2luYWwtd29yZG1hcmsuc3ZnXCIgLz5cclxuICAgIGA7XHJcbiAgICBjb25zdCBsb2dvczIgPSBsb2dvczEuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgY29uc3QgbG9nb3MzID0gbG9nb3MxLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICAvLyBBcHBlbmQgdGhlIGxvZ29zIGNvbnRhaW5lcnMgdG8gdGhlIG1haW4gY29udGFpbmVyXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9nb3MxKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvczIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29zMyk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4uL3N0cnVjdHVyZS9oZWFkZXIuanNcIjtcclxuaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL3N0cnVjdHVyZS9oYW5kbGVycy5qc1wiO1xyXG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vcGFnZXMvaGVyby5qc1wiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL3BhZ2VzL2Fib3V0LmpzXCI7XHJcbmltcG9ydCBTa2lsbCBmcm9tIFwiLi4vcGFnZXMvc2tpbGxzLmpzXCI7XHJcbmltcG9ydCBXb3JrIGZyb20gXCIuLi9wYWdlcy93b3JrLmpzXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9wYWdlcy9jb250YWN0LmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJwYWdlIHtcclxuICBzdGF0aWMgbG9hZFdlYiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIubG9hZEhlYWRlcigpKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChIZXJvLmxvYWRIZXJvKCkpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKEFib3V0LmxvYWRBYm91dCgpKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChTa2lsbC5sb2FkU2tpbGwoKSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoV29yay5sb2FkV29yaygpKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChDb250YWN0LmxvYWRDb250YWN0KCkpO1xyXG5cclxuICAgIEhhbmRsZXIubG9hZEhhbmRsZXIoKTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB3ZWF0aGVySW1nIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci1hcHAucG5nXCI7XHJcbmltcG9ydCB0b2RvSW1nIGZyb20gXCIuLi9pbWFnZXMvdG9kby1hcHAucG5nXCI7XHJcbmltcG9ydCB2YWxlbnRpbmVJbWcgZnJvbSBcIi4uL2ltYWdlcy92YWxlbnRpbmUtYXBwLnBuZ1wiO1xyXG5pbXBvcnQgd21tRWRpdCBmcm9tIFwiLi4vaW1hZ2VzL3dtbS93bW1FZGl0LnBuZ1wiO1xyXG5pbXBvcnQgd21tSG9tZSBmcm9tIFwiLi4vaW1hZ2VzL3dtbS93bW1Ib21lU2lkZWJhci5wbmdcIjtcclxuaW1wb3J0IHdtbU90aGVyIGZyb20gXCIuLi9pbWFnZXMvd21tL3dtbU90aGVyLnBuZ1wiO1xyXG5pbXBvcnQgd21tRmlsdGVyIGZyb20gXCIuLi9pbWFnZXMvd21tL3dtbUZpbHRlci5wbmdcIjtcclxuaW1wb3J0IHdtbVZpZXcgZnJvbSBcIi4uL2ltYWdlcy93bW0vd21tVmlldy5wbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmsge1xyXG4gIHN0YXRpYyB3b3JrSXRlbXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlN1YnNjcmlwdGlvbiBNYW5hZ2VyXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQSBNRVJOIHN0YWNr4oCTYmFzZWQgaW50ZXJuYWwgbWFuYWdlbWVudCBzeXN0ZW0gYnVpbHQgZm9yIGEgbWlzc2lvbmFyeSBvcmdhbml6YXRpb24gdG8gc3RyZWFtbGluZSBtYWdhemluZSBzdWJzY3JpcHRpb24gdHJhY2tpbmcuIEl0IGVuYWJsZXMgZWZmaWNpZW50IHZpZXdpbmcsIHVwZGF0aW5nLCBhbmQgZmlsdGVyaW5nIG9mIHN1YnNjcmliZXIgZGF0YSB0aHJvdWdoIGEgY2xlYW4gYW5kIGludHVpdGl2ZSBpbnRlcmZhY2UuXCIsXHJcbiAgICAgIGltYWdlczogW3dtbUhvbWUsIHdtbUVkaXQsIHdtbU90aGVyLCB3bW1GaWx0ZXIsIHdtbVZpZXddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiV2VhdGhlciBBcHBcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJUaGlzIGFwcCBhbGxvd3MgeW91IHRvIGNoZWNrIGN1cnJlbnQgd2VhdGhlciBjb25kaXRpb25zIGZvciB5b3VyIGxvY2F0aW9uXCIsXHJcbiAgICAgIGltYWdlczogW3dlYXRoZXJJbWddLFxyXG4gICAgICBnaXRodWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NoQWxsZW5CL3dlYXRoZXItYXBwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJUb2RvIEFwcFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIlRoaXMgYXBwIGhlbHBzIHlvdSBrZWVwIHRyYWNrIG9mIHlvdXIgdGFza3MgYW5kIHN0YXkgb3JnYW5pemVkIVwiLFxyXG4gICAgICBpbWFnZXM6IFt0b2RvSW1nXSxcclxuICAgICAgZ2l0aHViTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vSm9zaEFsbGVuQi90b2RvLWFwcFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVmFsZW50aW5lIEFwcFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIlRoaXMgYXBwIGhlbHBzIHlvdSBjZWxlYnJhdGUgVmFsZW50aW5lJ3MgRGF5IHdpdGggeW91ciBsb3ZlZCBvbmVzIVwiLFxyXG4gICAgICBpbWFnZXM6IFt2YWxlbnRpbmVJbWddLFxyXG4gICAgICBnaXRodWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NoQWxsZW5CL3ZhbGVudGluZS1hcHBcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgc3RhdGljIGxvYWRXb3JrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcIndvcmstY29udGFpbmVyXCI7XHJcbiAgICBjb250YWluZXIuaWQgPSBcIndvcmtcIjtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwid29yay10aXRsZVwiO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJNeSBXb3JrXCI7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZENvbnRhaW5lci5jbGFzc05hbWUgPSBcImNhcmQtY29udGFpbmVyXCI7XHJcblxyXG4gICAgdGhpcy53b3JrSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXJkID0gdGhpcy5nZW5lcmF0ZUNhcmQoXHJcbiAgICAgICAgaXRlbS50aXRsZSxcclxuICAgICAgICBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGl0ZW0uaW1hZ2VzLFxyXG4gICAgICAgIGl0ZW0uZ2l0aHViTGluayxcclxuICAgICAgKTtcclxuICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGFkZFdvcmtJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMud29ya0l0ZW1zLnB1c2goaXRlbSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVtb3ZlV29ya0l0ZW0odGl0bGUpIHtcclxuICAgIHRoaXMud29ya0l0ZW1zID0gdGhpcy53b3JrSXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnRpdGxlICE9PSB0aXRsZSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdXBkYXRlV29ya0l0ZW0oaW5kZXgsIG5ld0l0ZW0pIHtcclxuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy53b3JrSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMud29ya0l0ZW1zW2luZGV4XSA9IG5ld0l0ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2VuZXJhdGVDYXJkID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2VzLCBnaXRodWJMaW5rKSA9PiB7XHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmQuY2xhc3NOYW1lID0gXCJjYXJkXCI7XHJcblxyXG4gICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgY29uc3QgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNhcmRDb250ZW50LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3QgY2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGNhcmRJbWFnZS5zcmMgPSBpbWFnZXNbMF07XHJcbiAgICBjYXJkSW1hZ2UuYWx0ID0gdGl0bGU7XHJcbiAgICBjYXJkSW1hZ2Uuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcblxyXG4gICAgaWYgKCF0aGlzLmxpZ2h0Ym94T3Blbikge1xyXG4gICAgICB0aGlzLmxpZ2h0Ym94T3BlbiA9IHRoaXMuY3JlYXRlTGlnaHRib3goKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5saWdodGJveE9wZW4oaW1hZ2VzLCAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEltYWdlKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xyXG5cclxuICAgIGlmIChnaXRodWJMaW5rKSB7XHJcbiAgICAgIGNvbnN0IGdpdGh1YkxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIGdpdGh1YkxpbmtFbGVtZW50LmhyZWYgPSBnaXRodWJMaW5rO1xyXG4gICAgICBnaXRodWJMaW5rRWxlbWVudC50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgICBnaXRodWJMaW5rRWxlbWVudC5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcclxuXHJcbiAgICAgIGNvbnN0IGdpdGh1YkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBnaXRodWJMb2dvLmNsYXNzTmFtZSA9IFwiZ2l0aHViLWxvZ29cIjtcclxuICAgICAgZ2l0aHViTG9nby5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZ2l0aHViXCI+PC9pPmA7XHJcblxyXG4gICAgICBnaXRodWJMaW5rRWxlbWVudC5hcHBlbmRDaGlsZChnaXRodWJMb2dvKTtcclxuICAgICAgY2FyZC5hcHBlbmRDaGlsZChnaXRodWJMaW5rRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGNyZWF0ZUxpZ2h0Ym94KCkge1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvdmVybGF5LmNsYXNzTmFtZSA9IFwibGlnaHRib3gtb3ZlcmxheVwiO1xyXG4gICAgb3ZlcmxheS5pbm5lckhUTUwgPSBgXHJcbiAgICA8c3BhbiBjbGFzcz1cImxpZ2h0Ym94LWNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJsaWdodGJveC1wcmV2XCI+JiMxMDA5NDs8L2J1dHRvbj5cclxuICAgIDxpbWcgY2xhc3M9XCJsaWdodGJveC1pbWFnZVwiIC8+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwibGlnaHRib3gtbmV4dFwiPiYjMTAwOTU7PC9idXR0b24+XHJcbiAgYDtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG5cclxuICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoXCIubGlnaHRib3gtaW1hZ2VcIik7XHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcihcIi5saWdodGJveC1jbG9zZVwiKTtcclxuICAgIGNvbnN0IHByZXZCdG4gPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoXCIubGlnaHRib3gtcHJldlwiKTtcclxuICAgIGNvbnN0IG5leHRCdG4gPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoXCIubGlnaHRib3gtbmV4dFwiKTtcclxuXHJcbiAgICBsZXQgY3VycmVudEltYWdlcyA9IFtdO1xyXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcblxyXG4gICAgY29uc3Qgc2hvd0ltYWdlID0gKCkgPT4ge1xyXG4gICAgICBpbWdFbGVtZW50LnNyYyA9IGN1cnJlbnRJbWFnZXNbY3VycmVudEluZGV4XTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb3BlbiA9IChpbWFnZXMsIGluZGV4KSA9PiB7XHJcbiAgICAgIGN1cnJlbnRJbWFnZXMgPSBpbWFnZXM7XHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4gICAgICBzaG93SW1hZ2UoKTtcclxuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHJcbiAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xyXG4gICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSBjdXJyZW50SW1hZ2VzLmxlbmd0aDtcclxuICAgICAgc2hvd0ltYWdlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHByZXYgPSAoKSA9PiB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCA9XHJcbiAgICAgICAgKGN1cnJlbnRJbmRleCAtIDEgKyBjdXJyZW50SW1hZ2VzLmxlbmd0aCkgJSBjdXJyZW50SW1hZ2VzLmxlbmd0aDtcclxuICAgICAgc2hvd0ltYWdlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XHJcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIGNsb3NlKCk7XHJcbiAgICB9KTtcclxuICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5leHQpO1xyXG4gICAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJldik7XHJcblxyXG4gICAgcmV0dXJuIG9wZW47XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRsZXIge1xyXG4gIHN0YXRpYyBsb2FkSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHRoaXMubmF2aWdhdGlvbkhhbmRsZXIoKTtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgbmF2aWdhdGlvbkhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdG9nZ2xlXCIpO1xyXG4gICAgICBuYXZUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWNvbnRhaW5lclwiKTtcclxuICAgICAgICBpZiAobmF2SXRlbXMpIHtcclxuICAgICAgICAgIG5hdkl0ZW1zLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtcIik7XHJcblxyXG4gICAgbmF2TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBuYXZMaW5rcy5mb3JFYWNoKChuYXZMaW5rKSA9PiB7XHJcbiAgICAgICAgICBuYXZMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldElkKTtcclxuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xyXG4gICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcclxuICAgICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IGhlYWRlciA/IGhlYWRlci5vZmZzZXRIZWlnaHQgOiAwO1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudFRvcCA9XHJcbiAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgdG9wOiBlbGVtZW50VG9wIC0gaGVhZGVySGVpZ2h0LFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XHJcbiAgc3RhdGljIGxvYWRIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXJDb250YWluZXIuY2xhc3NOYW1lID0gXCJoZWFkZXItY29udGFpbmVyXCI7XHJcblxyXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29udGVudC1jb250YWluZXJcIjtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDEwMCkge1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWNvbnRhaW5lci0tc3RpY2t5XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLWNvbnRhaW5lci0tc3RpY2t5XCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IChsb2dvTmFtZSkgPT4ge1xyXG4gICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgaDEuY2xhc3NOYW1lID0gXCJ0aXRsZS1sb2dvXCI7XHJcbiAgICAgIGgxLnRleHRDb250ZW50ID0gbG9nb05hbWU7XHJcbiAgICAgIHJldHVybiBoMTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gbWVudVRvZ2dsZSBub3cgdGFrZXMgbmF2IGFzIGFyZ3VtZW50IGFuZCB0b2dnbGVzICdhY3RpdmUnIGNsYXNzXHJcbiAgICBjb25zdCBtZW51VG9nZ2xlID0gKG5hdikgPT4ge1xyXG4gICAgICBjb25zdCB0b2dnbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0b2dnbGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJtZW51LXRvZ2dsZVwiO1xyXG4gICAgICB0b2dnbGVDb250YWluZXIuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtYmFyc1wiPjwvaT5gO1xyXG4gICAgICB0b2dnbGVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0b2dnbGVDb250YWluZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU5hdmlnYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICAgIG5hdi5jbGFzc05hbWUgPSBcInByaW1hcnktbmF2aWdhdGlvblwiO1xyXG4gICAgICBuYXYuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIk1haW4gbmF2aWdhdGlvblwiKTtcclxuXHJcbiAgICAgIC8vIFVzZSBtYXRjaE1lZGlhIGZvciBiZXR0ZXIgcmVzcG9uc2l2ZSBoYW5kbGluZ1xyXG4gICAgICBjb25zdCBtb2JpbGVNZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA4ODBweClcIik7XHJcbiAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBtb2JpbGVNZWRpYVF1ZXJ5Lm1hdGNoZXMpO1xyXG5cclxuICAgICAgLy8gT3B0aW9uYWw6IExpc3RlbiBmb3IgcmVzaXplIGV2ZW50cyB0byB1cGRhdGUgYXJpYS1oaWRkZW5cclxuICAgICAgbW9iaWxlTWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIGUubWF0Y2hlcyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgbmF2TGlzdC5jbGFzc05hbWUgPSBcIm5hdi1saXN0XCI7XHJcblxyXG4gICAgICBjb25zdCBuYXZJdGVtcyA9IFtcclxuICAgICAgICB7IGxhYmVsOiBcIkFib3V0XCIsIGhyZWY6IFwiI2Fib3V0XCIgfSxcclxuICAgICAgICB7IGxhYmVsOiBcIldvcmtcIiwgaHJlZjogXCIjd29ya1wiIH0sXHJcbiAgICAgICAgeyBsYWJlbDogXCJDb250YWN0XCIsIGhyZWY6IFwiI2NvbnRhY3RcIiB9LFxyXG4gICAgICBdO1xyXG5cclxuICAgICAgbmF2SXRlbXMuZm9yRWFjaCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gXCJuYXYtaXRlbVwiO1xyXG5cclxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcclxuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gbGFiZWw7XHJcbiAgICAgICAgbGluay5jbGFzc05hbWUgPSBcIm5hdi1saW5rXCI7XHJcblxyXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG5hdi5hcHBlbmRDaGlsZChuYXZMaXN0KTtcclxuICAgICAgcmV0dXJuIG5hdjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2ID0gY3JlYXRlTmF2aWdhdGlvbigpO1xyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZShcIjwvSkI+XCIpKTtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRvZ2dsZShuYXYpKTtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcclxuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbiAgfTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFdlYnBhZ2UgZnJvbSBcIi4vcGFnZXMvd2Vic2l0ZS5qc1wiO1xyXG5cclxuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgV2VicGFnZS5sb2FkV2ViKCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=