var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var main = /* @__PURE__ */ (() => '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");\n@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");\n/*-----------------------------------*\\\n  #RESET\n\\*-----------------------------------*/\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\na,\nimg,\nspan,\ninput,\nbutton,\nstrong,\nion-icon {\n  display: block;\n}\nimg {\n  height: auto;\n}\ninput,\nbutton {\n  background: none;\n  border: none;\n  font: inherit;\n}\ninput {\n  width: 100%;\n}\nbutton {\n  cursor: pointer;\n}\nion-icon {\n  pointer-events: none;\n}\naddress {\n  font-style: normal;\n}\nhtml {\n  font-family: "Montserrat", sans-serif;\n  font-size: 10px;\n  scroll-behavior: smooth;\n}\nbody {\n  background-color: #fff;\n  color: #225193;\n  font-size: 1.6rem;\n  line-height: 1.6;\n}\n:focus-visible {\n  outline-offset: 4px;\n}\n::-webkit-scrollbar {\n  width: 8px;\n}\n::-webkit-scrollbar-track {\n  background-color: #ffdb00;\n}\n::-webkit-scrollbar-thumb {\n  background-color: #225193;\n  border-radius: 30px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background-color: #479cd5;\n}\n/*-----------------------------------*\\\n  #REUSED STYLE\n\\*-----------------------------------*/\n.bg-dark {\n  background-color: #225193;\n  color: #fff;\n}\n.bg-yellow {\n  background-color: #ffdb00;\n  color: #fff;\n}\n.bg-orange {\n  background-color: rgb(253, 156, 20);\n  color: #fff;\n}\n.has-bg-image {\n  background-repeat: no-repeat;\n  background-position: top left;\n  background-size: cover;\n}\n.has-before,\n.has-after {\n  position: relative;\n  z-index: 1;\n}\n.has-before::before,\n.has-after::after {\n  content: "";\n  position: absolute;\n}\n.h1,\n.h2,\n.h3 {\n  font-family: "Montserrat", sans-serif;\n  line-height: 1.25;\n}\n.h1 {\n  color: #fff;\n  font-size: 3.8rem;\n  font-weight: 900;\n}\n.h2,\n.h3 {\n  color: #252525;\n  font-weight: 800;\n}\n.h2 {\n  font-size: 3rem;\n}\n.h3 {\n  font-size: 2rem;\n}\n.btn {\n  max-width: max-content;\n  font-size: 1.5rem;\n  font-weight: 500;\n  padding: 15px 35px;\n  border-radius: 8px;\n  transition: 0.25s ease;\n}\n.btn-primary {\n  background-color: rgb(253, 156, 20);\n  color: #fff;\n}\n.btn-primary:is(:hover, :focus) {\n  background-color: #479cd5;\n  color: #fff;\n  box-shadow: 0px 4px 11px #479cd5;\n}\n.btn-secondary {\n  background-color: #479cd5;\n  color: #fff;\n}\n.btn-secondary:is(:hover, :focus) {\n  background-color: #225193;\n  color: #fff;\n}\n.btn-danger {\n  background-color: #f26a6a !important;\n  color: #fff;\n}\n.w-100 {\n  width: 100%;\n}\n.w-80 {\n  width: 80%;\n}\n.w-50 {\n  width: 50%;\n}\n.truncate {\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  text-overflow: ellipsis;\n}\n.t-1 {\n  -webkit-line-clamp: 1;\n}\n.t-2 {\n  -webkit-line-clamp: 2;\n}\n.center {\n  margin: 0 auto;\n}\n.circle {\n  position: absolute;\n}\n.circle {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -56%);\n  width: 100%;\n  z-index: -1;\n  animation: rotate360 15s linear infinite;\n}\n@keyframes rotate360 {\n  0% {\n    transform: translate(-50%, -56%) rotate(0);\n  }\n  100% {\n    transform: translate(-50%, -56%) rotate(1turn);\n  }\n}\n.circle-2 {\n  animation-direction: reverse;\n}\n.hero-subtitle,\n.section-subtitle {\n  font-family: "Montserrat", sans-serif;\n  font-weight: 700;\n  max-width: max-content;\n}\n.section-subtitle {\n  background-color: rgb(253, 156, 20);\n  color: #252525;\n  padding: 8px 20px;\n  border-radius: 8px;\n}\n.section-title {\n  margin-block: 18px 35px;\n}\n.text-center {\n  text-align: center;\n}\n.img-holder {\n  aspect-ratio: var(--width)/var(--height);\n  background-color: #efefef;\n  overflow: hidden;\n}\n.img-cover {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.has-scrollbar {\n  display: flex;\n  gap: 25px;\n  overflow-x: auto;\n  padding-block-end: 30px;\n  scroll-snap-type: inline mandatory;\n}\n.scrollbar-item {\n  min-width: 100%;\n  scroll-snap-align: start;\n}\n.has-scrollbar::-webkit-scrollbar {\n  height: 10px;\n}\n.has-scrollbar::-webkit-scrollbar-track,\n.has-scrollbar::-webkit-scrollbar-thumb {\n  border-radius: 50px;\n}\n.has-scrollbar::-webkit-scrollbar-thumb:hover {\n  background-color: rgb(253, 156, 20);\n}\n.has-scrollbar::-webkit-scrollbar-button {\n  width: calc(25% - 25px);\n}\n.overlay {\n  background-color: rgba(39, 23, 0, 0.81);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-position: center center;\n  background-repeat: repeat;\n  z-index: 0;\n}\n/*-----------------------------------*\\\n  #REUSED STYLE\n\\*-----------------------------------*/\n.container {\n  padding-inline: 15px;\n  position: relative;\n}\n.section {\n  padding-block: 80px;\n}\n/*-----------------------------------*\\\n  #BACK TO TOP\n\\*-----------------------------------*/\n.back-top-btn {\n  position: fixed;\n  bottom: 20px;\n  right: 40px;\n  background-color: #225193;\n  color: #fff;\n  font-size: 20px;\n  padding: 11px;\n  border-radius: 50%;\n  border: 2px solid #479cd5;\n  visibility: hidden;\n  opacity: 0;\n  transition: 0.25s ease;\n  z-index: 4;\n}\n.back-top-btn.active {\n  visibility: visible;\n  opacity: 1;\n  transform: translateY(-10px);\n}\n.back-top-btn:hover {\n  background-color: #479cd5;\n  border-color: #ffdb00;\n}\n/*-----------------------------------*\\\n  #ABOUT\n\\*-----------------------------------*/\n.about {\n  overflow: hidden;\n}\n.about.section {\n  padding-top: 120px;\n}\n.about .about-banner {\n  margin-block-end: 50px;\n}\n.about .section-title {\n  color: #225193;\n}\n.about .section-text {\n  margin-block-end: 15px;\n  font-size: 2.5rem;\n  font-weight: 900;\n  color: #225193;\n}\n.about .section-text:not(:last-of-type) {\n  margin-block-end: 15px;\n  font-size: 1.8rem;\n  color: #252525;\n}\n@keyframes moveUp {\n  0%, 30%, 60%, 100% {\n    transform: translateY(0);\n  }\n  20% {\n    transform: translateY(-30px);\n  }\n  40% {\n    transform: translateY(-15px);\n  }\n}\n/*-----------------------------------*\\\n  #HEADER\n\\*-----------------------------------*/\n.header {\n  background-color: #225193;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding-block: 10px;\n  box-shadow: 0 0 20px #225193;\n  z-index: 4;\n}\n.header .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header .container .dropdown-menu .btn {\n  padding: 3px 10px;\n}\n.header .container .logo {\n  color: #479cd5;\n  font-family: "Roboto", sans-serif;\n  font-size: 3.5rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  margin-inline-start: -8px;\n}\n.nav-open-btn {\n  background-color: #479cd5;\n  padding: 20px 15px;\n  border-radius: 8px;\n  transition: 0.25s ease;\n}\n.nav-open-btn:hover {\n  background-color: rgb(253, 156, 20);\n  transition: 0.25s ease;\n}\n.nav-open-btn .line {\n  background-color: #fff;\n  width: 30px;\n  height: 3px;\n}\n.nav-open-btn .line:not(:last-child) {\n  margin-block-end: 6px;\n}\n.nav-open-btn .line:nth-child(2) {\n  width: 25px;\n  margin-inline-start: auto;\n}\n.nav-close-btn {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  background-color: #ffdb00;\n  color: #225193;\n  font-size: 40px;\n  padding: 10px;\n  border-radius: 8px;\n}\n.navbar {\n  background-color: rgb(253, 156, 20);\n  color: #fff;\n  position: fixed;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  place-content: center;\n  visibility: hidden;\n  transition: 0.25s cubic-bezier(0.51, 0.03, 0.64, 0.28);\n}\n.navbar.active {\n  visibility: visible;\n  transform: translateY(-100%);\n  transition: 0.5s cubic-bezier(0.33, 0.85, 0.4, 0.96);\n}\n.navbar-link {\n  font-family: "Roboto", sans-serif;\n  font-size: 2rem;\n  text-align: center;\n  padding-block: 10px;\n  margin-block-end: 20px;\n  transition: 0.25s ease;\n}\n.navbar-link:is(:hover, :focus, .active) {\n  color: #225193;\n}\n/*** Dropdown */\n.dropdown-container {\n  display: none;\n  max-width: 240px;\n}\n.dropdown-container .dropdown-menu {\n  width: 100%;\n  border-radius: 10px;\n  box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.5);\n  margin-top: 17px;\n  position: absolute;\n  right: 5%;\n  top: 100%;\n  display: none;\n  background-color: #fff;\n  z-index: 10;\n}\n.dropdown-container .dropdown-menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 10px;\n  z-index: 10;\n}\n.dropdown-container .dropdown-menu a {\n  text-decoration: none;\n  display: block;\n  color: #252525;\n  font-size: 15px;\n  padding: 16px 20px;\n  font-weight: 600;\n  box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.5);\n  transition: all ease-in-out 0.3s;\n}\n.dropdown-container .dropdown-menu a:hover, .dropdown-container .dropdown-menu a:active, .dropdown-container .dropdown-menu a:focus {\n  background-color: #479cd5;\n  color: #fff;\n}\n.dropdown-container .dropdown-toggle {\n  color: #252525;\n  background-color: #fff;\n  font-size: 1.5rem;\n  padding: 10px;\n  box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.25s ease;\n  display: flex;\n  align-items: center;\n}\n.dropdown-container .dropdown-toggle label {\n  cursor: pointer;\n  width: 100%;\n}\n.dropdown-container .dropdown-toggle:hover, .dropdown-container .dropdown-toggle:active, .dropdown-container .dropdown-toggle:focus {\n  background-color: #479cd5;\n  color: #fff;\n}\n.dropdown-menu,\n.dropdown-toggle {\n  position: relative;\n}\n.dropdown-menu {\n  z-index: 10;\n  position: relative;\n}\n.dropdown-open .dropdown-menu.dropdown-active {\n  display: block;\n  width: 350px;\n  font-size: 1.3rem;\n}\n/***  TABLE CARRITO */\n.table-carrito {\n  width: 100%;\n  background-color: #fff;\n  color: #252525;\n  padding: 10px;\n  border-radius: 10px;\n}\n.table-carrito .item, .table-carrito .div-footer {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0px;\n  border-bottom: 1px solid #479cd5;\n}\n.table-carrito .div-footer {\n  border-bottom: none;\n  margin-top: 15px;\n}\n.table-carrito .title {\n  width: 45%;\n}\n.table-carrito .quantity {\n  width: 10%;\n}\n.table-carrito .actions {\n  width: 20%;\n}\n.table-carrito .total-container {\n  color: #86ca86;\n  font-weight: 600;\n  font-size: 1.5rem;\n}\n.table-carrito .price-container, .table-carrito .total-container {\n  width: 20%;\n  text-align: right;\n  padding-left: 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: baseline;\n}\n.table-carrito .price-container:before, .table-carrito .total-container:before {\n  content: "$";\n}\n.table-carrito .actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: baseline;\n}\n.table-carrito .btnAdd {\n  background-color: #efefef !important;\n  font-weight: 900;\n  margin-right: 5px;\n  color: #86ca86 !important;\n}\n.table-carrito .btnAdd:hover {\n  color: #fff !important;\n  background-color: #86ca86 !important;\n}\n.table-carrito .btnRemove {\n  background-color: #efefef !important;\n  font-weight: 900;\n  color: #f26a6a !important;\n}\n.table-carrito .btnRemove:hover {\n  color: #fff !important;\n  background-color: #f26a6a !important;\n}\n.table-carrito .btn-danger {\n  font-size: 1.3rem;\n}\n/*-----------------------------------*\\\n  #HERO\n\\*-----------------------------------*/\n.hero {\n  color: #ffdb00;\n  text-align: center;\n  padding-block-start: 160px;\n  padding-block-end: 0;\n  overflow: hidden;\n}\n.hero .hero-content {\n  margin-block-end: 90px;\n}\n.hero .hero-content .hero-title {\n  margin-block: 30px 8px;\n}\n.hero .hero-content .hero-subtitle {\n  background-color: #225193;\n  color: #ffdb00;\n  margin-inline: auto;\n  padding: 5px;\n  padding-inline-end: 15px;\n  border-radius: 8px;\n}\n.hero .hero-content .hero-subtitle .strong {\n  display: inline-block;\n  background-color: #ffdb00;\n  color: #f26a6a;\n  padding: 2px 15px;\n  margin-inline-end: 15px;\n  border-radius: 5px;\n}\n.hero .hero-content .btn {\n  margin-inline: auto;\n}\n.hero .hero-content .hero-banner {\n  position: relative;\n}\n/*-----------------------------------*\\\n  #MENU\n\\*-----------------------------------*/\n/* .menu { padding-block-start: calc(var(--section-padding) + 250px; } */\n.menu {\n  position: relative;\n}\n.menu .section-subtitle {\n  margin-inline: auto;\n}\n.menu .section-title {\n  color: #fff;\n}\n.menu .section-note {\n  text-align: center;\n  font-size: 1.5rem;\n  color: #225193;\n}\n.menu ul.menu-ul {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 20px;\n}\n.menu .menu-card {\n  background-color: #fff;\n  border-radius: 10px;\n  height: 100%;\n  overflow: hidden;\n}\n.menu .menu-card .card-banner img {\n  transition: 0.5s ease;\n}\n.menu .menu-card:is(:hover, :focus-within) .card-banner img {\n  transform: scale(1.1);\n}\n.menu .menu-card .card-content {\n  padding: 24px;\n}\n.menu .menu-card .card-content .title-wrapper {\n  display: flex;\n  align-items: center;\n}\n.menu .menu-card .card-content .title-wrapper .card-title {\n  transition: 0.25s ease;\n  font-family: "Montserrat", sans-serif;\n}\n.menu .menu-card .card-content .title-wrapper .card-title:is(:hover, :focus) {\n  color: #ffdb00;\n}\n.menu .menu-card .card-content .card-text {\n  color: #252525;\n  font-size: 1.5rem;\n  margin-block: 16px 12px;\n}\n.menu .menu-card .card-content .product-price {\n  color: rgb(253, 156, 20);\n  font-weight: 800;\n  font-size: 2.5rem;\n}\n.menu .menu-card .card-content .progress-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: "Roboto", sans-serif;\n  color: #252525;\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin-block-end: 8px;\n}\n.menu .menu-card .card-content .progress-wrapper .progress-bg {\n  background-color: rgb(253, 156, 20);\n  border-radius: 50px;\n}\n.menu .menu-card .card-content .progress-bar {\n  background-color: #ffdb00;\n  height: 10px;\n  border-radius: inherit;\n}\n/*-----------------------------------*\\\n  #LOCALIZATION\n\\*-----------------------------------*/\n.section.localization {\n  padding-block: 0px;\n}\n.localization {\n  position: relative;\n}\n.localization .section-map {\n  height: 450px;\n  width: 100%;\n}\n.localization .container {\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: baseline;\n  gap: 35px;\n  padding-top: 30px;\n}\n.localization .container .section-text {\n  background-color: #ffdb00;\n  color: #252525;\n  padding: 8px 20px;\n  border-radius: 8px;\n  margin-top: -100%;\n  padding: 20px;\n}\n.localization .container .section-text .section-title {\n  background: #225193;\n  text-align: left;\n  color: #fff;\n  font-size: 3rem;\n  font-weight: 900;\n  padding: 0px 25px;\n  border-radius: 10px 50px;\n  border: 5px dotted #ffdb00;\n}\n.partners .container {\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: center;\n  gap: 50px;\n  text-align: center;\n}\n.partners .container .partner-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.partners .container .partner-info img {\n  display: inline;\n}\n/*-----------------------------------*\\\n  #FOOTER\n\\*-----------------------------------*/\n.footer {\n  font-size: 1.5rem;\n  position: relative;\n}\n.footer .logo {\n  color: #fff;\n}\n.footer .footer-top {\n  display: flex;\n}\n.footer .footer-top .container {\n  display: grid;\n  gap: 50px;\n}\n.footer .footer-top .container .footer-brand-text {\n  margin-block: 25px;\n}\n.footer .footer-top .container .wrapper {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 20px;\n}\n.footer .footer-top .container .footer-brand-list li:not(:last-child) {\n  margin-block-end: 15px;\n}\n.footer .footer-top .container .footer-list > li:not(:first-child) {\n  margin-block-start: 12px;\n}\n.footer .footer-top .container .footer-list-title {\n  font-size: 2rem;\n  font-weight: 800;\n  margin-block-end: 28px;\n}\n.footer .footer-top .container .footer-list-title::before {\n  bottom: 0;\n  width: 70px;\n  height: 1px;\n  background-color: rgb(253, 156, 20);\n}\n.footer .footer-top .container .footer-brand-title,\n.footer .footer-top .container .footer-list-title {\n  color: #fff;\n  font-family: "Roboto", sans-serif;\n}\n.footer .footer-bottom {\n  background-color: rgb(253, 156, 20);\n  color: #fff;\n  text-align: center;\n  padding-block: 15px;\n  position: sticky;\n}\n.footer .footer-bottom .footer-bottom-list {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin-block-start: 10px;\n}\n.footer .footer-bottom .footer-bottom-link {\n  padding-inline-start: 20px;\n  transition: 0.25s ease;\n}\n.footer .footer-bottom .footer-bottom-link::before {\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  width: 10px;\n  height: 10px;\n  background-color: #ffdb00;\n  border-radius: 50%;\n}\n.footer .footer-bottom .footer-bottom-link:is(:hover, :focus) {\n  color: #ffdb00;\n}\n.footer-link {\n  transition: 0.25s ease;\n}\n.footer-link:not(.address):is(:hover, :focus) {\n  color: #ffdb00;\n}\n.footer-list-item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 20px;\n}\n.footer-list-item .icon {\n  background-color: #225193;\n  color: #fff;\n  font-size: 24px;\n  padding: 8px;\n  border-radius: 50px;\n}\n.footer-form {\n  position: relative;\n  margin-block-end: 30px;\n}\n.footer-form .input-field {\n  background-color: #fff;\n  color: #252525;\n  padding-block: 18px;\n  padding-inline: 30px 80px;\n  border-radius: 10px;\n}\n.footer-form .btn {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  bottom: 5px;\n  padding: 0;\n  font-size: 26px;\n  padding-inline: 12px;\n}\n.footer-form .btn-primary:is(:hover, :focus) {\n  background-color: #ffdb00;\n  color: #fff;\n  box-shadow: none;\n}\n.social-list {\n  display: flex;\n  gap: 15px;\n}\n.social-list .social-link {\n  background-color: #225193;\n  color: #fff;\n  padding: 13px;\n  border-radius: 50%;\n  transition: 0.25s ease;\n}\n.social-list .social-link:is(:hover, :focus) {\n  background-color: #479cd5;\n}\n/*-----------------------------------*\\\n  #MEDIA QUERIES\n\\*-----------------------------------*/\n/* responsive for larger than 575px screen */\n@media (min-width: 575px) {\n  :root {\n    --fs-1: 5.8rem;\n    --fs-2: 4rem;\n  }\n  /** REUSED STYLE    */\n  .container {\n    max-width: 540px;\n    width: 100%;\n    margin-inline: auto;\n  }\n  .hero-title {\n    font-size: var(--fs-1);\n  }\n  .hero-subtitle,\n.section-subtitle {\n    font-size: var(--fs-4);\n  }\n  /**   HEADER     */\n  .header .container {\n    max-width: unset;\n    padding-inline: 30px;\n  }\n  /**    HERO     */\n  .hero-content {\n    padding-inline: 40px;\n  }\n  .hero-subtitle .strong {\n    padding-block: 6px;\n  }\n  .hero::after {\n    height: 340px;\n  }\n  /***    MENU  */\n  .menu-card .btn {\n    padding: 10px 20px;\n    font-size: 1.5rem;\n    margin: 0;\n  }\n  /** ABOUT     */\n  .about .section-title {\n    font-size: var(--fs-2);\n  }\n  /**  FOOTER    */\n  .footer-top .container {\n    grid-template-columns: 1fr 1fr;\n    column-gap: 25px;\n  }\n}\n/* responsive for larger than 768px screen*/\n@media (min-width: 768px) {\n  /** CUSTOM PROPERTY     */\n  :root {\n    --fs-2: 4.5rem;\n  }\n  /** REUSED STYLE     */\n  .container {\n    max-width: 720px;\n  }\n  .scrollbar-item {\n    min-width: calc(50% - 12.5px);\n  }\n  /**  HERO    */\n  .hero-banner {\n    max-width: max-content;\n    margin-inline: auto;\n  }\n  /** MENU  */\n  .menu-card .div-action {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  /** FOOTER     */\n  .footer-bottom .container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .footer-bottom .footer-bottom-list {\n    margin-block-start: 0;\n  }\n}\n/* responsive for larger than 992px screen*/\n@media (min-width: 992px) {\n  /** REUSED STYLE */\n  .container,\n.header .container {\n    max-width: 960px;\n  }\n  /** HEADER  */\n  .nav-open-btn,\n.nav-close-btn {\n    display: none;\n  }\n  .navbar,\n.navbar.active {\n    all: unset;\n    margin-inline-start: auto;\n  }\n  .navbar-list {\n    display: flex;\n    gap: 10px;\n  }\n  .navbar-link {\n    color: #fff;\n    font-size: unset;\n    padding: 0 10px;\n    margin-block-end: 0;\n  }\n  .header {\n    background-color: transparent;\n    box-shadow: none;\n    transition: 0.25s ease;\n  }\n  .header .btn {\n    display: block;\n  }\n  .header .container {\n    gap: 30px;\n  }\n  .header .navbar-link:is(:hover, :focus, .active) {\n    color: #ffdb00;\n  }\n  .header.active {\n    transform: translateY(-100%);\n    background-color: #225193;\n    padding-block: 10px;\n    box-shadow: 0 0 20px #225193;\n    animation: slideIn 0.5s ease forwards;\n  }\n  .header.active .logo img {\n    height: 80px;\n    width: auto;\n  }\n  .header.active .active .navbar-link {\n    color: #fff;\n  }\n  @keyframes slideIn {\n    0% {\n      transform: translateY(-100%);\n    }\n    100% {\n      transform: translateY(0);\n    }\n  }\n  /***  TABLE CARRITO*/\n  .table-carrito .title {\n    width: 50%;\n    height: 20px;\n  }\n  .dropdown-open .dropdown-menu.dropdown-active {\n    display: block;\n    width: 350px;\n  }\n  /** HERO     */\n  .hero {\n    background-size: cover;\n    text-align: left;\n  }\n  .hero .container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 25px;\n  }\n  .hero .container .hero-content {\n    padding-inline: 0;\n    margin-block-end: 0;\n  }\n  .hero .container .hero-subtitle, .hero .container .btn {\n    margin-inline: 0;\n  }\n  /*** MENU  */\n  .menu ul.menu-ul {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    align-items: start;\n    gap: 20px;\n  }\n  /** ABOUT */\n  .about .container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    gap: 50px;\n  }\n  .about .container .about-banner {\n    margin-block-end: 0;\n  }\n  .about .container .wrapper {\n    gap: 30px;\n  }\n  /*** LOCATION  */\n  .localization .container {\n    display: grid;\n    grid-template-columns: 1fr 1FR;\n    align-items: baseline;\n    gap: 35px;\n  }\n  /** FOOTER*/\n  .footer-top .container {\n    grid-template-columns: 0.85fr 0.5fr 1fr 0.85fr;\n    column-gap: 50px;\n  }\n}\n/* responsive for larger than 1200px screen */\n@media (min-width: 1200px) {\n  :root {\n    --fs-1: 7rem;\n    --fs-2: 5.5rem;\n    --fs-3: 4rem;\n    --fs-4: 2.2rem;\n    --fs-5: 2rem;\n    --section-padding: 120px;\n  }\n  /*** REUSED STYLE     */\n  .container,\n.header .container {\n    max-width: 1140px;\n  }\n  .btn {\n    padding: 18px 45px;\n    border-radius: 10px;\n  }\n  .has-scrollbar {\n    gap: 30px;\n  }\n  .scrollbar-item {\n    min-width: calc(33.33% - 20px);\n  }\n  /** HEADER     */\n  .header .container {\n    padding-inline: 0;\n  }\n  /** HERO*/\n  .hero::after {\n    width: 420px;\n  }\n  /** ABOUT*/\n  .about .wrapper {\n    gap: 40px;\n  }\n  /** FOOTER*/\n  .footer-top .container {\n    grid-template-columns: 1fr 0.6fr 0.9fr 1fr;\n  }\n}')();
const developerHints = {
  forbidden: [
    'Do not edit this "developerHints" property',
    "Do not move this json file from this location"
  ],
  allowed: [
    'You can edit "menuList" property as you like',
    "It is not necessary, but you can add more properties if you need it"
  ]
};
const menuList = [
  {
    menuId: 0,
    menuName: "Chicken Burger",
    menuDescription: "We placed 70 years of delicious into this sandwich. Taste our legendary hand-battered chicken.",
    menuPrice: 10,
    menuImage: "https://www.joomlamexico.com/fever/gastro/gasto-item-chicken-buger.jpg"
  },
  {
    menuId: 1,
    menuName: "Chicken wings",
    menuDescription: "Get your fill with the Texas-Sized Meal: 3PC Legs & Thighs, 2 regular sides plus a signature jalape\xF1o pepper.",
    menuPrice: 9,
    menuImage: "https://www.joomlamexico.com/fever/gastro/gasto-item-chicken-wings.jpg"
  },
  {
    menuId: 2,
    menuName: "Beer",
    menuDescription: "Just simple and fresh beer.",
    menuPrice: 2.2,
    menuImage: "https://www.joomlamexico.com/fever/gastro/gasto-item-beer.jpg"
  },
  {
    menuId: 3,
    menuName: "French fries",
    menuDescription: "Our fries are extra-long and center-cut from Grade A potatoes. They are cooked to a golden-brown crisp while remaining slightly soft in the middle. Every batch is cooked to order in our premium quality Canola Oil blend, then lightly salted immediately after leaving the fryer, so the taste melts onto each fry.",
    menuPrice: 12,
    menuImage: "https://www.joomlamexico.com/fever/gastro/gasto-item-french-fries.jpg"
  },
  {
    menuId: 4,
    menuName: "Milshake",
    menuDescription: "Our creamy Milkshakes are hand-spun the old-fashioned way each time and feature delicious. Topped with whipped cream and a cherry (except when served via delivery).",
    menuPrice: 1.8,
    menuImage: "https://www.joomlamexico.com/fever/gastro/gasto-item-milkshake.jpg"
  },
  {
    menuId: 5,
    menuName: "Fried chicken",
    menuDescription: "We use premium chicken breast tenderloins to make the most tender chicken fingers possible. Our special marinade tenderizes the chicken, locks in moisture and adds flavor.",
    menuPrice: 8,
    menuImage: "https://www.joomlamexico.com/fever/gastro/gasto-item-fried-chicken.jpg"
  }
];
var menu = {
  developerHints,
  menuList
};
const addEventOnElem = function(elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const toggleNavbar = function() {
  navbar.classList.toggle("active");
};
addEventOnElem(navTogglers, "click", toggleNavbar);
const closeNavbar = function() {
  navbar.classList.remove("active");
};
addEventOnElem(navLinks, "click", closeNavbar);
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", function() {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
document.querySelectorAll(".dropdown-toggle").forEach(dropDownFunc);
function dropDownFunc(dropDown) {
  if (dropDown.classList.contains("click-dropdown") === true) {
    dropDown.addEventListener("click", function(e) {
      e.preventDefault();
      if (this.nextElementSibling.classList.contains("dropdown-active") === true) {
        this.parentElement.classList.remove("dropdown-open");
        this.nextElementSibling.classList.remove("dropdown-active");
      } else {
        closeDropdown();
        this.parentElement.classList.add("dropdown-open");
        this.nextElementSibling.classList.add("dropdown-active");
      }
    });
  }
  if (dropDown.classList.contains("hover-dropdown") === true) {
    let dropdownHover2 = function(e) {
      if (e.type == "mouseover") {
        closeDropdown();
        this.parentElement.classList.add("dropdown-open");
        this.nextElementSibling.classList.add("dropdown-active");
      }
    };
    var dropdownHover = dropdownHover2;
    dropDown.onmouseover = dropDown.onmouseout = dropdownHover2;
  }
}
window.addEventListener("click", function(e) {
  if (e.target.closest(".dropdown-container") === null) {
    closeDropdown();
  }
});
function closeDropdown() {
  document.querySelectorAll(".dropdown-container").forEach(function(container) {
    container.classList.remove("dropdown-open");
  });
  document.querySelectorAll(".dropdown-menu").forEach(function(menu2) {
    menu2.classList.remove("dropdown-active");
  });
}
document.querySelectorAll(".dropdown-menu").forEach(function(dropDownList) {
  dropDownList.onmouseleave = closeDropdown;
});
const cards = document.getElementById("cards");
const cartItems = document.getElementById("cart_items");
const footer = document.getElementById("footer");
const templateCard = document.getElementById("template-card").content;
const templateCarrito = document.getElementById("template-carrito").content;
const templateFooter = document.getElementById("template-footer").content;
const fragment = document.createDocumentFragment();
let carrito = {};
document.addEventListener("DOMContentLoaded", () => {
  pintarCards();
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    pintarCarrito();
  }
});
cards.addEventListener("click", (e) => {
  addCarrito(e);
});
cartItems.addEventListener("click", (e) => {
  btnAcccion(e);
});
function pintarCards() {
  const menuList2 = menu.menuList;
  menuList2.forEach((prod) => {
    templateCard.querySelector("img").src = prod.menuImage;
    templateCard.querySelector(".card-title").textContent = prod.menuName;
    templateCard.querySelector(".card-text").textContent = prod.menuDescription;
    templateCard.querySelector(".product-price").textContent = `$${parseFloat(prod.menuPrice).toFixed(2)}`;
    templateCard.querySelector(".btnBuy").dataset.id = prod.menuId;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
}
const addCarrito = (e) => {
  if (e.target.classList.contains("btnBuy")) {
    let obj = e.target.parentElement.parentElement.parentElement;
    setCarrito(obj);
  }
  e.stopPropagation();
};
const setCarrito = (objeto) => {
  const producto = {
    id: objeto.querySelector(".btn").dataset.id,
    title: objeto.querySelector(".card-title").textContent,
    precio: objeto.querySelector(".product-price").textContent.replace("$", ""),
    cantidad: 1
  };
  if (carrito.hasOwnProperty(producto.id))
    producto.cantidad = carrito[producto.id].cantidad + 1;
  carrito[producto.id] = __spreadValues({}, producto);
  pintarCarrito();
};
const pintarCarrito = () => {
  cartItems.innerHTML = "";
  Object.values(carrito).forEach((producto) => {
    templateCarrito.querySelectorAll("span")[0].textContent = producto.title;
    templateCarrito.querySelectorAll("span")[1].textContent = producto.cantidad;
    templateCarrito.querySelector(".btnAdd").dataset.id = producto.id;
    templateCarrito.querySelector(".btnRemove").dataset.id = producto.id;
    templateCarrito.querySelector(".item-price").textContent = parseFloat(producto.cantidad * producto.precio).toFixed(2);
    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  cartItems.appendChild(fragment);
  pintarFooter();
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
const pintarFooter = () => {
  footer.innerHTML = "";
  if (Object.keys(carrito).length === 0) {
    footer.innerHTML = `<th scope="row" colspan="5">Carrito vac\xEDo</th>`;
    return;
  }
  const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0);
  const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0);
  templateFooter.querySelectorAll("span")[1].textContent = nCantidad;
  document.getElementById("total-items").innerHTML = nCantidad;
  templateFooter.querySelector(".total-price").textContent = parseFloat(nPrecio).toFixed(2);
  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);
  footer.appendChild(fragment);
  document.querySelector(".dropdown-container").style.display = "block";
  const btnVaciar = document.getElementById("vaciar-carrito");
  btnVaciar.addEventListener("click", () => {
    carrito = {};
    pintarCarrito();
    document.getElementById("total-items").innerHTML = "";
    document.querySelector(".dropdown-container").style.display = "block";
  });
};
const btnAcccion = (e) => {
  if (e.target.classList.contains("btnAdd")) {
    const producto = carrito[e.target.dataset.id];
    producto.cantidad++;
    carrito[e.target.dataset.id] = __spreadValues({}, producto);
    pintarCarrito();
  }
  if (e.target.classList.contains("btnRemove")) {
    const producto = carrito[e.target.dataset.id];
    producto.cantidad--;
    if (producto.cantidad === 0) {
      delete carrito[e.target.dataset.id];
      document.getElementById("total-items").innerHTML = "";
      document.querySelector(".dropdown-container").style.display = "block";
    }
    pintarCarrito();
  }
  e.stopPropagation();
};
