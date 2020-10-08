/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let id = 0;
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  //id

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let transaction = {};
    id += 1;
    transaction.id = id;
    transaction.amount = amount;
    transaction.type = type;
    return transaction;
    //{id:1, amount:10, type:'deposit'}
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    // this.balance = this.balance + amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    let message = '';
    if (amount > this.balance) {
      message = 'снятие такой суммы невозможно, недостаточно средств';
      console.log(message);
    } else {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW),
      );
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let detail of this.transactions) {
      if (detail.id === id) {
        return detail;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let TransactionTotal = 0;
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        TransactionTotal += transaction.amount;
      }
    }
    return TransactionTotal;
  },
};

console.log(account.getBalance());
//0
account.deposit(10);
account.deposit(1);
account.deposit(2);
console.log(account.getBalance());
//10
account.withdraw(5);
account.withdraw(13);
console.log(account.getBalance());
//5
account.withdraw(1200);
console.log(account.getBalance());
//5
//Oshibka
console.log(account.transactions);
//[{ id: 1, balance: 10, type: DEPOSIT }, { id: 2, balance: 5, type: WITHDRAW }]
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
