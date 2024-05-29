import ChangeTheme from "./components/ChangeTheme/changeTheme.js"
import Translator from "./components/Translator/translator.js";

class App {
  init() {
    const changeTheme = new ChangeTheme();
    changeTheme.init();

    const translator = new Translator();
    translator.init();
  }
}

export default App;