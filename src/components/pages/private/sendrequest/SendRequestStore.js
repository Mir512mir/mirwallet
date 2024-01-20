

import { makeAutoObservable } from "mobx";

class SendRequestStore {
  amount = "";
  userName = "";
  userAvatar = "";
  trDate = "";
  trType = "out";


  constructor() {
    makeAutoObservable(this);
  }

  setUserName(userName) {
    this.userName = userName;
  }

  setUserAvatar(userAvatar) {
    this.userAvatar = userAvatar;
  }

  setAmount(amount) {
    this.amount = amount;
  }

  setTrDate(trDate) {
    this.trDate = trDate;
  }

  getDataForRequest() {


    return {
      amount: +this.amount,
      userName: this.userName,
      userAvatar: this.userAvatar,
      trDate: this.trDate,
      trType: this.trType,
    };
  }

}

const sendRequestStore = new SendRequestStore();
export default sendRequestStore;