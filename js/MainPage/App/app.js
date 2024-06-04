import BurgerMenu from "./components/BurgerMenu/burgerMenu.js";
import Authorization from "./components/Authorization/authorization.js"
import Registration from "./components/Registration/registration.js";
import ChangeTheme from "./components/ChangeTheme/changeTheme.js";
import Translator from "./components/Translator/translator.js"
import Logout from "./components/Logout/logout.js";
import Account from "./components/Account/account.js";
import Pagination from "./components/Pagination/pagination.js";
import CustomLocalStorage from "../../CustomLocalStorage/customLocalStorage.js";
class App {
  init() {
    const customLocalStorage = new CustomLocalStorage();

    const burgerMenu = new BurgerMenu();
    burgerMenu.init();

    const authorization = new Authorization();
    authorization.init();

    const registration = new Registration();
    registration.init();

    const changeTheme = new ChangeTheme();
    changeTheme.init();

    const translator = new Translator();
    translator.init();

    const logout = new Logout();
    logout.init();

    const accountDisplayy = new Account();
    accountDisplayy.init();

    const pagination = new Pagination();
    pagination.init();

    window.onload = () => {
      const user = JSON.parse(customLocalStorage.get("user"));
      if(user) {
          authorization.changePage();
          registration.changePage();
          changeTheme.setTheme(user.theme);
          translator.changeLang(user.lang);
  
          customLocalStorage.set('user', JSON.stringify(user));
      }
  };

  }
}
export default App;