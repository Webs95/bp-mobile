import "./style.scss";

const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get("lang");
let lang;
let langFile;
let userChoose = "monthly";

const [cardFirst, cardSecond] = document.querySelectorAll(".card");
const bannerBody = document.querySelector(".banner");
const continueBtn = document.getElementById("continue");

const setLang = () => {
  if (langParam === null) {
    lang = navigator.language.slice(0, 2);
    console.log(lang);
  } else {
    lang = langParam;
    console.log(lang);
  }
  langFile = `./assets/localization/${lang}.json`;
};

const initProject = () => {
  setLang();

  setTranslate(langFile);

  cardFirst.addEventListener("click", (e) => {
    if (e.target.closest(".card")) {
      e.target.closest(".card").classList.add("card_active");
      cardSecond.classList.remove("card_active");
      userChoose = "monthly";
    }
  });

  cardSecond.addEventListener("click", (e) => {
    if (e.target.closest(".card")) {
      e.target.closest(".card").classList.add("card_active");
      cardFirst.classList.remove("card_active");
      userChoose = "annually";
    }
  });

  continueBtn.addEventListener("click", () => {
    userChoose === "monthly"
      ? (window.location.href = "https://apple.com/")
      : (window.location.href = "https://google.com/");
  });

  bannerBody.classList.add(`${lang}`);
};

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

initProject();
