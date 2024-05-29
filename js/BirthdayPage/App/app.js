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
  }
}

export default App;