import BurgerMenu from "./components/BurgerMenu/burgerMenu.js";
import Authorization from "./components/Authorization/authorization.js"
import Registration from "./components/Registration/registration.js";

class App {
  init() {
    const burgerMenu = new BurgerMenu();
    burgerMenu.init();

    const authorization = new Authorization();
    authorization.init();

    const registration = new Registration();
    registration.init();
  }
}
export default App;