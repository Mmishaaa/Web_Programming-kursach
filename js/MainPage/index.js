import BurgerMenu from "./components/MainPage/burgerMenu.js";
class App {
  init() {
    console.log("app");
    const burgerMenu = new BurgerMenu();
    burgerMenu.init();
  }
}

const app = new App();
console.log("app");

app.init();