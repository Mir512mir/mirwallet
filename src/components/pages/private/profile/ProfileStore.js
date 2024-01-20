import { makeAutoObservable } from 'mobx';


  class ProfileStore {
    age = "18";
    avatar = "";
    bio = "";
    followers = [];
    following = []
    fullName = "";
    username = "";
    _id = "";
    posts_count = "";
    balance = "0";
    notifications = [];
    transactions = [];
  constructor() {
    makeAutoObservable(this);
  }
  setProfile(data) {
    console.log(data)
    this.age = data.age === "null" ? null : parseInt(data.age);;
    this.avatar = data.avatar;
    this.bio = data.bio;
    this.followers = data.followers;
    this.following = data.following;
    this.fullName = data.fullName;
    this.username = data.username;
    this._id = data._id;
    this.posts_count = data.posts_count;
    this.balance = data.balance;
    this.notifications = data.notifications;
    this.transactions = data.transactions;
}
  
}
const profileStore = new ProfileStore();
export default profileStore;
