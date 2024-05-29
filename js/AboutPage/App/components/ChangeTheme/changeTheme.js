class ChangeTheme {
  init() {
    console.log("Change team")
    document.querySelector('.changeTheme').addEventListener('click', this.toggleTheme.bind(this));
  }

  toggleTheme() {
    document.body.classList.toggle('darkTheme');
  }
}

export default ChangeTheme;