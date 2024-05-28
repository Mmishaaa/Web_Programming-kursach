import BurgerMenu from "./components/BurgerMenu/burgerMenu.js";
import Registration from "./components/Authorization/authorization.js"
class App {
  init() {
    const burgerMenu = new BurgerMenu();
    burgerMenu.init();

    const registration = new Registration();
    registration.init();
  }
}
export default App;