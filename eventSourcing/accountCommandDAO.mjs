import { ACCOUNT_LIST } from './database.mjs';

export const accountCommandDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("Contenu de la BDD :", ACCOUNT_LIST);
  },
  updateAccount(updatedAccount) {
    const index = ACCOUNT_LIST.findIndex(account => account.id === updatedAccount.id);
    if (index !== -1) {
      ACCOUNT_LIST[index] = updatedAccount;
      console.log("Contenu de la BDD après mise à jour :", ACCOUNT_LIST);
    }
  },
  retrieveAccount(id) {
    return ACCOUNT_LIST.find(account => account.id === id) || null;
  },
};