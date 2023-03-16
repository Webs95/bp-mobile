import "./style.scss";

const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get("lang");

let lang;
if (langParam === null) {
  lang = navigator.language.slice(0, 2);
} else {
  lang = langParam;
}

const langFile = `./assets/localization/${lang}.json`;

function setTranslate(path) {
  fetch(path)
    .then((response) => response.json())
    .then((data) => {
      document.querySelectorAll("[data-translate]").forEach((element) => {
        const translation = data[element.getAttribute("data-translate")];
        if (translation) {
          element.innerHTML = translation;
        }
      });
    })
    .catch((error) => {
      console.error(`Error loading ${langFile}: ${error}`);
      if (lang !== "en") {
        const fallbackFile = "./assets/localization/en.json";
        fetch(fallbackFile)
          .then((response) => response.json())
          .then((data) => {
            document.querySelectorAll("[data-translate]").forEach((element) => {
              const translation = data[element.getAttribute("data-translate")];
              if (translation) {
                element.innerHTML = translation;
              }
            });
          })
          .catch((error) => {
            console.error(`Error loading ${fallbackFile}: ${error}`);
          });
      }
    });
}

setTranslate(langFile);
