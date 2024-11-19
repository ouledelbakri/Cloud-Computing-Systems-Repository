import { accountCommand } from './accountCommand.mjs';
import { accountQuery } from './accountQuery.mjs';
import { eventList } from './eventStore.mjs';

// Ajouter un compte
accountCommand.addAccount('Doe', 'John');

// Afficher les événements
console.log("Liste des événements :", eventList);

// Récupérer et afficher le compte ajouté
const accountList = accountQuery.getAccountList();
if (accountList.length > 0) {
  const accountId = accountList[0].id;
  const account = accountQuery.getAccount(accountId);
  console.log("Compte récupéré :", account);
}