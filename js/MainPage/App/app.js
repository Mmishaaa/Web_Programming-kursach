import BurgerMenu from "./components/BurgerMenu/burgerMenu.js";
import Authorization from "./components/Authorization/authorization.js"
import Registration from "./components/Registration/registration.js";
import ChangeTheme from "./components/ChangeTheme/changeTheme.js";
import Translator from "./components/Translator/translator.js"

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
}
export default App;