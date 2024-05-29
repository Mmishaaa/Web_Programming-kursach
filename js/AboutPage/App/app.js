import ChangeTheme from "./components/ChangeTheme/changeTheme.js"

class App {
  init() {
    const changeTheme = new ChangeTheme();
    changeTheme.init();
  }
}

export default App;