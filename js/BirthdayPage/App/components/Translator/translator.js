const translate = {
  en: {
    "1": "Log in",
    "2": "Sign in",
    "3": "en",
    "4": "What to write in a birthday card?",
    "5": "This is a question everyone has faced, so let's find out together.",
    "6": "Reflect on your frienship",
    "7": "Think about your favorite memories, inside jokes, or meaningful moments you've shared. Incorporating these personal details shows your friend you've put thought into the card and value your relationship.",
    "8": "Focus on their positive qualities",
    "9": "Highlight traits you admire about your friend, like their sense of humor, kindness, or creativity. Expressing appreciation for who they are can be very uplifting.",
    "10": "Keep it heartfelt, not generic",
    "11": "Avoid clichéd birthday wishes and aim for a more personalized, sincere tone. Your friend will appreciate the authenticity.",
    "12": "The most valuable gift is not found in a store, but in the heart.",
    "13": "— Joe Mith",
    "14": "The greatest gift is a portion of thyself.",
    "15": "— Ralph Waldo Emerson",
    "16": "The best gift is the one that brings joy to the giver",
    "17": "— Marty Rubin",
    "18": "Account",
    "19": "Logout",
    "20": "Registration",
    "21": "First name",
    "22": "Last name",
    "23": "Middle name",
    "24": "Birthday",
    "25": "Number",
    "26": "Password",
    "27": "Repeat password",
    "28": "Submit",
    "29": "Authorization",
    "30": "Password",
    "31": "Submit"
    },
    ru: {
      "1": "Войти",
      "2": "Новый",
      "3": "ru",
      "4": "Что написать в открытке на день рождения?",
      "5": "Это вопрос, с которым сталкивается каждый, давайте разберемся вместе.",
      "6": "Отразите вашу дружбу",
      "7": "Подумайте о ваших любимых воспоминаниях, внутренних шутках или значимых моментах, которыми вы делились. Использование этих личных деталей показывает вашему другу, что вы вложили много мыслей в открытку и цените ваши отношения.",
      "8": "Сосредоточьтесь на их положительных качествах",
      "9": "Выделите черты, которые вы восхищаетесь в вашем друге, например, его чувство юмора, доброту или креативность. Выражение признательности за то, кто они есть, может быть очень воодушевляющим.",
      "10": "Держите его искренним, а не общим",
      "11": "Избегайте банальных пожеланий на день рождения и стремитесь к более личному, искреннему тону. Ваш друг оценит аутентичность.",
      "12": "Самый ценный подарок не найти в магазине, а в сердце.",
      "13": "— Джо Мит",
      "14": "Величайший дар - это часть самого себя.",
      "15": "— Ральф Уолдо Эмерсон",
      "16": "Лучший подарок - тот, который приносит радость дарителю",
      "17": "— Марти Рубин",
      "18": "Аккаунт",
      "19": "Выйти",
      "20": "Регистрация",
      "21": "Имя",
      "22": "Фамилия",
      "23": "Отчество",
      "24": "Дата рождения",
      "25": "Номер телефона",
      "26": "Пароль",
      "27": "Повторите пароль",
      "28": "Отправить",
      "29": "Авторизация",
      "30": "Пароль",
      "31": "Отправить"
      }
};

class Translator {
  init() {
    document.querySelector('.changeLang').addEventListener('click', this.toggleLang.bind(this));
  }

  toggleLang() {
    if (document.querySelector('.changeLang').textContent === 'en') {
      this.changeLang('ru');
    } else {
      this.changeLang('en');
    }
  }

  changeLang(lang) {
    const translation = translate[lang];

    document.querySelector('.changeLang').textContent = lang;

    const elements = document.querySelectorAll('[data-i18]');

    console.log(elements);  

    elements.forEach((element) => {
      const key = element.getAttribute('data-i18');
      const translatedText = translation[key];

      element.textContent = translatedText;
    });

    const inputs = document.querySelectorAll('[data-i18-placeholder]');

    inputs.forEach((element) => {
      const key = element.getAttribute('data-i18-placeholder');
      const translatedText = translation[key];

      element.placeholder = translatedText;
    });
  }
}

export default Translator;