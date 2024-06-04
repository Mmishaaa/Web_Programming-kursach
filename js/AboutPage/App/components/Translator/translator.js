import CustomLocalStorage from "../../../../CustomLocalStorage/customLocalStorage.js";

const translate = {
  en: {
    "1": "Log in",
    "2": "Sign in",
    "3": "en",
    "4": "Make your family happy!",
    "5": "Gift-giving is a meaningful way to show your friends that you care about them and value your relationship. When you take the time to handcraft a present, it demonstrates that you've thoughtfully considered the recipient and what might make them happy.",
    "6": "Book a greeting with us",
    "7": "So in short, the act of making presents for your friends is meaningful on multiple levels - it's a way to show you care, engage your creativity, and cultivate stronger relationships. The personal touch of a homemade gift can make it an especially thoughtful and impactful gesture.",
    "8": "Account",
    "9": "Logout",
    "10": "Registration",
    "11": "Name",
    "12": "Last name",
    "13": "Middle name",
    "14": "Birthday",
    "15": "Number",
    "16": "Password",
    "17": "Repeat password",
    "18": "submitRegistration",
    "19": "Authorization",
    "20": "Password",
    "21": "Submit"
    },
    ru: {
      "1": "Войти",
      "2": "Новый",
      "3": "ru",
      "4": "Сделай свою семью счастливой!",
      "5": "Дарить подарки - это значимый способ показать друзьям, что вам небезразличны они и ваши отношения. Когда вы тратите время на создание подарка своими руками, это демонстрирует, что вы задумались о получателе и о том, что может сделать его счастливым.",
      "6": "Забронировать поздравление",
      "7": "Таким образом, акт создания подарков для ваших друзей имеет множество смыслов - это способ показать, что вам не все равно, проявить свою креативность и укрепить более сильные отношения. Персональный штрих в виде самодельного подарка может сделать его особенно трогательным и влиятельным жестом.",
      "8": "Аккаунт",
      "9": "Выйти",
      "10": "Регистрация",
      "11": "Имя",
      "12": "Фамилия",
      "13": "Отчество",
      "14": "День рождения",
      "15": "Номер",
      "16": "Пароль",
      "17": "Повторите пароль",
      "18": "Зарегистрироваться",
      "19": "Авторизация",
      "20": "Пароль",
      "21": "Отправить"
      }
};

class Translator {

  customLocalStorage = new CustomLocalStorage();

  init() {
    document.querySelector('.changeLang').addEventListener('click', this.toggleLang.bind(this));
  }

  toggleLang() {
    if (document.querySelector('.changeLang').textContent === 'en') {
      this.changeLang('ru');
    } else {
      this.changeLang('en');
    }

    const user = JSON.parse(this.customLocalStorage.get('user'));
        
    if (!user) {
        if(document.querySelector('.changeLang').textContent === 'en') {
          this.changeLang('ru');
        }
        else {
          this.changeLang('en');
        }
        
        return;
    }

    if(document.querySelector('.changeLang').textContent === 'en') {
        //this.changeLang('ru');
        user.lang = 'ru';
    }
    else {
        // this.changeLang('en');
        user.lang = 'en';
    }

    this.customLocalStorage.set('user', JSON.stringify(user));
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