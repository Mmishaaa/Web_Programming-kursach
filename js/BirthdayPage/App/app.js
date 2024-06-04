import Account from "./components/Account/account.js";
import Authorization from "./components/Authorization/authorization.js";
import ChangeTheme from "./components/ChangeTheme/changeTheme.js";
import Logout from "./components/Logout/logout.js";
import Registration from "./components/Registration/registration.js";
import Slider from "./components/Slider/slider.js";
import Translator from "./components/Translator/translator.js";
import CustomLocalStorage from "../../CustomLocalStorage/customLocalStorage.js";

class App {
  init() {
    const customLocalStorage = new CustomLocalStorage();

    const slider = new Slider();
    slider.init();

    const changeTheme = new ChangeTheme();
    changeTheme.init();

    const translator = new Translator();
    translator.init();

    const authorization = new Authorization();
    authorization.init();

    const registration = new Registration();
    registration.init();

    const logout = new Logout();
    logout.init();

    const account = new Account();
    account.init();

    window.onload = () => {
      const user = JSON.parse(customLocalStorage.get("user"));
      if(user) {
        console.log("windowOnLoad")
          authorization.changePage();
          registration.changePage();
          changeTheme.setTheme(user.theme);
          translator.changeLang(user.lang);
  
          customLocalStorage.set('user', JSON.stringify(user));
      }
  };
  }
}

export default App;