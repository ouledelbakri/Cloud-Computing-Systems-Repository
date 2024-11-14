import { accountCommand } from './accountCommand.mjs';
import { accountQuery } from './accountQuery.mjs';

// Ajouter un compte
accountCommand.addAccount('Doe', 'John');
accountCommand.addAccount('yassine', 'bakri');

// Modifier le compte (après l'avoir ajouté)
const accountList = accountQuery.getAccountList();
if (accountList.length > 0) {
  const accountId = accountList[0].id;
  accountCommand.saveAccount(accountId, 'Smith', 'Jane');
}

// Récupérer le compte modifié
if (accountList.length > 0) {
  const accountId = accountList[0].id;
  const account = accountQuery.getAccount(accountId);
  console.log("Compte récupéré :", account);
}

// Lister les comptes
const accounts = accountQuery.getAccountList();
console.log("Liste des comptes :", accounts);