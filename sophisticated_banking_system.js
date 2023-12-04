Here's an example of a JavaScript code that meets the given criteria. The code simulates a banking system with advanced features:

```js
// File: sophisticated_banking_system.js

// Bank class that represents a banking system
class Bank {
  constructor(name) {
    this.name = name;
    this.customers = [];
    this.accounts = [];
  }

  // Add a new customer to the bank
  addCustomer(customer) {
    this.customers.push(customer);
  }

  // Create a new account for a customer
  createAccount(customer, initialDeposit) {
    const account = new Account(customer, initialDeposit);
    this.accounts.push(account);
    customer.addAccount(account);
  }

  // Perform a transaction between two accounts
  performTransaction(fromAccount, toAccount, amount) {
    if (!this.accounts.includes(fromAccount) || !this.accounts.includes(toAccount)) {
      console.log("Invalid account(s) provided.");
      return;
    }

    const success = fromAccount.withdraw(amount);
    if (success) {
      toAccount.deposit(amount);
      console.log("Transaction completed successfully.");
    } else {
      console.log("Insufficient funds.");
    }
  }

  // Get the total balance of all accounts in the bank
  getTotalBalance() {
    let total = 0;
    for (const account of this.accounts) {
      total += account.getBalance();
    }
    return total;
  }
}

// Customer class that represents a bank customer
class Customer {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  // Add a new account for the customer
  addAccount(account) {
    this.accounts.push(account);
  }
}

// Account class that represents a bank account
class Account {
  constructor(customer, initialDeposit) {
    this.customer = customer;
    this.balance = initialDeposit;
  }

  // Withdraw funds from the account
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  // Deposit funds into the account
  deposit(amount) {
    this.balance += amount;
  }

  // Get the current balance of the account
  getBalance() {
    return this.balance;
  }
}

// Create a new bank
const bank = new Bank("My Bank");

// Create customers
const customer1 = new Customer("John Doe");
const customer2 = new Customer("Jane Smith");

// Add customers to the bank
bank.addCustomer(customer1);
bank.addCustomer(customer2);

// Create accounts for customers
bank.createAccount(customer1, 1000);
bank.createAccount(customer2, 500);

// Perform transactions between accounts
const account1 = customer1.accounts[0];
const account2 = customer2.accounts[0];
bank.performTransaction(account1, account2, 300);

// Print total balance in the bank
console.log(`Total balance in the bank: $${bank.getTotalBalance()}`);
```

This code creates a banking system that supports multiple customers, accounts, and transactions. It demonstrates object-oriented programming concepts and uses class-based structures to organize the code.