import { observable, action, makeObservable } from "mobx";

class TransactionStore {
  usersTransactions = [];
  filteredTransactions = [];
  viewAll = true;

  constructor() {
    makeObservable(this, {
      usersTransactions: observable,
      filteredTransactions: observable,
      viewAll: observable,
      addTransaction: action,
      setViewAll: action,
      setViewIn: action,
      resetFilters: action,
      filterTransactions: action,

    });
  }

  addTransaction(items) {
    console.log(">>> items::", items)
    this.usersTransactions = items;

    this.filterTransactions();
  }

  setViewIn(viewIn) {
    this.viewAll = false;
    this.filteredTransactions = viewIn
      ? this.usersTransactions.filter((userTransactions) => userTransactions.trType === 'in')
      : this.usersTransactions.filter((userTransactions) => userTransactions.trType === 'out');
  }

  setViewAll() {
    this.viewAll = true;
    this.filterTransactions();
  }

  resetFilters() {
    this.viewAll = true;
    this.filterTransactions();
  }

  filterTransactions() {
    if (this.viewAll) {
      this.filteredTransactions = this.usersTransactions;
    } else {
      this.setViewIn(true);
    }
  }








    


}

const transactionStore = new TransactionStore();
export default transactionStore;