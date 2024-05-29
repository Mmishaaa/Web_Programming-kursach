import ChangeTheme from "./components/ChangeTheme/changeTheme.js"
import Translator from "./components/Translator/translator.js";
import Authorization from "./components/Authorization/authorization.js";
import Registration from "./components/Registration/registration.js";

class App {
  init() {
    const changeTheme = new ChangeTheme();
    changeTheme.init();

    const translator = new Translator();
    translator.init();

    const authorization = new Authorization();
    authorization.init();

    const registration = new Registration();
    registration.init();
  }
}

export default App;