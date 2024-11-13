import { accountService } from "./accountService.mjs";

//Ajouter un compte
accountService.addAccount("Doe", "John");
accountService.addAccount("yassine", "bakri");


// Modifier le compte
const accountList = accountService.getAccountList();
if (accountList.length > 0) {
  const accountId = accountList[0].id;
  accountService.saveAccount(accountId, 'new', 'name');
}

// Récupérer le compte modifié
if (accountList.length > 0) {
    const accountId = accountList[0].id;
    const account = accountService.getAccount(accountId);
    console.log("Compte récupéré :", account);
  }
  
  // Lister les comptes
  const accounts = accountService.getAccountList();
  console.log("Liste des comptes :", accounts);