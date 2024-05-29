import Authorization from "./components/Authorization/authorization.js";
import ChangeTheme from "./components/ChangeTheme/changeTheme.js";
import Slider from "./components/Slider/slider.js";
import Translator from "./components/Translator/translator.js";

class App {
  init() {
    const slider = new Slider();
    slider.init();

    const changeTheme = new ChangeTheme();
    changeTheme.init();

    const translator = new Translator();
    translator.init();

    const authorization = new Authorization();
    authorization.init();
  }
}

export default App;