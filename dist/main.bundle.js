/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  function e(e, t, ...a) {\n    if (\"string\" != typeof e)\n      throw Error(\"Argument 'htmlString' is required and must be a string\");\n    const i = document.createElement(e);\n    if (\"object\" == typeof t)\n      for (let e in t)\n        \"on\" === e.substring(0, 2)\n          ? i.addEventListener(e.substring(2).toLowerCase(), t[e])\n          : i.setAttribute(e, t[e]);\n    return (\n      a.forEach(function (e) {\n        let t;\n        (t = e.constructor.name.includes(\"Element\")\n          ? e\n          : document.createTextNode(e)),\n          i.appendChild(t);\n      }),\n      i\n    );\n  }\n  function t(e = 50) {\n    return \"Lorem ipsum dolor amet tousled brooklyn meditation, polaroid offal kale chips raw denim tumblr succulents jianbing listicle. Man braid godard VHS freegan bespoke fixie XOXO ramps lo-fi edison bulb prism gochujang photo booth. Messenger bag bicycle rights trust fund franzen street art mixtape helvetica, sriracha dreamcatcher live-edge microdosing. Whatever cliche neutra iceland chambray, beard narwhal pop-up health goth readymade palo santo forage live-edge 3 wolf moon echo park edison bulb, viral iceland bicycle rights post-ironic celiac typewriter kinfolk mumblecore tilde palo santo. Dreamcatcher cred cliche, keffiyeh intelligentsia forage vice locavore aesthetic yr. Vexillologist shabby chic fixie, air plant helvetica health goth kickstarter four loko jean shorts tote bag green juice street art beard farm-to-table. Enamel pin jianbing photo booth, YOLO pour-over bushwick next level fingerstache vice retro disrupt cloud bread. Gastropub umami distillery chia food truck adaptogen. Forage hexagon helvetica kogi squid. Crucifix health goth bespoke typewriter fam hexagon helvetica, vice dreamcatcher chillwave tumeric. Keffiyeh aesthetic XOXO venmo live-edge kale chips mlkshk wolf williamsburg hella yr locavore. Tumblr unicorn chillwave, edison bulb occupy offal sartorial gastropub kickstarter. Bitters swag chartreuse single-origin coffee PBR&B post-ironic migas activated charcoal before they sold out iPhone seitan lumbersexual tofu tumeric selvage. Shoreditch hashtag literally, af intelligentsia crucifix sustainable +1 chambray adaptogen. Crucifix retro fixie knausgaard. Photo booth asymmetrical seitan, pug marfa tattooed roof party tacos gochujang woke kale chips vice organic. Street art mumblecore trust fund, normcore single-origin coffee meggings neutra tacos fam. Woke chia asymmetrical try-hard cloud bread hexagon leggings kogi taiyaki. Seitan humblebrag tote bag keytar YOLO art party. Semiotics cliche schlitz shaman, waistcoat chartreuse activated charcoal XOXO post-ironic helvetica messenger bag air plant vape sartorial. Typewriter thundercats direct trade edison bulb lomo la croix trust fund. Tote bag tofu lo-fi blue bottle. Drinking vinegar lyft messenger bag, leggings tofu 90's bitters four loko mustache sriracha pabst shabby chic humblebrag glossier. Meh skateboard yuccie tattooed adaptogen gastropub post-ironic put a bird on it green juice la croix hot chicken ennui cray dreamcatcher neutra. Chia semiotics art party fixie shaman echo park palo santo flexitarian. Letterpress retro chillwave, williamsburg palo santo fashion axe raclette lumbersexual keytar yr plaid ugh. Godard everyday carry twee, roof party affogato williamsburg photo booth. Irony lumbersexual letterpress, trust fund raclette wayfarers art party. Flannel bushwick yr tattooed.\"\n      .split(/\\s+/)\n      .slice(0, e)\n      .join(\" \");\n  }\n  if (window.location.href.indexOf(\"schedule\") > -1) {\n    const i = new Date(),\n      o = (i.getDate(), i.getMonth()),\n      r = i.getFullYear();\n    const s = [\n        {\n          title: \"Vegan Day\",\n          start: new Date(r, o + 1, 20),\n          description:\n            \"Vegans unite! At this event, we'll be celebrating with vegan food from around the globe. With so many delicious vegan cuisine options, it's hard to pick one. What are you hungry for? Let us share with you!\\n        Veganism is a lifestyle choice—we're passionate about creating healthy and delicious food products without harming the environment, so please spread the word about our festival and about our work!\",\n          image:\n            \"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80\",\n        },\n        {\n          title: \"Harvest Festival\",\n          start: new Date(r, o + 1, 20),\n          image:\n            \"https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80\",\n        },\n        {\n          title: \"Bacon Day\",\n          start: new Date(r, o + 1, 20),\n          description:\n            \"Today's all about bacon! We'll be serving up the best tasting bacon around town! Let's all get excited about bacon together!\\n        As an appetizer, grab a side of our delicious BBQ pulled pork and pick up a delicious side of our homemade slaw and sauce! There will be bacon everywhere!!\",\n          image:\n            \"https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80\",\n        },\n        {\n          title: \"Fry-day\",\n          description:\n            \"You bring it, we fry it. Everything tastes better fried! Whether it's your favorite sponge cake or a refreshing afternoon snack,\\n        prepare to shock your tastebuds.\",\n          start: new Date(r, o + 1, 21),\n          image:\n            \"https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80\",\n        },\n        {\n          title: \"Pizza Party!\",\n          description:\n            \"This event is devoted to all those pizza lovers out there. Come enjoy fresh from the oven pizza and learn tips on making pizza at home from the pros!\",\n          start: new Date(r, o + 1, 22),\n          image:\n            \"https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80\",\n        },\n        {\n          title: \"Pasta Bonanza\",\n          description: \"All things pasta.\",\n          start: new Date(r, o + 1, 22),\n          image:\n            \"https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80\",\n        },\n        {\n          title: \"Fruity Foods!\",\n          description:\n            \"We will be showcasing dishes where fruits are a primary ingredient. Come learn how you can add more fruits into your diet!\",\n          start: new Date(r, o + 1, 22),\n          image:\n            \"https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80\",\n        },\n        {\n          title: \"Veggie Mix Up\",\n          description:\n            \"We will be showcasing great dishes that have plenty of veggies and proteins! This is for all those out there who love food, but want to get more vegetables in their diets!\",\n          start: new Date(r, o + 1, 23),\n          image:\n            \"https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80\",\n        },\n        {\n          title: \"Fry-day\",\n          description:\n            \"You bring it, we fry it....again. This event is always a huge hit, so we hold it twice!!\",\n          start: new Date(r, o + 1, 23),\n          image:\n            \"https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80\",\n        },\n      ],\n      n = document.querySelector(\"#page\");\n    function a(a) {\n      return a.map((a) =>\n        e(\n          \"div\",\n          {\n            class: \"card-body clickable\",\n            onClick: () =>\n              (function (e) {\n                const t = dateConverter(e.start);\n                localStorage.setItem(\n                  \"currentEvent\",\n                  JSON.stringify({\n                    title: e.title,\n                    subtitle: t,\n                    description: e.description,\n                    image: e.image,\n                  })\n                ),\n                  (window.location.href = \"events.html\");\n              })(a),\n          },\n          e(\"h5\", { class: \"card-title\" }, a.title || \"\"),\n          e(\"p\", { class: \"card-text\" }, a.description || t()),\n          e(\"hr\")\n        )\n      );\n    }\n    const c = e(\n        \"div\",\n        { class: \"container mt-5\" },\n        e(\n          \"div\",\n          { class: \"card mb-5\" },\n          e(\"h5\", { class: \"card-header\" }, \"Day 1\"),\n          ...a(s.slice(0, 3))\n        )\n      ),\n      l = e(\n        \"div\",\n        { class: \"container\" },\n        e(\n          \"div\",\n          { class: \"card mb-5\" },\n          e(\"h5\", { class: \"card-header\" }, \"Day 2\"),\n          ...a(s.slice(3, 6))\n        )\n      ),\n      d = e(\n        \"div\",\n        { class: \"container\" },\n        e(\n          \"div\",\n          { class: \"card mb-5\" },\n          e(\"h5\", { class: \"card-header\" }, \"Day 3\"),\n          ...a(s.slice(6, 9))\n        )\n      );\n    n.appendChild(c), n.appendChild(l), n.appendChild(d);\n  }\n  if (window.location.href.indexOf(\"event\") > -1) {\n    const a = JSON.parse(localStorage.getItem(\"currentEvent\")) || {\n        title: \"Title Placeholder\",\n        subtitle: \"\",\n        description: \"\",\n      },\n      i = document.querySelector(\"#page\"),\n      o = e(\n        \"div\",\n        { class: \"container\" },\n        e(\n          \"div\",\n          { class: \"card mb-3\" },\n          e(\"img\", {\n            class: \"card-img-top\",\n            style: \"width: 5px\",\n            src: a.image || \"https://via.placeholder.com/350x150\",\n          }),\n          e(\n            \"div\",\n            { class: \"card-body\" },\n            e(\"h1\", { class: \"card-title\" }, a.title || \"\"),\n            e(\"h2\", { class: \"text-muted\" }, a.subtitle || \"\"),\n            e(\"p\", { class: \"card-text mt-3\" }, a.description || t(100)),\n            e(\n              \"a\",\n              { class: \"btn btn-primary\", href: \"tickets.html\" },\n              \"Buy Tickets\"\n            )\n          )\n        )\n      );\n    i.appendChild(o);\n  }\n  if (\n    ((dateConverter = function (e) {\n      const t = new Date(e),\n        a = t.getFullYear();\n      return (\n        [\n          \"Jan\",\n          \"Feb\",\n          \"Mar\",\n          \"Apr\",\n          \"May\",\n          \"Jun\",\n          \"Jul\",\n          \"Aug\",\n          \"Sep\",\n          \"Oct\",\n          \"Nov\",\n          \"Dec\",\n        ][t.getMonth()] +\n        \" \" +\n        t.getDate() +\n        \", \" +\n        a\n      );\n    }),\n    window.location.href.indexOf(\"tickets\") > -1)\n  ) {\n    const t = document.getElementById(\"purchaseBtn\"),\n      a = document.getElementById(\"purchaseEmail\"),\n      i = document.querySelector(\".modal-content\"),\n      o = document.querySelector(\".modal-body\"),\n      r = document.querySelector(\".modal-footer\");\n    t.addEventListener(\"click\", function () {\n      i.removeChild(o),\n        i.removeChild(r),\n        i.append(\n          e(\n            \"div\",\n            { class: \"modal-body\" },\n            e(\n              \"h5\",\n              { class: \"modal-title\" },\n              `Thanks for requesting a ticket purchase! We will send an email to ${a.value} to complete the order form!`\n            )\n          )\n        );\n    });\n  }\n  [\n    {\n      title: \"We travel all over the US\",\n      subtitle: \"Check out our schedule!\",\n      img: \"./assets/img/food-table.jpg\",\n      btnText: \"View Schedule\",\n      btnUrl: \"schedule.html\",\n    },\n    {\n      title: \"Our food is seriously the bomb!\",\n      subtitle: \"What are you waiting for?\",\n      img: \"./assets/img/grill.jpg\",\n      btnText: \"Purchase Tickets\",\n      btnUrl: \"tickets.html\",\n    },\n  ].forEach((e, t) => {\n    $(\".carousel-inner\").append(\n      `\\n  <div class=\"carousel-item fullscreen-carousel\" style=\"background-image: url('${e.img}')\">\\n    <div class=\"d-flex h-100 align-items-center justify-content-center carousel-caption\">\\n        <div class=\"container\">\\n          <div class=\"row align-items-center justify-content-center\">\\n              <h2 class=\"display-4 mb-2\">${e.title}</h2>\\n          </div>\\n          <div class=\"row align-items-center justify-content-center\"> \\n            <h3>${e.subtitle}</h3>\\n          </div>\\n          <div class=\" mt-4 row align-items-center justify-content-center\"> \\n            <a class=\"btn btn-primary\" href=\"${e.btnUrl}\">\\n                ${e.btnText}\\n            </a>\\n          </div>\\n        </div>\\n    </div>\\n  </div>`\n    );\n  });\n});\n\n\n//# sourceURL=webpack:///./assets/js/script.js?");

/***/ })

/******/ });