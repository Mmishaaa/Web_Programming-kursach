import CustomLocalStorage from "../../../../CustomLocalStorage/customLocalStorage.js";

const translate = {
  en: {
    "1": "Shop",
    "2": "About",
    "3": "Sustainability",
    "4": "Log in",
    "5": "Sign in",
    "6": "en",
    "7": "THE ECO-FRIENDLY WAY TO",
    "8": "Give the best wishes to your lovedones",
    "9": "Shop Now",
    "10": "Customer Feedback",
    "11": "based on 1000+ Etsy Reviews",
    "12": "Our smallest choices have the potential for the biggest impact. Let's make good ones together.",
    "13": "Sustainability",
    "14": "Our Best Sellers",
    "15": "Deliver a smile to yourself or someone special with one of our sustainable favorites.",
    "16": "Shop all products",
    "17": "ASSORTED CARD SET",
    "18": "Dogs",
    "19": "$ 14.00",
    "20": "ASSORTED CARD SET",
    "21": "North American Birds",
    "22": "$ 14.00",
    "23": "NOTEBOOK SET OF 3",
    "24": "New York, London, Paris",
    "25": "$ 13.00",
    "26": "Beautiful cards and very high quality. They were shipped to me very quickly and the packaging was awesome. Definitely recommend and will order again.",
    "27": "Led by Transparency",
    "28": "Fast shipping. Free on orders over $25.",
    "29": "Sustainable process from start to finish.",
    "30": "Unique designs and high-quality materials.",
    "31": "Partnering with small businesses in the USA.",
    "32": "Shop Now",
    "33": "INSPIRATION",
    "34": "The Ultimate Guide: What to Write in a Birthday Card",
    "35": "Celebrate the life you have!",
    "36": "Birthdays are the one time of year we get to celebrate those closest to us and we should take the opportunity to let them know just how much they are appreciated.",
    "37": "Read Article",
    "38": "Explore our products",
    "39": "Greeting Cards",
    "40": "Assorted Card Sets",
    "41": "Notebooks",
    "42": "Say hi and follow along for updates",
    "43": "Shop",
    "44": "Shop All",
    "45": "Greeting Cards",
    "46": "Assorted Card Sets",
    "47": "Notebooks",
    "48": "About",
    "49": "Our Story",
    "50": "Our Values",
    "51": "Journal",
    "52": "Sustainability",
    "53": "Customer Care",
    "54": "Contact Us",
    "55": "FAQs",
    "56": "Returns & Exchanges",
    "57": "Support",
    "58": "Wholesale",
    "59": "Overview",
    "60": "Register as a Wholesaler",
    "61": "Access the Wholesale Store",
    "62": "Instagram",
    "63": "Facebook",
    "64": "Privacy Policy",
    "65": "Terms & Conditions",
    "66": "Built by The Papestielliz",
    "67": "First name",
    "68": "Last name",
    "69": "Middle name",
    "70": "Birthday",
    "71": "Number",
    "72": "Password",
    "73": "Repeat password",
    "74": "Authorization",
    "75": "Password",
    "76": "Submit",
    "77": "Logout",
    "78": "Account",
    "79": "First name: ",
    "80": "Last name: ",
    "81": "Middle name: ",
    "82": "Birthday: ",
    "83": "Number: ",
    },
  ru: {
    "1": "Магазин",
    "2": "О нас",
    "3": "Открытки",
    "4": "Войти",
    "5": "Новый",
    "6": "ru",
    "7": "ЭКОЛОГИЧНЫЙ СПОСОБ",
    "8": "Порадуйте близких",
    "9": "Купить",
    "10": "Отзывы клиентов",
    "11": "на основе более 1000 отзывов с Etsy",
    "12": "Даже самые маленькие наши решения могут оказать огромное влияние. Давайте вместе делать правильный выбор.",
    "13": "Экологичность",
    "14": "Наши бестселлеры",
    "15": "Подарите улыбку себе или близкому с помощью одной из наших экологичных новинок.",
    "16": "Посмотреть все товары",
    "17": "НАБОР ОТКРЫТОК",
    "18": "Собаки",
    "19": "$ 14.00",
    "20": "НАБОР ОТКРЫТОК",
    "21": "Птицы Северной Америки",
    "22": "$ 14.00",
    "23": "НАБОР ИЗ 3-Х БЛОКНОТОВ",
    "24": "Нью-Йорк, Лондон, Париж",
    "25": "$ 13.00",
    "26": "Красивые открытки отличного качества. Они быстро доставлены и упакованы отлично. Определенно рекомендую и закажу еще.",
    "27": "Лидирующее место по прозрачности",
    "28": "Быстрая доставка. Бесплатно при заказе от $25.",
    "29": "Экологичный процесс с начала до конца.",
    "30": "Уникальные дизайны и высококачественные материалы.",
    "31": "Сотрудничество с малым бизнесом в США.",
    "32": "Купить",
    "33": "ВДОХНОВЕНИЕ",
    "34": "Идеальное руководство: что написать в открытке на день рождения",
    "35": "Празднуйте жизнь, которой вы обладаете!",
    "36": "Дни рождения - это единственное время в году, когда мы можем отпраздновать тех, кто нам ближе всего, и мы должны воспользоваться этой возможностью, чтобы дать им понять, как сильно они ценятся.",
    "37": "Читать",
    "38": "Изучите наши товары",
    "39": "Открытки",
    "40": "Наборы открыток",
    "41": "Блокноты",
    "42": "Поздоровайтесь и следите за обновлениями @twigspaper",
    "43": "Магазин",
    "44": "Все товары",
    "45": "Открытки",
    "46": "Наборы открыток",
    "47": "Блокноты",
    "48": "О нас",
    "49": "Наша история",
    "50": "Наши ценности",
    "51": "Журнал",
    "52": "Открытка",
    "53": "Обслуживание клиентов",
    "54": "Свяжитесь с нами",
    "55": "ЧаВО",
    "56": "Возврат и обмен",
    "57": "Регистрация",
    "58": "Оптовая продажа",
    "59": "Обзор",
    "60": "Зарегистрироваться как оптовик",
    "61": "Доступ к оптовому магазину",
    "62": "Instagram",
    "63": "Facebook",
    "64": "Политика конфиденциальности",
    "65": "Условия и положения",
    "66": "Создано компанией The Papestielliz",
    "67": "Ваше имя",
    "68": "Ваша фамилия",
    "69": "Ваше отчество",
    "70": "Дата рождения",
    "71": "Номер телефона",
    "72": "Пароль",
    "73": "Повторите пароль",
    "74": "Зарегистрироваться",
    "75": "Пароль",
    "76": "Отправить",
    "77": "Выйти",
    "78": "Аккаунт",
    "79": "Имя: ",
    "80": "Фамилия: ",
    "81": "Отчество: ",
    "82": "День рождения: ",
    "83": "Телефон: ",
    }
};

class Translator {
  customLocalStorage = new CustomLocalStorage();

  init() {
    document.querySelector('.changeLang').addEventListener('click', this.toggleLang.bind(this));
  }

  toggleLang() {
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
        this.changeLang('ru');
        user.lang = 'ru';
    }
    else {
        this.changeLang('en');
        user.lang = 'en';
    }

    this.customLocalStorage.set('user', JSON.stringify(user));
  }

  changeLang(lang) {
    const translation = translate[lang];

    document.querySelector('.changeLang').textContent = lang;

    const elements = document.querySelectorAll('[data-i18]');

    //console.log(elements);  

    elements.forEach((element) => {
      const key = element.getAttribute('data-i18');
      console.log(key + "-" + translation[key])
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