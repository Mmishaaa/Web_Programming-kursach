import CustomLocalStorage from "../../../../CustomLocalStorage/customLocalStorage.js";

class ChangeTheme {
  customLocalStorage = new CustomLocalStorage();
  
  init() {
    console.log("Change team")
    document.querySelector('.changeTheme').addEventListener('click', this.toggleTheme.bind(this));
  }

  toggleTheme() {
    document.body.classList.toggle('darkTheme');

    const user = JSON.parse(this.customLocalStorage.get('user'));
    console.log(user)
    if (!user) {
      return;
    }

    if (user.theme === 'light') {
        user.theme = 'dark';
    }
    else {
        user.theme = 'light';
    }

    this.customLocalStorage.set('user', JSON.stringify(user));
  }
  
  setTheme(theme) {
    console.log("THEME: " + theme)
    if(theme == "light") document.body.classList.remove("darkTheme");
    if(theme == "dark") document.body.classList.add("darkTheme");
  }
}

export default ChangeTheme;