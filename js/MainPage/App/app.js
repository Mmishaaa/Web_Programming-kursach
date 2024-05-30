import BurgerMenu from "./components/BurgerMenu/burgerMenu.js";
import Authorization from "./components/Authorization/authorization.js"
import Registration from "./components/Registration/registration.js";
import ChangeTheme from "./components/ChangeTheme/changeTheme.js";
import Translator from "./components/Translator/translator.js"
import Logout from "./components/Logout/logout.js";
import Account from "./components/Account/account.js";

class App {
  init() {
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
  }
}
export default App;