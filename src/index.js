import "./style.scss";
import i18next from "i18next";
import translationEN from "./assets/localization/en.json";
import translationES from "./assets/localization/es.json";
import translationFR from "./assets/localization/fr.json";
import translationJA from "./assets/localization/ja.json";
import translationNL from "./assets/localization/nl.json";
import translationZH from "./assets/localization/zh.json";
import translationRU from "./assets/localization/ru.json";

const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get("lang");
let lang;
let userChoose;

const cardFirst = document.querySelector(".card_first");
const cardSecond = document.querySelector(".card_second");

const restore = document.getElementById("restore");
const access = document.getElementById("access");
const documents = document.getElementById("documents");
const clouds = document.getElementById("clouds");
const ocr = document.getElementById("ocr");
const monthly = document.getElementById("monthly");
const priceFirstCard = document.getElementById("price-first-card");
const priceMonthFirstCard = document.getElementById("price-month-first-card");
const discount = document.getElementById("discount");
const annually = document.getElementById("annually");
const priceSecondCard = document.getElementById("price-second-card");
const perYear = document.getElementById("per-year");
const perMonth = document.getElementById("per-month");
const threeDaysFree = document.getElementById("3-days-free");
const mostPopular = document.getElementById("most-popular");
const priceMonthSecondCard = document.getElementById("price-month-second-card");
const rewable = document.getElementById("rewable");
const terms = document.getElementById("terms");
const privacy = document.getElementById("privacy");
const continueBtn = document.getElementById("continue");

const setLang = () => {
  if (langParam === null) {
    lang = navigator.language.slice(0, 2);
  } else {
    lang = langParam;
  }
};

const initTranslate = () => {
  i18next.init({
    lng: `${lang}`,
    fallbackLng: "en",
    debug: true,
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
      fr: {
        translation: translationFR,
      },
      ja: {
        translation: translationJA,
      },
      nl: {
        translation: translationNL,
      },
      zh: {
        translation: translationZH,
      },
      ru: {
        translation: translationRU,
      },
    },
  });
};

const setTranslate = () => {
  restore.innerHTML = i18next.t("Restore");
  access.innerHTML = i18next.t("Unlimited Access<br>to All Features");
  clouds.innerHTML = i18next.t("Unlimited documents");
  documents.innerHTML = i18next.t("Unlimited documents");
  // documents.innerHTML = i18next.t("Unlimited documents");
  ocr.innerHTML = i18next.t("Text recognition (OCR)");
  monthly.innerHTML = i18next.t("Monthly");
  // priceFirstCard.innerHTML = i18next.t("Unlimited documents");
  monthly.innerHTML = i18next.t("Monthly");
  perMonth.innerHTML = i18next.t("<strong>{{price}}</strong><br>per month");
  threeDaysFree.innerHTML = i18next.t("3 DAYS FREE");
  priceMonthFirstCard.innerHTML = i18next.t("{{price}}/month");
  discount.innerHTML = i18next.t("-83%");
  annually.innerHTML = i18next.t("Annually");
  perYear.innerHTML = i18next.t("<strong>{{price}}</strong><br>per year");
  mostPopular.innerHTML = i18next.t("MOST POPULAR");
  priceMonthSecondCard.innerHTML = i18next.t("{{price}}/month");
  continueBtn.innerHTML = i18next.t("Continue");
  rewable.innerHTML = i18next.t("Auto-renewable. Cancel anytime.");
  terms.innerHTML = i18next.t("Terms of Use");
  privacy.innerHTML = i18next.t("Privacy Policy");
};

setLang();

initTranslate();

setTranslate();

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

continueBtn.addEventListener("click", (e) => {
  console.log(userChoose);
});
