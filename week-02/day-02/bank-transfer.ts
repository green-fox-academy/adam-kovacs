'use strict';

function getNameAndBalance(currAccounts, accountNumber) {
  let checkSum: number = 0;
  currAccounts.forEach(element => {
    if (element.account_number === accountNumber) {
      console.log(`"${element.client_name}", "${element.balance}"`);
      checkSum += 1;
    }
  });

  if (checkSum !== 1) {
    console.log('404 - account not found');
  }
}


function transferAmount(currentAccounts, fromAccount, toAccount, toTransfer) {
  let checkSum: number = 0;

  //Checking if accounts exist
  currentAccounts.forEach(element => {
    if (element.account_number === fromAccount) {
      checkSum += 1;
    }
    if (element.account_number === fromAccount) {
      checkSum += 1;
    }
  });

  //If check passed, transfering money
  if (checkSum === 2) {
    currentAccounts.forEach(element => {
      if (element.account_number === fromAccount) {
        element.balance -= toTransfer;
      }
      if (element.account_number === toAccount) {
        element.balance += toTransfer;
      }
    });
    console.log('Successful transfer');


  } else {
    console.log('404 - account not found');
  };
}


let accounts: any[] = [
  { client_name: 'Igor', account_number: 11234543, balance: 203004099.2 },
  { client_name: 'Vladimir', account_number: 43546731, balance: 5204100071.23 },
  { client_name: 'Sergei', account_number: 23456311, balance: 1353600.0 },
];

// Create function that returns the name and balance of cash on an account in a list
// The output should be: "Igor", "203004099.2"
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
//After printing the "accounts" it should look like:
// var accounts = [
//	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
//	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204099571.23 },
//	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1354100.0 }
//]

getNameAndBalance(accounts, 11234543);
transferAmount(accounts, 43546731, 23456311, 500.0);
console.log(accounts);