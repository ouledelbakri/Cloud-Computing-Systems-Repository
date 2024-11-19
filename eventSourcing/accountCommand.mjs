import { Account } from './account.mjs';
import { accountSummaryList } from './queryDatabase.mjs';
import { accountCache } from './cache.mjs';
import { addEvent } from './eventStore.mjs';
import { Event } from './event.mjs';

export const accountCommand = {
  addAccount(lastName, firstName) {
    const newAccount = new Account(null, lastName, firstName, null);

    // Créer un événement accountAdded
    const event = new Event('accountAdded', newAccount.id, {
      lastName: newAccount.lastName,
      firstName: newAccount.firstName,
      id: newAccount.id,
    });

    // Ajouter l'événement au magasin d'événements
    addEvent(event);

    // Mettre à jour le cache directement à partir de l'événement
    accountCache[newAccount.id] = {
      id: newAccount.id,
      name: `${newAccount.firstName} ${newAccount.lastName}`,
    };

    // Ajouter le compte à la queryDatabase sans la date de création
    accountSummaryList.push({
      id: newAccount.id,
      lastName: newAccount.lastName,
      firstName: newAccount.firstName,
    });
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