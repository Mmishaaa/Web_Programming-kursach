class ChangeTheme {
  init() {
    document.querySelector('.changeTheme').addEventListener('click', this.toggleTheme.bind(this));
  }
  
  toggleTheme() {
    console.log("Change team")
    document.body.classList.toggle('darkTheme');
  }
}

export default ChangeTheme;