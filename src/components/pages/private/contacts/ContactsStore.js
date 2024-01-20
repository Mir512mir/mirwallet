
import { action, makeObservable, observable } from 'mobx';

class ContactsStore {

    users = [];

    constructor() {
        makeObservable(this, {
            users: observable,
            addUsers: action,
        }

        )

    }

    addUsers(items) {
        
        const filteredArray = items.filter(obj => obj.avatar !== null && obj.avatar !== '');
        this.users = filteredArray;
        console.log("ContactsStore", this.users)
    }

}


const contactsStore = new ContactsStore();
export default contactsStore;