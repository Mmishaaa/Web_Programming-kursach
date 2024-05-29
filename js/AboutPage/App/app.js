import ChangeTheme from "./components/ChangeTheme/changeTheme.js"
import Translator from "./components/Translator/translator.js";
import Authorization from "./components/Authorization/authorization.js";

class App {
  init() {
    const changeTheme = new ChangeTheme();
    changeTheme.init();

    const translator = new Translator();
    translator.init();

    const authorization = new Authorization();
    authorization.init();
  }
}

export default App;