import { Account } from './account.mjs';
import { accountCommandDAO } from './accountCommandDAO.mjs';
import { accountSummaryList } from './queryDatabase.mjs';

export const accountCommand = {
  addAccount(lastName, firstName) {
    const newAccount = new Account(null, lastName, firstName, null);
    accountCommandDAO.insertAccount(newAccount);

    // Ajouter le compte à la queryDatabase sans la date de création
    accountSummaryList.push({
        id: newAccount.id,
        firstName: newAccount.firstName,
        lastName: newAccount.lastName
    });

    // Ajouter le compte avec la propriété name dans l'objet accountCache avec pour clé l'id du compte
    accountCache[newAccount.id] = {
        id: newAccount.id,
        name: `${newAccount.firstName} ${newAccount.lastName}`,
    };

  },
  saveAccount(id, lastName, firstName) {
    const account = accountCommandDAO.retrieveAccount(id);
    if (account) {
      account.lastName = lastName;
      account.firstName = firstName;
      accountCommandDAO.updateAccount(account);
    }

      // Mettre à jour le compte dans la queryDatabase
  const index = accountSummaryList.findIndex(acc => acc.id === id);
    if(index !== -1){
        accountSummaryList[index]={
            id: account.id,
            lastName, 
            firstName, 
        };
    }
    // Mettre à jour le compte avec la propriété name dans l'objet accountCache
    accountCache[id] = {
        id: account.id,
        name: `${firstName} ${lastName}`,
      };    
  },
};