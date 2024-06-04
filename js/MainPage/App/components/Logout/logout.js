import CustomLocalStorage from "../../../../CustomLocalStorage/customLocalStorage.js"

class Logout {
    customStorageHandler = new CustomLocalStorage();

    init() {
        document.querySelector('.logout').addEventListener('click', this.logout.bind(this));

        document.querySelector('.logout_burger').addEventListener('click', this.logout.bind(this));
    }

    logout() {
        this.changePage();

        const users = JSON.parse(this.customStorageHandler.get('users'));
        const user = JSON.parse(this.customStorageHandler.get('user'));

        for(let i = 0; i < users.length; i++) {
            if(users[i].email === user.email) {
                users[i].lang = user.lang;
                users[i].theme = user.theme;

                break;
            } 
        }

        this.customStorageHandler.set('users', JSON.stringify(users));
        this.customStorageHandler.remove('user');
        this.popUp();
    }

    popUp() {
        const popUp = document.createElement('div');
        popUp.textContent = 'YOU"VE SUCCESSFULLY LOGGED OFF!';
        popUp.classList.add('popUp');
        document.body.append(popUp);
        setTimeout(() => popUp.remove(), 3000);
    }

    changePage() {
        document.querySelector('.logIn').classList.remove('hidden');
        document.querySelector('.logIn_burger').classList.remove('hidden');
        document.querySelector('.sighIn').classList.remove('hidden');
        document.querySelector('.sighIn_burger').classList.remove('hidden');

        document.querySelector('.logout').classList.add('hidden');
        document.querySelector('.logout_burger').classList.add('hidden');
        document.querySelector('.pagination-section').classList.add("hidden");

        document.querySelectorAll('.open').forEach((elem) => {
            elem.classList.add('hidden');
        });
    }
}

export default Logout;