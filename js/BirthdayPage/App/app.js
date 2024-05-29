import ChangeTheme from "./components/ChangeTheme/changeTheme.js";
import Slider from "./components/Slider/slider.js";

class App {
  init() {
    const slider = new Slider();
    slider.init();

    const changeTheme = new ChangeTheme();
    changeTheme.init();
  }
}

export default App;