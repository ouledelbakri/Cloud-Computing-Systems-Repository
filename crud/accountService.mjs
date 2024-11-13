import { Account } from "./account.mjs";
import { accountDAO } from "./accountDAO.mjs";


export const accountService = {
    addAccount(lastName, firstName) {
      const newAccount = new Account(null, lastName, firstName, null);
      accountDAO.insertAccount(newAccount);
    },

    getAccountList() {
      return accountDAO.retrieveAccountList();
    },

    saveAccount(id, lastName, firstName) {
        // récupérer le compte depuis la DAO, le modifier, et appeler la fonction updateAccount de la DAO
        const account = accountDAO.retrieveAccount(id);
        account.lastName = lastName;
        account.firstName = firstName;
        accountDAO.updateAccount(account);

    },
    //retourner la listes des comptes depuis la DAO.
    getAccount(id) {
        return accountDAO.retrieveAccount(id);
    },
  };
